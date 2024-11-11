/**
 * @fileoverview gRPC-Web generated client stub for vault
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: proto/vaults.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_vaults_pb from '../proto/vaults_pb'; // proto import: "proto/vaults.proto"


export class VaultManagerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateNewVault = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/CreateNewVault',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.NewVaultRequest,
    proto_vaults_pb.NewVaultResponse,
    (request: proto_vaults_pb.NewVaultRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.NewVaultResponse.deserializeBinary
  );

  createNewVault(
    request: proto_vaults_pb.NewVaultRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.NewVaultResponse>;

  createNewVault(
    request: proto_vaults_pb.NewVaultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.NewVaultResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.NewVaultResponse>;

  createNewVault(
    request: proto_vaults_pb.NewVaultRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.NewVaultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/CreateNewVault',
        request,
        metadata || {},
        this.methodDescriptorCreateNewVault,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/CreateNewVault',
    request,
    metadata || {},
    this.methodDescriptorCreateNewVault);
  }

  methodDescriptorGetVault = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/GetVault',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.GetVaultRequest,
    proto_vaults_pb.GetVaultResponse,
    (request: proto_vaults_pb.GetVaultRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.GetVaultResponse.deserializeBinary
  );

  getVault(
    request: proto_vaults_pb.GetVaultRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.GetVaultResponse>;

  getVault(
    request: proto_vaults_pb.GetVaultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.GetVaultResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.GetVaultResponse>;

  getVault(
    request: proto_vaults_pb.GetVaultRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.GetVaultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/GetVault',
        request,
        metadata || {},
        this.methodDescriptorGetVault,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/GetVault',
    request,
    metadata || {},
    this.methodDescriptorGetVault);
  }

  methodDescriptorUpdateVault = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/UpdateVault',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.UpdateVaultRequest,
    proto_vaults_pb.GetVaultResponse,
    (request: proto_vaults_pb.UpdateVaultRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.GetVaultResponse.deserializeBinary
  );

  updateVault(
    request: proto_vaults_pb.UpdateVaultRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.GetVaultResponse>;

  updateVault(
    request: proto_vaults_pb.UpdateVaultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.GetVaultResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.GetVaultResponse>;

  updateVault(
    request: proto_vaults_pb.UpdateVaultRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.GetVaultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/UpdateVault',
        request,
        metadata || {},
        this.methodDescriptorUpdateVault,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/UpdateVault',
    request,
    metadata || {},
    this.methodDescriptorUpdateVault);
  }

  methodDescriptorDeleteVault = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/DeleteVault',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.DeleteVaultRequest,
    proto_vaults_pb.DeleteVaultResponse,
    (request: proto_vaults_pb.DeleteVaultRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.DeleteVaultResponse.deserializeBinary
  );

  deleteVault(
    request: proto_vaults_pb.DeleteVaultRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.DeleteVaultResponse>;

  deleteVault(
    request: proto_vaults_pb.DeleteVaultRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.DeleteVaultResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.DeleteVaultResponse>;

  deleteVault(
    request: proto_vaults_pb.DeleteVaultRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.DeleteVaultResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/DeleteVault',
        request,
        metadata || {},
        this.methodDescriptorDeleteVault,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/DeleteVault',
    request,
    metadata || {},
    this.methodDescriptorDeleteVault);
  }

  methodDescriptorListVaults = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/ListVaults',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.ListVaultsRequest,
    proto_vaults_pb.ListVaultsResponse,
    (request: proto_vaults_pb.ListVaultsRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.ListVaultsResponse.deserializeBinary
  );

  listVaults(
    request: proto_vaults_pb.ListVaultsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.ListVaultsResponse>;

  listVaults(
    request: proto_vaults_pb.ListVaultsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.ListVaultsResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.ListVaultsResponse>;

  listVaults(
    request: proto_vaults_pb.ListVaultsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.ListVaultsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/ListVaults',
        request,
        metadata || {},
        this.methodDescriptorListVaults,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/ListVaults',
    request,
    metadata || {},
    this.methodDescriptorListVaults);
  }

  methodDescriptorListVaultEntries = new grpcWeb.MethodDescriptor(
    '/vault.VaultManager/ListVaultEntries',
    grpcWeb.MethodType.UNARY,
    proto_vaults_pb.ListVaultEntryRequest,
    proto_vaults_pb.ListVaultEntryResponse,
    (request: proto_vaults_pb.ListVaultEntryRequest) => {
      return request.serializeBinary();
    },
    proto_vaults_pb.ListVaultEntryResponse.deserializeBinary
  );

  listVaultEntries(
    request: proto_vaults_pb.ListVaultEntryRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_vaults_pb.ListVaultEntryResponse>;

  listVaultEntries(
    request: proto_vaults_pb.ListVaultEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.ListVaultEntryResponse) => void): grpcWeb.ClientReadableStream<proto_vaults_pb.ListVaultEntryResponse>;

  listVaultEntries(
    request: proto_vaults_pb.ListVaultEntryRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_vaults_pb.ListVaultEntryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/vault.VaultManager/ListVaultEntries',
        request,
        metadata || {},
        this.methodDescriptorListVaultEntries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/vault.VaultManager/ListVaultEntries',
    request,
    metadata || {},
    this.methodDescriptorListVaultEntries);
  }

}
