use std::env;
use std::path::PathBuf;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    let proto_files = load_proto_file("proto").unwrap();

    tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional")
        .protoc_arg("--proto_path=./proto")
        .build_client(true) // don't compile the client code
        .build_server(false)
        // Processing ./proto/vaults.proto...
        .type_attribute(
            "VaultEntries",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("VaultEntries", "#[ts(export)]")
        .type_attribute(
            "NewVaultRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewVaultRequest", "#[ts(export)]")
        .type_attribute(
            "NewVaultResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewVaultResponse", "#[ts(export)]")
        .type_attribute(
            "GetVaultRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetVaultRequest", "#[ts(export)]")
        .type_attribute(
            "GetVaultResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetVaultResponse", "#[ts(export)]")
        .type_attribute(
            "UpdateVaultRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateVaultRequest", "#[ts(export)]")
        .type_attribute(
            "UpdateVaultResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateVaultResponse", "#[ts(export)]")
        .type_attribute(
            "DeleteVaultRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteVaultRequest", "#[ts(export)]")
        .type_attribute(
            "DeleteVaultResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteVaultResponse", "#[ts(export)]")
        .type_attribute(
            "ListVaultsRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListVaultsRequest", "#[ts(export)]")
        .type_attribute(
            "Vault",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("Vault", "#[ts(export)]")
        .type_attribute(
            "ListVaultsResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListVaultsResponse", "#[ts(export)]")
        .type_attribute(
            "ListVaultEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListVaultEntryRequest", "#[ts(export)]")
        .type_attribute(
            "ListVaultEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListVaultEntryResponse", "#[ts(export)]")
        // Processing ./proto/health_check.proto...
        .type_attribute(
            "HealthCheckRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("HealthCheckRequest", "#[ts(export)]")
        .type_attribute(
            "HealthCheckResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("HealthCheckResponse", "#[ts(export)]")
        // Processing ./proto/activity.proto...
        .type_attribute(
            "LogActivityRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("LogActivityRequest", "#[ts(export)]")
        .type_attribute(
            "LogActivityResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("LogActivityResponse", "#[ts(export)]")
        // Processing ./proto/user_profile.proto...
        .type_attribute(
            "ProfileRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ProfileRequest", "#[ts(export)]")
        .type_attribute(
            "ProfileResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ProfileResponse", "#[ts(export)]")
        .type_attribute(
            "ProfileUpdateRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ProfileUpdateRequest", "#[ts(export)]")
        .type_attribute(
            "ProfileUpdateResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ProfileUpdateResponse", "#[ts(export)]")
        // Processing ./proto/bookmark_collection_entries.proto...
        .type_attribute(
            "NewBookmarkCollectionsEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewBookmarkCollectionsEntryRequest", "#[ts(export)]")
        .type_attribute(
            "GetBookmarkCollectionsEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetBookmarkCollectionsEntryResponse", "#[ts(export)]")
        .type_attribute(
            "GetBookmarkCollectionsEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetBookmarkCollectionsEntryRequest", "#[ts(export)]")
        .type_attribute(
            "UpdateBookmarkCollectionsEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateBookmarkCollectionsEntryRequest", "#[ts(export)]")
        .type_attribute(
            "DeleteBookmarkCollectionsEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteBookmarkCollectionsEntryResponse", "#[ts(export)]")
        // Processing ./proto/bookmark_collections.proto...
        .type_attribute(
            "BookmarkCollectionEntries",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("BookmarkCollectionEntries", "#[ts(export)]")
        .type_attribute(
            "NewBookmarkCollectionRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewBookmarkCollectionRequest", "#[ts(export)]")
        .type_attribute(
            "NewBookmarkCollectionResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewBookmarkCollectionResponse", "#[ts(export)]")
        .type_attribute(
            "GetBookmarkCollectionRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetBookmarkCollectionRequest", "#[ts(export)]")
        .type_attribute(
            "GetBookmarkCollectionResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetBookmarkCollectionResponse", "#[ts(export)]")
        .type_attribute(
            "UpdateBookmarkCollectionRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateBookmarkCollectionRequest", "#[ts(export)]")
        .type_attribute(
            "UpdateBookmarkCollectionResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateBookmarkCollectionResponse", "#[ts(export)]")
        .type_attribute(
            "DeleteBookmarkCollectionRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteBookmarkCollectionRequest", "#[ts(export)]")
        .type_attribute(
            "DeleteBookmarkCollectionResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteBookmarkCollectionResponse", "#[ts(export)]")
        .type_attribute(
            "ListBookmarkCollectionsRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListBookmarkCollectionsRequest", "#[ts(export)]")
        .type_attribute(
            "BookmarkCollection",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("BookmarkCollection", "#[ts(export)]")
        .type_attribute(
            "ListBookmarkCollectionsResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListBookmarkCollectionsResponse", "#[ts(export)]")
        .type_attribute(
            "ListBookmarkCollectionEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListBookmarkCollectionEntryRequest", "#[ts(export)]")
        .type_attribute(
            "ListBookmarkCollectionEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ListBookmarkCollectionEntryResponse", "#[ts(export)]")
        // Processing ./proto/vault_entries.proto...
        .type_attribute(
            "NewVaultEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("NewVaultEntryRequest", "#[ts(export)]")
        .type_attribute(
            "GetVaultEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetVaultEntryResponse", "#[ts(export)]")
        .type_attribute(
            "GetVaultEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("GetVaultEntryRequest", "#[ts(export)]")
        .type_attribute(
            "UpdateVaultEntryRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("UpdateVaultEntryRequest", "#[ts(export)]")
        .type_attribute(
            "DeleteVaultEntryResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("DeleteVaultEntryResponse", "#[ts(export)]")
        // Processing ./proto/authentication.proto...
        .type_attribute(
            "LoginRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("LoginRequest", "#[ts(export)]")
        .type_attribute(
            "LoginResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("LoginResponse", "#[ts(export)]")
        .type_attribute(
            "SignUpRequest",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("SignUpRequest", "#[ts(export)]")
        .type_attribute(
            "SignUpResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("SignUpResponse", "#[ts(export)]")
        // Processing ./proto/common.proto...
        .type_attribute(
            "ErrorResponse",
            "#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]",
        )
        .type_attribute("ErrorResponse", "#[ts(export)]")
        .out_dir("./src/client")
        .compile_protos(&proto_files, &["../proto"])?;

    tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional")
        .protoc_arg("--proto_path=./proto")
        .build_client(false) // don't compile the client code
        .build_server(true)
        .file_descriptor_set_path(out_dir.join("vault"))
        .compile_protos(&proto_files, &["../proto"])?;
    Ok(())
}

fn load_proto_file(proto_dir: &str) -> Result<Vec<PathBuf>, std::io::Error> {
    let proto_files = std::fs::read_dir(proto_dir)?
        .filter_map(|dir_entry| dir_entry.ok())
        .map(|dir_entry| dir_entry.path())
        .filter_map(|dir_entry| {
            if dir_entry
                .extension()
                .map_or(false, |extension| extension == "proto")
            {
                Some(dir_entry)
            } else {
                None
            }
        })
        .collect::<Vec<_>>();

    Ok(proto_files)
}
