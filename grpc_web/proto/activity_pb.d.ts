import * as jspb from 'google-protobuf'



export class LogActivityRequest extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): LogActivityRequest;

  getTime(): string;
  setTime(value: string): LogActivityRequest;

  getDate(): string;
  setDate(value: string): LogActivityRequest;

  getOs(): string;
  setOs(value: string): LogActivityRequest;

  getAction(): string;
  setAction(value: string): LogActivityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogActivityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogActivityRequest): LogActivityRequest.AsObject;
  static serializeBinaryToWriter(message: LogActivityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogActivityRequest;
  static deserializeBinaryFromReader(message: LogActivityRequest, reader: jspb.BinaryReader): LogActivityRequest;
}

export namespace LogActivityRequest {
  export type AsObject = {
    location: string,
    time: string,
    date: string,
    os: string,
    action: string,
  }
}

export class LogActivityResponse extends jspb.Message {
  getStatus(): Status;
  setStatus(value: Status): LogActivityResponse;

  getMessage(): string;
  setMessage(value: string): LogActivityResponse;
  hasMessage(): boolean;
  clearMessage(): LogActivityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogActivityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogActivityResponse): LogActivityResponse.AsObject;
  static serializeBinaryToWriter(message: LogActivityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogActivityResponse;
  static deserializeBinaryFromReader(message: LogActivityResponse, reader: jspb.BinaryReader): LogActivityResponse;
}

export namespace LogActivityResponse {
  export type AsObject = {
    status: Status,
    message?: string,
  }

  export enum MessageCase { 
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 2,
  }
}

export enum Status { 
  SUCCESS = 0,
  FAILED = 1,
}
