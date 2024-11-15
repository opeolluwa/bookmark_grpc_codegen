// This file is @generated by prost-build.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BookmarkCollectionEntries {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub updated_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "6")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewBookmarkCollectionRequest {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewBookmarkCollectionResponse {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub updated_at: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBookmarkCollectionRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetBookmarkCollectionResponse {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub updated_at: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "7")]
    pub entries: ::prost::alloc::vec::Vec<BookmarkCollectionEntries>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookmarkCollectionRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, optional, tag = "2")]
    pub name: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag = "3")]
    pub description: ::core::option::Option<::prost::alloc::string::String>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateBookmarkCollectionResponse {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub status: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteBookmarkCollectionRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteBookmarkCollectionResponse {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub message: ::prost::alloc::string::String,
}
#[derive(Clone, Copy, PartialEq, ::prost::Message)]
pub struct ListBookmarkCollectionsRequest {
    #[prost(uint32, tag = "1")]
    pub page: u32,
    #[prost(uint32, tag = "2")]
    pub page_size: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BookmarkCollection {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub updated_at: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBookmarkCollectionsResponse {
    #[prost(message, repeated, tag = "1")]
    pub bookmark_collections: ::prost::alloc::vec::Vec<BookmarkCollection>,
    #[prost(uint32, tag = "2")]
    pub total_count: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBookmarkCollectionEntryRequest {
    #[prost(string, tag = "1")]
    pub bookmark_collection_id: ::prost::alloc::string::String,
    #[prost(uint32, tag = "4")]
    pub page: u32,
    #[prost(uint32, tag = "5")]
    pub page_size: u32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListBookmarkCollectionEntryResponse {
    #[prost(message, repeated, tag = "1")]
    pub bookmark_collection_entries: ::prost::alloc::vec::Vec<BookmarkCollectionEntries>,
    #[prost(uint32, tag = "2")]
    pub total_count: u32,
}
/// Generated server implementations.
pub mod bookmark_collection_manager_server {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with BookmarkCollectionManagerServer.
    #[async_trait]
    pub trait BookmarkCollectionManager: std::marker::Send + std::marker::Sync + 'static {
        async fn create_new_bookmark_collection(
            &self,
            request: tonic::Request<super::NewBookmarkCollectionRequest>,
        ) -> std::result::Result<
            tonic::Response<super::NewBookmarkCollectionResponse>,
            tonic::Status,
        >;
        async fn get_bookmark_collection(
            &self,
            request: tonic::Request<super::GetBookmarkCollectionRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionResponse>,
            tonic::Status,
        >;
        async fn update_bookmark_collection(
            &self,
            request: tonic::Request<super::UpdateBookmarkCollectionRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetBookmarkCollectionResponse>,
            tonic::Status,
        >;
        async fn delete_bookmark_collection(
            &self,
            request: tonic::Request<super::DeleteBookmarkCollectionRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteBookmarkCollectionResponse>,
            tonic::Status,
        >;
        async fn list_bookmark_collections(
            &self,
            request: tonic::Request<super::ListBookmarkCollectionsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListBookmarkCollectionsResponse>,
            tonic::Status,
        >;
        async fn list_bookmark_collection_entries(
            &self,
            request: tonic::Request<super::ListBookmarkCollectionEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListBookmarkCollectionEntryResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct BookmarkCollectionManagerServer<T> {
        inner: Arc<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    impl<T> BookmarkCollectionManagerServer<T> {
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
    for BookmarkCollectionManagerServer<T>
    where
        T: BookmarkCollectionManager,
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
                "/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection" => {
                    #[allow(non_camel_case_types)]
                    struct CreateNewBookmarkCollectionSvc<T: BookmarkCollectionManager>(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<super::NewBookmarkCollectionRequest>
                    for CreateNewBookmarkCollectionSvc<T> {
                        type Response = super::NewBookmarkCollectionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::NewBookmarkCollectionRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::create_new_bookmark_collection(
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
                        let method = CreateNewBookmarkCollectionSvc(inner);
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
                "/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection" => {
                    #[allow(non_camel_case_types)]
                    struct GetBookmarkCollectionSvc<T: BookmarkCollectionManager>(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<super::GetBookmarkCollectionRequest>
                    for GetBookmarkCollectionSvc<T> {
                        type Response = super::GetBookmarkCollectionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetBookmarkCollectionRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::get_bookmark_collection(
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
                        let method = GetBookmarkCollectionSvc(inner);
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
                "/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateBookmarkCollectionSvc<T: BookmarkCollectionManager>(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<super::UpdateBookmarkCollectionRequest>
                    for UpdateBookmarkCollectionSvc<T> {
                        type Response = super::GetBookmarkCollectionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::UpdateBookmarkCollectionRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::update_bookmark_collection(
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
                        let method = UpdateBookmarkCollectionSvc(inner);
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
                "/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteBookmarkCollectionSvc<T: BookmarkCollectionManager>(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<super::DeleteBookmarkCollectionRequest>
                    for DeleteBookmarkCollectionSvc<T> {
                        type Response = super::DeleteBookmarkCollectionResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::DeleteBookmarkCollectionRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::delete_bookmark_collection(
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
                        let method = DeleteBookmarkCollectionSvc(inner);
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
                "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections" => {
                    #[allow(non_camel_case_types)]
                    struct ListBookmarkCollectionsSvc<T: BookmarkCollectionManager>(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<super::ListBookmarkCollectionsRequest>
                    for ListBookmarkCollectionsSvc<T> {
                        type Response = super::ListBookmarkCollectionsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListBookmarkCollectionsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::list_bookmark_collections(
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
                        let method = ListBookmarkCollectionsSvc(inner);
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
                "/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries" => {
                    #[allow(non_camel_case_types)]
                    struct ListBookmarkCollectionEntriesSvc<
                        T: BookmarkCollectionManager,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: BookmarkCollectionManager,
                    > tonic::server::UnaryService<
                        super::ListBookmarkCollectionEntryRequest,
                    > for ListBookmarkCollectionEntriesSvc<T> {
                        type Response = super::ListBookmarkCollectionEntryResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListBookmarkCollectionEntryRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as BookmarkCollectionManager>::list_bookmark_collection_entries(
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
                        let method = ListBookmarkCollectionEntriesSvc(inner);
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
    impl<T> Clone for BookmarkCollectionManagerServer<T> {
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
    pub const SERVICE_NAME: &str = "BookmarkCollection.BookmarkCollectionManager";
    impl<T> tonic::server::NamedService for BookmarkCollectionManagerServer<T> {
        const NAME: &'static str = SERVICE_NAME;
    }
}
