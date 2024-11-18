import { BinaryWriter, BinaryReader } from '@bufbuild/protobuf/wire';
import { UntypedServiceImplementation, handleUnaryCall, Client, ServiceError, ClientUnaryCall, Metadata, CallOptions, ChannelCredentials, ClientOptions } from '@grpc/grpc-js';

declare const protobufPackage$6 = "activity_log";
declare enum Status$2 {
    Success = 0,
    Failed = 1,
    UNRECOGNIZED = -1
}
declare function statusFromJSON$2(object: any): Status$2;
declare function statusToJSON$2(object: Status$2): string;
interface LogActivityRequest {
    location: string;
    time: string;
    date: string;
    os: string;
    action: string;
}
declare const LogActivityRequest: MessageFns$6<LogActivityRequest>;
interface LogActivityResponse {
    status: Status$2;
    message?: string | undefined;
}
declare const LogActivityResponse: MessageFns$6<LogActivityResponse>;
type ActivityLogService = typeof ActivityLogService;
declare const ActivityLogService: {
    readonly logActivity: {
        readonly path: "/activity_log.ActivityLog/LogActivity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LogActivityRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LogActivityRequest;
        readonly responseSerialize: (value: LogActivityResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LogActivityResponse;
    };
};
interface ActivityLogServer extends UntypedServiceImplementation {
    logActivity: handleUnaryCall<LogActivityRequest, LogActivityResponse>;
}
interface ActivityLogClient extends Client {
    logActivity(request: LogActivityRequest, callback: (error: ServiceError | null, response: LogActivityResponse) => void): ClientUnaryCall;
    logActivity(request: LogActivityRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LogActivityResponse) => void): ClientUnaryCall;
    logActivity(request: LogActivityRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LogActivityResponse) => void): ClientUnaryCall;
}
declare const ActivityLogClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ActivityLogClient;
    service: typeof ActivityLogService;
    serviceName: string;
};
type Builtin$6 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$6<T> = T extends Builtin$6 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$6<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$6<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$6<T[K]>;
} : Partial<T>;
type KeysOfUnion$6<T> = T extends T ? keyof T : never;
type Exact$6<P, I extends P> = P extends Builtin$6 ? P : P & {
    [K in keyof P]: Exact$6<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$6<P>>]: never;
};
interface MessageFns$6<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$6<DeepPartial$6<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$6<DeepPartial$6<T>, I>>(object: I): T;
}

declare const activity_ActivityLogClient: typeof ActivityLogClient;
type activity_ActivityLogServer = ActivityLogServer;
declare const activity_ActivityLogService: typeof ActivityLogService;
declare const activity_LogActivityRequest: typeof LogActivityRequest;
declare const activity_LogActivityResponse: typeof LogActivityResponse;
declare namespace activity {
  export { activity_ActivityLogClient as ActivityLogClient, type activity_ActivityLogServer as ActivityLogServer, activity_ActivityLogService as ActivityLogService, type DeepPartial$6 as DeepPartial, type Exact$6 as Exact, activity_LogActivityRequest as LogActivityRequest, activity_LogActivityResponse as LogActivityResponse, type MessageFns$6 as MessageFns, Status$2 as Status, protobufPackage$6 as protobufPackage, statusFromJSON$2 as statusFromJSON, statusToJSON$2 as statusToJSON };
}

declare const protobufPackage$5 = "authentication";
declare enum Status$1 {
    Ok = 0,
    Bad = 1,
    UNRECOGNIZED = -1
}
declare function statusFromJSON$1(object: any): Status$1;
declare function statusToJSON$1(object: Status$1): string;
interface LoginRequest {
    email: string;
    password: string;
}
declare const LoginRequest: MessageFns$5<LoginRequest>;
interface LoginResponse {
    token: string;
    message: string;
}
declare const LoginResponse: MessageFns$5<LoginResponse>;
interface SignUpRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
declare const SignUpRequest: MessageFns$5<SignUpRequest>;
interface SignUpResponse {
    message: string;
    status: Status$1;
}
declare const SignUpResponse: MessageFns$5<SignUpResponse>;
type AuthenticationService = typeof AuthenticationService;
declare const AuthenticationService: {
    readonly signUp: {
        readonly path: "/authentication.Authentication/SignUp";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SignUpRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SignUpRequest;
        readonly responseSerialize: (value: SignUpResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SignUpResponse;
    };
    readonly login: {
        readonly path: "/authentication.Authentication/Login";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LoginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LoginRequest;
        readonly responseSerialize: (value: LoginResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoginResponse;
    };
};
interface AuthenticationServer extends UntypedServiceImplementation {
    signUp: handleUnaryCall<SignUpRequest, SignUpResponse>;
    login: handleUnaryCall<LoginRequest, LoginResponse>;
}
interface AuthenticationClient extends Client {
    signUp(request: SignUpRequest, callback: (error: ServiceError | null, response: SignUpResponse) => void): ClientUnaryCall;
    signUp(request: SignUpRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SignUpResponse) => void): ClientUnaryCall;
    signUp(request: SignUpRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SignUpResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
}
declare const AuthenticationClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthenticationClient;
    service: typeof AuthenticationService;
    serviceName: string;
};
type Builtin$5 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$5<T> = T extends Builtin$5 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$5<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$5<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$5<T[K]>;
} : Partial<T>;
type KeysOfUnion$5<T> = T extends T ? keyof T : never;
type Exact$5<P, I extends P> = P extends Builtin$5 ? P : P & {
    [K in keyof P]: Exact$5<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$5<P>>]: never;
};
interface MessageFns$5<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$5<DeepPartial$5<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$5<DeepPartial$5<T>, I>>(object: I): T;
}

