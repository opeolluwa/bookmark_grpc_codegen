// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: authentication.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package authentication;

@kotlin.jvm.JvmName("-initializesignUpRequest")
public inline fun signUpRequest(block: authentication.SignUpRequestKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.SignUpRequest =
  authentication.SignUpRequestKt.Dsl._create(authentication.AuthenticationOuterClass.SignUpRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `authentication.SignUpRequest`
 */
public object SignUpRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: authentication.AuthenticationOuterClass.SignUpRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: authentication.AuthenticationOuterClass.SignUpRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): authentication.AuthenticationOuterClass.SignUpRequest = _builder.build()

    /**
     * `string email = 1;`
     */
    public var email: kotlin.String
      @JvmName("getEmail")
      get() = _builder.email
      @JvmName("setEmail")
      set(value) {
        _builder.email = value
      }
    /**
     * `string email = 1;`
     */
    public fun clearEmail() {
      _builder.clearEmail()
    }

    /**
     * `string password = 2;`
     */
    public var password: kotlin.String
      @JvmName("getPassword")
      get() = _builder.password
      @JvmName("setPassword")
      set(value) {
        _builder.password = value
      }
    /**
     * `string password = 2;`
     */
    public fun clearPassword() {
      _builder.clearPassword()
    }

    /**
     * `string first_name = 3;`
     */
    public var firstName: kotlin.String
      @JvmName("getFirstName")
      get() = _builder.firstName
      @JvmName("setFirstName")
      set(value) {
        _builder.firstName = value
      }
    /**
     * `string first_name = 3;`
     */
    public fun clearFirstName() {
      _builder.clearFirstName()
    }

    /**
     * `string last_name = 4;`
     */
    public var lastName: kotlin.String
      @JvmName("getLastName")
      get() = _builder.lastName
      @JvmName("setLastName")
      set(value) {
        _builder.lastName = value
      }
    /**
     * `string last_name = 4;`
     */
    public fun clearLastName() {
      _builder.clearLastName()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun authentication.AuthenticationOuterClass.SignUpRequest.copy(block: `authentication`.SignUpRequestKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.SignUpRequest =
  `authentication`.SignUpRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

