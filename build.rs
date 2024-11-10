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
        .type_attribute(
            "LogActivityRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LogActivityResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LoginRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LoginResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "SignUpRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "SignUpResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ErrorResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "HealthCheckRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "HealthCheckResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileUpdateRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileUpdateResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "NewVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "VaultEntries",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
          .field_attribute("CreatedAt", "   #[serde(skip_serializing)]")
        .type_attribute(
            "NewVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "NewVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultsRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute("Vault", "#[derive(serde::Deserialize, serde::Serialize)]")
        .type_attribute(
            "ListVaultsResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .file_descriptor_set_path(out_dir.join("vault"))
        .out_dir("./src/client")
        .compile_protos(&proto_files, &["../proto"])?;

    tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional")
        .protoc_arg("--proto_path=./proto")
        .build_client(false) // don't compile the client code
        .build_server(true)
        .file_descriptor_set_path(out_dir.join("vault"))
        .type_attribute(
            "LogActivityRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LogActivityResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LoginRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "LoginResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "SignUpRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "SignUpResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ErrorResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "HealthCheckRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "HealthCheckResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileUpdateRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ProfileUpdateResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "NewVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "VaultEntries",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "NewVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "NewVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "GetVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "UpdateVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "DeleteVaultResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultsRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute("Vault", "#[derive(serde::Deserialize, serde::Serialize)]")
        .type_attribute(
            "ListVaultsResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultEntryRequest",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .type_attribute(
            "ListVaultEntryResponse",
            "#[derive(serde::Deserialize, serde::Serialize)]",
        )
        .out_dir("./src/server")
      
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