declare const authentication_AuthenticationClient: typeof AuthenticationClient;
type authentication_AuthenticationServer = AuthenticationServer;
declare const authentication_AuthenticationService: typeof AuthenticationService;
declare const authentication_LoginRequest: typeof LoginRequest;
declare const authentication_LoginResponse: typeof LoginResponse;
declare const authentication_SignUpRequest: typeof SignUpRequest;
declare const authentication_SignUpResponse: typeof SignUpResponse;
declare namespace authentication {
  export { authentication_AuthenticationClient as AuthenticationClient, type authentication_AuthenticationServer as AuthenticationServer, authentication_AuthenticationService as AuthenticationService, type DeepPartial$5 as DeepPartial, type Exact$5 as Exact, authentication_LoginRequest as LoginRequest, authentication_LoginResponse as LoginResponse, type MessageFns$5 as MessageFns, authentication_SignUpRequest as SignUpRequest, authentication_SignUpResponse as SignUpResponse, Status$1 as Status, protobufPackage$5 as protobufPackage, statusFromJSON$1 as statusFromJSON, statusToJSON$1 as statusToJSON };
}

declare const protobufPackage$4 = "bookmark_collections_entries";
interface NewBookmarkCollectionsEntryRequest {
    title: string;
    description: string;
    bookmarkCollectionId: string;
    moreFields: {
        [key: string]: string;
    };
}
declare const NewBookmarkCollectionsEntryRequest: MessageFns$4<NewBookmarkCollectionsEntryRequest>;
interface NewBookmarkCollectionsEntryRequest_MoreFieldsEntry {
    key: string;
    value: string;
}
declare const NewBookmarkCollectionsEntryRequest_MoreFieldsEntry: MessageFns$4<NewBookmarkCollectionsEntryRequest_MoreFieldsEntry>;
interface GetBookmarkCollectionsEntryResponse {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    collectionId: string;
    moreFields: {
        [key: string]: string;
    };
    entryId: string;
}
declare const GetBookmarkCollectionsEntryResponse: MessageFns$4<GetBookmarkCollectionsEntryResponse>;
interface GetBookmarkCollectionsEntryResponse_MoreFieldsEntry {
    key: string;
    value: string;
}
declare const GetBookmarkCollectionsEntryResponse_MoreFieldsEntry: MessageFns$4<GetBookmarkCollectionsEntryResponse_MoreFieldsEntry>;
interface GetBookmarkCollectionsEntryRequest {
    collectionId: string;
    entryId: string;
}
declare const GetBookmarkCollectionsEntryRequest: MessageFns$4<GetBookmarkCollectionsEntryRequest>;
interface UpdateBookmarkCollectionsEntryRequest {
    collectionId: string;
    title?: string | undefined;
    description?: string | undefined;
    entryId: string;
}
declare const UpdateBookmarkCollectionsEntryRequest: MessageFns$4<UpdateBookmarkCollectionsEntryRequest>;
interface DeleteBookmarkCollectionsEntryResponse {
    collectionId: string;
    entryId: string;
    status: string;
}
declare const DeleteBookmarkCollectionsEntryResponse: MessageFns$4<DeleteBookmarkCollectionsEntryResponse>;
type BookmarkCollectionsEntriesManagerService = typeof BookmarkCollectionsEntriesManagerService;
declare const BookmarkCollectionsEntriesManagerService: {
    readonly createNewBookmarkCollectionEntry: {
        readonly path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/CreateNewBookmarkCollectionEntry";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: NewBookmarkCollectionsEntryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => NewBookmarkCollectionsEntryRequest;
        readonly responseSerialize: (value: GetBookmarkCollectionsEntryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBookmarkCollectionsEntryResponse;
    };
    readonly getBookmarkCollectionEntry: {
        readonly path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/GetBookmarkCollectionEntry";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBookmarkCollectionsEntryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBookmarkCollectionsEntryRequest;
        readonly responseSerialize: (value: GetBookmarkCollectionsEntryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBookmarkCollectionsEntryResponse;
    };
    readonly updateBookmarkCollectionEntry: {
        readonly path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/UpdateBookmarkCollectionEntry";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBookmarkCollectionsEntryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBookmarkCollectionsEntryRequest;
        readonly responseSerialize: (value: GetBookmarkCollectionsEntryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBookmarkCollectionsEntryResponse;
    };
    readonly deleteBookmarkCollectionEntry: {
        readonly path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/DeleteBookmarkCollectionEntry";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBookmarkCollectionsEntryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBookmarkCollectionsEntryRequest;
        readonly responseSerialize: (value: DeleteBookmarkCollectionsEntryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteBookmarkCollectionsEntryResponse;
    };
};
interface BookmarkCollectionsEntriesManagerServer extends UntypedServiceImplementation {
    createNewBookmarkCollectionEntry: handleUnaryCall<NewBookmarkCollectionsEntryRequest, GetBookmarkCollectionsEntryResponse>;
    getBookmarkCollectionEntry: handleUnaryCall<GetBookmarkCollectionsEntryRequest, GetBookmarkCollectionsEntryResponse>;
    updateBookmarkCollectionEntry: handleUnaryCall<UpdateBookmarkCollectionsEntryRequest, GetBookmarkCollectionsEntryResponse>;
    deleteBookmarkCollectionEntry: handleUnaryCall<UpdateBookmarkCollectionsEntryRequest, DeleteBookmarkCollectionsEntryResponse>;
}
interface BookmarkCollectionsEntriesManagerClient extends Client {
    createNewBookmarkCollectionEntry(request: NewBookmarkCollectionsEntryRequest, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    createNewBookmarkCollectionEntry(request: NewBookmarkCollectionsEntryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    createNewBookmarkCollectionEntry(request: NewBookmarkCollectionsEntryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    getBookmarkCollectionEntry(request: GetBookmarkCollectionsEntryRequest, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    getBookmarkCollectionEntry(request: GetBookmarkCollectionsEntryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    getBookmarkCollectionEntry(request: GetBookmarkCollectionsEntryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    updateBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    updateBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    updateBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    deleteBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    deleteBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
    deleteBookmarkCollectionEntry(request: UpdateBookmarkCollectionsEntryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionsEntryResponse) => void): ClientUnaryCall;
}
declare const BookmarkCollectionsEntriesManagerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BookmarkCollectionsEntriesManagerClient;
    service: typeof BookmarkCollectionsEntriesManagerService;
    serviceName: string;
};
type Builtin$4 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$4<T> = T extends Builtin$4 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$4<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$4<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$4<T[K]>;
} : Partial<T>;
type KeysOfUnion$4<T> = T extends T ? keyof T : never;
type Exact$4<P, I extends P> = P extends Builtin$4 ? P : P & {
    [K in keyof P]: Exact$4<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$4<P>>]: never;
};
interface MessageFns$4<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$4<DeepPartial$4<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$4<DeepPartial$4<T>, I>>(object: I): T;
}

declare const bookmark_collection_entries_BookmarkCollectionsEntriesManagerClient: typeof BookmarkCollectionsEntriesManagerClient;
type bookmark_collection_entries_BookmarkCollectionsEntriesManagerServer = BookmarkCollectionsEntriesManagerServer;
declare const bookmark_collection_entries_BookmarkCollectionsEntriesManagerService: typeof BookmarkCollectionsEntriesManagerService;
declare const bookmark_collection_entries_DeleteBookmarkCollectionsEntryResponse: typeof DeleteBookmarkCollectionsEntryResponse;
declare const bookmark_collection_entries_GetBookmarkCollectionsEntryRequest: typeof GetBookmarkCollectionsEntryRequest;
declare const bookmark_collection_entries_GetBookmarkCollectionsEntryResponse: typeof GetBookmarkCollectionsEntryResponse;
declare const bookmark_collection_entries_GetBookmarkCollectionsEntryResponse_MoreFieldsEntry: typeof GetBookmarkCollectionsEntryResponse_MoreFieldsEntry;
declare const bookmark_collection_entries_NewBookmarkCollectionsEntryRequest: typeof NewBookmarkCollectionsEntryRequest;
declare const bookmark_collection_entries_NewBookmarkCollectionsEntryRequest_MoreFieldsEntry: typeof NewBookmarkCollectionsEntryRequest_MoreFieldsEntry;
declare const bookmark_collection_entries_UpdateBookmarkCollectionsEntryRequest: typeof UpdateBookmarkCollectionsEntryRequest;
declare namespace bookmark_collection_entries {
  export { bookmark_collection_entries_BookmarkCollectionsEntriesManagerClient as BookmarkCollectionsEntriesManagerClient, type bookmark_collection_entries_BookmarkCollectionsEntriesManagerServer as BookmarkCollectionsEntriesManagerServer, bookmark_collection_entries_BookmarkCollectionsEntriesManagerService as BookmarkCollectionsEntriesManagerService, type DeepPartial$4 as DeepPartial, bookmark_collection_entries_DeleteBookmarkCollectionsEntryResponse as DeleteBookmarkCollectionsEntryResponse, type Exact$4 as Exact, bookmark_collection_entries_GetBookmarkCollectionsEntryRequest as GetBookmarkCollectionsEntryRequest, bookmark_collection_entries_GetBookmarkCollectionsEntryResponse as GetBookmarkCollectionsEntryResponse, bookmark_collection_entries_GetBookmarkCollectionsEntryResponse_MoreFieldsEntry as GetBookmarkCollectionsEntryResponse_MoreFieldsEntry, type MessageFns$4 as MessageFns, bookmark_collection_entries_NewBookmarkCollectionsEntryRequest as NewBookmarkCollectionsEntryRequest, bookmark_collection_entries_NewBookmarkCollectionsEntryRequest_MoreFieldsEntry as NewBookmarkCollectionsEntryRequest_MoreFieldsEntry, bookmark_collection_entries_UpdateBookmarkCollectionsEntryRequest as UpdateBookmarkCollectionsEntryRequest, protobufPackage$4 as protobufPackage };
}

declare const protobufPackage$3 = "BookmarkCollection";
interface BookmarkCollectionEntries {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    BookmarkCollectionId: string;
    moreFields: {
        [key: string]: string;
    };
}
declare const BookmarkCollectionEntries: MessageFns$3<BookmarkCollectionEntries>;
interface BookmarkCollectionEntries_MoreFieldsEntry {
    key: string;
    value: string;
}
declare const BookmarkCollectionEntries_MoreFieldsEntry: MessageFns$3<BookmarkCollectionEntries_MoreFieldsEntry>;
interface NewBookmarkCollectionRequest {
    name: string;
    description: string;
}
declare const NewBookmarkCollectionRequest: MessageFns$3<NewBookmarkCollectionRequest>;
interface NewBookmarkCollectionResponse {
    BookmarkCollectionId: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}
declare const NewBookmarkCollectionResponse: MessageFns$3<NewBookmarkCollectionResponse>;
interface GetBookmarkCollectionRequest {
    BookmarkCollectionId: string;
}
declare const GetBookmarkCollectionRequest: MessageFns$3<GetBookmarkCollectionRequest>;
interface GetBookmarkCollectionResponse {
    BookmarkCollectionId: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    entries: BookmarkCollectionEntries[];
}
declare const GetBookmarkCollectionResponse: MessageFns$3<GetBookmarkCollectionResponse>;
interface UpdateBookmarkCollectionRequest {
    BookmarkCollectionId: string;
    name?: string | undefined;
    description?: string | undefined;
}
declare const UpdateBookmarkCollectionRequest: MessageFns$3<UpdateBookmarkCollectionRequest>;
interface UpdateBookmarkCollectionResponse {
    BookmarkCollectionId: string;
    status: string;
}
declare const UpdateBookmarkCollectionResponse: MessageFns$3<UpdateBookmarkCollectionResponse>;
interface DeleteBookmarkCollectionRequest {
    BookmarkCollectionId: string;
}
declare const DeleteBookmarkCollectionRequest: MessageFns$3<DeleteBookmarkCollectionRequest>;
interface DeleteBookmarkCollectionResponse {
    BookmarkCollectionId: string;
    message: string;
}
declare const DeleteBookmarkCollectionResponse: MessageFns$3<DeleteBookmarkCollectionResponse>;
interface ListBookmarkCollectionsRequest {
    page: number;
    pageSize: number;
}
declare const ListBookmarkCollectionsRequest: MessageFns$3<ListBookmarkCollectionsRequest>;
interface BookmarkCollection {
    BookmarkCollectionId: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}
declare const BookmarkCollection: MessageFns$3<BookmarkCollection>;
interface ListBookmarkCollectionsResponse {
    BookmarkCollections: BookmarkCollection[];
    totalCount: number;
}
declare const ListBookmarkCollectionsResponse: MessageFns$3<ListBookmarkCollectionsResponse>;
interface ListBookmarkCollectionEntryRequest {
    BookmarkCollectionId: string;
    page: number;
    pageSize: number;
}
declare const ListBookmarkCollectionEntryRequest: MessageFns$3<ListBookmarkCollectionEntryRequest>;
interface ListBookmarkCollectionEntryResponse {
    BookmarkCollectionEntries: BookmarkCollectionEntries[];
    totalCount: number;
}
declare const ListBookmarkCollectionEntryResponse: MessageFns$3<ListBookmarkCollectionEntryResponse>;
type BookmarkCollectionManagerService = typeof BookmarkCollectionManagerService;
declare const BookmarkCollectionManagerService: {
    readonly createNewBookmarkCollection: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: NewBookmarkCollectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => NewBookmarkCollectionRequest;
        readonly responseSerialize: (value: NewBookmarkCollectionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => NewBookmarkCollectionResponse;
    };
    readonly getBookmarkCollection: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBookmarkCollectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBookmarkCollectionRequest;
        readonly responseSerialize: (value: GetBookmarkCollectionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBookmarkCollectionResponse;
    };
    readonly updateBookmarkCollection: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateBookmarkCollectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateBookmarkCollectionRequest;
        readonly responseSerialize: (value: GetBookmarkCollectionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBookmarkCollectionResponse;
    };
    readonly deleteBookmarkCollection: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteBookmarkCollectionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteBookmarkCollectionRequest;
        readonly responseSerialize: (value: DeleteBookmarkCollectionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteBookmarkCollectionResponse;
    };
    readonly listBookmarkCollections: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBookmarkCollectionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBookmarkCollectionsRequest;
        readonly responseSerialize: (value: ListBookmarkCollectionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBookmarkCollectionsResponse;
    };
    readonly listBookmarkCollectionEntries: {
        readonly path: "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBookmarkCollectionEntryRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBookmarkCollectionEntryRequest;
        readonly responseSerialize: (value: ListBookmarkCollectionEntryResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBookmarkCollectionEntryResponse;
    };
};
interface BookmarkCollectionManagerServer extends UntypedServiceImplementation {
    createNewBookmarkCollection: handleUnaryCall<NewBookmarkCollectionRequest, NewBookmarkCollectionResponse>;
    getBookmarkCollection: handleUnaryCall<GetBookmarkCollectionRequest, GetBookmarkCollectionResponse>;
    updateBookmarkCollection: handleUnaryCall<UpdateBookmarkCollectionRequest, GetBookmarkCollectionResponse>;
    deleteBookmarkCollection: handleUnaryCall<DeleteBookmarkCollectionRequest, DeleteBookmarkCollectionResponse>;
    listBookmarkCollections: handleUnaryCall<ListBookmarkCollectionsRequest, ListBookmarkCollectionsResponse>;
    listBookmarkCollectionEntries: handleUnaryCall<ListBookmarkCollectionEntryRequest, ListBookmarkCollectionEntryResponse>;
}
interface BookmarkCollectionManagerClient extends Client {
    createNewBookmarkCollection(request: NewBookmarkCollectionRequest, callback: (error: ServiceError | null, response: NewBookmarkCollectionResponse) => void): ClientUnaryCall;
    createNewBookmarkCollection(request: NewBookmarkCollectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: NewBookmarkCollectionResponse) => void): ClientUnaryCall;
    createNewBookmarkCollection(request: NewBookmarkCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: NewBookmarkCollectionResponse) => void): ClientUnaryCall;
    getBookmarkCollection(request: GetBookmarkCollectionRequest, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    getBookmarkCollection(request: GetBookmarkCollectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    getBookmarkCollection(request: GetBookmarkCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    updateBookmarkCollection(request: UpdateBookmarkCollectionRequest, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    updateBookmarkCollection(request: UpdateBookmarkCollectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    updateBookmarkCollection(request: UpdateBookmarkCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBookmarkCollectionResponse) => void): ClientUnaryCall;
    deleteBookmarkCollection(request: DeleteBookmarkCollectionRequest, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionResponse) => void): ClientUnaryCall;
    deleteBookmarkCollection(request: DeleteBookmarkCollectionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionResponse) => void): ClientUnaryCall;
    deleteBookmarkCollection(request: DeleteBookmarkCollectionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteBookmarkCollectionResponse) => void): ClientUnaryCall;
    listBookmarkCollections(request: ListBookmarkCollectionsRequest, callback: (error: ServiceError | null, response: ListBookmarkCollectionsResponse) => void): ClientUnaryCall;
    listBookmarkCollections(request: ListBookmarkCollectionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBookmarkCollectionsResponse) => void): ClientUnaryCall;
    listBookmarkCollections(request: ListBookmarkCollectionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBookmarkCollectionsResponse) => void): ClientUnaryCall;
    listBookmarkCollectionEntries(request: ListBookmarkCollectionEntryRequest, callback: (error: ServiceError | null, response: ListBookmarkCollectionEntryResponse) => void): ClientUnaryCall;
    listBookmarkCollectionEntries(request: ListBookmarkCollectionEntryRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBookmarkCollectionEntryResponse) => void): ClientUnaryCall;
    listBookmarkCollectionEntries(request: ListBookmarkCollectionEntryRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBookmarkCollectionEntryResponse) => void): ClientUnaryCall;
}
declare const BookmarkCollectionManagerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BookmarkCollectionManagerClient;
    service: typeof BookmarkCollectionManagerService;
    serviceName: string;
};
type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$3<T[K]>;
} : Partial<T>;
type KeysOfUnion$3<T> = T extends T ? keyof T : never;
type Exact$3<P, I extends P> = P extends Builtin$3 ? P : P & {
    [K in keyof P]: Exact$3<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$3<P>>]: never;
};
interface MessageFns$3<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$3<DeepPartial$3<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$3<DeepPartial$3<T>, I>>(object: I): T;
}

