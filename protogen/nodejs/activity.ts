// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.3
// source: activity.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "activity_log";

export enum Status {
  Success = 0,
  Failed = 1,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "Success":
      return Status.Success;
    case 1:
    case "Failed":
      return Status.Failed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.Success:
      return "Success";
    case Status.Failed:
      return "Failed";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LogActivityRequest {
  location: string;
  time: string;
  date: string;
  os: string;
  action: string;
}

export interface LogActivityResponse {
  status: Status;
  message?: string | undefined;
}

function createBaseLogActivityRequest(): LogActivityRequest {
  return { location: "", time: "", date: "", os: "", action: "" };
}

export const LogActivityRequest: MessageFns<LogActivityRequest> = {
  encode(message: LogActivityRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    if (message.date !== "") {
      writer.uint32(26).string(message.date);
    }
    if (message.os !== "") {
      writer.uint32(34).string(message.os);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogActivityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogActivityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.time = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.date = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.os = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogActivityRequest {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      time: isSet(object.time) ? globalThis.String(object.time) : "",
      date: isSet(object.date) ? globalThis.String(object.date) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: LogActivityRequest): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.time !== "") {
      obj.time = message.time;
    }
    if (message.date !== "") {
      obj.date = message.date;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogActivityRequest>, I>>(base?: I): LogActivityRequest {
    return LogActivityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogActivityRequest>, I>>(object: I): LogActivityRequest {
    const message = createBaseLogActivityRequest();
    message.location = object.location ?? "";
    message.time = object.time ?? "";
    message.date = object.date ?? "";
    message.os = object.os ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseLogActivityResponse(): LogActivityResponse {
  return { status: 0, message: undefined };
}

export const LogActivityResponse: MessageFns<LogActivityResponse> = {
  encode(message: LogActivityResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogActivityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogActivityResponse {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
    };
  },

  toJSON(message: LogActivityResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogActivityResponse>, I>>(base?: I): LogActivityResponse {
    return LogActivityResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogActivityResponse>, I>>(object: I): LogActivityResponse {
    const message = createBaseLogActivityResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? undefined;
    return message;
  },
};

export type ActivityLogService = typeof ActivityLogService;
export const ActivityLogService = {
  logActivity: {
    path: "/activity_log.ActivityLog/LogActivity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LogActivityRequest) => Buffer.from(LogActivityRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LogActivityRequest.decode(value),
    responseSerialize: (value: LogActivityResponse) => Buffer.from(LogActivityResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LogActivityResponse.decode(value),
  },
} as const;

export interface ActivityLogServer extends UntypedServiceImplementation {
  logActivity: handleUnaryCall<LogActivityRequest, LogActivityResponse>;
}

export interface ActivityLogClient extends Client {
  logActivity(
    request: LogActivityRequest,
    callback: (error: ServiceError | null, response: LogActivityResponse) => void,
  ): ClientUnaryCall;
  logActivity(
    request: LogActivityRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LogActivityResponse) => void,
  ): ClientUnaryCall;
  logActivity(
    request: LogActivityRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LogActivityResponse) => void,
  ): ClientUnaryCall;
}

export const ActivityLogClient = makeGenericClientConstructor(
  ActivityLogService,
  "activity_log.ActivityLog",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ActivityLogClient;
  service: typeof ActivityLogService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}