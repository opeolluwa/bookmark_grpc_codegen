# justfile

# generate typescript bindings for the rust structs 
generate_ts_exports:
    #!/bin/bash
    cargo test
    echo "// Auto-generated index.ts" > bindings/index.ts
    cd bindings
    for file in *.ts; do
        if [[ "$file" != "index.ts" ]]; then
            filename="${file%.ts}"
            echo "export * from './${filename}';" >> index.ts
        fi
    done
    echo "All TypeScript files have been imported and re-exported in index.ts."


## compile the protofiles for web client 
compile_for_ts_client:
    #!/bin/bash
    protoc -I=. proto/*.proto \
    --js_out=import_style=commonjs:grpc_web \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:grpc_web \
    
## compile for rust client
compile_for_rs_client:
    cargo build

compile target:
    @just compile_for_{{target}}_client


# Define the task to parse proto files and generate type attributes
generate_attributes:
    #!/bin/bash
    # Use bash to find all .proto files, parse message types, and generate type attributes
    sh -c '
    for proto_file in $(find . -name "*.proto"); do
        echo "// Processing $proto_file..."
        while IFS= read -r line; do
            # Check for message definitions
            if [[ $line =~ ^message[[:space:]]+([A-Za-z0-9_]+) ]]; then
                msg_type="${BASH_REMATCH[1]}"
                echo ".type_attribute(\"$msg_type\", \"#[derive(serde::Deserialize, ts_rs::TS, serde::Serialize)]\")"
                echo ".type_attribute(\"$msg_type\", \"#[ts(export)]\")"
            fi
        done < "$proto_file"
    done
    '





compile_for_all_client:
    just compile_for_rs_client
    just compile_for_ts_client
    just generate_attributes
    just generate_ts_exports