declare const bookmark_collections_BookmarkCollection: typeof BookmarkCollection;
declare const bookmark_collections_BookmarkCollectionEntries: typeof BookmarkCollectionEntries;
declare const bookmark_collections_BookmarkCollectionEntries_MoreFieldsEntry: typeof BookmarkCollectionEntries_MoreFieldsEntry;
declare const bookmark_collections_BookmarkCollectionManagerClient: typeof BookmarkCollectionManagerClient;
type bookmark_collections_BookmarkCollectionManagerServer = BookmarkCollectionManagerServer;
declare const bookmark_collections_BookmarkCollectionManagerService: typeof BookmarkCollectionManagerService;
declare const bookmark_collections_DeleteBookmarkCollectionRequest: typeof DeleteBookmarkCollectionRequest;
declare const bookmark_collections_DeleteBookmarkCollectionResponse: typeof DeleteBookmarkCollectionResponse;
declare const bookmark_collections_GetBookmarkCollectionRequest: typeof GetBookmarkCollectionRequest;
declare const bookmark_collections_GetBookmarkCollectionResponse: typeof GetBookmarkCollectionResponse;
declare const bookmark_collections_ListBookmarkCollectionEntryRequest: typeof ListBookmarkCollectionEntryRequest;
declare const bookmark_collections_ListBookmarkCollectionEntryResponse: typeof ListBookmarkCollectionEntryResponse;
declare const bookmark_collections_ListBookmarkCollectionsRequest: typeof ListBookmarkCollectionsRequest;
declare const bookmark_collections_ListBookmarkCollectionsResponse: typeof ListBookmarkCollectionsResponse;
declare const bookmark_collections_NewBookmarkCollectionRequest: typeof NewBookmarkCollectionRequest;
declare const bookmark_collections_NewBookmarkCollectionResponse: typeof NewBookmarkCollectionResponse;
declare const bookmark_collections_UpdateBookmarkCollectionRequest: typeof UpdateBookmarkCollectionRequest;
declare const bookmark_collections_UpdateBookmarkCollectionResponse: typeof UpdateBookmarkCollectionResponse;
declare namespace bookmark_collections {
  export { bookmark_collections_BookmarkCollection as BookmarkCollection, bookmark_collections_BookmarkCollectionEntries as BookmarkCollectionEntries, bookmark_collections_BookmarkCollectionEntries_MoreFieldsEntry as BookmarkCollectionEntries_MoreFieldsEntry, bookmark_collections_BookmarkCollectionManagerClient as BookmarkCollectionManagerClient, type bookmark_collections_BookmarkCollectionManagerServer as BookmarkCollectionManagerServer, bookmark_collections_BookmarkCollectionManagerService as BookmarkCollectionManagerService, type DeepPartial$3 as DeepPartial, bookmark_collections_DeleteBookmarkCollectionRequest as DeleteBookmarkCollectionRequest, bookmark_collections_DeleteBookmarkCollectionResponse as DeleteBookmarkCollectionResponse, type Exact$3 as Exact, bookmark_collections_GetBookmarkCollectionRequest as GetBookmarkCollectionRequest, bookmark_collections_GetBookmarkCollectionResponse as GetBookmarkCollectionResponse, bookmark_collections_ListBookmarkCollectionEntryRequest as ListBookmarkCollectionEntryRequest, bookmark_collections_ListBookmarkCollectionEntryResponse as ListBookmarkCollectionEntryResponse, bookmark_collections_ListBookmarkCollectionsRequest as ListBookmarkCollectionsRequest, bookmark_collections_ListBookmarkCollectionsResponse as ListBookmarkCollectionsResponse, type MessageFns$3 as MessageFns, bookmark_collections_NewBookmarkCollectionRequest as NewBookmarkCollectionRequest, bookmark_collections_NewBookmarkCollectionResponse as NewBookmarkCollectionResponse, bookmark_collections_UpdateBookmarkCollectionRequest as UpdateBookmarkCollectionRequest, bookmark_collections_UpdateBookmarkCollectionResponse as UpdateBookmarkCollectionResponse, protobufPackage$3 as protobufPackage };
}

