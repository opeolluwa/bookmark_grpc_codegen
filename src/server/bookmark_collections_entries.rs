// This file is @generated by prost-build.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "4")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
}
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
    pub collection_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "6")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
    #[prost(string, tag = "8")]
    pub entry_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub entry_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookmarkCollectionsEntryRequest {
    #[prost(string, tag = "1")]
    pub collection_id: ::prost::alloc::string::String,
    #[prost(string, optional, tag = "2")]
    pub title: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag = "3")]
    pub description: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, tag = "4")]
    pub entry_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteBookmarkCollectionsEntryResponse {
    #[prost(string, tag = "1")]
    pub collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub entry_id: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub status: ::prost::alloc::string::String,
}
/// Generated server implementations.
pub mod bookmark_collections_entries_manager_server {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with BookmarkCollectionsEntriesManagerServer.
    #[async_trait]
    pub trait BookmarkCollectionsEntriesManager: std::marker::Send + std::marker::Sync + 'static {
        async fn create_new_bookmark_collection_entry(
            &self,
            request: tonic::Request<super::NewBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        >;
        async fn get_bookmark_collection_entry(
            &self,
            request: tonic::Request<super::GetBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        >;
        async fn update_bookmark_collection_entry(
            &self,
            request: tonic::Request<super::UpdateBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionsEntryResponse>,
            tonic::Status,
        >;
        async fn delete_bookmark_collection_entry(
            &self,
            request: tonic::Request<super::UpdateBookmarkCollectionsEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteBookmarkCollectionsEntryResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct BookmarkCollectionsEntriesManagerServer<T> {
        inner: Arc<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    impl<T> BookmarkCollectionsEntriesManagerServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
                max_decoding_message_size: None,
                max_encoding_message_size: None,
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.max_decoding_message_size = Some(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.max_encoding_message_size = Some(limit);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>>
    for BookmarkCollectionsEntriesManagerServer<T>
    where
        T: BookmarkCollectionsEntriesManager,
        B: Body + std::marker::Send + 'static,
        B::Error: Into<StdError> + std::marker::Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<std::result::Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            match req.uri().path() {
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/CreateNewBookmarkCollectionEntry" => {
                    #[allow(non_camel_case_types)]
                    struct CreateNewBookmarkCollectionEntrySvc<
                        T: BookmarkCollectionsEntriesManager,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionsEntriesManager,
                    > tonic::server::UnaryService<
                        super::NewBookmarkCollectionsEntryRequest,
                    > for CreateNewBookmarkCollectionEntrySvc<T> {
                        type Response = super::GetBookmarkCollectionsEntryResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::NewBookmarkCollectionsEntryRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionsEntriesManager>::create_new_bookmark_collection_entry(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = CreateNewBookmarkCollectionEntrySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/GetBookmarkCollectionEntry" => {
                    #[allow(non_camel_case_types)]
                    struct GetBookmarkCollectionEntrySvc<
                        T: BookmarkCollectionsEntriesManager,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionsEntriesManager,
                    > tonic::server::UnaryService<
                        super::GetBookmarkCollectionsEntryRequest,
                    > for GetBookmarkCollectionEntrySvc<T> {
                        type Response = super::GetBookmarkCollectionsEntryResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetBookmarkCollectionsEntryRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionsEntriesManager>::get_bookmark_collection_entry(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = GetBookmarkCollectionEntrySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/UpdateBookmarkCollectionEntry" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateBookmarkCollectionEntrySvc<
                        T: BookmarkCollectionsEntriesManager,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionsEntriesManager,
                    > tonic::server::UnaryService<
                        super::UpdateBookmarkCollectionsEntryRequest,
                    > for UpdateBookmarkCollectionEntrySvc<T> {
                        type Response = super::GetBookmarkCollectionsEntryResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::UpdateBookmarkCollectionsEntryRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionsEntriesManager>::update_bookmark_collection_entry(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = UpdateBookmarkCollectionEntrySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/bookmark_collections_entries.BookmarkCollectionsEntriesManager/DeleteBookmarkCollectionEntry" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteBookmarkCollectionEntrySvc<
                        T: BookmarkCollectionsEntriesManager,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionsEntriesManager,
                    > tonic::server::UnaryService<
                        super::UpdateBookmarkCollectionsEntryRequest,
                    > for DeleteBookmarkCollectionEntrySvc<T> {
                        type Response = super::DeleteBookmarkCollectionsEntryResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::UpdateBookmarkCollectionsEntryRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionsEntriesManager>::delete_bookmark_collection_entry(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = DeleteBookmarkCollectionEntrySvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        let mut response = http::Response::new(empty_body());
                        let headers = response.headers_mut();
                        headers
                            .insert(
                                tonic::Status::GRPC_STATUS,
                                (tonic::Code::Unimplemented as i32).into(),
                            );
                        headers
                            .insert(
                                http::header::CONTENT_TYPE,
                                tonic::metadata::GRPC_CONTENT_TYPE,
                            );
                        Ok(response)
                    })
                }
            }
        }
    }
    impl<T> Clone for BookmarkCollectionsEntriesManagerServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
                max_decoding_message_size: self.max_decoding_message_size,
                max_encoding_message_size: self.max_encoding_message_size,
            }
        }
    }
    /// Generated gRPC service name
    pub const SERVICE_NAME: &str = "bookmark_collections_entries.BookmarkCollectionsEntriesManager";
    impl<T> tonic::server::NamedService for BookmarkCollectionsEntriesManagerServer<T> {
        const NAME: &'static str = SERVICE_NAME;
    }
}
