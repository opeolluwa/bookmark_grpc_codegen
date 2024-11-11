import * as jspb from 'google-protobuf'



export class VaultEntries extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): VaultEntries;

  getDescription(): string;
  setDescription(value: string): VaultEntries;

  getCreatedAt(): string;
  setCreatedAt(value: string): VaultEntries;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): VaultEntries;

  getVaultId(): string;
  setVaultId(value: string): VaultEntries;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): VaultEntries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VaultEntries.AsObject;
  static toObject(includeInstance: boolean, msg: VaultEntries): VaultEntries.AsObject;
  static serializeBinaryToWriter(message: VaultEntries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VaultEntries;
  static deserializeBinaryFromReader(message: VaultEntries, reader: jspb.BinaryReader): VaultEntries;
}

export namespace VaultEntries {
  export type AsObject = {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    vaultId: string,
    moreFieldsMap: Array<[string, string]>,
  }
}

export class NewVaultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): NewVaultRequest;

  getDescription(): string;
  setDescription(value: string): NewVaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewVaultRequest): NewVaultRequest.AsObject;
  static serializeBinaryToWriter(message: NewVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewVaultRequest;
  static deserializeBinaryFromReader(message: NewVaultRequest, reader: jspb.BinaryReader): NewVaultRequest;
}

export namespace NewVaultRequest {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class NewVaultResponse extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): NewVaultResponse;

  getName(): string;
  setName(value: string): NewVaultResponse;

  getDescription(): string;
  setDescription(value: string): NewVaultResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): NewVaultResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): NewVaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewVaultResponse): NewVaultResponse.AsObject;
  static serializeBinaryToWriter(message: NewVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewVaultResponse;
  static deserializeBinaryFromReader(message: NewVaultResponse, reader: jspb.BinaryReader): NewVaultResponse;
}

export namespace NewVaultResponse {
  export type AsObject = {
    vaultId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class GetVaultRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): GetVaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVaultRequest): GetVaultRequest.AsObject;
  static serializeBinaryToWriter(message: GetVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVaultRequest;
  static deserializeBinaryFromReader(message: GetVaultRequest, reader: jspb.BinaryReader): GetVaultRequest;
}

export namespace GetVaultRequest {
  export type AsObject = {
    vaultId: string,
  }
}

export class GetVaultResponse extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): GetVaultResponse;

  getName(): string;
  setName(value: string): GetVaultResponse;

  getDescription(): string;
  setDescription(value: string): GetVaultResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): GetVaultResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): GetVaultResponse;

  getEntriesList(): Array<VaultEntries>;
  setEntriesList(value: Array<VaultEntries>): GetVaultResponse;
  clearEntriesList(): GetVaultResponse;
  addEntries(value?: VaultEntries, index?: number): VaultEntries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVaultResponse): GetVaultResponse.AsObject;
  static serializeBinaryToWriter(message: GetVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVaultResponse;
  static deserializeBinaryFromReader(message: GetVaultResponse, reader: jspb.BinaryReader): GetVaultResponse;
}

export namespace GetVaultResponse {
  export type AsObject = {
    vaultId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    entriesList: Array<VaultEntries.AsObject>,
  }
}

export class UpdateVaultRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): UpdateVaultRequest;

  getName(): string;
  setName(value: string): UpdateVaultRequest;
  hasName(): boolean;
  clearName(): UpdateVaultRequest;

  getDescription(): string;
  setDescription(value: string): UpdateVaultRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateVaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVaultRequest): UpdateVaultRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVaultRequest;
  static deserializeBinaryFromReader(message: UpdateVaultRequest, reader: jspb.BinaryReader): UpdateVaultRequest;
}

export namespace UpdateVaultRequest {
  export type AsObject = {
    vaultId: string,
    name?: string,
    description?: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }
}

export class UpdateVaultResponse extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): UpdateVaultResponse;

  getStatus(): string;
  setStatus(value: string): UpdateVaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVaultResponse): UpdateVaultResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVaultResponse;
  static deserializeBinaryFromReader(message: UpdateVaultResponse, reader: jspb.BinaryReader): UpdateVaultResponse;
}

