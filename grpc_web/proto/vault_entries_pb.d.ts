import * as jspb from 'google-protobuf'



export class NewVaultEntryRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): NewVaultEntryRequest;

  getDescription(): string;
  setDescription(value: string): NewVaultEntryRequest;

  getVaultId(): string;
  setVaultId(value: string): NewVaultEntryRequest;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): NewVaultEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewVaultEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewVaultEntryRequest): NewVaultEntryRequest.AsObject;
  static serializeBinaryToWriter(message: NewVaultEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewVaultEntryRequest;
  static deserializeBinaryFromReader(message: NewVaultEntryRequest, reader: jspb.BinaryReader): NewVaultEntryRequest;
}

export namespace NewVaultEntryRequest {
  export type AsObject = {
    title: string,
    description: string,
    vaultId: string,
    moreFieldsMap: Array<[string, string]>,
  }
}

export class GetVaultEntryResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): GetVaultEntryResponse;

  getDescription(): string;
  setDescription(value: string): GetVaultEntryResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): GetVaultEntryResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): GetVaultEntryResponse;

  getVaultId(): string;
  setVaultId(value: string): GetVaultEntryResponse;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): GetVaultEntryResponse;

  getVaultEntryId(): string;
  setVaultEntryId(value: string): GetVaultEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVaultEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVaultEntryResponse): GetVaultEntryResponse.AsObject;
  static serializeBinaryToWriter(message: GetVaultEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVaultEntryResponse;
  static deserializeBinaryFromReader(message: GetVaultEntryResponse, reader: jspb.BinaryReader): GetVaultEntryResponse;
}

export namespace GetVaultEntryResponse {
  export type AsObject = {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    vaultId: string,
    moreFieldsMap: Array<[string, string]>,
    vaultEntryId: string,
  }
}

export class GetVaultEntryRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): GetVaultEntryRequest;

  getVaultEntryId(): string;
  setVaultEntryId(value: string): GetVaultEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVaultEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVaultEntryRequest): GetVaultEntryRequest.AsObject;
  static serializeBinaryToWriter(message: GetVaultEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVaultEntryRequest;
  static deserializeBinaryFromReader(message: GetVaultEntryRequest, reader: jspb.BinaryReader): GetVaultEntryRequest;
}

export namespace GetVaultEntryRequest {
  export type AsObject = {
    vaultId: string,
    vaultEntryId: string,
  }
}

export class UpdateVaultEntryRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): UpdateVaultEntryRequest;

  getTitle(): string;
  setTitle(value: string): UpdateVaultEntryRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateVaultEntryRequest;

  getDescription(): string;
  setDescription(value: string): UpdateVaultEntryRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateVaultEntryRequest;

  getVaultEntryId(): string;
  setVaultEntryId(value: string): UpdateVaultEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVaultEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVaultEntryRequest): UpdateVaultEntryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVaultEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVaultEntryRequest;
  static deserializeBinaryFromReader(message: UpdateVaultEntryRequest, reader: jspb.BinaryReader): UpdateVaultEntryRequest;
}

export namespace UpdateVaultEntryRequest {
  export type AsObject = {
    vaultId: string,
    title?: string,
    description?: string,
    vaultEntryId: string,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }
}

export class DeleteVaultEntryResponse extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): DeleteVaultEntryResponse;

  getVaultEntryId(): string;
  setVaultEntryId(value: string): DeleteVaultEntryResponse;

  getStatus(): string;
  setStatus(value: string): DeleteVaultEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVaultEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVaultEntryResponse): DeleteVaultEntryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVaultEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVaultEntryResponse;
  static deserializeBinaryFromReader(message: DeleteVaultEntryResponse, reader: jspb.BinaryReader): DeleteVaultEntryResponse;
}

export namespace DeleteVaultEntryResponse {
  export type AsObject = {
    vaultId: string,
    vaultEntryId: string,
    status: string,
  }
}

