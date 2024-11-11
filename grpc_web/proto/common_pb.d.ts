import * as jspb from 'google-protobuf'



export class ErrorResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): ErrorResponse;

  getMessage(): string;
  setMessage(value: string): ErrorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export enum RequestStatus { 
  SUCCESS = 0,
  FAILED = 1,
}