declare const protobufPackage$2 = "common";
declare enum RequestStatus {
    Success = 0,
    Failed = 1,
    UNRECOGNIZED = -1
}
declare function requestStatusFromJSON(object: any): RequestStatus;
declare function requestStatusToJSON(object: RequestStatus): string;
interface ErrorResponse {
    code: number;
    message: string;
}
declare const ErrorResponse: MessageFns$2<ErrorResponse>;
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;
type KeysOfUnion$2<T> = T extends T ? keyof T : never;
type Exact$2<P, I extends P> = P extends Builtin$2 ? P : P & {
    [K in keyof P]: Exact$2<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$2<P>>]: never;
};
interface MessageFns$2<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$2<DeepPartial$2<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$2<DeepPartial$2<T>, I>>(object: I): T;
}

declare const common_ErrorResponse: typeof ErrorResponse;
type common_RequestStatus = RequestStatus;
declare const common_RequestStatus: typeof RequestStatus;
declare const common_requestStatusFromJSON: typeof requestStatusFromJSON;
declare const common_requestStatusToJSON: typeof requestStatusToJSON;
declare namespace common {
  export { type DeepPartial$2 as DeepPartial, common_ErrorResponse as ErrorResponse, type Exact$2 as Exact, type MessageFns$2 as MessageFns, common_RequestStatus as RequestStatus, protobufPackage$2 as protobufPackage, common_requestStatusFromJSON as requestStatusFromJSON, common_requestStatusToJSON as requestStatusToJSON };
}

