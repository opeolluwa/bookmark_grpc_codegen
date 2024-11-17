# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: bookmark_collection_entries.proto
# Protobuf Python Version: 5.28.3
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    3,
    '',
    'bookmark_collection_entries.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!bookmark_collection_entries.proto\x12\x1c\x62ookmark_collections_entries\"\x82\x02\n\"NewBookmarkCollectionsEntryRequest\x12\r\n\x05title\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x1e\n\x16\x62ookmark_collection_id\x18\x03 \x01(\t\x12\x65\n\x0bmore_fields\x18\x04 \x03(\x0b\x32P.bookmark_collections_entries.NewBookmarkCollectionsEntryRequest.MoreFieldsEntry\x1a\x31\n\x0fMoreFieldsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xb5\x02\n#GetBookmarkCollectionsEntryResponse\x12\r\n\x05title\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x12\n\ncreated_at\x18\x03 \x01(\t\x12\x12\n\nupdated_at\x18\x04 \x01(\t\x12\x15\n\rcollection_id\x18\x05 \x01(\t\x12\x66\n\x0bmore_fields\x18\x06 \x03(\x0b\x32Q.bookmark_collections_entries.GetBookmarkCollectionsEntryResponse.MoreFieldsEntry\x12\x10\n\x08\x65ntry_id\x18\x08 \x01(\t\x1a\x31\n\x0fMoreFieldsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"M\n\"GetBookmarkCollectionsEntryRequest\x12\x15\n\rcollection_id\x18\x01 \x01(\t\x12\x10\n\x08\x65ntry_id\x18\x02 \x01(\t\"\x98\x01\n%UpdateBookmarkCollectionsEntryRequest\x12\x15\n\rcollection_id\x18\x01 \x01(\t\x12\x12\n\x05title\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x18\n\x0b\x64\x65scription\x18\x03 \x01(\tH\x01\x88\x01\x01\x12\x10\n\x08\x65ntry_id\x18\x04 \x01(\tB\x08\n\x06_titleB\x0e\n\x0c_description\"a\n&DeleteBookmarkCollectionsEntryResponse\x12\x15\n\rcollection_id\x18\x01 \x01(\t\x12\x10\n\x08\x65ntry_id\x18\x02 \x01(\t\x12\x0e\n\x06status\x18\x04 \x01(\t2\xc8\x05\n!BookmarkCollectionsEntriesManager\x12\xa7\x01\n CreateNewBookmarkCollectionEntry\x12@.bookmark_collections_entries.NewBookmarkCollectionsEntryRequest\x1a\x41.bookmark_collections_entries.GetBookmarkCollectionsEntryResponse\x12\xa1\x01\n\x1aGetBookmarkCollectionEntry\x12@.bookmark_collections_entries.GetBookmarkCollectionsEntryRequest\x1a\x41.bookmark_collections_entries.GetBookmarkCollectionsEntryResponse\x12\xa7\x01\n\x1dUpdateBookmarkCollectionEntry\x12\x43.bookmark_collections_entries.UpdateBookmarkCollectionsEntryRequest\x1a\x41.bookmark_collections_entries.GetBookmarkCollectionsEntryResponse\x12\xaa\x01\n\x1d\x44\x65leteBookmarkCollectionEntry\x12\x43.bookmark_collections_entries.UpdateBookmarkCollectionsEntryRequest\x1a\x44.bookmark_collections_entries.DeleteBookmarkCollectionsEntryResponseB4Z2bookmarks/grpc/codegen/bookmark_collection_entriesb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'bookmark_collection_entries_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z2bookmarks/grpc/codegen/bookmark_collection_entries'
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST_MOREFIELDSENTRY']._loaded_options = None
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST_MOREFIELDSENTRY']._serialized_options = b'8\001'
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE_MOREFIELDSENTRY']._loaded_options = None
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE_MOREFIELDSENTRY']._serialized_options = b'8\001'
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_start=68
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_end=326
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST_MOREFIELDSENTRY']._serialized_start=277
  _globals['_NEWBOOKMARKCOLLECTIONSENTRYREQUEST_MOREFIELDSENTRY']._serialized_end=326
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE']._serialized_start=329
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE']._serialized_end=638
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE_MOREFIELDSENTRY']._serialized_start=277
  _globals['_GETBOOKMARKCOLLECTIONSENTRYRESPONSE_MOREFIELDSENTRY']._serialized_end=326
  _globals['_GETBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_start=640
  _globals['_GETBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_end=717
  _globals['_UPDATEBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_start=720
  _globals['_UPDATEBOOKMARKCOLLECTIONSENTRYREQUEST']._serialized_end=872
  _globals['_DELETEBOOKMARKCOLLECTIONSENTRYRESPONSE']._serialized_start=874
  _globals['_DELETEBOOKMARKCOLLECTIONSENTRYRESPONSE']._serialized_end=971
  _globals['_BOOKMARKCOLLECTIONSENTRIESMANAGER']._serialized_start=974
  _globals['_BOOKMARKCOLLECTIONSENTRIESMANAGER']._serialized_end=1686
# @@protoc_insertion_point(module_scope)
