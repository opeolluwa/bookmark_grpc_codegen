import * as jspb from 'google-protobuf'



export class NewBookmarkCollectionsEntryRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): NewBookmarkCollectionsEntryRequest;

  getDescription(): string;
  setDescription(value: string): NewBookmarkCollectionsEntryRequest;

  getBookmarkcollectionsId(): string;
  setBookmarkcollectionsId(value: string): NewBookmarkCollectionsEntryRequest;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): NewBookmarkCollectionsEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBookmarkCollectionsEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewBookmarkCollectionsEntryRequest): NewBookmarkCollectionsEntryRequest.AsObject;
  static serializeBinaryToWriter(message: NewBookmarkCollectionsEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBookmarkCollectionsEntryRequest;
  static deserializeBinaryFromReader(message: NewBookmarkCollectionsEntryRequest, reader: jspb.BinaryReader): NewBookmarkCollectionsEntryRequest;
}

export namespace NewBookmarkCollectionsEntryRequest {
  export type AsObject = {
    title: string,
    description: string,
    bookmarkcollectionsId: string,
    moreFieldsMap: Array<[string, string]>,
  }
}

export class GetBookmarkCollectionsEntryResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): GetBookmarkCollectionsEntryResponse;

  getDescription(): string;
  setDescription(value: string): GetBookmarkCollectionsEntryResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): GetBookmarkCollectionsEntryResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): GetBookmarkCollectionsEntryResponse;

  getBookmarkcollectionsId(): string;
  setBookmarkcollectionsId(value: string): GetBookmarkCollectionsEntryResponse;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): GetBookmarkCollectionsEntryResponse;

  getBookmarkcollectionsEntryId(): string;
  setBookmarkcollectionsEntryId(value: string): GetBookmarkCollectionsEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookmarkCollectionsEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookmarkCollectionsEntryResponse): GetBookmarkCollectionsEntryResponse.AsObject;
  static serializeBinaryToWriter(message: GetBookmarkCollectionsEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookmarkCollectionsEntryResponse;
  static deserializeBinaryFromReader(message: GetBookmarkCollectionsEntryResponse, reader: jspb.BinaryReader): GetBookmarkCollectionsEntryResponse;
}

export namespace GetBookmarkCollectionsEntryResponse {
  export type AsObject = {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    bookmarkcollectionsId: string,
    moreFieldsMap: Array<[string, string]>,
    bookmarkcollectionsEntryId: string,
  }
}

export class GetBookmarkCollectionsEntryRequest extends jspb.Message {
  getBookmarkcollectionsId(): string;
  setBookmarkcollectionsId(value: string): GetBookmarkCollectionsEntryRequest;

  getBookmarkcollectionsEntryId(): string;
  setBookmarkcollectionsEntryId(value: string): GetBookmarkCollectionsEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookmarkCollectionsEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookmarkCollectionsEntryRequest): GetBookmarkCollectionsEntryRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookmarkCollectionsEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookmarkCollectionsEntryRequest;
  static deserializeBinaryFromReader(message: GetBookmarkCollectionsEntryRequest, reader: jspb.BinaryReader): GetBookmarkCollectionsEntryRequest;
}

export namespace GetBookmarkCollectionsEntryRequest {
  export type AsObject = {
    bookmarkcollectionsId: string,
    bookmarkcollectionsEntryId: string,
  }
}

export class UpdateBookmarkCollectionsEntryRequest extends jspb.Message {
  getBookmarkcollectionsId(): string;
  setBookmarkcollectionsId(value: string): UpdateBookmarkCollectionsEntryRequest;

  getTitle(): string;
  setTitle(value: string): UpdateBookmarkCollectionsEntryRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateBookmarkCollectionsEntryRequest;

  getDescription(): string;
  setDescription(value: string): UpdateBookmarkCollectionsEntryRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateBookmarkCollectionsEntryRequest;

  getBookmarkcollectionsEntryId(): string;
  setBookmarkcollectionsEntryId(value: string): UpdateBookmarkCollectionsEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookmarkCollectionsEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookmarkCollectionsEntryRequest): UpdateBookmarkCollectionsEntryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookmarkCollectionsEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookmarkCollectionsEntryRequest;
  static deserializeBinaryFromReader(message: UpdateBookmarkCollectionsEntryRequest, reader: jspb.BinaryReader): UpdateBookmarkCollectionsEntryRequest;
}

export namespace UpdateBookmarkCollectionsEntryRequest {
  export type AsObject = {
    bookmarkcollectionsId: string,
    title?: string,
    description?: string,
    bookmarkcollectionsEntryId: string,
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

export class DeleteBookmarkCollectionsEntryResponse extends jspb.Message {
  getBookmarkcollectionsId(): string;
  setBookmarkcollectionsId(value: string): DeleteBookmarkCollectionsEntryResponse;

  getBookmarkcollectionsEntryId(): string;
  setBookmarkcollectionsEntryId(value: string): DeleteBookmarkCollectionsEntryResponse;

  getStatus(): string;
  setStatus(value: string): DeleteBookmarkCollectionsEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookmarkCollectionsEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookmarkCollectionsEntryResponse): DeleteBookmarkCollectionsEntryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBookmarkCollectionsEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookmarkCollectionsEntryResponse;
  static deserializeBinaryFromReader(message: DeleteBookmarkCollectionsEntryResponse, reader: jspb.BinaryReader): DeleteBookmarkCollectionsEntryResponse;
}

export namespace DeleteBookmarkCollectionsEntryResponse {
  export type AsObject = {
    bookmarkcollectionsId: string,
    bookmarkcollectionsEntryId: string,
    status: string,
  }
}