declare const protobufPackage$1 = "health_check";
declare enum Status {
    Ok = 0,
    Bad = 1,
    UNRECOGNIZED = -1
}
declare function statusFromJSON(object: any): Status;
declare function statusToJSON(object: Status): string;
interface HealthCheckRequest {
}
declare const HealthCheckRequest: MessageFns$1<HealthCheckRequest>;
interface HealthCheckResponse {
    status: Status;
    message: string;
}
declare const HealthCheckResponse: MessageFns$1<HealthCheckResponse>;
type HealthCheckService = typeof HealthCheckService;
declare const HealthCheckService: {
    readonly checkServiceHealth: {
        readonly path: "/health_check.HealthCheck/CheckServiceHealth";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: HealthCheckRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => HealthCheckRequest;
        readonly responseSerialize: (value: HealthCheckResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => HealthCheckResponse;
    };
};
interface HealthCheckServer extends UntypedServiceImplementation {
    checkServiceHealth: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
}
interface HealthCheckClient extends Client {
    checkServiceHealth(request: HealthCheckRequest, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    checkServiceHealth(request: HealthCheckRequest, metadata: Metadata, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
    checkServiceHealth(request: HealthCheckRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: HealthCheckResponse) => void): ClientUnaryCall;
}
declare const HealthCheckClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HealthCheckClient;
    service: typeof HealthCheckService;
    serviceName: string;
};
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
type KeysOfUnion$1<T> = T extends T ? keyof T : never;
type Exact$1<P, I extends P> = P extends Builtin$1 ? P : P & {
    [K in keyof P]: Exact$1<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$1<P>>]: never;
};
interface MessageFns$1<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact$1<DeepPartial$1<T>, I>>(base?: I): T;
    fromPartial<I extends Exact$1<DeepPartial$1<T>, I>>(object: I): T;
}

