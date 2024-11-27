[doc('compile proto and generate TS bindings')]
compile:
    #!/bin/bash
    export GOPATH=$HOME/go
    export PATH=$PATH:$GOPATH/bin

    # clear all existing files 
    # rm -rf protogen/*
    # Supported target languages
    for target in cpp kotlin go python
    do 
        echo "Compiling $target..."

        # Ensure the output directory exists
        mkdir -p ./protogen/$target

    # Compile .proto files
    protoc -I=./proto --${target}_out=./protogen/$target ./proto/*.proto 
    done

    ## compile for the API gateway targeting nestjs  
    protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
    --ts_proto_out=protogen/nodejs \
     --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_opt=esModuleInterop=true \
     -I=./proto  ./proto/*.proto 


    #compile rust 
    cargo build

[doc('tag')]
tag tag message:
    git add .
    git commit -m "published a new tag -> ({{tag}})"
    git tag -a {{tag}} -m "{{message}}"
    git push origin {{tag}}


publish:
    #!/bin/bash
    echo "// Auto-generated mod.ts" > protogen/nodejs/mod.ts
    cd protogen/nodejs
    for file in *.ts; do
        if [[ "$file" != "mod.ts" ]]; then
            filename="${file%.ts}"
            echo "export * as ${filename} from './${filename}';" >> mod.ts
        fi
    done
    echo "All TypeScript files have been imported and re-exported in index.ts."



publish-bindings:
    #!/bin/bash
    cargo build 
    echo "// Auto-generated mod.ts" > bindings/index.ts
    cd bindings
    for file in *.ts; do
        if [[ "$file" != "mod.ts" ]]; then
            filename="${file%.ts}"
            echo "export * as ${filename} from './${filename}';" >> index.ts
        fi
    done
    echo "All TypeScript files have been imported and re-exported in index.ts."
