import * as jspb from 'google-protobuf'



export class BookmarkCollectionEntries extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): BookmarkCollectionEntries;

  getDescription(): string;
  setDescription(value: string): BookmarkCollectionEntries;

  getCreatedAt(): string;
  setCreatedAt(value: string): BookmarkCollectionEntries;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): BookmarkCollectionEntries;

  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): BookmarkCollectionEntries;

  getMoreFieldsMap(): jspb.Map<string, string>;
  clearMoreFieldsMap(): BookmarkCollectionEntries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookmarkCollectionEntries.AsObject;
  static toObject(includeInstance: boolean, msg: BookmarkCollectionEntries): BookmarkCollectionEntries.AsObject;
  static serializeBinaryToWriter(message: BookmarkCollectionEntries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookmarkCollectionEntries;
  static deserializeBinaryFromReader(message: BookmarkCollectionEntries, reader: jspb.BinaryReader): BookmarkCollectionEntries;
}

export namespace BookmarkCollectionEntries {
  export type AsObject = {
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    bookmarkcollectionId: string,
    moreFieldsMap: Array<[string, string]>,
  }
}

export class NewBookmarkCollectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): NewBookmarkCollectionRequest;

  getDescription(): string;
  setDescription(value: string): NewBookmarkCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBookmarkCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewBookmarkCollectionRequest): NewBookmarkCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: NewBookmarkCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBookmarkCollectionRequest;
  static deserializeBinaryFromReader(message: NewBookmarkCollectionRequest, reader: jspb.BinaryReader): NewBookmarkCollectionRequest;
}

export namespace NewBookmarkCollectionRequest {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class NewBookmarkCollectionResponse extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): NewBookmarkCollectionResponse;

  getName(): string;
  setName(value: string): NewBookmarkCollectionResponse;

  getDescription(): string;
  setDescription(value: string): NewBookmarkCollectionResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): NewBookmarkCollectionResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): NewBookmarkCollectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewBookmarkCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewBookmarkCollectionResponse): NewBookmarkCollectionResponse.AsObject;
  static serializeBinaryToWriter(message: NewBookmarkCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewBookmarkCollectionResponse;
  static deserializeBinaryFromReader(message: NewBookmarkCollectionResponse, reader: jspb.BinaryReader): NewBookmarkCollectionResponse;
}

export namespace NewBookmarkCollectionResponse {
  export type AsObject = {
    bookmarkcollectionId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class GetBookmarkCollectionRequest extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): GetBookmarkCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookmarkCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookmarkCollectionRequest): GetBookmarkCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookmarkCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookmarkCollectionRequest;
  static deserializeBinaryFromReader(message: GetBookmarkCollectionRequest, reader: jspb.BinaryReader): GetBookmarkCollectionRequest;
}

export namespace GetBookmarkCollectionRequest {
  export type AsObject = {
    bookmarkcollectionId: string,
  }
}

export class GetBookmarkCollectionResponse extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): GetBookmarkCollectionResponse;

  getName(): string;
  setName(value: string): GetBookmarkCollectionResponse;

  getDescription(): string;
  setDescription(value: string): GetBookmarkCollectionResponse;

  getCreatedAt(): string;
  setCreatedAt(value: string): GetBookmarkCollectionResponse;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): GetBookmarkCollectionResponse;

  getEntriesList(): Array<BookmarkCollectionEntries>;
  setEntriesList(value: Array<BookmarkCollectionEntries>): GetBookmarkCollectionResponse;
  clearEntriesList(): GetBookmarkCollectionResponse;
  addEntries(value?: BookmarkCollectionEntries, index?: number): BookmarkCollectionEntries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookmarkCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookmarkCollectionResponse): GetBookmarkCollectionResponse.AsObject;
  static serializeBinaryToWriter(message: GetBookmarkCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookmarkCollectionResponse;
  static deserializeBinaryFromReader(message: GetBookmarkCollectionResponse, reader: jspb.BinaryReader): GetBookmarkCollectionResponse;
}

export namespace GetBookmarkCollectionResponse {
  export type AsObject = {
    bookmarkcollectionId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    entriesList: Array<BookmarkCollectionEntries.AsObject>,
  }
}

export class UpdateBookmarkCollectionRequest extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): UpdateBookmarkCollectionRequest;

  getName(): string;
  setName(value: string): UpdateBookmarkCollectionRequest;
  hasName(): boolean;
  clearName(): UpdateBookmarkCollectionRequest;

  getDescription(): string;
  setDescription(value: string): UpdateBookmarkCollectionRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateBookmarkCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookmarkCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookmarkCollectionRequest): UpdateBookmarkCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBookmarkCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookmarkCollectionRequest;
  static deserializeBinaryFromReader(message: UpdateBookmarkCollectionRequest, reader: jspb.BinaryReader): UpdateBookmarkCollectionRequest;
}

export namespace UpdateBookmarkCollectionRequest {
  export type AsObject = {
    bookmarkcollectionId: string,
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

export class UpdateBookmarkCollectionResponse extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): UpdateBookmarkCollectionResponse;

  getStatus(): string;
  setStatus(value: string): UpdateBookmarkCollectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBookmarkCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBookmarkCollectionResponse): UpdateBookmarkCollectionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBookmarkCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBookmarkCollectionResponse;
  static deserializeBinaryFromReader(message: UpdateBookmarkCollectionResponse, reader: jspb.BinaryReader): UpdateBookmarkCollectionResponse;
}

export namespace UpdateBookmarkCollectionResponse {
  export type AsObject = {
    bookmarkcollectionId: string,
    status: string,
  }
}