declare const health_check_HealthCheckClient: typeof HealthCheckClient;
declare const health_check_HealthCheckRequest: typeof HealthCheckRequest;
declare const health_check_HealthCheckResponse: typeof HealthCheckResponse;
type health_check_HealthCheckServer = HealthCheckServer;
declare const health_check_HealthCheckService: typeof HealthCheckService;
type health_check_Status = Status;
declare const health_check_Status: typeof Status;
declare const health_check_statusFromJSON: typeof statusFromJSON;
declare const health_check_statusToJSON: typeof statusToJSON;
declare namespace health_check {
  export { type DeepPartial$1 as DeepPartial, type Exact$1 as Exact, health_check_HealthCheckClient as HealthCheckClient, health_check_HealthCheckRequest as HealthCheckRequest, health_check_HealthCheckResponse as HealthCheckResponse, type health_check_HealthCheckServer as HealthCheckServer, health_check_HealthCheckService as HealthCheckService, type MessageFns$1 as MessageFns, health_check_Status as Status, protobufPackage$1 as protobufPackage, health_check_statusFromJSON as statusFromJSON, health_check_statusToJSON as statusToJSON };
}

declare const protobufPackage = "user_profile";
interface ProfileRequest {
}
declare const ProfileRequest: MessageFns<ProfileRequest>;
interface ProfileResponse {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
}
declare const ProfileResponse: MessageFns<ProfileResponse>;
interface ProfileUpdateRequest {
    lastName?: string | undefined;
    firstName?: string | undefined;
    email?: string | undefined;
}
declare const ProfileUpdateRequest: MessageFns<ProfileUpdateRequest>;
interface ProfileUpdateResponse {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
}
declare const ProfileUpdateResponse: MessageFns<ProfileUpdateResponse>;
type UserProfileService = typeof UserProfileService;
declare const UserProfileService: {
    readonly getProfile: {
        readonly path: "/user_profile.UserProfile/GetProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ProfileRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ProfileRequest;
        readonly responseSerialize: (value: ProfileResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ProfileResponse;
    };
    readonly updateProfile: {
        readonly path: "/user_profile.UserProfile/UpdateProfile";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ProfileUpdateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ProfileUpdateRequest;
        readonly responseSerialize: (value: ProfileUpdateResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ProfileUpdateResponse;
    };
};
interface UserProfileServer extends UntypedServiceImplementation {
    getProfile: handleUnaryCall<ProfileRequest, ProfileResponse>;
    updateProfile: handleUnaryCall<ProfileUpdateRequest, ProfileUpdateResponse>;
}
interface UserProfileClient extends Client {
    getProfile(request: ProfileRequest, callback: (error: ServiceError | null, response: ProfileResponse) => void): ClientUnaryCall;
    getProfile(request: ProfileRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ProfileResponse) => void): ClientUnaryCall;
    getProfile(request: ProfileRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ProfileResponse) => void): ClientUnaryCall;
    updateProfile(request: ProfileUpdateRequest, callback: (error: ServiceError | null, response: ProfileUpdateResponse) => void): ClientUnaryCall;
    updateProfile(request: ProfileUpdateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ProfileUpdateResponse) => void): ClientUnaryCall;
    updateProfile(request: ProfileUpdateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ProfileUpdateResponse) => void): ClientUnaryCall;
}
declare const UserProfileClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserProfileClient;
    service: typeof UserProfileService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}

