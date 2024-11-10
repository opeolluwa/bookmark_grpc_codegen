// This file is @generated by prost-build.
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct VaultEntries {
    #[prost(string, tag = "1")]
    pub title: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub updated_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(map = "string, string", tag = "6")]
    pub more_fields: ::std::collections::HashMap<
        ::prost::alloc::string::String,
        ::prost::alloc::string::String,
    >,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewVaultRequest {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub description: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct NewVaultResponse {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "6")]
    pub updated_at: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetVaultRequest {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetVaultResponse {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub updated_at: ::prost::alloc::string::String,
    #[prost(message, repeated, tag = "7")]
    pub entries: ::prost::alloc::vec::Vec<VaultEntries>,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateVaultRequest {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, optional, tag = "2")]
    pub name: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(string, optional, tag = "3")]
    pub description: ::core::option::Option<::prost::alloc::string::String>,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateVaultResponse {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub status: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteVaultRequest {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteVaultResponse {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub message: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, Copy, PartialEq, ::prost::Message)]
pub struct ListVaultsRequest {
    #[prost(uint32, tag = "1")]
    pub page: u32,
    #[prost(uint32, tag = "2")]
    pub page_size: u32,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Vault {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub description: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub created_at: ::prost::alloc::string::String,
    #[prost(string, tag = "5")]
    pub updated_at: ::prost::alloc::string::String,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListVaultsResponse {
    #[prost(message, repeated, tag = "1")]
    pub vaults: ::prost::alloc::vec::Vec<Vault>,
    #[prost(uint32, tag = "2")]
    pub total_count: u32,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListVaultEntryRequest {
    #[prost(string, tag = "1")]
    pub vault_id: ::prost::alloc::string::String,
    #[prost(uint32, tag = "4")]
    pub page: u32,
    #[prost(uint32, tag = "5")]
    pub page_size: u32,
}
#[derive(serde::Deserialize, serde::Serialize)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListVaultEntryResponse {
    #[prost(message, repeated, tag = "1")]
    pub vault_entries: ::prost::alloc::vec::Vec<VaultEntries>,
    #[prost(uint32, tag = "2")]
    pub total_count: u32,
}
/// Generated client implementations.
pub mod vault_manager_client {
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
    pub struct VaultManagerClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl VaultManagerClient<tonic::transport::Channel> {
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
    impl<T> VaultManagerClient<T>
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
        ) -> VaultManagerClient<InterceptedService<T, F>>
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
            VaultManagerClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn create_new_vault(
            &mut self,
            request: impl tonic::IntoRequest<super::NewVaultRequest>,
        ) -> std::result::Result<
            tonic::Response<super::NewVaultResponse>,
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
                "/vault.VaultManager/CreateNewVault",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "CreateNewVault"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_vault(
            &mut self,
            request: impl tonic::IntoRequest<super::GetVaultRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetVaultResponse>,
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
                "/vault.VaultManager/GetVault",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "GetVault"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_vault(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateVaultRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetVaultResponse>,
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
                "/vault.VaultManager/UpdateVault",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "UpdateVault"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn delete_vault(
            &mut self,
            request: impl tonic::IntoRequest<super::DeleteVaultRequest>,
        ) -> std::result::Result<
            tonic::Response<super::DeleteVaultResponse>,
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
                "/vault.VaultManager/DeleteVault",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "DeleteVault"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_vaults(
            &mut self,
            request: impl tonic::IntoRequest<super::ListVaultsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListVaultsResponse>,
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
                "/vault.VaultManager/ListVaults",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "ListVaults"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_vault_entries(
            &mut self,
            request: impl tonic::IntoRequest<super::ListVaultEntryRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListVaultEntryResponse>,
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
                "/vault.VaultManager/ListVaultEntries",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("vault.VaultManager", "ListVaultEntries"));
            self.inner.unary(req, path, codec).await
        }
    }
}
