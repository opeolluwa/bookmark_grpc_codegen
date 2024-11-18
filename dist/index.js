"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// protogen/nodejs/index.ts
var nodejs_exports = {};
__export(nodejs_exports, {
  activity: () => activity_exports,
  authentication: () => authentication_exports,
  bookmark_collection_entries: () => bookmark_collection_entries_exports,
  bookmark_collections: () => bookmark_collections_exports,
  common: () => common_exports,
  health_check: () => health_check_exports,
  user_profile: () => user_profile_exports
});
module.exports = __toCommonJS(nodejs_exports);

// protogen/nodejs/activity.ts
var activity_exports = {};
__export(activity_exports, {
  ActivityLogClient: () => ActivityLogClient,
  ActivityLogService: () => ActivityLogService,
  LogActivityRequest: () => LogActivityRequest,
  LogActivityResponse: () => LogActivityResponse,
  Status: () => Status,
  protobufPackage: () => protobufPackage,
  statusFromJSON: () => statusFromJSON,
  statusToJSON: () => statusToJSON
});
var import_wire = require("@bufbuild/protobuf/wire");
var import_grpc_js = require("@grpc/grpc-js");
var protobufPackage = "activity_log";
var Status = /* @__PURE__ */ ((Status4) => {
  Status4[Status4["Success"] = 0] = "Success";
  Status4[Status4["Failed"] = 1] = "Failed";
  Status4[Status4["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Status4;
})(Status || {});
function statusFromJSON(object) {
  switch (object) {
    case 0:
    case "Success":
      return 0 /* Success */;
    case 1:
    case "Failed":
      return 1 /* Failed */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function statusToJSON(object) {
  switch (object) {
    case 0 /* Success */:
      return "Success";
    case 1 /* Failed */:
      return "Failed";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseLogActivityRequest() {
  return { location: "", time: "", date: "", os: "", action: "" };
}
var LogActivityRequest = {
  encode(message, writer = new import_wire.BinaryWriter()) {
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
  decode(input, length) {
    const reader = input instanceof import_wire.BinaryReader ? input : new import_wire.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      time: isSet(object.time) ? globalThis.String(object.time) : "",
      date: isSet(object.date) ? globalThis.String(object.date) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      action: isSet(object.action) ? globalThis.String(object.action) : ""
    };
  },
  toJSON(message) {
    const obj = {};
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
  create(base) {
    return LogActivityRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseLogActivityRequest();
    message.location = (_a = object.location) != null ? _a : "";
    message.time = (_b = object.time) != null ? _b : "";
    message.date = (_c = object.date) != null ? _c : "";
    message.os = (_d = object.os) != null ? _d : "";
    message.action = (_e = object.action) != null ? _e : "";
    return message;
  }
};
function createBaseLogActivityResponse() {
  return { status: 0, message: void 0 };
}
var LogActivityResponse = {
  encode(message, writer = new import_wire.BinaryWriter()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== void 0) {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire.BinaryReader ? input : new import_wire.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLogActivityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }
          message.status = reader.int32();
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
  fromJSON(object) {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.message !== void 0) {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return LogActivityResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseLogActivityResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : void 0;
    return message;
  }
};
var ActivityLogService = {
  logActivity: {
    path: "/activity_log.ActivityLog/LogActivity",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(LogActivityRequest.encode(value).finish()),
    requestDeserialize: (value) => LogActivityRequest.decode(value),
    responseSerialize: (value) => Buffer.from(LogActivityResponse.encode(value).finish()),
    responseDeserialize: (value) => LogActivityResponse.decode(value)
  }
};
var ActivityLogClient = (0, import_grpc_js.makeGenericClientConstructor)(
  ActivityLogService,
  "activity_log.ActivityLog"
);
function isSet(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/authentication.ts
var authentication_exports = {};
__export(authentication_exports, {
  AuthenticationClient: () => AuthenticationClient,
  AuthenticationService: () => AuthenticationService,
  LoginRequest: () => LoginRequest,
  LoginResponse: () => LoginResponse,
  SignUpRequest: () => SignUpRequest,
  SignUpResponse: () => SignUpResponse,
  Status: () => Status2,
  protobufPackage: () => protobufPackage2,
  statusFromJSON: () => statusFromJSON2,
  statusToJSON: () => statusToJSON2
});
var import_wire2 = require("@bufbuild/protobuf/wire");
var import_grpc_js2 = require("@grpc/grpc-js");
var protobufPackage2 = "authentication";
var Status2 = /* @__PURE__ */ ((Status4) => {
  Status4[Status4["Ok"] = 0] = "Ok";
  Status4[Status4["Bad"] = 1] = "Bad";
  Status4[Status4["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Status4;
})(Status2 || {});
function statusFromJSON2(object) {
  switch (object) {
    case 0:
    case "Ok":
      return 0 /* Ok */;
    case 1:
    case "Bad":
      return 1 /* Bad */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function statusToJSON2(object) {
  switch (object) {
    case 0 /* Ok */:
      return "Ok";
    case 1 /* Bad */:
      return "Bad";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseLoginRequest() {
  return { email: "", password: "" };
}
var LoginRequest = {
  encode(message, writer = new import_wire2.BinaryWriter()) {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire2.BinaryReader ? input : new import_wire2.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.email = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.password = reader.string();
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
  fromJSON(object) {
    return {
      email: isSet2(object.email) ? globalThis.String(object.email) : "",
      password: isSet2(object.password) ? globalThis.String(object.password) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },
  create(base) {
    return LoginRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseLoginRequest();
    message.email = (_a = object.email) != null ? _a : "";
    message.password = (_b = object.password) != null ? _b : "";
    return message;
  }
};
function createBaseLoginResponse() {
  return { token: "", message: "" };
}
var LoginResponse = {
  encode(message, writer = new import_wire2.BinaryWriter()) {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire2.BinaryReader ? input : new import_wire2.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.token = reader.string();
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
  fromJSON(object) {
    return {
      token: isSet2(object.token) ? globalThis.String(object.token) : "",
      message: isSet2(object.message) ? globalThis.String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return LoginResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseLoginResponse();
    message.token = (_a = object.token) != null ? _a : "";
    message.message = (_b = object.message) != null ? _b : "";
    return message;
  }
};
function createBaseSignUpRequest() {
  return { email: "", password: "", firstName: "", lastName: "" };
}
var SignUpRequest = {
  encode(message, writer = new import_wire2.BinaryWriter()) {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire2.BinaryReader ? input : new import_wire2.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.email = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.password = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.firstName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.lastName = reader.string();
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
  fromJSON(object) {
    return {
      email: isSet2(object.email) ? globalThis.String(object.email) : "",
      password: isSet2(object.password) ? globalThis.String(object.password) : "",
      firstName: isSet2(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet2(object.lastName) ? globalThis.String(object.lastName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    return obj;
  },
  create(base) {
    return SignUpRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseSignUpRequest();
    message.email = (_a = object.email) != null ? _a : "";
    message.password = (_b = object.password) != null ? _b : "";
    message.firstName = (_c = object.firstName) != null ? _c : "";
    message.lastName = (_d = object.lastName) != null ? _d : "";
    return message;
  }
};
function createBaseSignUpResponse() {
  return { message: "", status: 0 };
}
var SignUpResponse = {
  encode(message, writer = new import_wire2.BinaryWriter()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire2.BinaryReader ? input : new import_wire2.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.message = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }
          message.status = reader.int32();
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
  fromJSON(object) {
    return {
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      status: isSet2(object.status) ? statusFromJSON2(object.status) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON2(message.status);
    }
    return obj;
  },
  create(base) {
    return SignUpResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseSignUpResponse();
    message.message = (_a = object.message) != null ? _a : "";
    message.status = (_b = object.status) != null ? _b : 0;
    return message;
  }
};
var AuthenticationService = {
  signUp: {
    path: "/authentication.Authentication/SignUp",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(SignUpRequest.encode(value).finish()),
    requestDeserialize: (value) => SignUpRequest.decode(value),
    responseSerialize: (value) => Buffer.from(SignUpResponse.encode(value).finish()),
    responseDeserialize: (value) => SignUpResponse.decode(value)
  },
  login: {
    path: "/authentication.Authentication/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value) => LoginRequest.decode(value),
    responseSerialize: (value) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value) => LoginResponse.decode(value)
  }
};
var AuthenticationClient = (0, import_grpc_js2.makeGenericClientConstructor)(
  AuthenticationService,
  "authentication.Authentication"
);
function isSet2(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/bookmark_collection_entries.ts
var bookmark_collection_entries_exports = {};
__export(bookmark_collection_entries_exports, {
  BookmarkCollectionsEntriesManagerClient: () => BookmarkCollectionsEntriesManagerClient,
  BookmarkCollectionsEntriesManagerService: () => BookmarkCollectionsEntriesManagerService,
  DeleteBookmarkCollectionsEntryResponse: () => DeleteBookmarkCollectionsEntryResponse,
  GetBookmarkCollectionsEntryRequest: () => GetBookmarkCollectionsEntryRequest,
  GetBookmarkCollectionsEntryResponse: () => GetBookmarkCollectionsEntryResponse,
  GetBookmarkCollectionsEntryResponse_MoreFieldsEntry: () => GetBookmarkCollectionsEntryResponse_MoreFieldsEntry,
  NewBookmarkCollectionsEntryRequest: () => NewBookmarkCollectionsEntryRequest,
  NewBookmarkCollectionsEntryRequest_MoreFieldsEntry: () => NewBookmarkCollectionsEntryRequest_MoreFieldsEntry,
  UpdateBookmarkCollectionsEntryRequest: () => UpdateBookmarkCollectionsEntryRequest,
  protobufPackage: () => protobufPackage3
});
var import_wire3 = require("@bufbuild/protobuf/wire");
var import_grpc_js3 = require("@grpc/grpc-js");
var protobufPackage3 = "bookmark_collections_entries";
function createBaseNewBookmarkCollectionsEntryRequest() {
  return { title: "", description: "", bookmarkCollectionId: "", moreFields: {} };
}
var NewBookmarkCollectionsEntryRequest = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.bookmarkCollectionId !== "") {
      writer.uint32(26).string(message.bookmarkCollectionId);
    }
    Object.entries(message.moreFields).forEach(([key, value]) => {
      NewBookmarkCollectionsEntryRequest_MoreFieldsEntry.encode({ key, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNewBookmarkCollectionsEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.bookmarkCollectionId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          const entry4 = NewBookmarkCollectionsEntryRequest_MoreFieldsEntry.decode(reader, reader.uint32());
          if (entry4.value !== void 0) {
            message.moreFields[entry4.key] = entry4.value;
          }
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
  fromJSON(object) {
    return {
      title: isSet3(object.title) ? globalThis.String(object.title) : "",
      description: isSet3(object.description) ? globalThis.String(object.description) : "",
      bookmarkCollectionId: isSet3(object.bookmarkCollectionId) ? globalThis.String(object.bookmarkCollectionId) : "",
      moreFields: isObject(object.moreFields) ? Object.entries(object.moreFields).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.bookmarkCollectionId !== "") {
      obj.bookmarkCollectionId = message.bookmarkCollectionId;
    }
    if (message.moreFields) {
      const entries = Object.entries(message.moreFields);
      if (entries.length > 0) {
        obj.moreFields = {};
        entries.forEach(([k, v]) => {
          obj.moreFields[k] = v;
        });
      }
    }
    return obj;
  },
  create(base) {
    return NewBookmarkCollectionsEntryRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseNewBookmarkCollectionsEntryRequest();
    message.title = (_a = object.title) != null ? _a : "";
    message.description = (_b = object.description) != null ? _b : "";
    message.bookmarkCollectionId = (_c = object.bookmarkCollectionId) != null ? _c : "";
    message.moreFields = Object.entries((_d = object.moreFields) != null ? _d : {}).reduce(
      (acc, [key, value]) => {
        if (value !== void 0) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {}
    );
    return message;
  }
};
function createBaseNewBookmarkCollectionsEntryRequest_MoreFieldsEntry() {
  return { key: "", value: "" };
}
var NewBookmarkCollectionsEntryRequest_MoreFieldsEntry = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNewBookmarkCollectionsEntryRequest_MoreFieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.value = reader.string();
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
  fromJSON(object) {
    return {
      key: isSet3(object.key) ? globalThis.String(object.key) : "",
      value: isSet3(object.value) ? globalThis.String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
  create(base) {
    return NewBookmarkCollectionsEntryRequest_MoreFieldsEntry.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseNewBookmarkCollectionsEntryRequest_MoreFieldsEntry();
    message.key = (_a = object.key) != null ? _a : "";
    message.value = (_b = object.value) != null ? _b : "";
    return message;
  }
};
function createBaseGetBookmarkCollectionsEntryResponse() {
  return { title: "", description: "", createdAt: "", updatedAt: "", collectionId: "", moreFields: {}, entryId: "" };
}
var GetBookmarkCollectionsEntryResponse = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.createdAt !== "") {
      writer.uint32(26).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(34).string(message.updatedAt);
    }
    if (message.collectionId !== "") {
      writer.uint32(42).string(message.collectionId);
    }
    Object.entries(message.moreFields).forEach(([key, value]) => {
      GetBookmarkCollectionsEntryResponse_MoreFieldsEntry.encode({ key, value }, writer.uint32(50).fork()).join();
    });
    if (message.entryId !== "") {
      writer.uint32(66).string(message.entryId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBookmarkCollectionsEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.createdAt = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.updatedAt = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }
          message.collectionId = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }
          const entry6 = GetBookmarkCollectionsEntryResponse_MoreFieldsEntry.decode(reader, reader.uint32());
          if (entry6.value !== void 0) {
            message.moreFields[entry6.key] = entry6.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }
          message.entryId = reader.string();
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
  fromJSON(object) {
    return {
      title: isSet3(object.title) ? globalThis.String(object.title) : "",
      description: isSet3(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet3(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet3(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
      collectionId: isSet3(object.collectionId) ? globalThis.String(object.collectionId) : "",
      moreFields: isObject(object.moreFields) ? Object.entries(object.moreFields).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      entryId: isSet3(object.entryId) ? globalThis.String(object.entryId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.moreFields) {
      const entries = Object.entries(message.moreFields);
      if (entries.length > 0) {
        obj.moreFields = {};
        entries.forEach(([k, v]) => {
          obj.moreFields[k] = v;
        });
      }
    }
    if (message.entryId !== "") {
      obj.entryId = message.entryId;
    }
    return obj;
  },
  create(base) {
    return GetBookmarkCollectionsEntryResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f, _g;
    const message = createBaseGetBookmarkCollectionsEntryResponse();
    message.title = (_a = object.title) != null ? _a : "";
    message.description = (_b = object.description) != null ? _b : "";
    message.createdAt = (_c = object.createdAt) != null ? _c : "";
    message.updatedAt = (_d = object.updatedAt) != null ? _d : "";
    message.collectionId = (_e = object.collectionId) != null ? _e : "";
    message.moreFields = Object.entries((_f = object.moreFields) != null ? _f : {}).reduce(
      (acc, [key, value]) => {
        if (value !== void 0) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {}
    );
    message.entryId = (_g = object.entryId) != null ? _g : "";
    return message;
  }
};
function createBaseGetBookmarkCollectionsEntryResponse_MoreFieldsEntry() {
  return { key: "", value: "" };
}
var GetBookmarkCollectionsEntryResponse_MoreFieldsEntry = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBookmarkCollectionsEntryResponse_MoreFieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.value = reader.string();
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
  fromJSON(object) {
    return {
      key: isSet3(object.key) ? globalThis.String(object.key) : "",
      value: isSet3(object.value) ? globalThis.String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
  create(base) {
    return GetBookmarkCollectionsEntryResponse_MoreFieldsEntry.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseGetBookmarkCollectionsEntryResponse_MoreFieldsEntry();
    message.key = (_a = object.key) != null ? _a : "";
    message.value = (_b = object.value) != null ? _b : "";
    return message;
  }
};
function createBaseGetBookmarkCollectionsEntryRequest() {
  return { collectionId: "", entryId: "" };
}
var GetBookmarkCollectionsEntryRequest = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.entryId !== "") {
      writer.uint32(18).string(message.entryId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBookmarkCollectionsEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.collectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.entryId = reader.string();
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
  fromJSON(object) {
    return {
      collectionId: isSet3(object.collectionId) ? globalThis.String(object.collectionId) : "",
      entryId: isSet3(object.entryId) ? globalThis.String(object.entryId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.entryId !== "") {
      obj.entryId = message.entryId;
    }
    return obj;
  },
  create(base) {
    return GetBookmarkCollectionsEntryRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseGetBookmarkCollectionsEntryRequest();
    message.collectionId = (_a = object.collectionId) != null ? _a : "";
    message.entryId = (_b = object.entryId) != null ? _b : "";
    return message;
  }
};
function createBaseUpdateBookmarkCollectionsEntryRequest() {
  return { collectionId: "", title: void 0, description: void 0, entryId: "" };
}
var UpdateBookmarkCollectionsEntryRequest = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.title !== void 0) {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== void 0) {
      writer.uint32(26).string(message.description);
    }
    if (message.entryId !== "") {
      writer.uint32(34).string(message.entryId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateBookmarkCollectionsEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.collectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.title = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.entryId = reader.string();
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
  fromJSON(object) {
    return {
      collectionId: isSet3(object.collectionId) ? globalThis.String(object.collectionId) : "",
      title: isSet3(object.title) ? globalThis.String(object.title) : void 0,
      description: isSet3(object.description) ? globalThis.String(object.description) : void 0,
      entryId: isSet3(object.entryId) ? globalThis.String(object.entryId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.title !== void 0) {
      obj.title = message.title;
    }
    if (message.description !== void 0) {
      obj.description = message.description;
    }
    if (message.entryId !== "") {
      obj.entryId = message.entryId;
    }
    return obj;
  },
  create(base) {
    return UpdateBookmarkCollectionsEntryRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseUpdateBookmarkCollectionsEntryRequest();
    message.collectionId = (_a = object.collectionId) != null ? _a : "";
    message.title = (_b = object.title) != null ? _b : void 0;
    message.description = (_c = object.description) != null ? _c : void 0;
    message.entryId = (_d = object.entryId) != null ? _d : "";
    return message;
  }
};
function createBaseDeleteBookmarkCollectionsEntryResponse() {
  return { collectionId: "", entryId: "", status: "" };
}
var DeleteBookmarkCollectionsEntryResponse = {
  encode(message, writer = new import_wire3.BinaryWriter()) {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.entryId !== "") {
      writer.uint32(18).string(message.entryId);
    }
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire3.BinaryReader ? input : new import_wire3.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeleteBookmarkCollectionsEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.collectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.entryId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.status = reader.string();
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
  fromJSON(object) {
    return {
      collectionId: isSet3(object.collectionId) ? globalThis.String(object.collectionId) : "",
      entryId: isSet3(object.entryId) ? globalThis.String(object.entryId) : "",
      status: isSet3(object.status) ? globalThis.String(object.status) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.entryId !== "") {
      obj.entryId = message.entryId;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },
  create(base) {
    return DeleteBookmarkCollectionsEntryResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseDeleteBookmarkCollectionsEntryResponse();
    message.collectionId = (_a = object.collectionId) != null ? _a : "";
    message.entryId = (_b = object.entryId) != null ? _b : "";
    message.status = (_c = object.status) != null ? _c : "";
    return message;
  }
};
var BookmarkCollectionsEntriesManagerService = {
  createNewBookmarkCollectionEntry: {
    path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/CreateNewBookmarkCollectionEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(NewBookmarkCollectionsEntryRequest.encode(value).finish()),
    requestDeserialize: (value) => NewBookmarkCollectionsEntryRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetBookmarkCollectionsEntryResponse.encode(value).finish()),
    responseDeserialize: (value) => GetBookmarkCollectionsEntryResponse.decode(value)
  },
  getBookmarkCollectionEntry: {
    path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/GetBookmarkCollectionEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetBookmarkCollectionsEntryRequest.encode(value).finish()),
    requestDeserialize: (value) => GetBookmarkCollectionsEntryRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetBookmarkCollectionsEntryResponse.encode(value).finish()),
    responseDeserialize: (value) => GetBookmarkCollectionsEntryResponse.decode(value)
  },
  updateBookmarkCollectionEntry: {
    path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/UpdateBookmarkCollectionEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(UpdateBookmarkCollectionsEntryRequest.encode(value).finish()),
    requestDeserialize: (value) => UpdateBookmarkCollectionsEntryRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetBookmarkCollectionsEntryResponse.encode(value).finish()),
    responseDeserialize: (value) => GetBookmarkCollectionsEntryResponse.decode(value)
  },
  deleteBookmarkCollectionEntry: {
    path: "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/DeleteBookmarkCollectionEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(UpdateBookmarkCollectionsEntryRequest.encode(value).finish()),
    requestDeserialize: (value) => UpdateBookmarkCollectionsEntryRequest.decode(value),
    responseSerialize: (value) => Buffer.from(DeleteBookmarkCollectionsEntryResponse.encode(value).finish()),
    responseDeserialize: (value) => DeleteBookmarkCollectionsEntryResponse.decode(value)
  }
};
var BookmarkCollectionsEntriesManagerClient = (0, import_grpc_js3.makeGenericClientConstructor)(
  BookmarkCollectionsEntriesManagerService,
  "bookmark_collections_entries.BookmarkCollectionsEntriesManager"
);
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isSet3(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/bookmark_collections.ts
var bookmark_collections_exports = {};
__export(bookmark_collections_exports, {
  BookmarkCollection: () => BookmarkCollection,
  BookmarkCollectionEntries: () => BookmarkCollectionEntries,
  BookmarkCollectionEntries_MoreFieldsEntry: () => BookmarkCollectionEntries_MoreFieldsEntry,
  BookmarkCollectionManagerClient: () => BookmarkCollectionManagerClient,
  BookmarkCollectionManagerService: () => BookmarkCollectionManagerService,
  DeleteBookmarkCollectionRequest: () => DeleteBookmarkCollectionRequest,
  DeleteBookmarkCollectionResponse: () => DeleteBookmarkCollectionResponse,
  GetBookmarkCollectionRequest: () => GetBookmarkCollectionRequest,
  GetBookmarkCollectionResponse: () => GetBookmarkCollectionResponse,
  ListBookmarkCollectionEntryRequest: () => ListBookmarkCollectionEntryRequest,
  ListBookmarkCollectionEntryResponse: () => ListBookmarkCollectionEntryResponse,
  ListBookmarkCollectionsRequest: () => ListBookmarkCollectionsRequest,
  ListBookmarkCollectionsResponse: () => ListBookmarkCollectionsResponse,
  NewBookmarkCollectionRequest: () => NewBookmarkCollectionRequest,
  NewBookmarkCollectionResponse: () => NewBookmarkCollectionResponse,
  UpdateBookmarkCollectionRequest: () => UpdateBookmarkCollectionRequest,
  UpdateBookmarkCollectionResponse: () => UpdateBookmarkCollectionResponse,
  protobufPackage: () => protobufPackage4
});
var import_wire4 = require("@bufbuild/protobuf/wire");
var import_grpc_js4 = require("@grpc/grpc-js");
var protobufPackage4 = "BookmarkCollection";
function createBaseBookmarkCollectionEntries() {
  return { title: "", description: "", createdAt: "", updatedAt: "", BookmarkCollectionId: "", moreFields: {} };
}
var BookmarkCollectionEntries = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.createdAt !== "") {
      writer.uint32(26).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(34).string(message.updatedAt);
    }
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(42).string(message.BookmarkCollectionId);
    }
    Object.entries(message.moreFields).forEach(([key, value]) => {
      BookmarkCollectionEntries_MoreFieldsEntry.encode({ key, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBookmarkCollectionEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.createdAt = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.updatedAt = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }
          const entry6 = BookmarkCollectionEntries_MoreFieldsEntry.decode(reader, reader.uint32());
          if (entry6.value !== void 0) {
            message.moreFields[entry6.key] = entry6.value;
          }
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
  fromJSON(object) {
    return {
      title: isSet4(object.title) ? globalThis.String(object.title) : "",
      description: isSet4(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet4(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet4(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      moreFields: isObject2(object.moreFields) ? Object.entries(object.moreFields).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.moreFields) {
      const entries = Object.entries(message.moreFields);
      if (entries.length > 0) {
        obj.moreFields = {};
        entries.forEach(([k, v]) => {
          obj.moreFields[k] = v;
        });
      }
    }
    return obj;
  },
  create(base) {
    return BookmarkCollectionEntries.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f;
    const message = createBaseBookmarkCollectionEntries();
    message.title = (_a = object.title) != null ? _a : "";
    message.description = (_b = object.description) != null ? _b : "";
    message.createdAt = (_c = object.createdAt) != null ? _c : "";
    message.updatedAt = (_d = object.updatedAt) != null ? _d : "";
    message.BookmarkCollectionId = (_e = object.BookmarkCollectionId) != null ? _e : "";
    message.moreFields = Object.entries((_f = object.moreFields) != null ? _f : {}).reduce(
      (acc, [key, value]) => {
        if (value !== void 0) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {}
    );
    return message;
  }
};
function createBaseBookmarkCollectionEntries_MoreFieldsEntry() {
  return { key: "", value: "" };
}
var BookmarkCollectionEntries_MoreFieldsEntry = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBookmarkCollectionEntries_MoreFieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.value = reader.string();
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
  fromJSON(object) {
    return {
      key: isSet4(object.key) ? globalThis.String(object.key) : "",
      value: isSet4(object.value) ? globalThis.String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
  create(base) {
    return BookmarkCollectionEntries_MoreFieldsEntry.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseBookmarkCollectionEntries_MoreFieldsEntry();
    message.key = (_a = object.key) != null ? _a : "";
    message.value = (_b = object.value) != null ? _b : "";
    return message;
  }
};
function createBaseNewBookmarkCollectionRequest() {
  return { name: "", description: "" };
}
var NewBookmarkCollectionRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNewBookmarkCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.description = reader.string();
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
  fromJSON(object) {
    return {
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      description: isSet4(object.description) ? globalThis.String(object.description) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
  create(base) {
    return NewBookmarkCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseNewBookmarkCollectionRequest();
    message.name = (_a = object.name) != null ? _a : "";
    message.description = (_b = object.description) != null ? _b : "";
    return message;
  }
};
function createBaseNewBookmarkCollectionResponse() {
  return { BookmarkCollectionId: "", name: "", description: "", createdAt: "", updatedAt: "" };
}
var NewBookmarkCollectionResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(50).string(message.updatedAt);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseNewBookmarkCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.name = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }
          message.createdAt = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }
          message.updatedAt = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      description: isSet4(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet4(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet4(object.updatedAt) ? globalThis.String(object.updatedAt) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },
  create(base) {
    return NewBookmarkCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseNewBookmarkCollectionResponse();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.name = (_b = object.name) != null ? _b : "";
    message.description = (_c = object.description) != null ? _c : "";
    message.createdAt = (_d = object.createdAt) != null ? _d : "";
    message.updatedAt = (_e = object.updatedAt) != null ? _e : "";
    return message;
  }
};
function createBaseGetBookmarkCollectionRequest() {
  return { BookmarkCollectionId: "" };
}
var GetBookmarkCollectionRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBookmarkCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    return obj;
  },
  create(base) {
    return GetBookmarkCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseGetBookmarkCollectionRequest();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    return message;
  }
};
function createBaseGetBookmarkCollectionResponse() {
  return { BookmarkCollectionId: "", name: "", description: "", createdAt: "", updatedAt: "", entries: [] };
}
var GetBookmarkCollectionResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(42).string(message.updatedAt);
    }
    for (const v of message.entries) {
      BookmarkCollectionEntries.encode(v, writer.uint32(58).fork()).join();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetBookmarkCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.createdAt = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }
          message.updatedAt = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }
          message.entries.push(BookmarkCollectionEntries.decode(reader, reader.uint32()));
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      description: isSet4(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet4(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet4(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
      entries: globalThis.Array.isArray(object == null ? void 0 : object.entries) ? object.entries.map((e) => BookmarkCollectionEntries.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    if ((_a = message.entries) == null ? void 0 : _a.length) {
      obj.entries = message.entries.map((e) => BookmarkCollectionEntries.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return GetBookmarkCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f;
    const message = createBaseGetBookmarkCollectionResponse();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.name = (_b = object.name) != null ? _b : "";
    message.description = (_c = object.description) != null ? _c : "";
    message.createdAt = (_d = object.createdAt) != null ? _d : "";
    message.updatedAt = (_e = object.updatedAt) != null ? _e : "";
    message.entries = ((_f = object.entries) == null ? void 0 : _f.map((e) => BookmarkCollectionEntries.fromPartial(e))) || [];
    return message;
  }
};
function createBaseUpdateBookmarkCollectionRequest() {
  return { BookmarkCollectionId: "", name: void 0, description: void 0 };
}
var UpdateBookmarkCollectionRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.name !== void 0) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== void 0) {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateBookmarkCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.description = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      name: isSet4(object.name) ? globalThis.String(object.name) : void 0,
      description: isSet4(object.description) ? globalThis.String(object.description) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.name !== void 0) {
      obj.name = message.name;
    }
    if (message.description !== void 0) {
      obj.description = message.description;
    }
    return obj;
  },
  create(base) {
    return UpdateBookmarkCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseUpdateBookmarkCollectionRequest();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.name = (_b = object.name) != null ? _b : void 0;
    message.description = (_c = object.description) != null ? _c : void 0;
    return message;
  }
};
function createBaseUpdateBookmarkCollectionResponse() {
  return { BookmarkCollectionId: "", status: "" };
}
var UpdateBookmarkCollectionResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateBookmarkCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.status = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      status: isSet4(object.status) ? globalThis.String(object.status) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },
  create(base) {
    return UpdateBookmarkCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseUpdateBookmarkCollectionResponse();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.status = (_b = object.status) != null ? _b : "";
    return message;
  }
};
function createBaseDeleteBookmarkCollectionRequest() {
  return { BookmarkCollectionId: "" };
}
var DeleteBookmarkCollectionRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeleteBookmarkCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    return obj;
  },
  create(base) {
    return DeleteBookmarkCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseDeleteBookmarkCollectionRequest();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    return message;
  }
};
function createBaseDeleteBookmarkCollectionResponse() {
  return { BookmarkCollectionId: "", message: "" };
}
var DeleteBookmarkCollectionResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDeleteBookmarkCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      message: isSet4(object.message) ? globalThis.String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return DeleteBookmarkCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseDeleteBookmarkCollectionResponse();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.message = (_b = object.message) != null ? _b : "";
    return message;
  }
};
function createBaseListBookmarkCollectionsRequest() {
  return { page: 0, pageSize: 0 };
}
var ListBookmarkCollectionsRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.page !== 0) {
      writer.uint32(8).uint32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).uint32(message.pageSize);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListBookmarkCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }
          message.page = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }
          message.pageSize = reader.uint32();
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
  fromJSON(object) {
    return {
      page: isSet4(object.page) ? globalThis.Number(object.page) : 0,
      pageSize: isSet4(object.pageSize) ? globalThis.Number(object.pageSize) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },
  create(base) {
    return ListBookmarkCollectionsRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseListBookmarkCollectionsRequest();
    message.page = (_a = object.page) != null ? _a : 0;
    message.pageSize = (_b = object.pageSize) != null ? _b : 0;
    return message;
  }
};
function createBaseBookmarkCollection() {
  return { BookmarkCollectionId: "", name: "", description: "", createdAt: "", updatedAt: "" };
}
var BookmarkCollection = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(42).string(message.updatedAt);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBookmarkCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.createdAt = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }
          message.updatedAt = reader.string();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      description: isSet4(object.description) ? globalThis.String(object.description) : "",
      createdAt: isSet4(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet4(object.updatedAt) ? globalThis.String(object.updatedAt) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },
  create(base) {
    return BookmarkCollection.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseBookmarkCollection();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.name = (_b = object.name) != null ? _b : "";
    message.description = (_c = object.description) != null ? _c : "";
    message.createdAt = (_d = object.createdAt) != null ? _d : "";
    message.updatedAt = (_e = object.updatedAt) != null ? _e : "";
    return message;
  }
};
function createBaseListBookmarkCollectionsResponse() {
  return { BookmarkCollections: [], totalCount: 0 };
}
var ListBookmarkCollectionsResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    for (const v of message.BookmarkCollections) {
      BookmarkCollection.encode(v, writer.uint32(10).fork()).join();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListBookmarkCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollections.push(BookmarkCollection.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }
          message.totalCount = reader.uint32();
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
  fromJSON(object) {
    return {
      BookmarkCollections: globalThis.Array.isArray(object == null ? void 0 : object.BookmarkCollections) ? object.BookmarkCollections.map((e) => BookmarkCollection.fromJSON(e)) : [],
      totalCount: isSet4(object.totalCount) ? globalThis.Number(object.totalCount) : 0
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.BookmarkCollections) == null ? void 0 : _a.length) {
      obj.BookmarkCollections = message.BookmarkCollections.map((e) => BookmarkCollection.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    return obj;
  },
  create(base) {
    return ListBookmarkCollectionsResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseListBookmarkCollectionsResponse();
    message.BookmarkCollections = ((_a = object.BookmarkCollections) == null ? void 0 : _a.map((e) => BookmarkCollection.fromPartial(e))) || [];
    message.totalCount = (_b = object.totalCount) != null ? _b : 0;
    return message;
  }
};
function createBaseListBookmarkCollectionEntryRequest() {
  return { BookmarkCollectionId: "", page: 0, pageSize: 0 };
}
var ListBookmarkCollectionEntryRequest = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    if (message.BookmarkCollectionId !== "") {
      writer.uint32(10).string(message.BookmarkCollectionId);
    }
    if (message.page !== 0) {
      writer.uint32(32).uint32(message.page);
    }
    if (message.pageSize !== 0) {
      writer.uint32(40).uint32(message.pageSize);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListBookmarkCollectionEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }
          message.page = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }
          message.pageSize = reader.uint32();
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
  fromJSON(object) {
    return {
      BookmarkCollectionId: isSet4(object.BookmarkCollectionId) ? globalThis.String(object.BookmarkCollectionId) : "",
      page: isSet4(object.page) ? globalThis.Number(object.page) : 0,
      pageSize: isSet4(object.pageSize) ? globalThis.Number(object.pageSize) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.BookmarkCollectionId !== "") {
      obj.BookmarkCollectionId = message.BookmarkCollectionId;
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },
  create(base) {
    return ListBookmarkCollectionEntryRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseListBookmarkCollectionEntryRequest();
    message.BookmarkCollectionId = (_a = object.BookmarkCollectionId) != null ? _a : "";
    message.page = (_b = object.page) != null ? _b : 0;
    message.pageSize = (_c = object.pageSize) != null ? _c : 0;
    return message;
  }
};
function createBaseListBookmarkCollectionEntryResponse() {
  return { BookmarkCollectionEntries: [], totalCount: 0 };
}
var ListBookmarkCollectionEntryResponse = {
  encode(message, writer = new import_wire4.BinaryWriter()) {
    for (const v of message.BookmarkCollectionEntries) {
      BookmarkCollectionEntries.encode(v, writer.uint32(10).fork()).join();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).uint32(message.totalCount);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire4.BinaryReader ? input : new import_wire4.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListBookmarkCollectionEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.BookmarkCollectionEntries.push(BookmarkCollectionEntries.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }
          message.totalCount = reader.uint32();
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
  fromJSON(object) {
    return {
      BookmarkCollectionEntries: globalThis.Array.isArray(object == null ? void 0 : object.BookmarkCollectionEntries) ? object.BookmarkCollectionEntries.map((e) => BookmarkCollectionEntries.fromJSON(e)) : [],
      totalCount: isSet4(object.totalCount) ? globalThis.Number(object.totalCount) : 0
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.BookmarkCollectionEntries) == null ? void 0 : _a.length) {
      obj.BookmarkCollectionEntries = message.BookmarkCollectionEntries.map((e) => BookmarkCollectionEntries.toJSON(e));
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    return obj;
  },
  create(base) {
    return ListBookmarkCollectionEntryResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseListBookmarkCollectionEntryResponse();
    message.BookmarkCollectionEntries = ((_a = object.BookmarkCollectionEntries) == null ? void 0 : _a.map((e) => BookmarkCollectionEntries.fromPartial(e))) || [];
    message.totalCount = (_b = object.totalCount) != null ? _b : 0;
    return message;
  }
};
var BookmarkCollectionManagerService = {
  createNewBookmarkCollection: {
    path: "/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(NewBookmarkCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => NewBookmarkCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(NewBookmarkCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => NewBookmarkCollectionResponse.decode(value)
  },
  getBookmarkCollection: {
    path: "/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetBookmarkCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => GetBookmarkCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetBookmarkCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => GetBookmarkCollectionResponse.decode(value)
  },
  updateBookmarkCollection: {
    path: "/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(UpdateBookmarkCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => UpdateBookmarkCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetBookmarkCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => GetBookmarkCollectionResponse.decode(value)
  },
  deleteBookmarkCollection: {
    path: "/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(DeleteBookmarkCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => DeleteBookmarkCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(DeleteBookmarkCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => DeleteBookmarkCollectionResponse.decode(value)
  },
  listBookmarkCollections: {
    path: "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ListBookmarkCollectionsRequest.encode(value).finish()),
    requestDeserialize: (value) => ListBookmarkCollectionsRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ListBookmarkCollectionsResponse.encode(value).finish()),
    responseDeserialize: (value) => ListBookmarkCollectionsResponse.decode(value)
  },
  listBookmarkCollectionEntries: {
    path: "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ListBookmarkCollectionEntryRequest.encode(value).finish()),
    requestDeserialize: (value) => ListBookmarkCollectionEntryRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ListBookmarkCollectionEntryResponse.encode(value).finish()),
    responseDeserialize: (value) => ListBookmarkCollectionEntryResponse.decode(value)
  }
};
var BookmarkCollectionManagerClient = (0, import_grpc_js4.makeGenericClientConstructor)(
  BookmarkCollectionManagerService,
  "BookmarkCollection.BookmarkCollectionManager"
);
function isObject2(value) {
  return typeof value === "object" && value !== null;
}
function isSet4(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/common.ts
var common_exports = {};
__export(common_exports, {
  ErrorResponse: () => ErrorResponse,
  RequestStatus: () => RequestStatus,
  protobufPackage: () => protobufPackage5,
  requestStatusFromJSON: () => requestStatusFromJSON,
  requestStatusToJSON: () => requestStatusToJSON
});
var import_wire5 = require("@bufbuild/protobuf/wire");
var protobufPackage5 = "common";
var RequestStatus = /* @__PURE__ */ ((RequestStatus2) => {
  RequestStatus2[RequestStatus2["Success"] = 0] = "Success";
  RequestStatus2[RequestStatus2["Failed"] = 1] = "Failed";
  RequestStatus2[RequestStatus2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return RequestStatus2;
})(RequestStatus || {});
function requestStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "Success":
      return 0 /* Success */;
    case 1:
    case "Failed":
      return 1 /* Failed */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function requestStatusToJSON(object) {
  switch (object) {
    case 0 /* Success */:
      return "Success";
    case 1 /* Failed */:
      return "Failed";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseErrorResponse() {
  return { code: 0, message: "" };
}
var ErrorResponse = {
  encode(message, writer = new import_wire5.BinaryWriter()) {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire5.BinaryReader ? input : new import_wire5.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }
          message.code = reader.int32();
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
  fromJSON(object) {
    return {
      code: isSet5(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet5(object.message) ? globalThis.String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return ErrorResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseErrorResponse();
    message.code = (_a = object.code) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    return message;
  }
};
function isSet5(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/health_check.ts
var health_check_exports = {};
__export(health_check_exports, {
  HealthCheckClient: () => HealthCheckClient,
  HealthCheckRequest: () => HealthCheckRequest,
  HealthCheckResponse: () => HealthCheckResponse,
  HealthCheckService: () => HealthCheckService,
  Status: () => Status3,
  protobufPackage: () => protobufPackage6,
  statusFromJSON: () => statusFromJSON3,
  statusToJSON: () => statusToJSON3
});
var import_wire6 = require("@bufbuild/protobuf/wire");
var import_grpc_js5 = require("@grpc/grpc-js");
var protobufPackage6 = "health_check";
var Status3 = /* @__PURE__ */ ((Status4) => {
  Status4[Status4["Ok"] = 0] = "Ok";
  Status4[Status4["Bad"] = 1] = "Bad";
  Status4[Status4["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Status4;
})(Status3 || {});
function statusFromJSON3(object) {
  switch (object) {
    case 0:
    case "Ok":
      return 0 /* Ok */;
    case 1:
    case "Bad":
      return 1 /* Bad */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function statusToJSON3(object) {
  switch (object) {
    case 0 /* Ok */:
      return "Ok";
    case 1 /* Bad */:
      return "Bad";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseHealthCheckRequest() {
  return {};
}
var HealthCheckRequest = {
  encode(_, writer = new import_wire6.BinaryWriter()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire6.BinaryReader ? input : new import_wire6.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return HealthCheckRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(_) {
    const message = createBaseHealthCheckRequest();
    return message;
  }
};
function createBaseHealthCheckResponse() {
  return { status: 0, message: "" };
}
var HealthCheckResponse = {
  encode(message, writer = new import_wire6.BinaryWriter()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire6.BinaryReader ? input : new import_wire6.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }
          message.status = reader.int32();
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
  fromJSON(object) {
    return {
      status: isSet6(object.status) ? statusFromJSON3(object.status) : 0,
      message: isSet6(object.message) ? globalThis.String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = statusToJSON3(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return HealthCheckResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseHealthCheckResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    return message;
  }
};
var HealthCheckService = {
  checkServiceHealth: {
    path: "/health_check.HealthCheck/CheckServiceHealth",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value) => HealthCheckRequest.decode(value),
    responseSerialize: (value) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value) => HealthCheckResponse.decode(value)
  }
};
var HealthCheckClient = (0, import_grpc_js5.makeGenericClientConstructor)(
  HealthCheckService,
  "health_check.HealthCheck"
);
function isSet6(value) {
  return value !== null && value !== void 0;
}

// protogen/nodejs/user_profile.ts
var user_profile_exports = {};
__export(user_profile_exports, {
  ProfileRequest: () => ProfileRequest,
  ProfileResponse: () => ProfileResponse,
  ProfileUpdateRequest: () => ProfileUpdateRequest,
  ProfileUpdateResponse: () => ProfileUpdateResponse,
  UserProfileClient: () => UserProfileClient,
  UserProfileService: () => UserProfileService,
  protobufPackage: () => protobufPackage7
});
var import_wire7 = require("@bufbuild/protobuf/wire");
var import_grpc_js6 = require("@grpc/grpc-js");
var protobufPackage7 = "user_profile";
function createBaseProfileRequest() {
  return {};
}
var ProfileRequest = {
  encode(_, writer = new import_wire7.BinaryWriter()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire7.BinaryReader ? input : new import_wire7.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ProfileRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(_) {
    const message = createBaseProfileRequest();
    return message;
  }
};
function createBaseProfileResponse() {
  return { id: "", lastName: "", firstName: "", email: "" };
}
var ProfileResponse = {
  encode(message, writer = new import_wire7.BinaryWriter()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire7.BinaryReader ? input : new import_wire7.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.lastName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.firstName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.email = reader.string();
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
  fromJSON(object) {
    return {
      id: isSet7(object.id) ? globalThis.String(object.id) : "",
      lastName: isSet7(object.lastName) ? globalThis.String(object.lastName) : "",
      firstName: isSet7(object.firstName) ? globalThis.String(object.firstName) : "",
      email: isSet7(object.email) ? globalThis.String(object.email) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },
  create(base) {
    return ProfileResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseProfileResponse();
    message.id = (_a = object.id) != null ? _a : "";
    message.lastName = (_b = object.lastName) != null ? _b : "";
    message.firstName = (_c = object.firstName) != null ? _c : "";
    message.email = (_d = object.email) != null ? _d : "";
    return message;
  }
};
function createBaseProfileUpdateRequest() {
  return { lastName: void 0, firstName: void 0, email: void 0 };
}
var ProfileUpdateRequest = {
  encode(message, writer = new import_wire7.BinaryWriter()) {
    if (message.lastName !== void 0) {
      writer.uint32(18).string(message.lastName);
    }
    if (message.firstName !== void 0) {
      writer.uint32(26).string(message.firstName);
    }
    if (message.email !== void 0) {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire7.BinaryReader ? input : new import_wire7.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.lastName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.firstName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.email = reader.string();
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
  fromJSON(object) {
    return {
      lastName: isSet7(object.lastName) ? globalThis.String(object.lastName) : void 0,
      firstName: isSet7(object.firstName) ? globalThis.String(object.firstName) : void 0,
      email: isSet7(object.email) ? globalThis.String(object.email) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.lastName !== void 0) {
      obj.lastName = message.lastName;
    }
    if (message.firstName !== void 0) {
      obj.firstName = message.firstName;
    }
    if (message.email !== void 0) {
      obj.email = message.email;
    }
    return obj;
  },
  create(base) {
    return ProfileUpdateRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseProfileUpdateRequest();
    message.lastName = (_a = object.lastName) != null ? _a : void 0;
    message.firstName = (_b = object.firstName) != null ? _b : void 0;
    message.email = (_c = object.email) != null ? _c : void 0;
    return message;
  }
};
function createBaseProfileUpdateResponse() {
  return { id: "", lastName: "", firstName: "", email: "" };
}
var ProfileUpdateResponse = {
  encode(message, writer = new import_wire7.BinaryWriter()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.email !== "") {
      writer.uint32(34).string(message.email);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_wire7.BinaryReader ? input : new import_wire7.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message.lastName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message.firstName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }
          message.email = reader.string();
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
  fromJSON(object) {
    return {
      id: isSet7(object.id) ? globalThis.String(object.id) : "",
      lastName: isSet7(object.lastName) ? globalThis.String(object.lastName) : "",
      firstName: isSet7(object.firstName) ? globalThis.String(object.firstName) : "",
      email: isSet7(object.email) ? globalThis.String(object.email) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },
  create(base) {
    return ProfileUpdateResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseProfileUpdateResponse();
    message.id = (_a = object.id) != null ? _a : "";
    message.lastName = (_b = object.lastName) != null ? _b : "";
    message.firstName = (_c = object.firstName) != null ? _c : "";
    message.email = (_d = object.email) != null ? _d : "";
    return message;
  }
};
var UserProfileService = {
  getProfile: {
    path: "/user_profile.UserProfile/GetProfile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ProfileRequest.encode(value).finish()),
    requestDeserialize: (value) => ProfileRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ProfileResponse.encode(value).finish()),
    responseDeserialize: (value) => ProfileResponse.decode(value)
  },
  updateProfile: {
    path: "/user_profile.UserProfile/UpdateProfile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ProfileUpdateRequest.encode(value).finish()),
    requestDeserialize: (value) => ProfileUpdateRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ProfileUpdateResponse.encode(value).finish()),
    responseDeserialize: (value) => ProfileUpdateResponse.decode(value)
  }
};
var UserProfileClient = (0, import_grpc_js6.makeGenericClientConstructor)(
  UserProfileService,
  "user_profile.UserProfile"
);
function isSet7(value) {
  return value !== null && value !== void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activity,
  authentication,
  bookmark_collection_entries,
  bookmark_collections,
  common,
  health_check,
  user_profile
});
//# sourceMappingURL=index.js.map