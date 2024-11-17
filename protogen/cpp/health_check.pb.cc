// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: health_check.proto
// Protobuf C++ Version: 5.28.3

#include "health_check.pb.h"

#include <algorithm>
#include <type_traits>
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/generated_message_tctable_impl.h"
#include "google/protobuf/extension_set.h"
#include "google/protobuf/wire_format_lite.h"
#include "google/protobuf/descriptor.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/reflection_ops.h"
#include "google/protobuf/wire_format.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"
PROTOBUF_PRAGMA_INIT_SEG
namespace _pb = ::google::protobuf;
namespace _pbi = ::google::protobuf::internal;
namespace _fl = ::google::protobuf::internal::field_layout;
namespace health_check {

inline constexpr HealthCheckResponse::Impl_::Impl_(
    ::_pbi::ConstantInitialized) noexcept
      : message_(
            &::google::protobuf::internal::fixed_address_empty_string,
            ::_pbi::ConstantInitialized()),
        status_{static_cast< ::health_check::Status >(0)},
        _cached_size_{0} {}

template <typename>
PROTOBUF_CONSTEXPR HealthCheckResponse::HealthCheckResponse(::_pbi::ConstantInitialized)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::Message(_class_data_.base()),
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::Message(),
#endif  // PROTOBUF_CUSTOM_VTABLE
      _impl_(::_pbi::ConstantInitialized()) {
}
struct HealthCheckResponseDefaultTypeInternal {
  PROTOBUF_CONSTEXPR HealthCheckResponseDefaultTypeInternal() : _instance(::_pbi::ConstantInitialized{}) {}
  ~HealthCheckResponseDefaultTypeInternal() {}
  union {
    HealthCheckResponse _instance;
  };
};

PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT
    PROTOBUF_ATTRIBUTE_INIT_PRIORITY1 HealthCheckResponseDefaultTypeInternal _HealthCheckResponse_default_instance_;
              template <typename>
PROTOBUF_CONSTEXPR HealthCheckRequest::HealthCheckRequest(::_pbi::ConstantInitialized)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::internal::ZeroFieldsBase(_class_data_.base()){}
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::internal::ZeroFieldsBase() {
}
#endif  // PROTOBUF_CUSTOM_VTABLE
struct HealthCheckRequestDefaultTypeInternal {
  PROTOBUF_CONSTEXPR HealthCheckRequestDefaultTypeInternal() : _instance(::_pbi::ConstantInitialized{}) {}
  ~HealthCheckRequestDefaultTypeInternal() {}
  union {
    HealthCheckRequest _instance;
  };
};

PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT
    PROTOBUF_ATTRIBUTE_INIT_PRIORITY1 HealthCheckRequestDefaultTypeInternal _HealthCheckRequest_default_instance_;
}  // namespace health_check
static const ::_pb::EnumDescriptor* file_level_enum_descriptors_health_5fcheck_2eproto[1];
static constexpr const ::_pb::ServiceDescriptor**
    file_level_service_descriptors_health_5fcheck_2eproto = nullptr;
const ::uint32_t
    TableStruct_health_5fcheck_2eproto::offsets[] ABSL_ATTRIBUTE_SECTION_VARIABLE(
        protodesc_cold) = {
        ~0u,  // no _has_bits_
        PROTOBUF_FIELD_OFFSET(::health_check::HealthCheckRequest, _internal_metadata_),
        ~0u,  // no _extensions_
        ~0u,  // no _oneof_case_
        ~0u,  // no _weak_field_map_
        ~0u,  // no _inlined_string_donated_
        ~0u,  // no _split_
        ~0u,  // no sizeof(Split)
        ~0u,  // no _has_bits_
        PROTOBUF_FIELD_OFFSET(::health_check::HealthCheckResponse, _internal_metadata_),
        ~0u,  // no _extensions_
        ~0u,  // no _oneof_case_
        ~0u,  // no _weak_field_map_
        ~0u,  // no _inlined_string_donated_
        ~0u,  // no _split_
        ~0u,  // no sizeof(Split)
        PROTOBUF_FIELD_OFFSET(::health_check::HealthCheckResponse, _impl_.status_),
        PROTOBUF_FIELD_OFFSET(::health_check::HealthCheckResponse, _impl_.message_),
};

