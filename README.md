# # Mobile Vault gRPC codegen

- [Description](#description)
- [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
  - [Executing program](#executing-program)
- [Documentation](#documentation)

## Description

Mobile vault gRPC protobuf files and the generated code

## Getting Started

### Dependencies

[Rust](https://rust-lang.org) [NodeJs](https://nodejs.org)
[Protobuf](https://github.com/protocolbuffers/protobuf/releases)
[protoc-gen-grpc-web](https://github.com/grpc/grpc-web?tab=readme-ov-file)
[Gp proto gen]()

### Installing

1. install protobuf

```sh
brew install protobuf
```

2. Install Protobuf-javascript (protoc-gen-js)

```sh
npm install -g protoc-gen-js
```

3. Install gRPC-Web Code Generator

```sh
sudo mv protoc-gen-grpc-web-1.5.0-darwin-aarch64 \
    /usr/local/bin/protoc-gen-grpc-web

chmod +x /usr/local/bin/protoc-gen-grpc-web
```
4. Install 
## Usage

### Use in a Typescript project

```sh
npm i git://github.com/opeolluwa/vault_grpc#v0.7.5
```

### Use in a Rust project

```shell
cargo add --tag v0.8.4 --git https://github.com/opeolluwa/bookmark_grpc_codegen --no-default-features  -F server 
```
