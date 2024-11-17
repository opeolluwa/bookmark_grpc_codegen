// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bookmark_collections.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package BookmarkCollection;

@kotlin.jvm.JvmName("-initializebookmarkCollection")
public inline fun bookmarkCollection(block: BookmarkCollection.BookmarkCollectionKt.Dsl.() -> kotlin.Unit): BookmarkCollection.BookmarkCollections.BookmarkCollection =
  BookmarkCollection.BookmarkCollectionKt.Dsl._create(BookmarkCollection.BookmarkCollections.BookmarkCollection.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `BookmarkCollection.BookmarkCollection`
 */
public object BookmarkCollectionKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: BookmarkCollection.BookmarkCollections.BookmarkCollection.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: BookmarkCollection.BookmarkCollections.BookmarkCollection.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): BookmarkCollection.BookmarkCollections.BookmarkCollection = _builder.build()

    /**
     * `string BookmarkCollection_id = 1;`
     */
    public var bookmarkCollectionId: kotlin.String
      @JvmName("getBookmarkCollectionId")
      get() = _builder.bookmarkCollectionId
      @JvmName("setBookmarkCollectionId")
      set(value) {
        _builder.bookmarkCollectionId = value
      }
    /**
     * `string BookmarkCollection_id = 1;`
     */
    public fun clearBookmarkCollectionId() {
      _builder.clearBookmarkCollectionId()
    }

    /**
     * `string name = 2;`
     */
    public var name: kotlin.String
      @JvmName("getName")
      get() = _builder.name
      @JvmName("setName")
      set(value) {
        _builder.name = value
      }
    /**
     * `string name = 2;`
     */
    public fun clearName() {
      _builder.clearName()
    }

    /**
     * `string description = 3;`
     */
    public var description: kotlin.String
      @JvmName("getDescription")
      get() = _builder.description
      @JvmName("setDescription")
      set(value) {
        _builder.description = value
      }
    /**
     * `string description = 3;`
     */
    public fun clearDescription() {
      _builder.clearDescription()
    }

    /**
     * `string created_at = 4;`
     */
    public var createdAt: kotlin.String
      @JvmName("getCreatedAt")
      get() = _builder.createdAt
      @JvmName("setCreatedAt")
      set(value) {
        _builder.createdAt = value
      }
    /**
     * `string created_at = 4;`
     */
    public fun clearCreatedAt() {
      _builder.clearCreatedAt()
    }

    /**
     * `string updated_at = 5;`
     */
    public var updatedAt: kotlin.String
      @JvmName("getUpdatedAt")
      get() = _builder.updatedAt
      @JvmName("setUpdatedAt")
      set(value) {
        _builder.updatedAt = value
      }
    /**
     * `string updated_at = 5;`
     */
    public fun clearUpdatedAt() {
      _builder.clearUpdatedAt()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun BookmarkCollection.BookmarkCollections.BookmarkCollection.copy(block: `BookmarkCollection`.BookmarkCollectionKt.Dsl.() -> kotlin.Unit): BookmarkCollection.BookmarkCollections.BookmarkCollection =
  `BookmarkCollection`.BookmarkCollectionKt.Dsl._create(this.toBuilder()).apply { block() }._build()