export namespace UpdateVaultResponse {
  export type AsObject = {
    vaultId: string,
    status: string,
  }
}

export class DeleteVaultRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): DeleteVaultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVaultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVaultRequest): DeleteVaultRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVaultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVaultRequest;
  static deserializeBinaryFromReader(message: DeleteVaultRequest, reader: jspb.BinaryReader): DeleteVaultRequest;
}

export namespace DeleteVaultRequest {
  export type AsObject = {
    vaultId: string,
  }
}

export class DeleteVaultResponse extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): DeleteVaultResponse;

  getMessage(): string;
  setMessage(value: string): DeleteVaultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVaultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVaultResponse): DeleteVaultResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVaultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVaultResponse;
  static deserializeBinaryFromReader(message: DeleteVaultResponse, reader: jspb.BinaryReader): DeleteVaultResponse;
}

export namespace DeleteVaultResponse {
  export type AsObject = {
    vaultId: string,
    message: string,
  }
}

export class ListVaultsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListVaultsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVaultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVaultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVaultsRequest): ListVaultsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVaultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVaultsRequest;
  static deserializeBinaryFromReader(message: ListVaultsRequest, reader: jspb.BinaryReader): ListVaultsRequest;
}

export namespace ListVaultsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class Vault extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): Vault;

  getName(): string;
  setName(value: string): Vault;

  getDescription(): string;
  setDescription(value: string): Vault;

  getCreatedAt(): string;
  setCreatedAt(value: string): Vault;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): Vault;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vault.AsObject;
  static toObject(includeInstance: boolean, msg: Vault): Vault.AsObject;
  static serializeBinaryToWriter(message: Vault, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vault;
  static deserializeBinaryFromReader(message: Vault, reader: jspb.BinaryReader): Vault;
}

export namespace Vault {
  export type AsObject = {
    vaultId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class ListVaultsResponse extends jspb.Message {
  getVaultsList(): Array<Vault>;
  setVaultsList(value: Array<Vault>): ListVaultsResponse;
  clearVaultsList(): ListVaultsResponse;
  addVaults(value?: Vault, index?: number): Vault;

  getTotalCount(): number;
  setTotalCount(value: number): ListVaultsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVaultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVaultsResponse): ListVaultsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVaultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVaultsResponse;
  static deserializeBinaryFromReader(message: ListVaultsResponse, reader: jspb.BinaryReader): ListVaultsResponse;
}

export namespace ListVaultsResponse {
  export type AsObject = {
    vaultsList: Array<Vault.AsObject>,
    totalCount: number,
  }
}

export class ListVaultEntryRequest extends jspb.Message {
  getVaultId(): string;
  setVaultId(value: string): ListVaultEntryRequest;

  getPage(): number;
  setPage(value: number): ListVaultEntryRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVaultEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVaultEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVaultEntryRequest): ListVaultEntryRequest.AsObject;
  static serializeBinaryToWriter(message: ListVaultEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVaultEntryRequest;
  static deserializeBinaryFromReader(message: ListVaultEntryRequest, reader: jspb.BinaryReader): ListVaultEntryRequest;
}

export namespace ListVaultEntryRequest {
  export type AsObject = {
    vaultId: string,
    page: number,
    pageSize: number,
  }
}

export class ListVaultEntryResponse extends jspb.Message {
  getVaultEntriesList(): Array<VaultEntries>;
  setVaultEntriesList(value: Array<VaultEntries>): ListVaultEntryResponse;
  clearVaultEntriesList(): ListVaultEntryResponse;
  addVaultEntries(value?: VaultEntries, index?: number): VaultEntries;

  getTotalCount(): number;
  setTotalCount(value: number): ListVaultEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVaultEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVaultEntryResponse): ListVaultEntryResponse.AsObject;
  static serializeBinaryToWriter(message: ListVaultEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVaultEntryResponse;
  static deserializeBinaryFromReader(message: ListVaultEntryResponse, reader: jspb.BinaryReader): ListVaultEntryResponse;
}

export namespace ListVaultEntryResponse {
  export type AsObject = {
    vaultEntriesList: Array<VaultEntries.AsObject>,
    totalCount: number,
  }
}

