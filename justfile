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


compile_for_all_client:
    just compile_for_rs_client
    just compile_for_ts_client
    just generate_attributes
    just generate_ts_exports


tag tag:
    git add .
    git commit -m "tag({{tag}})"
    git tag -a {{tag}} -m "new tag"
    git push origin {{tag}}