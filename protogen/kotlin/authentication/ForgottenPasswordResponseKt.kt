// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: authentication.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package authentication;

@kotlin.jvm.JvmName("-initializeforgottenPasswordResponse")
public inline fun forgottenPasswordResponse(block: authentication.ForgottenPasswordResponseKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.ForgottenPasswordResponse =
  authentication.ForgottenPasswordResponseKt.Dsl._create(authentication.AuthenticationOuterClass.ForgottenPasswordResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `authentication.ForgottenPasswordResponse`
 */
public object ForgottenPasswordResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: authentication.AuthenticationOuterClass.ForgottenPasswordResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: authentication.AuthenticationOuterClass.ForgottenPasswordResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): authentication.AuthenticationOuterClass.ForgottenPasswordResponse = _builder.build()

    /**
     * `.authentication.Status status = 1;`
     */
    public var status: authentication.AuthenticationOuterClass.Status
      @JvmName("getStatus")
      get() = _builder.status
      @JvmName("setStatus")
      set(value) {
        _builder.status = value
      }
    public var statusValue: kotlin.Int
      @JvmName("getStatusValue")
      get() = _builder.statusValue
      @JvmName("setStatusValue")
      set(value) {
        _builder.statusValue = value
      }
    /**
     * `.authentication.Status status = 1;`
     */
    public fun clearStatus() {
      _builder.clearStatus()
    }

    /**
     * `string message = 2;`
     */
    public var message: kotlin.String
      @JvmName("getMessage")
      get() = _builder.message
      @JvmName("setMessage")
      set(value) {
        _builder.message = value
      }
    /**
     * `string message = 2;`
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun authentication.AuthenticationOuterClass.ForgottenPasswordResponse.copy(block: `authentication`.ForgottenPasswordResponseKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.ForgottenPasswordResponse =
  `authentication`.ForgottenPasswordResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
