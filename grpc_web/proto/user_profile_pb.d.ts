import * as jspb from 'google-protobuf'



export class ProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileRequest): ProfileRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileRequest;
  static deserializeBinaryFromReader(message: ProfileRequest, reader: jspb.BinaryReader): ProfileRequest;
}

export namespace ProfileRequest {
  export type AsObject = {
  }
}

export class ProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): ProfileResponse;

  getLastName(): string;
  setLastName(value: string): ProfileResponse;

  getFirstName(): string;
  setFirstName(value: string): ProfileResponse;

  getEmail(): string;
  setEmail(value: string): ProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    id: string,
    lastName: string,
    firstName: string,
    email: string,
  }
}

export class ProfileUpdateRequest extends jspb.Message {
  getLastName(): string;
  setLastName(value: string): ProfileUpdateRequest;
  hasLastName(): boolean;
  clearLastName(): ProfileUpdateRequest;

  getFirstName(): string;
  setFirstName(value: string): ProfileUpdateRequest;
  hasFirstName(): boolean;
  clearFirstName(): ProfileUpdateRequest;

  getEmail(): string;
  setEmail(value: string): ProfileUpdateRequest;
  hasEmail(): boolean;
  clearEmail(): ProfileUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileUpdateRequest): ProfileUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ProfileUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileUpdateRequest;
  static deserializeBinaryFromReader(message: ProfileUpdateRequest, reader: jspb.BinaryReader): ProfileUpdateRequest;
}

export namespace ProfileUpdateRequest {
  export type AsObject = {
    lastName?: string,
    firstName?: string,
    email?: string,
  }

  export enum LastNameCase { 
    _LAST_NAME_NOT_SET = 0,
    LAST_NAME = 2,
  }

  export enum FirstNameCase { 
    _FIRST_NAME_NOT_SET = 0,
    FIRST_NAME = 3,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 4,
  }
}

export class ProfileUpdateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): ProfileUpdateResponse;

  getLastName(): string;
  setLastName(value: string): ProfileUpdateResponse;

  getFirstName(): string;
  setFirstName(value: string): ProfileUpdateResponse;

  getEmail(): string;
  setEmail(value: string): ProfileUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileUpdateResponse): ProfileUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ProfileUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileUpdateResponse;
  static deserializeBinaryFromReader(message: ProfileUpdateResponse, reader: jspb.BinaryReader): ProfileUpdateResponse;
}

export namespace ProfileUpdateResponse {
  export type AsObject = {
    id: string,
    lastName: string,
    firstName: string,
    email: string,
  }
}

