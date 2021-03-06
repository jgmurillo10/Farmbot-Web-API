require 'spec_helper'
describe Api::PasswordResetsController do
  include Devise::Test::ControllerHelpers

  describe '#create' do
    let(:user) { FactoryGirl.create(:user) }

    it 'resets password for a user' do
      params = { email: user.email }

      old_email_count = ActionMailer::Base.deliveries.length
      post :create, params: params
      expect(response.status).to eq(200)
      expect(ActionMailer::Base.deliveries.length).to be > old_email_count
      message = last_email.to_s
      expect(message).to include("password reset")
    end

    it 'resets password using a reset token' do
      params = { password:              "xpassword123",
                 password_confirmation: "xpassword123",
                 id:                    PasswordResetToken
                                          .issue_to(user)
                                          .encoded }
      put :update, params: params
      expect(user
             .reload
             .valid_password?(params[:password])).to eq(true)
      expect(response.status).to eq(200)
      expect(json.keys).to include(:token)
      expect(json.keys).to include(:user)
    end

    it 'handles token expiration' do
      token  = PasswordResetToken
                 .issue_to(user, {exp: Time.now.yesterday})
                 .encoded

      params = { password:              "xpassword123",
                 password_confirmation: "xpassword123",
                 id:                    token }

      put :update, params: params
      expect(response.status).to eq(422)
      expect(user.reload.valid_password?(params[:password])).to eq(false)
      expect(json.to_json).to include(PasswordResets::Update::OLD_TOKEN)
    end
  end
end