export class DeleteBookmarkCollectionRequest extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): DeleteBookmarkCollectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookmarkCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookmarkCollectionRequest): DeleteBookmarkCollectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBookmarkCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookmarkCollectionRequest;
  static deserializeBinaryFromReader(message: DeleteBookmarkCollectionRequest, reader: jspb.BinaryReader): DeleteBookmarkCollectionRequest;
}

export namespace DeleteBookmarkCollectionRequest {
  export type AsObject = {
    bookmarkcollectionId: string,
  }
}

export class DeleteBookmarkCollectionResponse extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): DeleteBookmarkCollectionResponse;

  getMessage(): string;
  setMessage(value: string): DeleteBookmarkCollectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBookmarkCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBookmarkCollectionResponse): DeleteBookmarkCollectionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBookmarkCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBookmarkCollectionResponse;
  static deserializeBinaryFromReader(message: DeleteBookmarkCollectionResponse, reader: jspb.BinaryReader): DeleteBookmarkCollectionResponse;
}

export namespace DeleteBookmarkCollectionResponse {
  export type AsObject = {
    bookmarkcollectionId: string,
    message: string,
  }
}

export class ListBookmarkCollectionsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListBookmarkCollectionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBookmarkCollectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookmarkCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookmarkCollectionsRequest): ListBookmarkCollectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBookmarkCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookmarkCollectionsRequest;
  static deserializeBinaryFromReader(message: ListBookmarkCollectionsRequest, reader: jspb.BinaryReader): ListBookmarkCollectionsRequest;
}

export namespace ListBookmarkCollectionsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class BookmarkCollection extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): BookmarkCollection;

  getName(): string;
  setName(value: string): BookmarkCollection;

  getDescription(): string;
  setDescription(value: string): BookmarkCollection;

  getCreatedAt(): string;
  setCreatedAt(value: string): BookmarkCollection;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): BookmarkCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookmarkCollection.AsObject;
  static toObject(includeInstance: boolean, msg: BookmarkCollection): BookmarkCollection.AsObject;
  static serializeBinaryToWriter(message: BookmarkCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookmarkCollection;
  static deserializeBinaryFromReader(message: BookmarkCollection, reader: jspb.BinaryReader): BookmarkCollection;
}

export namespace BookmarkCollection {
  export type AsObject = {
    bookmarkcollectionId: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
  }
}

export class ListBookmarkCollectionsResponse extends jspb.Message {
  getBookmarkcollectionsList(): Array<BookmarkCollection>;
  setBookmarkcollectionsList(value: Array<BookmarkCollection>): ListBookmarkCollectionsResponse;
  clearBookmarkcollectionsList(): ListBookmarkCollectionsResponse;
  addBookmarkcollections(value?: BookmarkCollection, index?: number): BookmarkCollection;

  getTotalCount(): number;
  setTotalCount(value: number): ListBookmarkCollectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookmarkCollectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookmarkCollectionsResponse): ListBookmarkCollectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBookmarkCollectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookmarkCollectionsResponse;
  static deserializeBinaryFromReader(message: ListBookmarkCollectionsResponse, reader: jspb.BinaryReader): ListBookmarkCollectionsResponse;
}

export namespace ListBookmarkCollectionsResponse {
  export type AsObject = {
    bookmarkcollectionsList: Array<BookmarkCollection.AsObject>,
    totalCount: number,
  }
}

export class ListBookmarkCollectionEntryRequest extends jspb.Message {
  getBookmarkcollectionId(): string;
  setBookmarkcollectionId(value: string): ListBookmarkCollectionEntryRequest;

  getPage(): number;
  setPage(value: number): ListBookmarkCollectionEntryRequest;

  getPageSize(): number;
  setPageSize(value: number): ListBookmarkCollectionEntryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookmarkCollectionEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookmarkCollectionEntryRequest): ListBookmarkCollectionEntryRequest.AsObject;
  static serializeBinaryToWriter(message: ListBookmarkCollectionEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookmarkCollectionEntryRequest;
  static deserializeBinaryFromReader(message: ListBookmarkCollectionEntryRequest, reader: jspb.BinaryReader): ListBookmarkCollectionEntryRequest;
}

export namespace ListBookmarkCollectionEntryRequest {
  export type AsObject = {
    bookmarkcollectionId: string,
    page: number,
    pageSize: number,
  }
}

export class ListBookmarkCollectionEntryResponse extends jspb.Message {
  getBookmarkcollectionEntriesList(): Array<BookmarkCollectionEntries>;
  setBookmarkcollectionEntriesList(value: Array<BookmarkCollectionEntries>): ListBookmarkCollectionEntryResponse;
  clearBookmarkcollectionEntriesList(): ListBookmarkCollectionEntryResponse;
  addBookmarkcollectionEntries(value?: BookmarkCollectionEntries, index?: number): BookmarkCollectionEntries;

  getTotalCount(): number;
  setTotalCount(value: number): ListBookmarkCollectionEntryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBookmarkCollectionEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBookmarkCollectionEntryResponse): ListBookmarkCollectionEntryResponse.AsObject;
  static serializeBinaryToWriter(message: ListBookmarkCollectionEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBookmarkCollectionEntryResponse;
  static deserializeBinaryFromReader(message: ListBookmarkCollectionEntryResponse, reader: jspb.BinaryReader): ListBookmarkCollectionEntryResponse;
}

export namespace ListBookmarkCollectionEntryResponse {
  export type AsObject = {
    bookmarkcollectionEntriesList: Array<BookmarkCollectionEntries.AsObject>,
    totalCount: number,
  }
}

