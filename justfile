# justfile

generate_exports:
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
