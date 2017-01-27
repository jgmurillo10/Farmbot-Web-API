
/*

THIS INTERFACE WAS AUTO GENERATED ON 2017-01-27

DO NOT EDIT THIS FILE.

IT WILL BE OVERWRITTEN ON EVERY CELERYSCRIPT UPGRADE.

*/

export interface Nothing {
  kind: "nothing";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Tool {
  kind: "tool";
  args: {
    tool_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Coordinate {
  kind: "coordinate";
  args: {
    x: number;
    y: number;
    z: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface MoveAbsolute {
  kind: "move_absolute";
  args: {
    location: Tool
          | Coordinate;
    speed: number;
    offset: Coordinate;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface MoveRelative {
  kind: "move_relative";
  args: {
    x: number;
    y: number;
    z: number;
    speed: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface WritePin {
  kind: "write_pin";
  args: {
    pin_number: number;
    pin_value: number;
    pin_mode: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface ReadPin {
  kind: "read_pin";
  args: {
    pin_number: number;
    label: string;
    pin_mode: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Channel {
  kind: "channel";
  args: {
    channel_name: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Wait {
  kind: "wait";
  args: {
    milliseconds: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type SendMessageBodyItem = Channel;

export interface SendMessage {
  kind: "send_message";
  args: {
    message: string;
    message_type: string;
  };
  comment?: string | undefined;
  body?: SendMessageBodyItem[] | undefined;
}

export interface Execute {
  kind: "execute";
  args: {
    sequence_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface If {
  kind: "_if";
  args: {
    lhs: string;
    op: string;
    rhs: number;
    _then: Execute
          | Nothing;
    _else: Execute
          | Nothing;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type SequenceBodyItem = MoveAbsolute
          | MoveRelative
          | WritePin
          | ReadPin
          | Wait
          | SendMessage
          | Execute
          | If
          | ExecuteScript;

export interface Sequence {
  kind: "sequence";
  args: {
    version: number;
  };
  comment?: string | undefined;
  body?: SequenceBodyItem[] | undefined;
}

export interface Home {
  kind: "home";
  args: {
    speed: number;
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface EmergencyLock {
  kind: "emergency_lock";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface EmergencyUnlock {
  kind: "emergency_unlock";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface ReadStatus {
  kind: "read_status";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Sync {
  kind: "sync";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface CheckUpdates {
  kind: "check_updates";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface PowerOff {
  kind: "power_off";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Reboot {
  kind: "reboot";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface TogglePin {
  kind: "toggle_pin";
  args: {
    pin_number: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Explanation {
  kind: "explanation";
  args: {
    message: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type RpcRequestBodyItem = Home
          | EmergencyLock
          | EmergencyUnlock
          | ReadStatus
          | Sync
          | CheckUpdates
          | PowerOff
          | Reboot
          | TogglePin
          | ConfigUpdate
          | Calibrate
          | Execute
          | MoveAbsolute
          | MoveRelative
          | WritePin
          | Wait
          | ReadPin
          | SendMessage
          | FactoryReset
          | ExecuteScript
          | SetUserEnv;

export interface RpcRequest {
  kind: "rpc_request";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: RpcRequestBodyItem[] | undefined;
}

export interface RpcOk {
  kind: "rpc_ok";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type RpcErrorBodyItem = Explanation;

export interface RpcError {
  kind: "rpc_error";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: RpcErrorBodyItem[] | undefined;
}

export interface Calibrate {
  kind: "calibrate";
  args: {
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export interface Pair {
  kind: "pair";
  args: {
    label: string;
    value: string
          | number
          | Boolean;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ConfigUpdateBodyItem = Pair;

export interface ConfigUpdate {
  kind: "config_update";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: ConfigUpdateBodyItem[] | undefined;
}

export interface FactoryReset {
  kind: "factory_reset";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ExecuteScriptBodyItem = Pair;

export interface ExecuteScript {
  kind: "execute_script";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: ExecuteScriptBodyItem[] | undefined;
}

export type SetUserEnvBodyItem = Pair;

export interface SetUserEnv {
  kind: "set_user_env";
  args: {
  };
  comment?: string | undefined;
  body?: SetUserEnvBodyItem[] | undefined;
}

export type CeleryNode = Nothing
          | Tool
          | Coordinate
          | MoveAbsolute
          | MoveRelative
          | WritePin
          | ReadPin
          | Channel
          | Wait
          | SendMessage
          | Execute
          | If
          | Sequence
          | Home
          | EmergencyLock
          | EmergencyUnlock
          | ReadStatus
          | Sync
          | CheckUpdates
          | PowerOff
          | Reboot
          | TogglePin
          | Explanation
          | RpcRequest
          | RpcOk
          | RpcError
          | Calibrate
          | Pair
          | ConfigUpdate
          | FactoryReset
          | ExecuteScript
          | SetUserEnv;
export const LATEST_VERSION = 4;
export const DIGITAL = 0;
export const ANALOG = 1;
export type ALLOWED_PIN_MODES = 0
          | 1;
export type ALLOWED_MESSAGE_TYPES = "success"
          | "busy"
          | "warn"
          | "error"
          | "info"
          | "fun";
export type ALLOWED_CHANNEL_NAMES = "ticker"
          | "toast";
export type ALLOWED_DATA_TYPES = "string"
          | "integer";
export type ALLOWED_OPS = "<"
          | ">"
          | "is"
          | "not";
export type ALLOWED_PACKAGES = "farmbot_os"
          | "arduino_firmware";
export type ALLOWED_AXIS = "x"
          | "y"
          | "z"
          | "all";
export type Color = "blue"
          | "green"
          | "yellow"
          | "orange"
          | "purple"
          | "pink"
          | "gray"
          | "red";
export type LegalArgString = "_else"
          | "_then"
          | "axis"
          | "channel_name"
          | "label"
          | "lhs"
          | "location"
          | "message"
          | "message_type"
          | "milliseconds"
          | "offset"
          | "op"
          | "package"
          | "pin_mode"
          | "pin_number"
          | "pin_value"
          | "rhs"
          | "sequence_id"
          | "speed"
          | "tool_id"
          | "value"
          | "version"
          | "x"
          | "y"
          | "z";
export type LegalKindString = "_if"
          | "calibrate"
          | "channel"
          | "check_updates"
          | "config_update"
          | "coordinate"
          | "emergency_lock"
          | "emergency_unlock"
          | "execute"
          | "execute_script"
          | "explanation"
          | "factory_reset"
          | "home"
          | "move_absolute"
          | "move_relative"
          | "nothing"
          | "pair"
          | "power_off"
          | "read_pin"
          | "read_status"
          | "reboot"
          | "rpc_error"
          | "rpc_ok"
          | "rpc_request"
          | "send_message"
          | "sequence"
          | "set_user_env"
          | "sync"
          | "toggle_pin"
          | "tool"
          | "wait"
          | "write_pin";
export type LegalSequenceKind = "_if"
          | "execute"
          | "execute_script"
          | "move_absolute"
          | "move_relative"
          | "read_pin"
          | "send_message"
          | "wait"
          | "write_pin";
