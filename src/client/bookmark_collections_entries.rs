// This file is @generated by prost-build.
#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]
#[ts(export)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub bookmark_collections_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "4")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
}
#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]
#[ts(export)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBookmarkCollectionsEntryResponse {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub updated_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub bookmark_collections_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "6")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
    #[prost(string, tag = "8")]
    pub bookmark_collections_entry_id: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]
#[ts(export)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collections_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub bookmark_collections_entry_id: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]
#[ts(export)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collections_id: ::prost::alloc::string::String,
    #[prost(string, optional, tag = "2")]
    pub title: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag = "3")]
    pub description: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, tag = "4")]
    pub bookmark_collections_entry_id: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]
#[ts(export)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteBookmarkCollectionsEntryResponse {
    #[prost(string, tag = "1")]
    pub bookmark_collections_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub bookmark_collections_entry_id: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub status: ::prost::alloc::string::String,
}
/// Generated client implementations.
pub mod bookmark_collections_entries_manager_client {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct BookmarkCollectionsEntriesManagerClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl BookmarkCollectionsEntriesManagerClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> BookmarkCollectionsEntriesManagerClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + std::marker::Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + std::marker::Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> BookmarkCollectionsEntriesManagerClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
            >>::Error: Into<StdError> + std::marker::Send + std::marker::Sync,
        {
            BookmarkCollectionsEntriesManagerClient::new(
                InterceptedService::new(inner, interceptor),
            )
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_decoding_message_size(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_encoding_message_size(limit);
            self
        }
        pub async fn create_new_bookmark_collection_entry(
            &mut self,
            request: impl tonic::IntoRequest<super::NewBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/CreateNewBookmarkCollectionEntry",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "bookmark_collections_entries.BookmarkCollectionsEntriesManager",
                        "CreateNewBookmarkCollectionEntry",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_bookmark_collections_entry(
            &mut self,
            request: impl tonic::IntoRequest<super::GetBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/GetBookmarkCollectionsEntry",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "bookmark_collections_entries.BookmarkCollectionsEntriesManager",
                        "GetBookmarkCollectionsEntry",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_bookmark_collections_entry(
            &mut self,
            request: impl tonic::IntoRequest<
                super::UpdateBookmarkCollectionsEntryRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/UpdateBookmarkCollectionsEntry",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "bookmark_collections_entries.BookmarkCollectionsEntriesManager",
                        "UpdateBookmarkCollectionsEntry",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn delete_bookmark_collections_entry(
            &mut self,
            request: impl tonic::IntoRequest<
                super::UpdateBookmarkCollectionsEntryRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::DeleteBookmarkCollectionsEntryResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/DeleteBookmarkCollectionsEntry",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "bookmark_collections_entries.BookmarkCollectionsEntriesManager",
                        "DeleteBookmarkCollectionsEntry",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