static const ::_pbi::MigrationSchema
    schemas[] ABSL_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
        {0, -1, -1, sizeof(::health_check::HealthCheckRequest)},
        {8, -1, -1, sizeof(::health_check::HealthCheckResponse)},
};
static const ::_pb::Message* const file_default_instances[] = {
    &::health_check::_HealthCheckRequest_default_instance_._instance,
    &::health_check::_HealthCheckResponse_default_instance_._instance,
};
const char descriptor_table_protodef_health_5fcheck_2eproto[] ABSL_ATTRIBUTE_SECTION_VARIABLE(
    protodesc_cold) = {
    "\n\022health_check.proto\022\014health_check\"\024\n\022He"
    "althCheckRequest\"L\n\023HealthCheckResponse\022"
    "$\n\006status\030\001 \001(\0162\024.health_check.Status\022\017\n"
    "\007message\030\002 \001(\t*\031\n\006Status\022\006\n\002Ok\020\000\022\007\n\003Bad\020"
    "\0012h\n\013HealthCheck\022Y\n\022CheckServiceHealth\022 "
    ".health_check.HealthCheckRequest\032!.healt"
    "h_check.HealthCheckResponseB%Z#bookmarks"
    "/grpc/codegen/health_checkb\006proto3"
};
static ::absl::once_flag descriptor_table_health_5fcheck_2eproto_once;
PROTOBUF_CONSTINIT const ::_pbi::DescriptorTable descriptor_table_health_5fcheck_2eproto = {
    false,
    false,
    314,
    descriptor_table_protodef_health_5fcheck_2eproto,
    "health_check.proto",
    &descriptor_table_health_5fcheck_2eproto_once,
    nullptr,
    0,
    2,
    schemas,
    file_default_instances,
    TableStruct_health_5fcheck_2eproto::offsets,
    file_level_enum_descriptors_health_5fcheck_2eproto,
    file_level_service_descriptors_health_5fcheck_2eproto,
};
namespace health_check {
const ::google::protobuf::EnumDescriptor* Status_descriptor() {
  ::google::protobuf::internal::AssignDescriptors(&descriptor_table_health_5fcheck_2eproto);
  return file_level_enum_descriptors_health_5fcheck_2eproto[0];
}
PROTOBUF_CONSTINIT const uint32_t Status_internal_data_[] = {
    131072u, 0u, };
bool Status_IsValid(int value) {
  return 0 <= value && value <= 1;
}
// ===================================================================

class HealthCheckRequest::_Internal {
 public:
};

HealthCheckRequest::HealthCheckRequest(::google::protobuf::Arena* arena)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::internal::ZeroFieldsBase(arena, _class_data_.base()) {
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::internal::ZeroFieldsBase(arena) {
#endif  // PROTOBUF_CUSTOM_VTABLE
  // @@protoc_insertion_point(arena_constructor:health_check.HealthCheckRequest)
}
HealthCheckRequest::HealthCheckRequest(
    ::google::protobuf::Arena* arena,
    const HealthCheckRequest& from)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::internal::ZeroFieldsBase(arena, _class_data_.base()) {
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::internal::ZeroFieldsBase(arena) {
#endif  // PROTOBUF_CUSTOM_VTABLE
  HealthCheckRequest* const _this = this;
  (void)_this;
  _internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(
      from._internal_metadata_);

  // @@protoc_insertion_point(copy_constructor:health_check.HealthCheckRequest)
}

PROTOBUF_CONSTINIT
PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::google::protobuf::MessageLite::ClassDataFull
    HealthCheckRequest::_class_data_ = {
        ::google::protobuf::internal::ZeroFieldsBase::ClassData{
            &_HealthCheckRequest_default_instance_._instance,
            &_table_.header,
            nullptr,  // OnDemandRegisterArenaDtor
            nullptr,  // IsInitialized
            &HealthCheckRequest::MergeImpl,
#if defined(PROTOBUF_CUSTOM_VTABLE)
            ::google::protobuf::internal::ZeroFieldsBase::GetDeleteImpl<HealthCheckRequest>(),
            ::google::protobuf::internal::ZeroFieldsBase::GetNewImpl<HealthCheckRequest>(),
            ::google::protobuf::internal::ZeroFieldsBase::GetClearImpl<HealthCheckRequest>(), &HealthCheckRequest::ByteSizeLong,
                &HealthCheckRequest::_InternalSerialize,
#endif  // PROTOBUF_CUSTOM_VTABLE
            PROTOBUF_FIELD_OFFSET(HealthCheckRequest, _impl_._cached_size_),
            false,
        },
        &HealthCheckRequest::kDescriptorMethods,
        &descriptor_table_health_5fcheck_2eproto,
        nullptr,  // tracker
};
const ::google::protobuf::MessageLite::ClassData* HealthCheckRequest::GetClassData() const {
  ::google::protobuf::internal::PrefetchToLocalCache(&_class_data_);
  ::google::protobuf::internal::PrefetchToLocalCache(_class_data_.tc_table);
  return _class_data_.base();
}
PROTOBUF_CONSTINIT PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::_pbi::TcParseTable<0, 0, 0, 0, 2> HealthCheckRequest::_table_ = {
  {
    0,  // no _has_bits_
    0, // no _extensions_
    0, 0,  // max_field_number, fast_idx_mask
    offsetof(decltype(_table_), field_lookup_table),
    4294967295,  // skipmap
    offsetof(decltype(_table_), field_names),  // no field_entries
    0,  // num_field_entries
    0,  // num_aux_entries
    offsetof(decltype(_table_), field_names),  // no aux_entries
    _class_data_.base(),
    nullptr,  // post_loop_handler
    ::_pbi::TcParser::GenericFallback,  // fallback
    #ifdef PROTOBUF_PREFETCH_PARSE_TABLE
    ::_pbi::TcParser::GetTable<::health_check::HealthCheckRequest>(),  // to_prefetch
    #endif  // PROTOBUF_PREFETCH_PARSE_TABLE
  }, {{
    {::_pbi::TcParser::MiniParse, {}},
  }}, {{
    65535, 65535
  }},
  // no field_entries, or aux_entries
  {{
  }},
};








::google::protobuf::Metadata HealthCheckRequest::GetMetadata() const {
  return ::google::protobuf::internal::ZeroFieldsBase::GetMetadataImpl(GetClassData()->full());
}
// ===================================================================

class HealthCheckResponse::_Internal {
 public:
};

HealthCheckResponse::HealthCheckResponse(::google::protobuf::Arena* arena)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::Message(arena, _class_data_.base()) {
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::Message(arena) {
#endif  // PROTOBUF_CUSTOM_VTABLE
  SharedCtor(arena);
  // @@protoc_insertion_point(arena_constructor:health_check.HealthCheckResponse)
}
inline PROTOBUF_NDEBUG_INLINE HealthCheckResponse::Impl_::Impl_(
    ::google::protobuf::internal::InternalVisibility visibility, ::google::protobuf::Arena* arena,
    const Impl_& from, const ::health_check::HealthCheckResponse& from_msg)
      : message_(arena, from.message_),
        _cached_size_{0} {}

HealthCheckResponse::HealthCheckResponse(
    ::google::protobuf::Arena* arena,
    const HealthCheckResponse& from)
#if defined(PROTOBUF_CUSTOM_VTABLE)
    : ::google::protobuf::Message(arena, _class_data_.base()) {
#else   // PROTOBUF_CUSTOM_VTABLE
    : ::google::protobuf::Message(arena) {
#endif  // PROTOBUF_CUSTOM_VTABLE
  HealthCheckResponse* const _this = this;
  (void)_this;
  _internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(
      from._internal_metadata_);
  new (&_impl_) Impl_(internal_visibility(), arena, from._impl_, from);
  _impl_.status_ = from._impl_.status_;

  // @@protoc_insertion_point(copy_constructor:health_check.HealthCheckResponse)
}
inline PROTOBUF_NDEBUG_INLINE HealthCheckResponse::Impl_::Impl_(
    ::google::protobuf::internal::InternalVisibility visibility,
    ::google::protobuf::Arena* arena)
      : message_(arena),
        _cached_size_{0} {}

inline void HealthCheckResponse::SharedCtor(::_pb::Arena* arena) {
  new (&_impl_) Impl_(internal_visibility(), arena);
  _impl_.status_ = {};
}
HealthCheckResponse::~HealthCheckResponse() {
  // @@protoc_insertion_point(destructor:health_check.HealthCheckResponse)
  _internal_metadata_.Delete<::google::protobuf::UnknownFieldSet>();
  SharedDtor();
}
inline void HealthCheckResponse::SharedDtor() {
  ABSL_DCHECK(GetArena() == nullptr);
  _impl_.message_.Destroy();
  _impl_.~Impl_();
}

PROTOBUF_CONSTINIT
PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::google::protobuf::MessageLite::ClassDataFull
    HealthCheckResponse::_class_data_ = {
        ::google::protobuf::Message::ClassData{
            &_HealthCheckResponse_default_instance_._instance,
            &_table_.header,
            nullptr,  // OnDemandRegisterArenaDtor
            nullptr,  // IsInitialized
            &HealthCheckResponse::MergeImpl,
#if defined(PROTOBUF_CUSTOM_VTABLE)
            ::google::protobuf::Message::GetDeleteImpl<HealthCheckResponse>(),
            ::google::protobuf::Message::GetNewImpl<HealthCheckResponse>(),
            ::google::protobuf::Message::GetClearImpl<HealthCheckResponse>(), &HealthCheckResponse::ByteSizeLong,
                &HealthCheckResponse::_InternalSerialize,
#endif  // PROTOBUF_CUSTOM_VTABLE
            PROTOBUF_FIELD_OFFSET(HealthCheckResponse, _impl_._cached_size_),
            false,
        },
        &HealthCheckResponse::kDescriptorMethods,
        &descriptor_table_health_5fcheck_2eproto,
        nullptr,  // tracker
};
const ::google::protobuf::MessageLite::ClassData* HealthCheckResponse::GetClassData() const {
  ::google::protobuf::internal::PrefetchToLocalCache(&_class_data_);
  ::google::protobuf::internal::PrefetchToLocalCache(_class_data_.tc_table);
  return _class_data_.base();
}
PROTOBUF_CONSTINIT PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::_pbi::TcParseTable<1, 2, 0, 48, 2> HealthCheckResponse::_table_ = {
  {
    0,  // no _has_bits_
    0, // no _extensions_
    2, 8,  // max_field_number, fast_idx_mask
    offsetof(decltype(_table_), field_lookup_table),
    4294967292,  // skipmap
    offsetof(decltype(_table_), field_entries),
    2,  // num_field_entries
    0,  // num_aux_entries
    offsetof(decltype(_table_), field_names),  // no aux_entries
    _class_data_.base(),
    nullptr,  // post_loop_handler
    ::_pbi::TcParser::GenericFallback,  // fallback
    #ifdef PROTOBUF_PREFETCH_PARSE_TABLE
    ::_pbi::TcParser::GetTable<::health_check::HealthCheckResponse>(),  // to_prefetch
    #endif  // PROTOBUF_PREFETCH_PARSE_TABLE
  }, {{
    // string message = 2;
    {::_pbi::TcParser::FastUS1,
     {18, 63, 0, PROTOBUF_FIELD_OFFSET(HealthCheckResponse, _impl_.message_)}},
    // .health_check.Status status = 1;
    {::_pbi::TcParser::SingularVarintNoZag1<::uint32_t, offsetof(HealthCheckResponse, _impl_.status_), 63>(),
     {8, 63, 0, PROTOBUF_FIELD_OFFSET(HealthCheckResponse, _impl_.status_)}},
  }}, {{
    65535, 65535
  }}, {{
    // .health_check.Status status = 1;
    {PROTOBUF_FIELD_OFFSET(HealthCheckResponse, _impl_.status_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kOpenEnum)},
    // string message = 2;
    {PROTOBUF_FIELD_OFFSET(HealthCheckResponse, _impl_.message_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUtf8String | ::_fl::kRepAString)},
  }},
  // no aux_entries
  {{
    "\40\0\7\0\0\0\0\0"
    "health_check.HealthCheckResponse"
    "message"
  }},
};

PROTOBUF_NOINLINE void HealthCheckResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:health_check.HealthCheckResponse)
  ::google::protobuf::internal::TSanWrite(&_impl_);
  ::uint32_t cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  _impl_.message_.ClearToEmpty();
  _impl_.status_ = 0;
  _internal_metadata_.Clear<::google::protobuf::UnknownFieldSet>();
}

#if defined(PROTOBUF_CUSTOM_VTABLE)
        ::uint8_t* HealthCheckResponse::_InternalSerialize(
            const MessageLite& base, ::uint8_t* target,
            ::google::protobuf::io::EpsCopyOutputStream* stream) {
          const HealthCheckResponse& this_ = static_cast<const HealthCheckResponse&>(base);
#else   // PROTOBUF_CUSTOM_VTABLE
        ::uint8_t* HealthCheckResponse::_InternalSerialize(
            ::uint8_t* target,
            ::google::protobuf::io::EpsCopyOutputStream* stream) const {
          const HealthCheckResponse& this_ = *this;
#endif  // PROTOBUF_CUSTOM_VTABLE
          // @@protoc_insertion_point(serialize_to_array_start:health_check.HealthCheckResponse)
          ::uint32_t cached_has_bits = 0;
          (void)cached_has_bits;

          // .health_check.Status status = 1;
          if (this_._internal_status() != 0) {
            target = stream->EnsureSpace(target);
            target = ::_pbi::WireFormatLite::WriteEnumToArray(
                1, this_._internal_status(), target);
          }

          // string message = 2;
          if (!this_._internal_message().empty()) {
            const std::string& _s = this_._internal_message();
            ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
                _s.data(), static_cast<int>(_s.length()), ::google::protobuf::internal::WireFormatLite::SERIALIZE, "health_check.HealthCheckResponse.message");
            target = stream->WriteStringMaybeAliased(2, _s, target);
          }

          if (PROTOBUF_PREDICT_FALSE(this_._internal_metadata_.have_unknown_fields())) {
            target =
                ::_pbi::WireFormat::InternalSerializeUnknownFieldsToArray(
                    this_._internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance), target, stream);
          }
          // @@protoc_insertion_point(serialize_to_array_end:health_check.HealthCheckResponse)
          return target;
        }

#if defined(PROTOBUF_CUSTOM_VTABLE)
        ::size_t HealthCheckResponse::ByteSizeLong(const MessageLite& base) {
          const HealthCheckResponse& this_ = static_cast<const HealthCheckResponse&>(base);
#else   // PROTOBUF_CUSTOM_VTABLE
        ::size_t HealthCheckResponse::ByteSizeLong() const {
          const HealthCheckResponse& this_ = *this;
#endif  // PROTOBUF_CUSTOM_VTABLE
          // @@protoc_insertion_point(message_byte_size_start:health_check.HealthCheckResponse)
          ::size_t total_size = 0;

          ::uint32_t cached_has_bits = 0;
          // Prevent compiler warnings about cached_has_bits being unused
          (void)cached_has_bits;

          ::_pbi::Prefetch5LinesFrom7Lines(&this_);
           {
            // string message = 2;
            if (!this_._internal_message().empty()) {
              total_size += 1 + ::google::protobuf::internal::WireFormatLite::StringSize(
                                              this_._internal_message());
            }
            // .health_check.Status status = 1;
            if (this_._internal_status() != 0) {
              total_size += 1 +
                            ::_pbi::WireFormatLite::EnumSize(this_._internal_status());
            }
          }
          return this_.MaybeComputeUnknownFieldsSize(total_size,
                                                     &this_._impl_._cached_size_);
        }

void HealthCheckResponse::MergeImpl(::google::protobuf::MessageLite& to_msg, const ::google::protobuf::MessageLite& from_msg) {
  auto* const _this = static_cast<HealthCheckResponse*>(&to_msg);
  auto& from = static_cast<const HealthCheckResponse&>(from_msg);
  // @@protoc_insertion_point(class_specific_merge_from_start:health_check.HealthCheckResponse)
  ABSL_DCHECK_NE(&from, _this);
  ::uint32_t cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_message().empty()) {
    _this->_internal_set_message(from._internal_message());
  }
  if (from._internal_status() != 0) {
    _this->_impl_.status_ = from._impl_.status_;
  }
  _this->_internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(from._internal_metadata_);
}

void HealthCheckResponse::CopyFrom(const HealthCheckResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:health_check.HealthCheckResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}


void HealthCheckResponse::InternalSwap(HealthCheckResponse* PROTOBUF_RESTRICT other) {
  using std::swap;
  auto* arena = GetArena();
  ABSL_DCHECK_EQ(arena, other->GetArena());
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::_pbi::ArenaStringPtr::InternalSwap(&_impl_.message_, &other->_impl_.message_, arena);
  swap(_impl_.status_, other->_impl_.status_);
}

::google::protobuf::Metadata HealthCheckResponse::GetMetadata() const {
  return ::google::protobuf::Message::GetMetadataImpl(GetClassData()->full());
}
// @@protoc_insertion_point(namespace_scope)
}  // namespace health_check
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google
// @@protoc_insertion_point(global_scope)
PROTOBUF_ATTRIBUTE_INIT_PRIORITY2 static ::std::false_type
    _static_init2_ PROTOBUF_UNUSED =
        (::_pbi::AddDescriptors(&descriptor_table_health_5fcheck_2eproto),
         ::std::false_type{});
#include "google/protobuf/port_undef.inc"