type user_profile_DeepPartial<T> = DeepPartial<T>;
type user_profile_Exact<P, I extends P> = Exact<P, I>;
type user_profile_MessageFns<T> = MessageFns<T>;
declare const user_profile_ProfileRequest: typeof ProfileRequest;
declare const user_profile_ProfileResponse: typeof ProfileResponse;
declare const user_profile_ProfileUpdateRequest: typeof ProfileUpdateRequest;
declare const user_profile_ProfileUpdateResponse: typeof ProfileUpdateResponse;
declare const user_profile_UserProfileClient: typeof UserProfileClient;
type user_profile_UserProfileServer = UserProfileServer;
declare const user_profile_UserProfileService: typeof UserProfileService;
declare const user_profile_protobufPackage: typeof protobufPackage;
declare namespace user_profile {
  export { type user_profile_DeepPartial as DeepPartial, type user_profile_Exact as Exact, type user_profile_MessageFns as MessageFns, user_profile_ProfileRequest as ProfileRequest, user_profile_ProfileResponse as ProfileResponse, user_profile_ProfileUpdateRequest as ProfileUpdateRequest, user_profile_ProfileUpdateResponse as ProfileUpdateResponse, user_profile_UserProfileClient as UserProfileClient, type user_profile_UserProfileServer as UserProfileServer, user_profile_UserProfileService as UserProfileService, user_profile_protobufPackage as protobufPackage };
}

export { activity, authentication, bookmark_collection_entries, bookmark_collections, common, health_check, user_profile };
