
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DoctorProfile
 * 
 */
export type DoctorProfile = $Result.DefaultSelection<Prisma.$DoctorProfilePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model ConsultationNote
 * 
 */
export type ConsultationNote = $Result.DefaultSelection<Prisma.$ConsultationNotePayload>
/**
 * Model GameProgress
 * 
 */
export type GameProgress = $Result.DefaultSelection<Prisma.$GameProgressPayload>
/**
 * Model MoodLog
 * 
 */
export type MoodLog = $Result.DefaultSelection<Prisma.$MoodLogPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CommunityGroup
 * 
 */
export type CommunityGroup = $Result.DefaultSelection<Prisma.$CommunityGroupPayload>
/**
 * Model CommunityPost
 * 
 */
export type CommunityPost = $Result.DefaultSelection<Prisma.$CommunityPostPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  DOCTOR: 'DOCTOR',
  ADMIN: 'ADMIN',
  CAREGIVER: 'CAREGIVER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const NotificationType: {
  APPOINTMENT_REMINDER: 'APPOINTMENT_REMINDER',
  APPOINTMENT_CONFIRMED: 'APPOINTMENT_CONFIRMED',
  APPOINTMENT_CANCELLED: 'APPOINTMENT_CANCELLED',
  NEW_BLOG_POST: 'NEW_BLOG_POST',
  COMMUNITY_REPLY: 'COMMUNITY_REPLY'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorProfile`: Exposes CRUD operations for the **DoctorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorProfiles
    * const doctorProfiles = await prisma.doctorProfile.findMany()
    * ```
    */
  get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationNote`: Exposes CRUD operations for the **ConsultationNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationNotes
    * const consultationNotes = await prisma.consultationNote.findMany()
    * ```
    */
  get consultationNote(): Prisma.ConsultationNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameProgress`: Exposes CRUD operations for the **GameProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameProgresses
    * const gameProgresses = await prisma.gameProgress.findMany()
    * ```
    */
  get gameProgress(): Prisma.GameProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodLog`: Exposes CRUD operations for the **MoodLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodLogs
    * const moodLogs = await prisma.moodLog.findMany()
    * ```
    */
  get moodLog(): Prisma.MoodLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityGroup`: Exposes CRUD operations for the **CommunityGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityGroups
    * const communityGroups = await prisma.communityGroup.findMany()
    * ```
    */
  get communityGroup(): Prisma.CommunityGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityPosts
    * const communityPosts = await prisma.communityPost.findMany()
    * ```
    */
  get communityPost(): Prisma.CommunityPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DoctorProfile: 'DoctorProfile',
    Appointment: 'Appointment',
    ConsultationNote: 'ConsultationNote',
    GameProgress: 'GameProgress',
    MoodLog: 'MoodLog',
    BlogPost: 'BlogPost',
    Comment: 'Comment',
    CommunityGroup: 'CommunityGroup',
    CommunityPost: 'CommunityPost',
    Resource: 'Resource',
    Notification: 'Notification',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "doctorProfile" | "appointment" | "consultationNote" | "gameProgress" | "moodLog" | "blogPost" | "comment" | "communityGroup" | "communityPost" | "resource" | "notification" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DoctorProfile: {
        payload: Prisma.$DoctorProfilePayload<ExtArgs>
        fields: Prisma.DoctorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findFirst: {
            args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          findMany: {
            args: Prisma.DoctorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          create: {
            args: Prisma.DoctorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          createMany: {
            args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          delete: {
            args: Prisma.DoctorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          update: {
            args: Prisma.DoctorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          deleteMany: {
            args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[]
          }
          upsert: {
            args: Prisma.DoctorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorProfilePayload>
          }
          aggregate: {
            args: Prisma.DoctorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorProfile>
          }
          groupBy: {
            args: Prisma.DoctorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorProfileCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      ConsultationNote: {
        payload: Prisma.$ConsultationNotePayload<ExtArgs>
        fields: Prisma.ConsultationNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          findFirst: {
            args: Prisma.ConsultationNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          findMany: {
            args: Prisma.ConsultationNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>[]
          }
          create: {
            args: Prisma.ConsultationNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          createMany: {
            args: Prisma.ConsultationNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>[]
          }
          delete: {
            args: Prisma.ConsultationNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          update: {
            args: Prisma.ConsultationNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          deleteMany: {
            args: Prisma.ConsultationNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>[]
          }
          upsert: {
            args: Prisma.ConsultationNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationNotePayload>
          }
          aggregate: {
            args: Prisma.ConsultationNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationNote>
          }
          groupBy: {
            args: Prisma.ConsultationNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationNoteCountAggregateOutputType> | number
          }
        }
      }
      GameProgress: {
        payload: Prisma.$GameProgressPayload<ExtArgs>
        fields: Prisma.GameProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          findFirst: {
            args: Prisma.GameProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          findMany: {
            args: Prisma.GameProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>[]
          }
          create: {
            args: Prisma.GameProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          createMany: {
            args: Prisma.GameProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>[]
          }
          delete: {
            args: Prisma.GameProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          update: {
            args: Prisma.GameProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          deleteMany: {
            args: Prisma.GameProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>[]
          }
          upsert: {
            args: Prisma.GameProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameProgressPayload>
          }
          aggregate: {
            args: Prisma.GameProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameProgress>
          }
          groupBy: {
            args: Prisma.GameProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameProgressCountArgs<ExtArgs>
            result: $Utils.Optional<GameProgressCountAggregateOutputType> | number
          }
        }
      }
      MoodLog: {
        payload: Prisma.$MoodLogPayload<ExtArgs>
        fields: Prisma.MoodLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          findFirst: {
            args: Prisma.MoodLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          findMany: {
            args: Prisma.MoodLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>[]
          }
          create: {
            args: Prisma.MoodLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          createMany: {
            args: Prisma.MoodLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>[]
          }
          delete: {
            args: Prisma.MoodLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          update: {
            args: Prisma.MoodLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          deleteMany: {
            args: Prisma.MoodLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>[]
          }
          upsert: {
            args: Prisma.MoodLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodLogPayload>
          }
          aggregate: {
            args: Prisma.MoodLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodLog>
          }
          groupBy: {
            args: Prisma.MoodLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodLogCountArgs<ExtArgs>
            result: $Utils.Optional<MoodLogCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CommunityGroup: {
        payload: Prisma.$CommunityGroupPayload<ExtArgs>
        fields: Prisma.CommunityGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          findFirst: {
            args: Prisma.CommunityGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          findMany: {
            args: Prisma.CommunityGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>[]
          }
          create: {
            args: Prisma.CommunityGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          createMany: {
            args: Prisma.CommunityGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>[]
          }
          delete: {
            args: Prisma.CommunityGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          update: {
            args: Prisma.CommunityGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          deleteMany: {
            args: Prisma.CommunityGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>[]
          }
          upsert: {
            args: Prisma.CommunityGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityGroupPayload>
          }
          aggregate: {
            args: Prisma.CommunityGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityGroup>
          }
          groupBy: {
            args: Prisma.CommunityGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityGroupCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupCountAggregateOutputType> | number
          }
        }
      }
      CommunityPost: {
        payload: Prisma.$CommunityPostPayload<ExtArgs>
        fields: Prisma.CommunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findFirst: {
            args: Prisma.CommunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findMany: {
            args: Prisma.CommunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          create: {
            args: Prisma.CommunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          createMany: {
            args: Prisma.CommunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          delete: {
            args: Prisma.CommunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          update: {
            args: Prisma.CommunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          deleteMany: {
            args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          upsert: {
            args: Prisma.CommunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          aggregate: {
            args: Prisma.CommunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityPost>
          }
          groupBy: {
            args: Prisma.CommunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    doctorProfile?: DoctorProfileOmit
    appointment?: AppointmentOmit
    consultationNote?: ConsultationNoteOmit
    gameProgress?: GameProgressOmit
    moodLog?: MoodLogOmit
    blogPost?: BlogPostOmit
    comment?: CommentOmit
    communityGroup?: CommunityGroupOmit
    communityPost?: CommunityPostOmit
    resource?: ResourceOmit
    notification?: NotificationOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    blogPosts: number
    comments: number
    communityPosts: number
    moodLogs: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPosts?: boolean | UserCountOutputTypeCountBlogPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    communityPosts?: boolean | UserCountOutputTypeCountCommunityPostsArgs
    moodLogs?: boolean | UserCountOutputTypeCountMoodLogsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMoodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DoctorProfileCountOutputType
   */

  export type DoctorProfileCountOutputType = {
    appointments: number
    consultationNotes: number
    reviews: number
  }

  export type DoctorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorProfileCountOutputTypeCountAppointmentsArgs
    consultationNotes?: boolean | DoctorProfileCountOutputTypeCountConsultationNotesArgs
    reviews?: boolean | DoctorProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfileCountOutputType
     */
    select?: DoctorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountConsultationNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationNoteWhereInput
  }

  /**
   * DoctorProfileCountOutputType without action
   */
  export type DoctorProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    comments: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BlogPostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommunityGroupCountOutputType
   */

  export type CommunityGroupCountOutputType = {
    posts: number
  }

  export type CommunityGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CommunityGroupCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CommunityGroupCountOutputType without action
   */
  export type CommunityGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroupCountOutputType
     */
    select?: CommunityGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityGroupCountOutputType without action
   */
  export type CommunityGroupCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    diagnosisLevel: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    role: $Enums.UserRole | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    diagnosisLevel: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    role: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    isActive: number
    diagnosisLevel: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    diagnosisLevel?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    diagnosisLevel?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    diagnosisLevel?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    fullName: string
    role: $Enums.UserRole
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    diagnosisLevel: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    diagnosisLevel?: boolean
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    moodLogs?: boolean | User$moodLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    diagnosisLevel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    diagnosisLevel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    diagnosisLevel?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "role" | "avatarUrl" | "createdAt" | "updatedAt" | "isActive" | "diagnosisLevel", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    blogPosts?: boolean | User$blogPostsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    moodLogs?: boolean | User$moodLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs> | null
      blogPosts: Prisma.$BlogPostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      communityPosts: Prisma.$CommunityPostPayload<ExtArgs>[]
      moodLogs: Prisma.$MoodLogPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      role: $Enums.UserRole
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      isActive: boolean
      diagnosisLevel: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorProfile<T extends User$doctorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfileArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blogPosts<T extends User$blogPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communityPosts<T extends User$communityPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$communityPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moodLogs<T extends User$moodLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$moodLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly diagnosisLevel: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.doctorProfile
   */
  export type User$doctorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    where?: DoctorProfileWhereInput
  }

  /**
   * User.blogPosts
   */
  export type User$blogPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.communityPosts
   */
  export type User$communityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * User.moodLogs
   */
  export type User$moodLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    where?: MoodLogWhereInput
    orderBy?: MoodLogOrderByWithRelationInput | MoodLogOrderByWithRelationInput[]
    cursor?: MoodLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodLogScalarFieldEnum | MoodLogScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DoctorProfile
   */

  export type AggregateDoctorProfile = {
    _count: DoctorProfileCountAggregateOutputType | null
    _avg: DoctorProfileAvgAggregateOutputType | null
    _sum: DoctorProfileSumAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  export type DoctorProfileAvgAggregateOutputType = {
    fee: Decimal | null
    rating: Decimal | null
    totalReviews: number | null
  }

  export type DoctorProfileSumAggregateOutputType = {
    fee: Decimal | null
    rating: Decimal | null
    totalReviews: number | null
  }

  export type DoctorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialty: string | null
    licenseNumber: string | null
    bio: string | null
    fee: Decimal | null
    isApproved: boolean | null
    rating: Decimal | null
    totalReviews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialty: string | null
    licenseNumber: string | null
    bio: string | null
    fee: Decimal | null
    isApproved: boolean | null
    rating: Decimal | null
    totalReviews: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialty: number
    licenseNumber: number
    bio: number
    languages: number
    fee: number
    isApproved: number
    rating: number
    totalReviews: number
    availabilityJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorProfileAvgAggregateInputType = {
    fee?: true
    rating?: true
    totalReviews?: true
  }

  export type DoctorProfileSumAggregateInputType = {
    fee?: true
    rating?: true
    totalReviews?: true
  }

  export type DoctorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNumber?: true
    bio?: true
    fee?: true
    isApproved?: true
    rating?: true
    totalReviews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNumber?: true
    bio?: true
    fee?: true
    isApproved?: true
    rating?: true
    totalReviews?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialty?: true
    licenseNumber?: true
    bio?: true
    languages?: true
    fee?: true
    isApproved?: true
    rating?: true
    totalReviews?: true
    availabilityJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfile to aggregate.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorProfiles
    **/
    _count?: true | DoctorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type GetDoctorProfileAggregateType<T extends DoctorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorProfile[P]>
      : GetScalarType<T[P], AggregateDoctorProfile[P]>
  }




  export type DoctorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorProfileWhereInput
    orderBy?: DoctorProfileOrderByWithAggregationInput | DoctorProfileOrderByWithAggregationInput[]
    by: DoctorProfileScalarFieldEnum[] | DoctorProfileScalarFieldEnum
    having?: DoctorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorProfileCountAggregateInputType | true
    _avg?: DoctorProfileAvgAggregateInputType
    _sum?: DoctorProfileSumAggregateInputType
    _min?: DoctorProfileMinAggregateInputType
    _max?: DoctorProfileMaxAggregateInputType
  }

  export type DoctorProfileGroupByOutputType = {
    id: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages: string[]
    fee: Decimal
    isApproved: boolean
    rating: Decimal
    totalReviews: number
    availabilityJson: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: DoctorProfileCountAggregateOutputType | null
    _avg: DoctorProfileAvgAggregateOutputType | null
    _sum: DoctorProfileSumAggregateOutputType | null
    _min: DoctorProfileMinAggregateOutputType | null
    _max: DoctorProfileMaxAggregateOutputType | null
  }

  type GetDoctorProfileGroupByPayload<T extends DoctorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorProfileGroupByOutputType[P]>
        }
      >
    >


  export type DoctorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    bio?: boolean
    languages?: boolean
    fee?: boolean
    isApproved?: boolean
    rating?: boolean
    totalReviews?: boolean
    availabilityJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | DoctorProfile$appointmentsArgs<ExtArgs>
    consultationNotes?: boolean | DoctorProfile$consultationNotesArgs<ExtArgs>
    reviews?: boolean | DoctorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    bio?: boolean
    languages?: boolean
    fee?: boolean
    isApproved?: boolean
    rating?: boolean
    totalReviews?: boolean
    availabilityJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    bio?: boolean
    languages?: boolean
    fee?: boolean
    isApproved?: boolean
    rating?: boolean
    totalReviews?: boolean
    availabilityJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorProfile"]>

  export type DoctorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    bio?: boolean
    languages?: boolean
    fee?: boolean
    isApproved?: boolean
    rating?: boolean
    totalReviews?: boolean
    availabilityJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialty" | "licenseNumber" | "bio" | "languages" | "fee" | "isApproved" | "rating" | "totalReviews" | "availabilityJson" | "createdAt" | "updatedAt", ExtArgs["result"]["doctorProfile"]>
  export type DoctorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | DoctorProfile$appointmentsArgs<ExtArgs>
    consultationNotes?: boolean | DoctorProfile$consultationNotesArgs<ExtArgs>
    reviews?: boolean | DoctorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | DoctorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      consultationNotes: Prisma.$ConsultationNotePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialty: string
      licenseNumber: string
      bio: string
      languages: string[]
      fee: Prisma.Decimal
      isApproved: boolean
      rating: Prisma.Decimal
      totalReviews: number
      availabilityJson: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctorProfile"]>
    composites: {}
  }

  type DoctorProfileGetPayload<S extends boolean | null | undefined | DoctorProfileDefaultArgs> = $Result.GetResult<Prisma.$DoctorProfilePayload, S>

  type DoctorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorProfileCountAggregateInputType | true
    }

  export interface DoctorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorProfile'], meta: { name: 'DoctorProfile' } }
    /**
     * Find zero or one DoctorProfile that matches the filter.
     * @param {DoctorProfileFindUniqueArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorProfileFindUniqueArgs>(args: SelectSubset<T, DoctorProfileFindUniqueArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorProfileFindUniqueOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorProfileFindFirstArgs>(args?: SelectSubset<T, DoctorProfileFindFirstArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindFirstOrThrowArgs} args - Arguments to find a DoctorProfile
     * @example
     * // Get one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany()
     * 
     * // Get first 10 DoctorProfiles
     * const doctorProfiles = await prisma.doctorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorProfileFindManyArgs>(args?: SelectSubset<T, DoctorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorProfile.
     * @param {DoctorProfileCreateArgs} args - Arguments to create a DoctorProfile.
     * @example
     * // Create one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.create({
     *   data: {
     *     // ... data to create a DoctorProfile
     *   }
     * })
     * 
     */
    create<T extends DoctorProfileCreateArgs>(args: SelectSubset<T, DoctorProfileCreateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorProfiles.
     * @param {DoctorProfileCreateManyArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorProfileCreateManyArgs>(args?: SelectSubset<T, DoctorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorProfiles and returns the data saved in the database.
     * @param {DoctorProfileCreateManyAndReturnArgs} args - Arguments to create many DoctorProfiles.
     * @example
     * // Create many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorProfile.
     * @param {DoctorProfileDeleteArgs} args - Arguments to delete one DoctorProfile.
     * @example
     * // Delete one DoctorProfile
     * const DoctorProfile = await prisma.doctorProfile.delete({
     *   where: {
     *     // ... filter to delete one DoctorProfile
     *   }
     * })
     * 
     */
    delete<T extends DoctorProfileDeleteArgs>(args: SelectSubset<T, DoctorProfileDeleteArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorProfile.
     * @param {DoctorProfileUpdateArgs} args - Arguments to update one DoctorProfile.
     * @example
     * // Update one DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorProfileUpdateArgs>(args: SelectSubset<T, DoctorProfileUpdateArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorProfiles.
     * @param {DoctorProfileDeleteManyArgs} args - Arguments to filter DoctorProfiles to delete.
     * @example
     * // Delete a few DoctorProfiles
     * const { count } = await prisma.doctorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorProfileDeleteManyArgs>(args?: SelectSubset<T, DoctorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorProfileUpdateManyArgs>(args: SelectSubset<T, DoctorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorProfiles and returns the data updated in the database.
     * @param {DoctorProfileUpdateManyAndReturnArgs} args - Arguments to update many DoctorProfiles.
     * @example
     * // Update many DoctorProfiles
     * const doctorProfile = await prisma.doctorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorProfiles and only return the `id`
     * const doctorProfileWithIdOnly = await prisma.doctorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorProfile.
     * @param {DoctorProfileUpsertArgs} args - Arguments to update or create a DoctorProfile.
     * @example
     * // Update or create a DoctorProfile
     * const doctorProfile = await prisma.doctorProfile.upsert({
     *   create: {
     *     // ... data to create a DoctorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorProfile we want to update
     *   }
     * })
     */
    upsert<T extends DoctorProfileUpsertArgs>(args: SelectSubset<T, DoctorProfileUpsertArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileCountArgs} args - Arguments to filter DoctorProfiles to count.
     * @example
     * // Count the number of DoctorProfiles
     * const count = await prisma.doctorProfile.count({
     *   where: {
     *     // ... the filter for the DoctorProfiles we want to count
     *   }
     * })
    **/
    count<T extends DoctorProfileCountArgs>(
      args?: Subset<T, DoctorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorProfileAggregateArgs>(args: Subset<T, DoctorProfileAggregateArgs>): Prisma.PrismaPromise<GetDoctorProfileAggregateType<T>>

    /**
     * Group by DoctorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorProfileGroupByArgs['orderBy'] }
        : { orderBy?: DoctorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorProfile model
   */
  readonly fields: DoctorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends DoctorProfile$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultationNotes<T extends DoctorProfile$consultationNotesArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$consultationNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends DoctorProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorProfile model
   */
  interface DoctorProfileFieldRefs {
    readonly id: FieldRef<"DoctorProfile", 'String'>
    readonly userId: FieldRef<"DoctorProfile", 'String'>
    readonly specialty: FieldRef<"DoctorProfile", 'String'>
    readonly licenseNumber: FieldRef<"DoctorProfile", 'String'>
    readonly bio: FieldRef<"DoctorProfile", 'String'>
    readonly languages: FieldRef<"DoctorProfile", 'String[]'>
    readonly fee: FieldRef<"DoctorProfile", 'Decimal'>
    readonly isApproved: FieldRef<"DoctorProfile", 'Boolean'>
    readonly rating: FieldRef<"DoctorProfile", 'Decimal'>
    readonly totalReviews: FieldRef<"DoctorProfile", 'Int'>
    readonly availabilityJson: FieldRef<"DoctorProfile", 'Json'>
    readonly createdAt: FieldRef<"DoctorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorProfile findUnique
   */
  export type DoctorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findUniqueOrThrow
   */
  export type DoctorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile findFirst
   */
  export type DoctorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findFirstOrThrow
   */
  export type DoctorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfile to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile findMany
   */
  export type DoctorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter, which DoctorProfiles to fetch.
     */
    where?: DoctorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorProfiles to fetch.
     */
    orderBy?: DoctorProfileOrderByWithRelationInput | DoctorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorProfiles.
     */
    cursor?: DoctorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorProfiles.
     */
    distinct?: DoctorProfileScalarFieldEnum | DoctorProfileScalarFieldEnum[]
  }

  /**
   * DoctorProfile create
   */
  export type DoctorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorProfile.
     */
    data: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
  }

  /**
   * DoctorProfile createMany
   */
  export type DoctorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorProfile createManyAndReturn
   */
  export type DoctorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorProfiles.
     */
    data: DoctorProfileCreateManyInput | DoctorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile update
   */
  export type DoctorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorProfile.
     */
    data: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
    /**
     * Choose, which DoctorProfile to update.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile updateMany
   */
  export type DoctorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
  }

  /**
   * DoctorProfile updateManyAndReturn
   */
  export type DoctorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * The data used to update DoctorProfiles.
     */
    data: XOR<DoctorProfileUpdateManyMutationInput, DoctorProfileUncheckedUpdateManyInput>
    /**
     * Filter which DoctorProfiles to update
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorProfile upsert
   */
  export type DoctorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorProfile to update in case it exists.
     */
    where: DoctorProfileWhereUniqueInput
    /**
     * In case the DoctorProfile found by the `where` argument doesn't exist, create a new DoctorProfile with this data.
     */
    create: XOR<DoctorProfileCreateInput, DoctorProfileUncheckedCreateInput>
    /**
     * In case the DoctorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorProfileUpdateInput, DoctorProfileUncheckedUpdateInput>
  }

  /**
   * DoctorProfile delete
   */
  export type DoctorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
    /**
     * Filter which DoctorProfile to delete.
     */
    where: DoctorProfileWhereUniqueInput
  }

  /**
   * DoctorProfile deleteMany
   */
  export type DoctorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorProfiles to delete
     */
    where?: DoctorProfileWhereInput
    /**
     * Limit how many DoctorProfiles to delete.
     */
    limit?: number
  }

  /**
   * DoctorProfile.appointments
   */
  export type DoctorProfile$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * DoctorProfile.consultationNotes
   */
  export type DoctorProfile$consultationNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    where?: ConsultationNoteWhereInput
    orderBy?: ConsultationNoteOrderByWithRelationInput | ConsultationNoteOrderByWithRelationInput[]
    cursor?: ConsultationNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationNoteScalarFieldEnum | ConsultationNoteScalarFieldEnum[]
  }

  /**
   * DoctorProfile.reviews
   */
  export type DoctorProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * DoctorProfile without action
   */
  export type DoctorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorProfile
     */
    select?: DoctorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorProfile
     */
    omit?: DoctorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    durationMins: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    durationMins: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    doctorId: string | null
    scheduledAt: Date | null
    durationMins: number | null
    status: $Enums.AppointmentStatus | null
    sessionType: string | null
    stripePaymentId: string | null
    videoRoomUrl: string | null
    bookingReference: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    doctorId: string | null
    scheduledAt: Date | null
    durationMins: number | null
    status: $Enums.AppointmentStatus | null
    sessionType: string | null
    stripePaymentId: string | null
    videoRoomUrl: string | null
    bookingReference: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    guestName: number
    guestEmail: number
    guestPhone: number
    doctorId: number
    scheduledAt: number
    durationMins: number
    status: number
    sessionType: number
    stripePaymentId: number
    videoRoomUrl: number
    bookingReference: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    durationMins?: true
  }

  export type AppointmentSumAggregateInputType = {
    durationMins?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    doctorId?: true
    scheduledAt?: true
    durationMins?: true
    status?: true
    sessionType?: true
    stripePaymentId?: true
    videoRoomUrl?: true
    bookingReference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    doctorId?: true
    scheduledAt?: true
    durationMins?: true
    status?: true
    sessionType?: true
    stripePaymentId?: true
    videoRoomUrl?: true
    bookingReference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    doctorId?: true
    scheduledAt?: true
    durationMins?: true
    status?: true
    sessionType?: true
    stripePaymentId?: true
    videoRoomUrl?: true
    bookingReference?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    guestName: string
    guestEmail: string
    guestPhone: string
    doctorId: string
    scheduledAt: Date
    durationMins: number
    status: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId: string | null
    videoRoomUrl: string | null
    bookingReference: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    doctorId?: boolean
    scheduledAt?: boolean
    durationMins?: boolean
    status?: boolean
    sessionType?: boolean
    stripePaymentId?: boolean
    videoRoomUrl?: boolean
    bookingReference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    consultationNote?: boolean | Appointment$consultationNoteArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    doctorId?: boolean
    scheduledAt?: boolean
    durationMins?: boolean
    status?: boolean
    sessionType?: boolean
    stripePaymentId?: boolean
    videoRoomUrl?: boolean
    bookingReference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    doctorId?: boolean
    scheduledAt?: boolean
    durationMins?: boolean
    status?: boolean
    sessionType?: boolean
    stripePaymentId?: boolean
    videoRoomUrl?: boolean
    bookingReference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    doctorId?: boolean
    scheduledAt?: boolean
    durationMins?: boolean
    status?: boolean
    sessionType?: boolean
    stripePaymentId?: boolean
    videoRoomUrl?: boolean
    bookingReference?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestName" | "guestEmail" | "guestPhone" | "doctorId" | "scheduledAt" | "durationMins" | "status" | "sessionType" | "stripePaymentId" | "videoRoomUrl" | "bookingReference" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
    consultationNote?: boolean | Appointment$consultationNoteArgs<ExtArgs>
    review?: boolean | Appointment$reviewArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
      consultationNote: Prisma.$ConsultationNotePayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestName: string
      guestEmail: string
      guestPhone: string
      doctorId: string
      scheduledAt: Date
      durationMins: number
      status: $Enums.AppointmentStatus
      sessionType: string
      stripePaymentId: string | null
      videoRoomUrl: string | null
      bookingReference: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultationNote<T extends Appointment$consultationNoteArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$consultationNoteArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends Appointment$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly guestName: FieldRef<"Appointment", 'String'>
    readonly guestEmail: FieldRef<"Appointment", 'String'>
    readonly guestPhone: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly scheduledAt: FieldRef<"Appointment", 'DateTime'>
    readonly durationMins: FieldRef<"Appointment", 'Int'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly sessionType: FieldRef<"Appointment", 'String'>
    readonly stripePaymentId: FieldRef<"Appointment", 'String'>
    readonly videoRoomUrl: FieldRef<"Appointment", 'String'>
    readonly bookingReference: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.consultationNote
   */
  export type Appointment$consultationNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    where?: ConsultationNoteWhereInput
  }

  /**
   * Appointment.review
   */
  export type Appointment$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationNote
   */

  export type AggregateConsultationNote = {
    _count: ConsultationNoteCountAggregateOutputType | null
    _min: ConsultationNoteMinAggregateOutputType | null
    _max: ConsultationNoteMaxAggregateOutputType | null
  }

  export type ConsultationNoteMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    doctorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConsultationNoteMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    doctorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConsultationNoteCountAggregateOutputType = {
    id: number
    appointmentId: number
    doctorId: number
    content: number
    createdAt: number
    _all: number
  }


  export type ConsultationNoteMinAggregateInputType = {
    id?: true
    appointmentId?: true
    doctorId?: true
    content?: true
    createdAt?: true
  }

  export type ConsultationNoteMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    doctorId?: true
    content?: true
    createdAt?: true
  }

  export type ConsultationNoteCountAggregateInputType = {
    id?: true
    appointmentId?: true
    doctorId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationNote to aggregate.
     */
    where?: ConsultationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationNotes to fetch.
     */
    orderBy?: ConsultationNoteOrderByWithRelationInput | ConsultationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationNotes
    **/
    _count?: true | ConsultationNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationNoteMaxAggregateInputType
  }

  export type GetConsultationNoteAggregateType<T extends ConsultationNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationNote[P]>
      : GetScalarType<T[P], AggregateConsultationNote[P]>
  }




  export type ConsultationNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationNoteWhereInput
    orderBy?: ConsultationNoteOrderByWithAggregationInput | ConsultationNoteOrderByWithAggregationInput[]
    by: ConsultationNoteScalarFieldEnum[] | ConsultationNoteScalarFieldEnum
    having?: ConsultationNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationNoteCountAggregateInputType | true
    _min?: ConsultationNoteMinAggregateInputType
    _max?: ConsultationNoteMaxAggregateInputType
  }

  export type ConsultationNoteGroupByOutputType = {
    id: string
    appointmentId: string
    doctorId: string
    content: string
    createdAt: Date
    _count: ConsultationNoteCountAggregateOutputType | null
    _min: ConsultationNoteMinAggregateOutputType | null
    _max: ConsultationNoteMaxAggregateOutputType | null
  }

  type GetConsultationNoteGroupByPayload<T extends ConsultationNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationNoteGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    content?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationNote"]>

  export type ConsultationNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    content?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationNote"]>

  export type ConsultationNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    content?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationNote"]>

  export type ConsultationNoteSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ConsultationNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "doctorId" | "content" | "createdAt", ExtArgs["result"]["consultationNote"]>
  export type ConsultationNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type ConsultationNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type ConsultationNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $ConsultationNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationNote"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      doctorId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["consultationNote"]>
    composites: {}
  }

  type ConsultationNoteGetPayload<S extends boolean | null | undefined | ConsultationNoteDefaultArgs> = $Result.GetResult<Prisma.$ConsultationNotePayload, S>

  type ConsultationNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationNoteCountAggregateInputType | true
    }

  export interface ConsultationNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationNote'], meta: { name: 'ConsultationNote' } }
    /**
     * Find zero or one ConsultationNote that matches the filter.
     * @param {ConsultationNoteFindUniqueArgs} args - Arguments to find a ConsultationNote
     * @example
     * // Get one ConsultationNote
     * const consultationNote = await prisma.consultationNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationNoteFindUniqueArgs>(args: SelectSubset<T, ConsultationNoteFindUniqueArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationNoteFindUniqueOrThrowArgs} args - Arguments to find a ConsultationNote
     * @example
     * // Get one ConsultationNote
     * const consultationNote = await prisma.consultationNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteFindFirstArgs} args - Arguments to find a ConsultationNote
     * @example
     * // Get one ConsultationNote
     * const consultationNote = await prisma.consultationNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationNoteFindFirstArgs>(args?: SelectSubset<T, ConsultationNoteFindFirstArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteFindFirstOrThrowArgs} args - Arguments to find a ConsultationNote
     * @example
     * // Get one ConsultationNote
     * const consultationNote = await prisma.consultationNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationNotes
     * const consultationNotes = await prisma.consultationNote.findMany()
     * 
     * // Get first 10 ConsultationNotes
     * const consultationNotes = await prisma.consultationNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationNoteWithIdOnly = await prisma.consultationNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationNoteFindManyArgs>(args?: SelectSubset<T, ConsultationNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationNote.
     * @param {ConsultationNoteCreateArgs} args - Arguments to create a ConsultationNote.
     * @example
     * // Create one ConsultationNote
     * const ConsultationNote = await prisma.consultationNote.create({
     *   data: {
     *     // ... data to create a ConsultationNote
     *   }
     * })
     * 
     */
    create<T extends ConsultationNoteCreateArgs>(args: SelectSubset<T, ConsultationNoteCreateArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationNotes.
     * @param {ConsultationNoteCreateManyArgs} args - Arguments to create many ConsultationNotes.
     * @example
     * // Create many ConsultationNotes
     * const consultationNote = await prisma.consultationNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationNoteCreateManyArgs>(args?: SelectSubset<T, ConsultationNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationNotes and returns the data saved in the database.
     * @param {ConsultationNoteCreateManyAndReturnArgs} args - Arguments to create many ConsultationNotes.
     * @example
     * // Create many ConsultationNotes
     * const consultationNote = await prisma.consultationNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationNotes and only return the `id`
     * const consultationNoteWithIdOnly = await prisma.consultationNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationNote.
     * @param {ConsultationNoteDeleteArgs} args - Arguments to delete one ConsultationNote.
     * @example
     * // Delete one ConsultationNote
     * const ConsultationNote = await prisma.consultationNote.delete({
     *   where: {
     *     // ... filter to delete one ConsultationNote
     *   }
     * })
     * 
     */
    delete<T extends ConsultationNoteDeleteArgs>(args: SelectSubset<T, ConsultationNoteDeleteArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationNote.
     * @param {ConsultationNoteUpdateArgs} args - Arguments to update one ConsultationNote.
     * @example
     * // Update one ConsultationNote
     * const consultationNote = await prisma.consultationNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationNoteUpdateArgs>(args: SelectSubset<T, ConsultationNoteUpdateArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationNotes.
     * @param {ConsultationNoteDeleteManyArgs} args - Arguments to filter ConsultationNotes to delete.
     * @example
     * // Delete a few ConsultationNotes
     * const { count } = await prisma.consultationNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationNoteDeleteManyArgs>(args?: SelectSubset<T, ConsultationNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationNotes
     * const consultationNote = await prisma.consultationNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationNoteUpdateManyArgs>(args: SelectSubset<T, ConsultationNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationNotes and returns the data updated in the database.
     * @param {ConsultationNoteUpdateManyAndReturnArgs} args - Arguments to update many ConsultationNotes.
     * @example
     * // Update many ConsultationNotes
     * const consultationNote = await prisma.consultationNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationNotes and only return the `id`
     * const consultationNoteWithIdOnly = await prisma.consultationNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationNote.
     * @param {ConsultationNoteUpsertArgs} args - Arguments to update or create a ConsultationNote.
     * @example
     * // Update or create a ConsultationNote
     * const consultationNote = await prisma.consultationNote.upsert({
     *   create: {
     *     // ... data to create a ConsultationNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationNote we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationNoteUpsertArgs>(args: SelectSubset<T, ConsultationNoteUpsertArgs<ExtArgs>>): Prisma__ConsultationNoteClient<$Result.GetResult<Prisma.$ConsultationNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteCountArgs} args - Arguments to filter ConsultationNotes to count.
     * @example
     * // Count the number of ConsultationNotes
     * const count = await prisma.consultationNote.count({
     *   where: {
     *     // ... the filter for the ConsultationNotes we want to count
     *   }
     * })
    **/
    count<T extends ConsultationNoteCountArgs>(
      args?: Subset<T, ConsultationNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationNoteAggregateArgs>(args: Subset<T, ConsultationNoteAggregateArgs>): Prisma.PrismaPromise<GetConsultationNoteAggregateType<T>>

    /**
     * Group by ConsultationNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationNoteGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationNote model
   */
  readonly fields: ConsultationNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationNote model
   */
  interface ConsultationNoteFieldRefs {
    readonly id: FieldRef<"ConsultationNote", 'String'>
    readonly appointmentId: FieldRef<"ConsultationNote", 'String'>
    readonly doctorId: FieldRef<"ConsultationNote", 'String'>
    readonly content: FieldRef<"ConsultationNote", 'String'>
    readonly createdAt: FieldRef<"ConsultationNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationNote findUnique
   */
  export type ConsultationNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationNote to fetch.
     */
    where: ConsultationNoteWhereUniqueInput
  }

  /**
   * ConsultationNote findUniqueOrThrow
   */
  export type ConsultationNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationNote to fetch.
     */
    where: ConsultationNoteWhereUniqueInput
  }

  /**
   * ConsultationNote findFirst
   */
  export type ConsultationNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationNote to fetch.
     */
    where?: ConsultationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationNotes to fetch.
     */
    orderBy?: ConsultationNoteOrderByWithRelationInput | ConsultationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationNotes.
     */
    cursor?: ConsultationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationNotes.
     */
    distinct?: ConsultationNoteScalarFieldEnum | ConsultationNoteScalarFieldEnum[]
  }

  /**
   * ConsultationNote findFirstOrThrow
   */
  export type ConsultationNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationNote to fetch.
     */
    where?: ConsultationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationNotes to fetch.
     */
    orderBy?: ConsultationNoteOrderByWithRelationInput | ConsultationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationNotes.
     */
    cursor?: ConsultationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationNotes.
     */
    distinct?: ConsultationNoteScalarFieldEnum | ConsultationNoteScalarFieldEnum[]
  }

  /**
   * ConsultationNote findMany
   */
  export type ConsultationNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationNotes to fetch.
     */
    where?: ConsultationNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationNotes to fetch.
     */
    orderBy?: ConsultationNoteOrderByWithRelationInput | ConsultationNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationNotes.
     */
    cursor?: ConsultationNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationNotes.
     */
    distinct?: ConsultationNoteScalarFieldEnum | ConsultationNoteScalarFieldEnum[]
  }

  /**
   * ConsultationNote create
   */
  export type ConsultationNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationNote.
     */
    data: XOR<ConsultationNoteCreateInput, ConsultationNoteUncheckedCreateInput>
  }

  /**
   * ConsultationNote createMany
   */
  export type ConsultationNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationNotes.
     */
    data: ConsultationNoteCreateManyInput | ConsultationNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationNote createManyAndReturn
   */
  export type ConsultationNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationNotes.
     */
    data: ConsultationNoteCreateManyInput | ConsultationNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationNote update
   */
  export type ConsultationNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationNote.
     */
    data: XOR<ConsultationNoteUpdateInput, ConsultationNoteUncheckedUpdateInput>
    /**
     * Choose, which ConsultationNote to update.
     */
    where: ConsultationNoteWhereUniqueInput
  }

  /**
   * ConsultationNote updateMany
   */
  export type ConsultationNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationNotes.
     */
    data: XOR<ConsultationNoteUpdateManyMutationInput, ConsultationNoteUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationNotes to update
     */
    where?: ConsultationNoteWhereInput
    /**
     * Limit how many ConsultationNotes to update.
     */
    limit?: number
  }

  /**
   * ConsultationNote updateManyAndReturn
   */
  export type ConsultationNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationNotes.
     */
    data: XOR<ConsultationNoteUpdateManyMutationInput, ConsultationNoteUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationNotes to update
     */
    where?: ConsultationNoteWhereInput
    /**
     * Limit how many ConsultationNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationNote upsert
   */
  export type ConsultationNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationNote to update in case it exists.
     */
    where: ConsultationNoteWhereUniqueInput
    /**
     * In case the ConsultationNote found by the `where` argument doesn't exist, create a new ConsultationNote with this data.
     */
    create: XOR<ConsultationNoteCreateInput, ConsultationNoteUncheckedCreateInput>
    /**
     * In case the ConsultationNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationNoteUpdateInput, ConsultationNoteUncheckedUpdateInput>
  }

  /**
   * ConsultationNote delete
   */
  export type ConsultationNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
    /**
     * Filter which ConsultationNote to delete.
     */
    where: ConsultationNoteWhereUniqueInput
  }

  /**
   * ConsultationNote deleteMany
   */
  export type ConsultationNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationNotes to delete
     */
    where?: ConsultationNoteWhereInput
    /**
     * Limit how many ConsultationNotes to delete.
     */
    limit?: number
  }

  /**
   * ConsultationNote without action
   */
  export type ConsultationNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationNote
     */
    select?: ConsultationNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationNote
     */
    omit?: ConsultationNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationNoteInclude<ExtArgs> | null
  }


  /**
   * Model GameProgress
   */

  export type AggregateGameProgress = {
    _count: GameProgressCountAggregateOutputType | null
    _avg: GameProgressAvgAggregateOutputType | null
    _sum: GameProgressSumAggregateOutputType | null
    _min: GameProgressMinAggregateOutputType | null
    _max: GameProgressMaxAggregateOutputType | null
  }

  export type GameProgressAvgAggregateOutputType = {
    score: number | null
    levelReached: number | null
    timePlayedSecs: number | null
  }

  export type GameProgressSumAggregateOutputType = {
    score: number | null
    levelReached: number | null
    timePlayedSecs: number | null
  }

  export type GameProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    gameName: string | null
    score: number | null
    levelReached: number | null
    timePlayedSecs: number | null
    playedAt: Date | null
  }

  export type GameProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    gameName: string | null
    score: number | null
    levelReached: number | null
    timePlayedSecs: number | null
    playedAt: Date | null
  }

  export type GameProgressCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    gameName: number
    score: number
    levelReached: number
    timePlayedSecs: number
    playedAt: number
    _all: number
  }


  export type GameProgressAvgAggregateInputType = {
    score?: true
    levelReached?: true
    timePlayedSecs?: true
  }

  export type GameProgressSumAggregateInputType = {
    score?: true
    levelReached?: true
    timePlayedSecs?: true
  }

  export type GameProgressMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    gameName?: true
    score?: true
    levelReached?: true
    timePlayedSecs?: true
    playedAt?: true
  }

  export type GameProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    gameName?: true
    score?: true
    levelReached?: true
    timePlayedSecs?: true
    playedAt?: true
  }

  export type GameProgressCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    gameName?: true
    score?: true
    levelReached?: true
    timePlayedSecs?: true
    playedAt?: true
    _all?: true
  }

  export type GameProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameProgress to aggregate.
     */
    where?: GameProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameProgresses to fetch.
     */
    orderBy?: GameProgressOrderByWithRelationInput | GameProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameProgresses
    **/
    _count?: true | GameProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameProgressMaxAggregateInputType
  }

  export type GetGameProgressAggregateType<T extends GameProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateGameProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameProgress[P]>
      : GetScalarType<T[P], AggregateGameProgress[P]>
  }




  export type GameProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameProgressWhereInput
    orderBy?: GameProgressOrderByWithAggregationInput | GameProgressOrderByWithAggregationInput[]
    by: GameProgressScalarFieldEnum[] | GameProgressScalarFieldEnum
    having?: GameProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameProgressCountAggregateInputType | true
    _avg?: GameProgressAvgAggregateInputType
    _sum?: GameProgressSumAggregateInputType
    _min?: GameProgressMinAggregateInputType
    _max?: GameProgressMaxAggregateInputType
  }

  export type GameProgressGroupByOutputType = {
    id: string
    userId: string | null
    gameId: string
    gameName: string
    score: number
    levelReached: number
    timePlayedSecs: number
    playedAt: Date
    _count: GameProgressCountAggregateOutputType | null
    _avg: GameProgressAvgAggregateOutputType | null
    _sum: GameProgressSumAggregateOutputType | null
    _min: GameProgressMinAggregateOutputType | null
    _max: GameProgressMaxAggregateOutputType | null
  }

  type GetGameProgressGroupByPayload<T extends GameProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameProgressGroupByOutputType[P]>
            : GetScalarType<T[P], GameProgressGroupByOutputType[P]>
        }
      >
    >


  export type GameProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    gameName?: boolean
    score?: boolean
    levelReached?: boolean
    timePlayedSecs?: boolean
    playedAt?: boolean
  }, ExtArgs["result"]["gameProgress"]>

  export type GameProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    gameName?: boolean
    score?: boolean
    levelReached?: boolean
    timePlayedSecs?: boolean
    playedAt?: boolean
  }, ExtArgs["result"]["gameProgress"]>

  export type GameProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    gameName?: boolean
    score?: boolean
    levelReached?: boolean
    timePlayedSecs?: boolean
    playedAt?: boolean
  }, ExtArgs["result"]["gameProgress"]>

  export type GameProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    gameName?: boolean
    score?: boolean
    levelReached?: boolean
    timePlayedSecs?: boolean
    playedAt?: boolean
  }

  export type GameProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameId" | "gameName" | "score" | "levelReached" | "timePlayedSecs" | "playedAt", ExtArgs["result"]["gameProgress"]>

  export type $GameProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      gameId: string
      gameName: string
      score: number
      levelReached: number
      timePlayedSecs: number
      playedAt: Date
    }, ExtArgs["result"]["gameProgress"]>
    composites: {}
  }

  type GameProgressGetPayload<S extends boolean | null | undefined | GameProgressDefaultArgs> = $Result.GetResult<Prisma.$GameProgressPayload, S>

  type GameProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameProgressCountAggregateInputType | true
    }

  export interface GameProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameProgress'], meta: { name: 'GameProgress' } }
    /**
     * Find zero or one GameProgress that matches the filter.
     * @param {GameProgressFindUniqueArgs} args - Arguments to find a GameProgress
     * @example
     * // Get one GameProgress
     * const gameProgress = await prisma.gameProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameProgressFindUniqueArgs>(args: SelectSubset<T, GameProgressFindUniqueArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameProgressFindUniqueOrThrowArgs} args - Arguments to find a GameProgress
     * @example
     * // Get one GameProgress
     * const gameProgress = await prisma.gameProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, GameProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressFindFirstArgs} args - Arguments to find a GameProgress
     * @example
     * // Get one GameProgress
     * const gameProgress = await prisma.gameProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameProgressFindFirstArgs>(args?: SelectSubset<T, GameProgressFindFirstArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressFindFirstOrThrowArgs} args - Arguments to find a GameProgress
     * @example
     * // Get one GameProgress
     * const gameProgress = await prisma.gameProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, GameProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameProgresses
     * const gameProgresses = await prisma.gameProgress.findMany()
     * 
     * // Get first 10 GameProgresses
     * const gameProgresses = await prisma.gameProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameProgressWithIdOnly = await prisma.gameProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameProgressFindManyArgs>(args?: SelectSubset<T, GameProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameProgress.
     * @param {GameProgressCreateArgs} args - Arguments to create a GameProgress.
     * @example
     * // Create one GameProgress
     * const GameProgress = await prisma.gameProgress.create({
     *   data: {
     *     // ... data to create a GameProgress
     *   }
     * })
     * 
     */
    create<T extends GameProgressCreateArgs>(args: SelectSubset<T, GameProgressCreateArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameProgresses.
     * @param {GameProgressCreateManyArgs} args - Arguments to create many GameProgresses.
     * @example
     * // Create many GameProgresses
     * const gameProgress = await prisma.gameProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameProgressCreateManyArgs>(args?: SelectSubset<T, GameProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameProgresses and returns the data saved in the database.
     * @param {GameProgressCreateManyAndReturnArgs} args - Arguments to create many GameProgresses.
     * @example
     * // Create many GameProgresses
     * const gameProgress = await prisma.gameProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameProgresses and only return the `id`
     * const gameProgressWithIdOnly = await prisma.gameProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, GameProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameProgress.
     * @param {GameProgressDeleteArgs} args - Arguments to delete one GameProgress.
     * @example
     * // Delete one GameProgress
     * const GameProgress = await prisma.gameProgress.delete({
     *   where: {
     *     // ... filter to delete one GameProgress
     *   }
     * })
     * 
     */
    delete<T extends GameProgressDeleteArgs>(args: SelectSubset<T, GameProgressDeleteArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameProgress.
     * @param {GameProgressUpdateArgs} args - Arguments to update one GameProgress.
     * @example
     * // Update one GameProgress
     * const gameProgress = await prisma.gameProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameProgressUpdateArgs>(args: SelectSubset<T, GameProgressUpdateArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameProgresses.
     * @param {GameProgressDeleteManyArgs} args - Arguments to filter GameProgresses to delete.
     * @example
     * // Delete a few GameProgresses
     * const { count } = await prisma.gameProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameProgressDeleteManyArgs>(args?: SelectSubset<T, GameProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameProgresses
     * const gameProgress = await prisma.gameProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameProgressUpdateManyArgs>(args: SelectSubset<T, GameProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameProgresses and returns the data updated in the database.
     * @param {GameProgressUpdateManyAndReturnArgs} args - Arguments to update many GameProgresses.
     * @example
     * // Update many GameProgresses
     * const gameProgress = await prisma.gameProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameProgresses and only return the `id`
     * const gameProgressWithIdOnly = await prisma.gameProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, GameProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameProgress.
     * @param {GameProgressUpsertArgs} args - Arguments to update or create a GameProgress.
     * @example
     * // Update or create a GameProgress
     * const gameProgress = await prisma.gameProgress.upsert({
     *   create: {
     *     // ... data to create a GameProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameProgress we want to update
     *   }
     * })
     */
    upsert<T extends GameProgressUpsertArgs>(args: SelectSubset<T, GameProgressUpsertArgs<ExtArgs>>): Prisma__GameProgressClient<$Result.GetResult<Prisma.$GameProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressCountArgs} args - Arguments to filter GameProgresses to count.
     * @example
     * // Count the number of GameProgresses
     * const count = await prisma.gameProgress.count({
     *   where: {
     *     // ... the filter for the GameProgresses we want to count
     *   }
     * })
    **/
    count<T extends GameProgressCountArgs>(
      args?: Subset<T, GameProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameProgressAggregateArgs>(args: Subset<T, GameProgressAggregateArgs>): Prisma.PrismaPromise<GetGameProgressAggregateType<T>>

    /**
     * Group by GameProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameProgressGroupByArgs['orderBy'] }
        : { orderBy?: GameProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameProgress model
   */
  readonly fields: GameProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameProgress model
   */
  interface GameProgressFieldRefs {
    readonly id: FieldRef<"GameProgress", 'String'>
    readonly userId: FieldRef<"GameProgress", 'String'>
    readonly gameId: FieldRef<"GameProgress", 'String'>
    readonly gameName: FieldRef<"GameProgress", 'String'>
    readonly score: FieldRef<"GameProgress", 'Int'>
    readonly levelReached: FieldRef<"GameProgress", 'Int'>
    readonly timePlayedSecs: FieldRef<"GameProgress", 'Int'>
    readonly playedAt: FieldRef<"GameProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameProgress findUnique
   */
  export type GameProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter, which GameProgress to fetch.
     */
    where: GameProgressWhereUniqueInput
  }

  /**
   * GameProgress findUniqueOrThrow
   */
  export type GameProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter, which GameProgress to fetch.
     */
    where: GameProgressWhereUniqueInput
  }

  /**
   * GameProgress findFirst
   */
  export type GameProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter, which GameProgress to fetch.
     */
    where?: GameProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameProgresses to fetch.
     */
    orderBy?: GameProgressOrderByWithRelationInput | GameProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameProgresses.
     */
    cursor?: GameProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameProgresses.
     */
    distinct?: GameProgressScalarFieldEnum | GameProgressScalarFieldEnum[]
  }

  /**
   * GameProgress findFirstOrThrow
   */
  export type GameProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter, which GameProgress to fetch.
     */
    where?: GameProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameProgresses to fetch.
     */
    orderBy?: GameProgressOrderByWithRelationInput | GameProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameProgresses.
     */
    cursor?: GameProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameProgresses.
     */
    distinct?: GameProgressScalarFieldEnum | GameProgressScalarFieldEnum[]
  }

  /**
   * GameProgress findMany
   */
  export type GameProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter, which GameProgresses to fetch.
     */
    where?: GameProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameProgresses to fetch.
     */
    orderBy?: GameProgressOrderByWithRelationInput | GameProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameProgresses.
     */
    cursor?: GameProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameProgresses.
     */
    distinct?: GameProgressScalarFieldEnum | GameProgressScalarFieldEnum[]
  }

  /**
   * GameProgress create
   */
  export type GameProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a GameProgress.
     */
    data: XOR<GameProgressCreateInput, GameProgressUncheckedCreateInput>
  }

  /**
   * GameProgress createMany
   */
  export type GameProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameProgresses.
     */
    data: GameProgressCreateManyInput | GameProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameProgress createManyAndReturn
   */
  export type GameProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * The data used to create many GameProgresses.
     */
    data: GameProgressCreateManyInput | GameProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameProgress update
   */
  export type GameProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a GameProgress.
     */
    data: XOR<GameProgressUpdateInput, GameProgressUncheckedUpdateInput>
    /**
     * Choose, which GameProgress to update.
     */
    where: GameProgressWhereUniqueInput
  }

  /**
   * GameProgress updateMany
   */
  export type GameProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameProgresses.
     */
    data: XOR<GameProgressUpdateManyMutationInput, GameProgressUncheckedUpdateManyInput>
    /**
     * Filter which GameProgresses to update
     */
    where?: GameProgressWhereInput
    /**
     * Limit how many GameProgresses to update.
     */
    limit?: number
  }

  /**
   * GameProgress updateManyAndReturn
   */
  export type GameProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * The data used to update GameProgresses.
     */
    data: XOR<GameProgressUpdateManyMutationInput, GameProgressUncheckedUpdateManyInput>
    /**
     * Filter which GameProgresses to update
     */
    where?: GameProgressWhereInput
    /**
     * Limit how many GameProgresses to update.
     */
    limit?: number
  }

  /**
   * GameProgress upsert
   */
  export type GameProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the GameProgress to update in case it exists.
     */
    where: GameProgressWhereUniqueInput
    /**
     * In case the GameProgress found by the `where` argument doesn't exist, create a new GameProgress with this data.
     */
    create: XOR<GameProgressCreateInput, GameProgressUncheckedCreateInput>
    /**
     * In case the GameProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameProgressUpdateInput, GameProgressUncheckedUpdateInput>
  }

  /**
   * GameProgress delete
   */
  export type GameProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
    /**
     * Filter which GameProgress to delete.
     */
    where: GameProgressWhereUniqueInput
  }

  /**
   * GameProgress deleteMany
   */
  export type GameProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameProgresses to delete
     */
    where?: GameProgressWhereInput
    /**
     * Limit how many GameProgresses to delete.
     */
    limit?: number
  }

  /**
   * GameProgress without action
   */
  export type GameProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameProgress
     */
    select?: GameProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameProgress
     */
    omit?: GameProgressOmit<ExtArgs> | null
  }


  /**
   * Model MoodLog
   */

  export type AggregateMoodLog = {
    _count: MoodLogCountAggregateOutputType | null
    _avg: MoodLogAvgAggregateOutputType | null
    _sum: MoodLogSumAggregateOutputType | null
    _min: MoodLogMinAggregateOutputType | null
    _max: MoodLogMaxAggregateOutputType | null
  }

  export type MoodLogAvgAggregateOutputType = {
    moodScore: number | null
  }

  export type MoodLogSumAggregateOutputType = {
    moodScore: number | null
  }

  export type MoodLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moodScore: number | null
    eventNotes: string | null
    loggedBy: string | null
    createdAt: Date | null
  }

  export type MoodLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moodScore: number | null
    eventNotes: string | null
    loggedBy: string | null
    createdAt: Date | null
  }

  export type MoodLogCountAggregateOutputType = {
    id: number
    userId: number
    moodScore: number
    sensoryLogJson: number
    eventNotes: number
    loggedBy: number
    createdAt: number
    _all: number
  }


  export type MoodLogAvgAggregateInputType = {
    moodScore?: true
  }

  export type MoodLogSumAggregateInputType = {
    moodScore?: true
  }

  export type MoodLogMinAggregateInputType = {
    id?: true
    userId?: true
    moodScore?: true
    eventNotes?: true
    loggedBy?: true
    createdAt?: true
  }

  export type MoodLogMaxAggregateInputType = {
    id?: true
    userId?: true
    moodScore?: true
    eventNotes?: true
    loggedBy?: true
    createdAt?: true
  }

  export type MoodLogCountAggregateInputType = {
    id?: true
    userId?: true
    moodScore?: true
    sensoryLogJson?: true
    eventNotes?: true
    loggedBy?: true
    createdAt?: true
    _all?: true
  }

  export type MoodLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodLog to aggregate.
     */
    where?: MoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodLogs to fetch.
     */
    orderBy?: MoodLogOrderByWithRelationInput | MoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodLogs
    **/
    _count?: true | MoodLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodLogMaxAggregateInputType
  }

  export type GetMoodLogAggregateType<T extends MoodLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodLog[P]>
      : GetScalarType<T[P], AggregateMoodLog[P]>
  }




  export type MoodLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodLogWhereInput
    orderBy?: MoodLogOrderByWithAggregationInput | MoodLogOrderByWithAggregationInput[]
    by: MoodLogScalarFieldEnum[] | MoodLogScalarFieldEnum
    having?: MoodLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodLogCountAggregateInputType | true
    _avg?: MoodLogAvgAggregateInputType
    _sum?: MoodLogSumAggregateInputType
    _min?: MoodLogMinAggregateInputType
    _max?: MoodLogMaxAggregateInputType
  }

  export type MoodLogGroupByOutputType = {
    id: string
    userId: string
    moodScore: number
    sensoryLogJson: JsonValue | null
    eventNotes: string | null
    loggedBy: string
    createdAt: Date
    _count: MoodLogCountAggregateOutputType | null
    _avg: MoodLogAvgAggregateOutputType | null
    _sum: MoodLogSumAggregateOutputType | null
    _min: MoodLogMinAggregateOutputType | null
    _max: MoodLogMaxAggregateOutputType | null
  }

  type GetMoodLogGroupByPayload<T extends MoodLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodLogGroupByOutputType[P]>
            : GetScalarType<T[P], MoodLogGroupByOutputType[P]>
        }
      >
    >


  export type MoodLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moodScore?: boolean
    sensoryLogJson?: boolean
    eventNotes?: boolean
    loggedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodLog"]>

  export type MoodLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moodScore?: boolean
    sensoryLogJson?: boolean
    eventNotes?: boolean
    loggedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodLog"]>

  export type MoodLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moodScore?: boolean
    sensoryLogJson?: boolean
    eventNotes?: boolean
    loggedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodLog"]>

  export type MoodLogSelectScalar = {
    id?: boolean
    userId?: boolean
    moodScore?: boolean
    sensoryLogJson?: boolean
    eventNotes?: boolean
    loggedBy?: boolean
    createdAt?: boolean
  }

  export type MoodLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moodScore" | "sensoryLogJson" | "eventNotes" | "loggedBy" | "createdAt", ExtArgs["result"]["moodLog"]>
  export type MoodLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moodScore: number
      sensoryLogJson: Prisma.JsonValue | null
      eventNotes: string | null
      loggedBy: string
      createdAt: Date
    }, ExtArgs["result"]["moodLog"]>
    composites: {}
  }

  type MoodLogGetPayload<S extends boolean | null | undefined | MoodLogDefaultArgs> = $Result.GetResult<Prisma.$MoodLogPayload, S>

  type MoodLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodLogCountAggregateInputType | true
    }

  export interface MoodLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodLog'], meta: { name: 'MoodLog' } }
    /**
     * Find zero or one MoodLog that matches the filter.
     * @param {MoodLogFindUniqueArgs} args - Arguments to find a MoodLog
     * @example
     * // Get one MoodLog
     * const moodLog = await prisma.moodLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodLogFindUniqueArgs>(args: SelectSubset<T, MoodLogFindUniqueArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodLogFindUniqueOrThrowArgs} args - Arguments to find a MoodLog
     * @example
     * // Get one MoodLog
     * const moodLog = await prisma.moodLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogFindFirstArgs} args - Arguments to find a MoodLog
     * @example
     * // Get one MoodLog
     * const moodLog = await prisma.moodLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodLogFindFirstArgs>(args?: SelectSubset<T, MoodLogFindFirstArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogFindFirstOrThrowArgs} args - Arguments to find a MoodLog
     * @example
     * // Get one MoodLog
     * const moodLog = await prisma.moodLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodLogs
     * const moodLogs = await prisma.moodLog.findMany()
     * 
     * // Get first 10 MoodLogs
     * const moodLogs = await prisma.moodLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodLogWithIdOnly = await prisma.moodLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodLogFindManyArgs>(args?: SelectSubset<T, MoodLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodLog.
     * @param {MoodLogCreateArgs} args - Arguments to create a MoodLog.
     * @example
     * // Create one MoodLog
     * const MoodLog = await prisma.moodLog.create({
     *   data: {
     *     // ... data to create a MoodLog
     *   }
     * })
     * 
     */
    create<T extends MoodLogCreateArgs>(args: SelectSubset<T, MoodLogCreateArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodLogs.
     * @param {MoodLogCreateManyArgs} args - Arguments to create many MoodLogs.
     * @example
     * // Create many MoodLogs
     * const moodLog = await prisma.moodLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodLogCreateManyArgs>(args?: SelectSubset<T, MoodLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodLogs and returns the data saved in the database.
     * @param {MoodLogCreateManyAndReturnArgs} args - Arguments to create many MoodLogs.
     * @example
     * // Create many MoodLogs
     * const moodLog = await prisma.moodLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodLogs and only return the `id`
     * const moodLogWithIdOnly = await prisma.moodLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodLog.
     * @param {MoodLogDeleteArgs} args - Arguments to delete one MoodLog.
     * @example
     * // Delete one MoodLog
     * const MoodLog = await prisma.moodLog.delete({
     *   where: {
     *     // ... filter to delete one MoodLog
     *   }
     * })
     * 
     */
    delete<T extends MoodLogDeleteArgs>(args: SelectSubset<T, MoodLogDeleteArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodLog.
     * @param {MoodLogUpdateArgs} args - Arguments to update one MoodLog.
     * @example
     * // Update one MoodLog
     * const moodLog = await prisma.moodLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodLogUpdateArgs>(args: SelectSubset<T, MoodLogUpdateArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodLogs.
     * @param {MoodLogDeleteManyArgs} args - Arguments to filter MoodLogs to delete.
     * @example
     * // Delete a few MoodLogs
     * const { count } = await prisma.moodLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodLogDeleteManyArgs>(args?: SelectSubset<T, MoodLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodLogs
     * const moodLog = await prisma.moodLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodLogUpdateManyArgs>(args: SelectSubset<T, MoodLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodLogs and returns the data updated in the database.
     * @param {MoodLogUpdateManyAndReturnArgs} args - Arguments to update many MoodLogs.
     * @example
     * // Update many MoodLogs
     * const moodLog = await prisma.moodLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodLogs and only return the `id`
     * const moodLogWithIdOnly = await prisma.moodLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoodLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodLog.
     * @param {MoodLogUpsertArgs} args - Arguments to update or create a MoodLog.
     * @example
     * // Update or create a MoodLog
     * const moodLog = await prisma.moodLog.upsert({
     *   create: {
     *     // ... data to create a MoodLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodLog we want to update
     *   }
     * })
     */
    upsert<T extends MoodLogUpsertArgs>(args: SelectSubset<T, MoodLogUpsertArgs<ExtArgs>>): Prisma__MoodLogClient<$Result.GetResult<Prisma.$MoodLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogCountArgs} args - Arguments to filter MoodLogs to count.
     * @example
     * // Count the number of MoodLogs
     * const count = await prisma.moodLog.count({
     *   where: {
     *     // ... the filter for the MoodLogs we want to count
     *   }
     * })
    **/
    count<T extends MoodLogCountArgs>(
      args?: Subset<T, MoodLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoodLogAggregateArgs>(args: Subset<T, MoodLogAggregateArgs>): Prisma.PrismaPromise<GetMoodLogAggregateType<T>>

    /**
     * Group by MoodLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoodLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodLogGroupByArgs['orderBy'] }
        : { orderBy?: MoodLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoodLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodLog model
   */
  readonly fields: MoodLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoodLog model
   */
  interface MoodLogFieldRefs {
    readonly id: FieldRef<"MoodLog", 'String'>
    readonly userId: FieldRef<"MoodLog", 'String'>
    readonly moodScore: FieldRef<"MoodLog", 'Int'>
    readonly sensoryLogJson: FieldRef<"MoodLog", 'Json'>
    readonly eventNotes: FieldRef<"MoodLog", 'String'>
    readonly loggedBy: FieldRef<"MoodLog", 'String'>
    readonly createdAt: FieldRef<"MoodLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodLog findUnique
   */
  export type MoodLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter, which MoodLog to fetch.
     */
    where: MoodLogWhereUniqueInput
  }

  /**
   * MoodLog findUniqueOrThrow
   */
  export type MoodLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter, which MoodLog to fetch.
     */
    where: MoodLogWhereUniqueInput
  }

  /**
   * MoodLog findFirst
   */
  export type MoodLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter, which MoodLog to fetch.
     */
    where?: MoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodLogs to fetch.
     */
    orderBy?: MoodLogOrderByWithRelationInput | MoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodLogs.
     */
    cursor?: MoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodLogs.
     */
    distinct?: MoodLogScalarFieldEnum | MoodLogScalarFieldEnum[]
  }

  /**
   * MoodLog findFirstOrThrow
   */
  export type MoodLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter, which MoodLog to fetch.
     */
    where?: MoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodLogs to fetch.
     */
    orderBy?: MoodLogOrderByWithRelationInput | MoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodLogs.
     */
    cursor?: MoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodLogs.
     */
    distinct?: MoodLogScalarFieldEnum | MoodLogScalarFieldEnum[]
  }

  /**
   * MoodLog findMany
   */
  export type MoodLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter, which MoodLogs to fetch.
     */
    where?: MoodLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodLogs to fetch.
     */
    orderBy?: MoodLogOrderByWithRelationInput | MoodLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodLogs.
     */
    cursor?: MoodLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodLogs.
     */
    distinct?: MoodLogScalarFieldEnum | MoodLogScalarFieldEnum[]
  }

  /**
   * MoodLog create
   */
  export type MoodLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodLog.
     */
    data: XOR<MoodLogCreateInput, MoodLogUncheckedCreateInput>
  }

  /**
   * MoodLog createMany
   */
  export type MoodLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodLogs.
     */
    data: MoodLogCreateManyInput | MoodLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodLog createManyAndReturn
   */
  export type MoodLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * The data used to create many MoodLogs.
     */
    data: MoodLogCreateManyInput | MoodLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodLog update
   */
  export type MoodLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodLog.
     */
    data: XOR<MoodLogUpdateInput, MoodLogUncheckedUpdateInput>
    /**
     * Choose, which MoodLog to update.
     */
    where: MoodLogWhereUniqueInput
  }

  /**
   * MoodLog updateMany
   */
  export type MoodLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodLogs.
     */
    data: XOR<MoodLogUpdateManyMutationInput, MoodLogUncheckedUpdateManyInput>
    /**
     * Filter which MoodLogs to update
     */
    where?: MoodLogWhereInput
    /**
     * Limit how many MoodLogs to update.
     */
    limit?: number
  }

  /**
   * MoodLog updateManyAndReturn
   */
  export type MoodLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * The data used to update MoodLogs.
     */
    data: XOR<MoodLogUpdateManyMutationInput, MoodLogUncheckedUpdateManyInput>
    /**
     * Filter which MoodLogs to update
     */
    where?: MoodLogWhereInput
    /**
     * Limit how many MoodLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodLog upsert
   */
  export type MoodLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodLog to update in case it exists.
     */
    where: MoodLogWhereUniqueInput
    /**
     * In case the MoodLog found by the `where` argument doesn't exist, create a new MoodLog with this data.
     */
    create: XOR<MoodLogCreateInput, MoodLogUncheckedCreateInput>
    /**
     * In case the MoodLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodLogUpdateInput, MoodLogUncheckedUpdateInput>
  }

  /**
   * MoodLog delete
   */
  export type MoodLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
    /**
     * Filter which MoodLog to delete.
     */
    where: MoodLogWhereUniqueInput
  }

  /**
   * MoodLog deleteMany
   */
  export type MoodLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodLogs to delete
     */
    where?: MoodLogWhereInput
    /**
     * Limit how many MoodLogs to delete.
     */
    limit?: number
  }

  /**
   * MoodLog without action
   */
  export type MoodLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodLog
     */
    select?: MoodLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodLog
     */
    omit?: MoodLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodLogInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostAvgAggregateOutputType = {
    readTimeMins: number | null
    likesCount: number | null
  }

  export type BlogPostSumAggregateOutputType = {
    readTimeMins: number | null
    likesCount: number | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    slug: string | null
    content: string | null
    coverImageUrl: string | null
    category: string | null
    status: string | null
    readTimeMins: number | null
    likesCount: number | null
    createdAt: Date | null
    publishedAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    slug: string | null
    content: string | null
    coverImageUrl: string | null
    category: string | null
    status: string | null
    readTimeMins: number | null
    likesCount: number | null
    createdAt: Date | null
    publishedAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    authorId: number
    title: number
    slug: number
    content: number
    coverImageUrl: number
    category: number
    tags: number
    status: number
    readTimeMins: number
    likesCount: number
    createdAt: number
    publishedAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostAvgAggregateInputType = {
    readTimeMins?: true
    likesCount?: true
  }

  export type BlogPostSumAggregateInputType = {
    readTimeMins?: true
    likesCount?: true
  }

  export type BlogPostMinAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    slug?: true
    content?: true
    coverImageUrl?: true
    category?: true
    status?: true
    readTimeMins?: true
    likesCount?: true
    createdAt?: true
    publishedAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    slug?: true
    content?: true
    coverImageUrl?: true
    category?: true
    status?: true
    readTimeMins?: true
    likesCount?: true
    createdAt?: true
    publishedAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    slug?: true
    content?: true
    coverImageUrl?: true
    category?: true
    tags?: true
    status?: true
    readTimeMins?: true
    likesCount?: true
    createdAt?: true
    publishedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _avg?: BlogPostAvgAggregateInputType
    _sum?: BlogPostSumAggregateInputType
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    authorId: string
    title: string
    slug: string
    content: string
    coverImageUrl: string | null
    category: string
    tags: string[]
    status: string
    readTimeMins: number
    likesCount: number
    createdAt: Date
    publishedAt: Date | null
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _avg: BlogPostAvgAggregateOutputType | null
    _sum: BlogPostSumAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    coverImageUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    readTimeMins?: boolean
    likesCount?: boolean
    createdAt?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    coverImageUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    readTimeMins?: boolean
    likesCount?: boolean
    createdAt?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    coverImageUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    readTimeMins?: boolean
    likesCount?: boolean
    createdAt?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    authorId?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    coverImageUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    readTimeMins?: boolean
    likesCount?: boolean
    createdAt?: boolean
    publishedAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "title" | "slug" | "content" | "coverImageUrl" | "category" | "tags" | "status" | "readTimeMins" | "likesCount" | "createdAt" | "publishedAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | BlogPost$commentsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      title: string
      slug: string
      content: string
      coverImageUrl: string | null
      category: string
      tags: string[]
      status: string
      readTimeMins: number
      likesCount: number
      createdAt: Date
      publishedAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends BlogPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly authorId: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly coverImageUrl: FieldRef<"BlogPost", 'String'>
    readonly category: FieldRef<"BlogPost", 'String'>
    readonly tags: FieldRef<"BlogPost", 'String[]'>
    readonly status: FieldRef<"BlogPost", 'String'>
    readonly readTimeMins: FieldRef<"BlogPost", 'Int'>
    readonly likesCount: FieldRef<"BlogPost", 'Int'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.comments
   */
  export type BlogPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    content: string | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    content: number
    isApproved: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isApproved?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isApproved?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isApproved?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string
    userId: string
    content: string
    isApproved: boolean
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isApproved?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "content" | "isApproved" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | BlogPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$BlogPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      content: string
      isApproved: boolean
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends BlogPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogPostDefaultArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly isApproved: FieldRef<"Comment", 'Boolean'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model CommunityGroup
   */

  export type AggregateCommunityGroup = {
    _count: CommunityGroupCountAggregateOutputType | null
    _avg: CommunityGroupAvgAggregateOutputType | null
    _sum: CommunityGroupSumAggregateOutputType | null
    _min: CommunityGroupMinAggregateOutputType | null
    _max: CommunityGroupMaxAggregateOutputType | null
  }

  export type CommunityGroupAvgAggregateOutputType = {
    memberCount: number | null
  }

  export type CommunityGroupSumAggregateOutputType = {
    memberCount: number | null
  }

  export type CommunityGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    moderatorId: string | null
    description: string | null
    memberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    moderatorId: string | null
    description: string | null
    memberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityGroupCountAggregateOutputType = {
    id: number
    name: number
    type: number
    moderatorId: number
    description: number
    memberCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityGroupAvgAggregateInputType = {
    memberCount?: true
  }

  export type CommunityGroupSumAggregateInputType = {
    memberCount?: true
  }

  export type CommunityGroupMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moderatorId?: true
    description?: true
    memberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityGroupMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moderatorId?: true
    description?: true
    memberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityGroupCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moderatorId?: true
    description?: true
    memberCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityGroup to aggregate.
     */
    where?: CommunityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityGroups to fetch.
     */
    orderBy?: CommunityGroupOrderByWithRelationInput | CommunityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityGroups
    **/
    _count?: true | CommunityGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunityGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityGroupMaxAggregateInputType
  }

  export type GetCommunityGroupAggregateType<T extends CommunityGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityGroup[P]>
      : GetScalarType<T[P], AggregateCommunityGroup[P]>
  }




  export type CommunityGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityGroupWhereInput
    orderBy?: CommunityGroupOrderByWithAggregationInput | CommunityGroupOrderByWithAggregationInput[]
    by: CommunityGroupScalarFieldEnum[] | CommunityGroupScalarFieldEnum
    having?: CommunityGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityGroupCountAggregateInputType | true
    _avg?: CommunityGroupAvgAggregateInputType
    _sum?: CommunityGroupSumAggregateInputType
    _min?: CommunityGroupMinAggregateInputType
    _max?: CommunityGroupMaxAggregateInputType
  }

  export type CommunityGroupGroupByOutputType = {
    id: string
    name: string
    type: string
    moderatorId: string | null
    description: string
    memberCount: number
    createdAt: Date
    updatedAt: Date
    _count: CommunityGroupCountAggregateOutputType | null
    _avg: CommunityGroupAvgAggregateOutputType | null
    _sum: CommunityGroupSumAggregateOutputType | null
    _min: CommunityGroupMinAggregateOutputType | null
    _max: CommunityGroupMaxAggregateOutputType | null
  }

  type GetCommunityGroupGroupByPayload<T extends CommunityGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupGroupByOutputType[P]>
        }
      >
    >


  export type CommunityGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    moderatorId?: boolean
    description?: boolean
    memberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | CommunityGroup$postsArgs<ExtArgs>
    _count?: boolean | CommunityGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityGroup"]>

  export type CommunityGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    moderatorId?: boolean
    description?: boolean
    memberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityGroup"]>

  export type CommunityGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    moderatorId?: boolean
    description?: boolean
    memberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityGroup"]>

  export type CommunityGroupSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    moderatorId?: boolean
    description?: boolean
    memberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "moderatorId" | "description" | "memberCount" | "createdAt" | "updatedAt", ExtArgs["result"]["communityGroup"]>
  export type CommunityGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CommunityGroup$postsArgs<ExtArgs>
    _count?: boolean | CommunityGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunityGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunityGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityGroup"
    objects: {
      posts: Prisma.$CommunityPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      moderatorId: string | null
      description: string
      memberCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityGroup"]>
    composites: {}
  }

  type CommunityGroupGetPayload<S extends boolean | null | undefined | CommunityGroupDefaultArgs> = $Result.GetResult<Prisma.$CommunityGroupPayload, S>

  type CommunityGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityGroupCountAggregateInputType | true
    }

  export interface CommunityGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityGroup'], meta: { name: 'CommunityGroup' } }
    /**
     * Find zero or one CommunityGroup that matches the filter.
     * @param {CommunityGroupFindUniqueArgs} args - Arguments to find a CommunityGroup
     * @example
     * // Get one CommunityGroup
     * const communityGroup = await prisma.communityGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityGroupFindUniqueArgs>(args: SelectSubset<T, CommunityGroupFindUniqueArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityGroupFindUniqueOrThrowArgs} args - Arguments to find a CommunityGroup
     * @example
     * // Get one CommunityGroup
     * const communityGroup = await prisma.communityGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupFindFirstArgs} args - Arguments to find a CommunityGroup
     * @example
     * // Get one CommunityGroup
     * const communityGroup = await prisma.communityGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityGroupFindFirstArgs>(args?: SelectSubset<T, CommunityGroupFindFirstArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupFindFirstOrThrowArgs} args - Arguments to find a CommunityGroup
     * @example
     * // Get one CommunityGroup
     * const communityGroup = await prisma.communityGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityGroups
     * const communityGroups = await prisma.communityGroup.findMany()
     * 
     * // Get first 10 CommunityGroups
     * const communityGroups = await prisma.communityGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityGroupWithIdOnly = await prisma.communityGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityGroupFindManyArgs>(args?: SelectSubset<T, CommunityGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityGroup.
     * @param {CommunityGroupCreateArgs} args - Arguments to create a CommunityGroup.
     * @example
     * // Create one CommunityGroup
     * const CommunityGroup = await prisma.communityGroup.create({
     *   data: {
     *     // ... data to create a CommunityGroup
     *   }
     * })
     * 
     */
    create<T extends CommunityGroupCreateArgs>(args: SelectSubset<T, CommunityGroupCreateArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityGroups.
     * @param {CommunityGroupCreateManyArgs} args - Arguments to create many CommunityGroups.
     * @example
     * // Create many CommunityGroups
     * const communityGroup = await prisma.communityGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityGroupCreateManyArgs>(args?: SelectSubset<T, CommunityGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityGroups and returns the data saved in the database.
     * @param {CommunityGroupCreateManyAndReturnArgs} args - Arguments to create many CommunityGroups.
     * @example
     * // Create many CommunityGroups
     * const communityGroup = await prisma.communityGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityGroups and only return the `id`
     * const communityGroupWithIdOnly = await prisma.communityGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityGroup.
     * @param {CommunityGroupDeleteArgs} args - Arguments to delete one CommunityGroup.
     * @example
     * // Delete one CommunityGroup
     * const CommunityGroup = await prisma.communityGroup.delete({
     *   where: {
     *     // ... filter to delete one CommunityGroup
     *   }
     * })
     * 
     */
    delete<T extends CommunityGroupDeleteArgs>(args: SelectSubset<T, CommunityGroupDeleteArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityGroup.
     * @param {CommunityGroupUpdateArgs} args - Arguments to update one CommunityGroup.
     * @example
     * // Update one CommunityGroup
     * const communityGroup = await prisma.communityGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityGroupUpdateArgs>(args: SelectSubset<T, CommunityGroupUpdateArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityGroups.
     * @param {CommunityGroupDeleteManyArgs} args - Arguments to filter CommunityGroups to delete.
     * @example
     * // Delete a few CommunityGroups
     * const { count } = await prisma.communityGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityGroupDeleteManyArgs>(args?: SelectSubset<T, CommunityGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityGroups
     * const communityGroup = await prisma.communityGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityGroupUpdateManyArgs>(args: SelectSubset<T, CommunityGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityGroups and returns the data updated in the database.
     * @param {CommunityGroupUpdateManyAndReturnArgs} args - Arguments to update many CommunityGroups.
     * @example
     * // Update many CommunityGroups
     * const communityGroup = await prisma.communityGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityGroups and only return the `id`
     * const communityGroupWithIdOnly = await prisma.communityGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityGroup.
     * @param {CommunityGroupUpsertArgs} args - Arguments to update or create a CommunityGroup.
     * @example
     * // Update or create a CommunityGroup
     * const communityGroup = await prisma.communityGroup.upsert({
     *   create: {
     *     // ... data to create a CommunityGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityGroup we want to update
     *   }
     * })
     */
    upsert<T extends CommunityGroupUpsertArgs>(args: SelectSubset<T, CommunityGroupUpsertArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupCountArgs} args - Arguments to filter CommunityGroups to count.
     * @example
     * // Count the number of CommunityGroups
     * const count = await prisma.communityGroup.count({
     *   where: {
     *     // ... the filter for the CommunityGroups we want to count
     *   }
     * })
    **/
    count<T extends CommunityGroupCountArgs>(
      args?: Subset<T, CommunityGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityGroupAggregateArgs>(args: Subset<T, CommunityGroupAggregateArgs>): Prisma.PrismaPromise<GetCommunityGroupAggregateType<T>>

    /**
     * Group by CommunityGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityGroup model
   */
  readonly fields: CommunityGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends CommunityGroup$postsArgs<ExtArgs> = {}>(args?: Subset<T, CommunityGroup$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityGroup model
   */
  interface CommunityGroupFieldRefs {
    readonly id: FieldRef<"CommunityGroup", 'String'>
    readonly name: FieldRef<"CommunityGroup", 'String'>
    readonly type: FieldRef<"CommunityGroup", 'String'>
    readonly moderatorId: FieldRef<"CommunityGroup", 'String'>
    readonly description: FieldRef<"CommunityGroup", 'String'>
    readonly memberCount: FieldRef<"CommunityGroup", 'Int'>
    readonly createdAt: FieldRef<"CommunityGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityGroup findUnique
   */
  export type CommunityGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter, which CommunityGroup to fetch.
     */
    where: CommunityGroupWhereUniqueInput
  }

  /**
   * CommunityGroup findUniqueOrThrow
   */
  export type CommunityGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter, which CommunityGroup to fetch.
     */
    where: CommunityGroupWhereUniqueInput
  }

  /**
   * CommunityGroup findFirst
   */
  export type CommunityGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter, which CommunityGroup to fetch.
     */
    where?: CommunityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityGroups to fetch.
     */
    orderBy?: CommunityGroupOrderByWithRelationInput | CommunityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityGroups.
     */
    cursor?: CommunityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityGroups.
     */
    distinct?: CommunityGroupScalarFieldEnum | CommunityGroupScalarFieldEnum[]
  }

  /**
   * CommunityGroup findFirstOrThrow
   */
  export type CommunityGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter, which CommunityGroup to fetch.
     */
    where?: CommunityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityGroups to fetch.
     */
    orderBy?: CommunityGroupOrderByWithRelationInput | CommunityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityGroups.
     */
    cursor?: CommunityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityGroups.
     */
    distinct?: CommunityGroupScalarFieldEnum | CommunityGroupScalarFieldEnum[]
  }

  /**
   * CommunityGroup findMany
   */
  export type CommunityGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter, which CommunityGroups to fetch.
     */
    where?: CommunityGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityGroups to fetch.
     */
    orderBy?: CommunityGroupOrderByWithRelationInput | CommunityGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityGroups.
     */
    cursor?: CommunityGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityGroups.
     */
    distinct?: CommunityGroupScalarFieldEnum | CommunityGroupScalarFieldEnum[]
  }

  /**
   * CommunityGroup create
   */
  export type CommunityGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityGroup.
     */
    data: XOR<CommunityGroupCreateInput, CommunityGroupUncheckedCreateInput>
  }

  /**
   * CommunityGroup createMany
   */
  export type CommunityGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityGroups.
     */
    data: CommunityGroupCreateManyInput | CommunityGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityGroup createManyAndReturn
   */
  export type CommunityGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityGroups.
     */
    data: CommunityGroupCreateManyInput | CommunityGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityGroup update
   */
  export type CommunityGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityGroup.
     */
    data: XOR<CommunityGroupUpdateInput, CommunityGroupUncheckedUpdateInput>
    /**
     * Choose, which CommunityGroup to update.
     */
    where: CommunityGroupWhereUniqueInput
  }

  /**
   * CommunityGroup updateMany
   */
  export type CommunityGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityGroups.
     */
    data: XOR<CommunityGroupUpdateManyMutationInput, CommunityGroupUncheckedUpdateManyInput>
    /**
     * Filter which CommunityGroups to update
     */
    where?: CommunityGroupWhereInput
    /**
     * Limit how many CommunityGroups to update.
     */
    limit?: number
  }

  /**
   * CommunityGroup updateManyAndReturn
   */
  export type CommunityGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * The data used to update CommunityGroups.
     */
    data: XOR<CommunityGroupUpdateManyMutationInput, CommunityGroupUncheckedUpdateManyInput>
    /**
     * Filter which CommunityGroups to update
     */
    where?: CommunityGroupWhereInput
    /**
     * Limit how many CommunityGroups to update.
     */
    limit?: number
  }

  /**
   * CommunityGroup upsert
   */
  export type CommunityGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityGroup to update in case it exists.
     */
    where: CommunityGroupWhereUniqueInput
    /**
     * In case the CommunityGroup found by the `where` argument doesn't exist, create a new CommunityGroup with this data.
     */
    create: XOR<CommunityGroupCreateInput, CommunityGroupUncheckedCreateInput>
    /**
     * In case the CommunityGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityGroupUpdateInput, CommunityGroupUncheckedUpdateInput>
  }

  /**
   * CommunityGroup delete
   */
  export type CommunityGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
    /**
     * Filter which CommunityGroup to delete.
     */
    where: CommunityGroupWhereUniqueInput
  }

  /**
   * CommunityGroup deleteMany
   */
  export type CommunityGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityGroups to delete
     */
    where?: CommunityGroupWhereInput
    /**
     * Limit how many CommunityGroups to delete.
     */
    limit?: number
  }

  /**
   * CommunityGroup.posts
   */
  export type CommunityGroup$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityGroup without action
   */
  export type CommunityGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityGroup
     */
    select?: CommunityGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityGroup
     */
    omit?: CommunityGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityGroupInclude<ExtArgs> | null
  }


  /**
   * Model CommunityPost
   */

  export type AggregateCommunityPost = {
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  export type CommunityPostMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    content: string | null
    isAnonymous: boolean | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type CommunityPostMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    content: string | null
    isAnonymous: boolean | null
    isApproved: boolean | null
    createdAt: Date | null
  }

  export type CommunityPostCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    content: number
    isAnonymous: number
    isApproved: number
    createdAt: number
    _all: number
  }


  export type CommunityPostMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    isApproved?: true
    createdAt?: true
  }

  export type CommunityPostMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    isApproved?: true
    createdAt?: true
  }

  export type CommunityPostCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    isApproved?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPost to aggregate.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityPosts
    **/
    _count?: true | CommunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityPostMaxAggregateInputType
  }

  export type GetCommunityPostAggregateType<T extends CommunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityPost[P]>
      : GetScalarType<T[P], AggregateCommunityPost[P]>
  }




  export type CommunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithAggregationInput | CommunityPostOrderByWithAggregationInput[]
    by: CommunityPostScalarFieldEnum[] | CommunityPostScalarFieldEnum
    having?: CommunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityPostCountAggregateInputType | true
    _min?: CommunityPostMinAggregateInputType
    _max?: CommunityPostMaxAggregateInputType
  }

  export type CommunityPostGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    content: string
    isAnonymous: boolean
    isApproved: boolean
    createdAt: Date
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  type GetCommunityPostGroupByPayload<T extends CommunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
        }
      >
    >


  export type CommunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: boolean
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: boolean
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: boolean
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: boolean
  }

  export type CommunityPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "content" | "isAnonymous" | "isApproved" | "createdAt", ExtArgs["result"]["communityPost"]>
  export type CommunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | CommunityGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityPost"
    objects: {
      group: Prisma.$CommunityGroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      content: string
      isAnonymous: boolean
      isApproved: boolean
      createdAt: Date
    }, ExtArgs["result"]["communityPost"]>
    composites: {}
  }

  type CommunityPostGetPayload<S extends boolean | null | undefined | CommunityPostDefaultArgs> = $Result.GetResult<Prisma.$CommunityPostPayload, S>

  type CommunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityPostCountAggregateInputType | true
    }

  export interface CommunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityPost'], meta: { name: 'CommunityPost' } }
    /**
     * Find zero or one CommunityPost that matches the filter.
     * @param {CommunityPostFindUniqueArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityPostFindUniqueArgs>(args: SelectSubset<T, CommunityPostFindUniqueArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityPostFindUniqueOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityPostFindFirstArgs>(args?: SelectSubset<T, CommunityPostFindFirstArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany()
     * 
     * // Get first 10 CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityPostFindManyArgs>(args?: SelectSubset<T, CommunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityPost.
     * @param {CommunityPostCreateArgs} args - Arguments to create a CommunityPost.
     * @example
     * // Create one CommunityPost
     * const CommunityPost = await prisma.communityPost.create({
     *   data: {
     *     // ... data to create a CommunityPost
     *   }
     * })
     * 
     */
    create<T extends CommunityPostCreateArgs>(args: SelectSubset<T, CommunityPostCreateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityPosts.
     * @param {CommunityPostCreateManyArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityPostCreateManyArgs>(args?: SelectSubset<T, CommunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityPosts and returns the data saved in the database.
     * @param {CommunityPostCreateManyAndReturnArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityPost.
     * @param {CommunityPostDeleteArgs} args - Arguments to delete one CommunityPost.
     * @example
     * // Delete one CommunityPost
     * const CommunityPost = await prisma.communityPost.delete({
     *   where: {
     *     // ... filter to delete one CommunityPost
     *   }
     * })
     * 
     */
    delete<T extends CommunityPostDeleteArgs>(args: SelectSubset<T, CommunityPostDeleteArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityPost.
     * @param {CommunityPostUpdateArgs} args - Arguments to update one CommunityPost.
     * @example
     * // Update one CommunityPost
     * const communityPost = await prisma.communityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityPostUpdateArgs>(args: SelectSubset<T, CommunityPostUpdateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityPosts.
     * @param {CommunityPostDeleteManyArgs} args - Arguments to filter CommunityPosts to delete.
     * @example
     * // Delete a few CommunityPosts
     * const { count } = await prisma.communityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityPostDeleteManyArgs>(args?: SelectSubset<T, CommunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityPostUpdateManyArgs>(args: SelectSubset<T, CommunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts and returns the data updated in the database.
     * @param {CommunityPostUpdateManyAndReturnArgs} args - Arguments to update many CommunityPosts.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityPost.
     * @param {CommunityPostUpsertArgs} args - Arguments to update or create a CommunityPost.
     * @example
     * // Update or create a CommunityPost
     * const communityPost = await prisma.communityPost.upsert({
     *   create: {
     *     // ... data to create a CommunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityPost we want to update
     *   }
     * })
     */
    upsert<T extends CommunityPostUpsertArgs>(args: SelectSubset<T, CommunityPostUpsertArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostCountArgs} args - Arguments to filter CommunityPosts to count.
     * @example
     * // Count the number of CommunityPosts
     * const count = await prisma.communityPost.count({
     *   where: {
     *     // ... the filter for the CommunityPosts we want to count
     *   }
     * })
    **/
    count<T extends CommunityPostCountArgs>(
      args?: Subset<T, CommunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityPostAggregateArgs>(args: Subset<T, CommunityPostAggregateArgs>): Prisma.PrismaPromise<GetCommunityPostAggregateType<T>>

    /**
     * Group by CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityPostGroupByArgs['orderBy'] }
        : { orderBy?: CommunityPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityPost model
   */
  readonly fields: CommunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends CommunityGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityGroupDefaultArgs<ExtArgs>>): Prisma__CommunityGroupClient<$Result.GetResult<Prisma.$CommunityGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityPost model
   */
  interface CommunityPostFieldRefs {
    readonly id: FieldRef<"CommunityPost", 'String'>
    readonly groupId: FieldRef<"CommunityPost", 'String'>
    readonly userId: FieldRef<"CommunityPost", 'String'>
    readonly content: FieldRef<"CommunityPost", 'String'>
    readonly isAnonymous: FieldRef<"CommunityPost", 'Boolean'>
    readonly isApproved: FieldRef<"CommunityPost", 'Boolean'>
    readonly createdAt: FieldRef<"CommunityPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityPost findUnique
   */
  export type CommunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findUniqueOrThrow
   */
  export type CommunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findFirst
   */
  export type CommunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findFirstOrThrow
   */
  export type CommunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findMany
   */
  export type CommunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPosts to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost create
   */
  export type CommunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityPost.
     */
    data: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
  }

  /**
   * CommunityPost createMany
   */
  export type CommunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityPost createManyAndReturn
   */
  export type CommunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost update
   */
  export type CommunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityPost.
     */
    data: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
    /**
     * Choose, which CommunityPost to update.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost updateMany
   */
  export type CommunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
  }

  /**
   * CommunityPost updateManyAndReturn
   */
  export type CommunityPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost upsert
   */
  export type CommunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityPost to update in case it exists.
     */
    where: CommunityPostWhereUniqueInput
    /**
     * In case the CommunityPost found by the `where` argument doesn't exist, create a new CommunityPost with this data.
     */
    create: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
    /**
     * In case the CommunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
  }

  /**
   * CommunityPost delete
   */
  export type CommunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter which CommunityPost to delete.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost deleteMany
   */
  export type CommunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPosts to delete
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to delete.
     */
    limit?: number
  }

  /**
   * CommunityPost without action
   */
  export type CommunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    fileUrl: string | null
    description: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    fileUrl: string | null
    description: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    category: number
    fileUrl: number
    description: number
    uploadedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    fileUrl?: true
    description?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    fileUrl?: true
    description?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    fileUrl?: true
    description?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    title: string
    category: string
    fileUrl: string
    description: string
    uploadedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    fileUrl?: boolean
    description?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    fileUrl?: boolean
    description?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    fileUrl?: boolean
    description?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    fileUrl?: boolean
    description?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "fileUrl" | "description" | "uploadedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["resource"]>

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      fileUrl: string
      description: string
      uploadedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly category: FieldRef<"Resource", 'String'>
    readonly fileUrl: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly uploadedBy: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly updatedAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    isRead: boolean | null
    relatedUrl: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    isRead: boolean | null
    relatedUrl: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    isRead: number
    relatedUrl: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    relatedUrl?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    relatedUrl?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    isRead?: true
    relatedUrl?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    message: string
    isRead: boolean
    relatedUrl: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    relatedUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    relatedUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    relatedUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    isRead?: boolean
    relatedUrl?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "isRead" | "relatedUrl" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      message: string
      isRead: boolean
      relatedUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly relatedUrl: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    patientId: string | null
    doctorId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    patientId: string | null
    doctorId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    appointmentId: number
    patientId: number
    doctorId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    doctorId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    doctorId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    doctorId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    appointmentId: string
    patientId: string
    doctorId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    doctorId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    doctorId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    doctorId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    doctorId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "patientId" | "doctorId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorProfileDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      doctor: Prisma.$DoctorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      patientId: string
      doctorId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorProfileDefaultArgs<ExtArgs>>): Prisma__DoctorProfileClient<$Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly appointmentId: FieldRef<"Review", 'String'>
    readonly patientId: FieldRef<"Review", 'String'>
    readonly doctorId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    diagnosisLevel: 'diagnosisLevel'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialty: 'specialty',
    licenseNumber: 'licenseNumber',
    bio: 'bio',
    languages: 'languages',
    fee: 'fee',
    isApproved: 'isApproved',
    rating: 'rating',
    totalReviews: 'totalReviews',
    availabilityJson: 'availabilityJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    guestName: 'guestName',
    guestEmail: 'guestEmail',
    guestPhone: 'guestPhone',
    doctorId: 'doctorId',
    scheduledAt: 'scheduledAt',
    durationMins: 'durationMins',
    status: 'status',
    sessionType: 'sessionType',
    stripePaymentId: 'stripePaymentId',
    videoRoomUrl: 'videoRoomUrl',
    bookingReference: 'bookingReference',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ConsultationNoteScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    doctorId: 'doctorId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ConsultationNoteScalarFieldEnum = (typeof ConsultationNoteScalarFieldEnum)[keyof typeof ConsultationNoteScalarFieldEnum]


  export const GameProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    gameName: 'gameName',
    score: 'score',
    levelReached: 'levelReached',
    timePlayedSecs: 'timePlayedSecs',
    playedAt: 'playedAt'
  };

  export type GameProgressScalarFieldEnum = (typeof GameProgressScalarFieldEnum)[keyof typeof GameProgressScalarFieldEnum]


  export const MoodLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moodScore: 'moodScore',
    sensoryLogJson: 'sensoryLogJson',
    eventNotes: 'eventNotes',
    loggedBy: 'loggedBy',
    createdAt: 'createdAt'
  };

  export type MoodLogScalarFieldEnum = (typeof MoodLogScalarFieldEnum)[keyof typeof MoodLogScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    title: 'title',
    slug: 'slug',
    content: 'content',
    coverImageUrl: 'coverImageUrl',
    category: 'category',
    tags: 'tags',
    status: 'status',
    readTimeMins: 'readTimeMins',
    likesCount: 'likesCount',
    createdAt: 'createdAt',
    publishedAt: 'publishedAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    content: 'content',
    isApproved: 'isApproved',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CommunityGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    moderatorId: 'moderatorId',
    description: 'description',
    memberCount: 'memberCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityGroupScalarFieldEnum = (typeof CommunityGroupScalarFieldEnum)[keyof typeof CommunityGroupScalarFieldEnum]


  export const CommunityPostScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    content: 'content',
    isAnonymous: 'isAnonymous',
    isApproved: 'isApproved',
    createdAt: 'createdAt'
  };

  export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    fileUrl: 'fileUrl',
    description: 'description',
    uploadedBy: 'uploadedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    isRead: 'isRead',
    relatedUrl: 'relatedUrl',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    patientId: 'patientId',
    doctorId: 'doctorId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    diagnosisLevel?: StringNullableFilter<"User"> | string | null
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    blogPosts?: BlogPostListRelationFilter
    comments?: CommentListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    moodLogs?: MoodLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    diagnosisLevel?: SortOrderInput | SortOrder
    doctorProfile?: DoctorProfileOrderByWithRelationInput
    blogPosts?: BlogPostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    communityPosts?: CommunityPostOrderByRelationAggregateInput
    moodLogs?: MoodLogOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    diagnosisLevel?: StringNullableFilter<"User"> | string | null
    doctorProfile?: XOR<DoctorProfileNullableScalarRelationFilter, DoctorProfileWhereInput> | null
    blogPosts?: BlogPostListRelationFilter
    comments?: CommentListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    moodLogs?: MoodLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    diagnosisLevel?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    diagnosisLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DoctorProfileWhereInput = {
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    id?: StringFilter<"DoctorProfile"> | string
    userId?: StringFilter<"DoctorProfile"> | string
    specialty?: StringFilter<"DoctorProfile"> | string
    licenseNumber?: StringFilter<"DoctorProfile"> | string
    bio?: StringFilter<"DoctorProfile"> | string
    languages?: StringNullableListFilter<"DoctorProfile">
    fee?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFilter<"DoctorProfile"> | boolean
    rating?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFilter<"DoctorProfile"> | number
    availabilityJson?: JsonFilter<"DoctorProfile">
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    consultationNotes?: ConsultationNoteListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type DoctorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    bio?: SortOrder
    languages?: SortOrder
    fee?: SortOrder
    isApproved?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    availabilityJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    consultationNotes?: ConsultationNoteOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type DoctorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    OR?: DoctorProfileWhereInput[]
    NOT?: DoctorProfileWhereInput | DoctorProfileWhereInput[]
    specialty?: StringFilter<"DoctorProfile"> | string
    licenseNumber?: StringFilter<"DoctorProfile"> | string
    bio?: StringFilter<"DoctorProfile"> | string
    languages?: StringNullableListFilter<"DoctorProfile">
    fee?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFilter<"DoctorProfile"> | boolean
    rating?: DecimalFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFilter<"DoctorProfile"> | number
    availabilityJson?: JsonFilter<"DoctorProfile">
    createdAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    consultationNotes?: ConsultationNoteListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId">

  export type DoctorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    bio?: SortOrder
    languages?: SortOrder
    fee?: SortOrder
    isApproved?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    availabilityJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorProfileCountOrderByAggregateInput
    _avg?: DoctorProfileAvgOrderByAggregateInput
    _max?: DoctorProfileMaxOrderByAggregateInput
    _min?: DoctorProfileMinOrderByAggregateInput
    _sum?: DoctorProfileSumOrderByAggregateInput
  }

  export type DoctorProfileScalarWhereWithAggregatesInput = {
    AND?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    OR?: DoctorProfileScalarWhereWithAggregatesInput[]
    NOT?: DoctorProfileScalarWhereWithAggregatesInput | DoctorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorProfile"> | string
    userId?: StringWithAggregatesFilter<"DoctorProfile"> | string
    specialty?: StringWithAggregatesFilter<"DoctorProfile"> | string
    licenseNumber?: StringWithAggregatesFilter<"DoctorProfile"> | string
    bio?: StringWithAggregatesFilter<"DoctorProfile"> | string
    languages?: StringNullableListFilter<"DoctorProfile">
    fee?: DecimalWithAggregatesFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    isApproved?: BoolWithAggregatesFilter<"DoctorProfile"> | boolean
    rating?: DecimalWithAggregatesFilter<"DoctorProfile"> | Decimal | DecimalJsLike | number | string
    totalReviews?: IntWithAggregatesFilter<"DoctorProfile"> | number
    availabilityJson?: JsonWithAggregatesFilter<"DoctorProfile">
    createdAt?: DateTimeWithAggregatesFilter<"DoctorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorProfile"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    guestName?: StringFilter<"Appointment"> | string
    guestEmail?: StringFilter<"Appointment"> | string
    guestPhone?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    durationMins?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    sessionType?: StringFilter<"Appointment"> | string
    stripePaymentId?: StringNullableFilter<"Appointment"> | string | null
    videoRoomUrl?: StringNullableFilter<"Appointment"> | string | null
    bookingReference?: StringFilter<"Appointment"> | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    consultationNote?: XOR<ConsultationNoteNullableScalarRelationFilter, ConsultationNoteWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    doctorId?: SortOrder
    scheduledAt?: SortOrder
    durationMins?: SortOrder
    status?: SortOrder
    sessionType?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    videoRoomUrl?: SortOrderInput | SortOrder
    bookingReference?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorProfileOrderByWithRelationInput
    consultationNote?: ConsultationNoteOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingReference?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    guestName?: StringFilter<"Appointment"> | string
    guestEmail?: StringFilter<"Appointment"> | string
    guestPhone?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    durationMins?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    sessionType?: StringFilter<"Appointment"> | string
    stripePaymentId?: StringNullableFilter<"Appointment"> | string | null
    videoRoomUrl?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
    consultationNote?: XOR<ConsultationNoteNullableScalarRelationFilter, ConsultationNoteWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id" | "bookingReference">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    doctorId?: SortOrder
    scheduledAt?: SortOrder
    durationMins?: SortOrder
    status?: SortOrder
    sessionType?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    videoRoomUrl?: SortOrderInput | SortOrder
    bookingReference?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    guestName?: StringWithAggregatesFilter<"Appointment"> | string
    guestEmail?: StringWithAggregatesFilter<"Appointment"> | string
    guestPhone?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    durationMins?: IntWithAggregatesFilter<"Appointment"> | number
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    sessionType?: StringWithAggregatesFilter<"Appointment"> | string
    stripePaymentId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    videoRoomUrl?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    bookingReference?: StringWithAggregatesFilter<"Appointment"> | string
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ConsultationNoteWhereInput = {
    AND?: ConsultationNoteWhereInput | ConsultationNoteWhereInput[]
    OR?: ConsultationNoteWhereInput[]
    NOT?: ConsultationNoteWhereInput | ConsultationNoteWhereInput[]
    id?: StringFilter<"ConsultationNote"> | string
    appointmentId?: StringFilter<"ConsultationNote"> | string
    doctorId?: StringFilter<"ConsultationNote"> | string
    content?: StringFilter<"ConsultationNote"> | string
    createdAt?: DateTimeFilter<"ConsultationNote"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }

  export type ConsultationNoteOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    doctor?: DoctorProfileOrderByWithRelationInput
  }

  export type ConsultationNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: ConsultationNoteWhereInput | ConsultationNoteWhereInput[]
    OR?: ConsultationNoteWhereInput[]
    NOT?: ConsultationNoteWhereInput | ConsultationNoteWhereInput[]
    doctorId?: StringFilter<"ConsultationNote"> | string
    content?: StringFilter<"ConsultationNote"> | string
    createdAt?: DateTimeFilter<"ConsultationNote"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }, "id" | "appointmentId">

  export type ConsultationNoteOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationNoteCountOrderByAggregateInput
    _max?: ConsultationNoteMaxOrderByAggregateInput
    _min?: ConsultationNoteMinOrderByAggregateInput
  }

  export type ConsultationNoteScalarWhereWithAggregatesInput = {
    AND?: ConsultationNoteScalarWhereWithAggregatesInput | ConsultationNoteScalarWhereWithAggregatesInput[]
    OR?: ConsultationNoteScalarWhereWithAggregatesInput[]
    NOT?: ConsultationNoteScalarWhereWithAggregatesInput | ConsultationNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationNote"> | string
    appointmentId?: StringWithAggregatesFilter<"ConsultationNote"> | string
    doctorId?: StringWithAggregatesFilter<"ConsultationNote"> | string
    content?: StringWithAggregatesFilter<"ConsultationNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationNote"> | Date | string
  }

  export type GameProgressWhereInput = {
    AND?: GameProgressWhereInput | GameProgressWhereInput[]
    OR?: GameProgressWhereInput[]
    NOT?: GameProgressWhereInput | GameProgressWhereInput[]
    id?: StringFilter<"GameProgress"> | string
    userId?: StringNullableFilter<"GameProgress"> | string | null
    gameId?: StringFilter<"GameProgress"> | string
    gameName?: StringFilter<"GameProgress"> | string
    score?: IntFilter<"GameProgress"> | number
    levelReached?: IntFilter<"GameProgress"> | number
    timePlayedSecs?: IntFilter<"GameProgress"> | number
    playedAt?: DateTimeFilter<"GameProgress"> | Date | string
  }

  export type GameProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    gameName?: SortOrder
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameProgressWhereInput | GameProgressWhereInput[]
    OR?: GameProgressWhereInput[]
    NOT?: GameProgressWhereInput | GameProgressWhereInput[]
    userId?: StringNullableFilter<"GameProgress"> | string | null
    gameId?: StringFilter<"GameProgress"> | string
    gameName?: StringFilter<"GameProgress"> | string
    score?: IntFilter<"GameProgress"> | number
    levelReached?: IntFilter<"GameProgress"> | number
    timePlayedSecs?: IntFilter<"GameProgress"> | number
    playedAt?: DateTimeFilter<"GameProgress"> | Date | string
  }, "id">

  export type GameProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    gameName?: SortOrder
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
    playedAt?: SortOrder
    _count?: GameProgressCountOrderByAggregateInput
    _avg?: GameProgressAvgOrderByAggregateInput
    _max?: GameProgressMaxOrderByAggregateInput
    _min?: GameProgressMinOrderByAggregateInput
    _sum?: GameProgressSumOrderByAggregateInput
  }

  export type GameProgressScalarWhereWithAggregatesInput = {
    AND?: GameProgressScalarWhereWithAggregatesInput | GameProgressScalarWhereWithAggregatesInput[]
    OR?: GameProgressScalarWhereWithAggregatesInput[]
    NOT?: GameProgressScalarWhereWithAggregatesInput | GameProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameProgress"> | string
    userId?: StringNullableWithAggregatesFilter<"GameProgress"> | string | null
    gameId?: StringWithAggregatesFilter<"GameProgress"> | string
    gameName?: StringWithAggregatesFilter<"GameProgress"> | string
    score?: IntWithAggregatesFilter<"GameProgress"> | number
    levelReached?: IntWithAggregatesFilter<"GameProgress"> | number
    timePlayedSecs?: IntWithAggregatesFilter<"GameProgress"> | number
    playedAt?: DateTimeWithAggregatesFilter<"GameProgress"> | Date | string
  }

  export type MoodLogWhereInput = {
    AND?: MoodLogWhereInput | MoodLogWhereInput[]
    OR?: MoodLogWhereInput[]
    NOT?: MoodLogWhereInput | MoodLogWhereInput[]
    id?: StringFilter<"MoodLog"> | string
    userId?: StringFilter<"MoodLog"> | string
    moodScore?: IntFilter<"MoodLog"> | number
    sensoryLogJson?: JsonNullableFilter<"MoodLog">
    eventNotes?: StringNullableFilter<"MoodLog"> | string | null
    loggedBy?: StringFilter<"MoodLog"> | string
    createdAt?: DateTimeFilter<"MoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moodScore?: SortOrder
    sensoryLogJson?: SortOrderInput | SortOrder
    eventNotes?: SortOrderInput | SortOrder
    loggedBy?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodLogWhereInput | MoodLogWhereInput[]
    OR?: MoodLogWhereInput[]
    NOT?: MoodLogWhereInput | MoodLogWhereInput[]
    userId?: StringFilter<"MoodLog"> | string
    moodScore?: IntFilter<"MoodLog"> | number
    sensoryLogJson?: JsonNullableFilter<"MoodLog">
    eventNotes?: StringNullableFilter<"MoodLog"> | string | null
    loggedBy?: StringFilter<"MoodLog"> | string
    createdAt?: DateTimeFilter<"MoodLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoodLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moodScore?: SortOrder
    sensoryLogJson?: SortOrderInput | SortOrder
    eventNotes?: SortOrderInput | SortOrder
    loggedBy?: SortOrder
    createdAt?: SortOrder
    _count?: MoodLogCountOrderByAggregateInput
    _avg?: MoodLogAvgOrderByAggregateInput
    _max?: MoodLogMaxOrderByAggregateInput
    _min?: MoodLogMinOrderByAggregateInput
    _sum?: MoodLogSumOrderByAggregateInput
  }

  export type MoodLogScalarWhereWithAggregatesInput = {
    AND?: MoodLogScalarWhereWithAggregatesInput | MoodLogScalarWhereWithAggregatesInput[]
    OR?: MoodLogScalarWhereWithAggregatesInput[]
    NOT?: MoodLogScalarWhereWithAggregatesInput | MoodLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodLog"> | string
    userId?: StringWithAggregatesFilter<"MoodLog"> | string
    moodScore?: IntWithAggregatesFilter<"MoodLog"> | number
    sensoryLogJson?: JsonNullableWithAggregatesFilter<"MoodLog">
    eventNotes?: StringNullableWithAggregatesFilter<"MoodLog"> | string | null
    loggedBy?: StringWithAggregatesFilter<"MoodLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MoodLog"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    authorId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    coverImageUrl?: StringNullableFilter<"BlogPost"> | string | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    status?: StringFilter<"BlogPost"> | string
    readTimeMins?: IntFilter<"BlogPost"> | number
    likesCount?: IntFilter<"BlogPost"> | number
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    readTimeMins?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    authorId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    coverImageUrl?: StringNullableFilter<"BlogPost"> | string | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    status?: StringFilter<"BlogPost"> | string
    readTimeMins?: IntFilter<"BlogPost"> | number
    likesCount?: IntFilter<"BlogPost"> | number
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    readTimeMins?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _avg?: BlogPostAvgOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
    _sum?: BlogPostSumOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    authorId?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    coverImageUrl?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    category?: StringWithAggregatesFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    status?: StringWithAggregatesFilter<"BlogPost"> | string
    readTimeMins?: IntWithAggregatesFilter<"BlogPost"> | number
    likesCount?: IntWithAggregatesFilter<"BlogPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    isApproved?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    post?: BlogPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    isApproved?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<BlogPostScalarRelationFilter, BlogPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    isApproved?: BoolWithAggregatesFilter<"Comment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CommunityGroupWhereInput = {
    AND?: CommunityGroupWhereInput | CommunityGroupWhereInput[]
    OR?: CommunityGroupWhereInput[]
    NOT?: CommunityGroupWhereInput | CommunityGroupWhereInput[]
    id?: StringFilter<"CommunityGroup"> | string
    name?: StringFilter<"CommunityGroup"> | string
    type?: StringFilter<"CommunityGroup"> | string
    moderatorId?: StringNullableFilter<"CommunityGroup"> | string | null
    description?: StringFilter<"CommunityGroup"> | string
    memberCount?: IntFilter<"CommunityGroup"> | number
    createdAt?: DateTimeFilter<"CommunityGroup"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityGroup"> | Date | string
    posts?: CommunityPostListRelationFilter
  }

  export type CommunityGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moderatorId?: SortOrderInput | SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: CommunityPostOrderByRelationAggregateInput
  }

  export type CommunityGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityGroupWhereInput | CommunityGroupWhereInput[]
    OR?: CommunityGroupWhereInput[]
    NOT?: CommunityGroupWhereInput | CommunityGroupWhereInput[]
    name?: StringFilter<"CommunityGroup"> | string
    type?: StringFilter<"CommunityGroup"> | string
    moderatorId?: StringNullableFilter<"CommunityGroup"> | string | null
    description?: StringFilter<"CommunityGroup"> | string
    memberCount?: IntFilter<"CommunityGroup"> | number
    createdAt?: DateTimeFilter<"CommunityGroup"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityGroup"> | Date | string
    posts?: CommunityPostListRelationFilter
  }, "id">

  export type CommunityGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moderatorId?: SortOrderInput | SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityGroupCountOrderByAggregateInput
    _avg?: CommunityGroupAvgOrderByAggregateInput
    _max?: CommunityGroupMaxOrderByAggregateInput
    _min?: CommunityGroupMinOrderByAggregateInput
    _sum?: CommunityGroupSumOrderByAggregateInput
  }

  export type CommunityGroupScalarWhereWithAggregatesInput = {
    AND?: CommunityGroupScalarWhereWithAggregatesInput | CommunityGroupScalarWhereWithAggregatesInput[]
    OR?: CommunityGroupScalarWhereWithAggregatesInput[]
    NOT?: CommunityGroupScalarWhereWithAggregatesInput | CommunityGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityGroup"> | string
    name?: StringWithAggregatesFilter<"CommunityGroup"> | string
    type?: StringWithAggregatesFilter<"CommunityGroup"> | string
    moderatorId?: StringNullableWithAggregatesFilter<"CommunityGroup"> | string | null
    description?: StringWithAggregatesFilter<"CommunityGroup"> | string
    memberCount?: IntWithAggregatesFilter<"CommunityGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CommunityGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityGroup"> | Date | string
  }

  export type CommunityPostWhereInput = {
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    groupId?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    isAnonymous?: BoolFilter<"CommunityPost"> | boolean
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    group?: XOR<CommunityGroupScalarRelationFilter, CommunityGroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommunityPostOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    group?: CommunityGroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    groupId?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    isAnonymous?: BoolFilter<"CommunityPost"> | boolean
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    group?: XOR<CommunityGroupScalarRelationFilter, CommunityGroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    _count?: CommunityPostCountOrderByAggregateInput
    _max?: CommunityPostMaxOrderByAggregateInput
    _min?: CommunityPostMinOrderByAggregateInput
  }

  export type CommunityPostScalarWhereWithAggregatesInput = {
    AND?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    OR?: CommunityPostScalarWhereWithAggregatesInput[]
    NOT?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityPost"> | string
    groupId?: StringWithAggregatesFilter<"CommunityPost"> | string
    userId?: StringWithAggregatesFilter<"CommunityPost"> | string
    content?: StringWithAggregatesFilter<"CommunityPost"> | string
    isAnonymous?: BoolWithAggregatesFilter<"CommunityPost"> | boolean
    isApproved?: BoolWithAggregatesFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    category?: StringFilter<"Resource"> | string
    fileUrl?: StringFilter<"Resource"> | string
    description?: StringFilter<"Resource"> | string
    uploadedBy?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    uploadedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    category?: StringFilter<"Resource"> | string
    fileUrl?: StringFilter<"Resource"> | string
    description?: StringFilter<"Resource"> | string
    uploadedBy?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    uploadedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    title?: StringWithAggregatesFilter<"Resource"> | string
    category?: StringWithAggregatesFilter<"Resource"> | string
    fileUrl?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringWithAggregatesFilter<"Resource"> | string
    uploadedBy?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    relatedUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    relatedUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    relatedUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    relatedUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    relatedUrl?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    appointmentId?: StringFilter<"Review"> | string
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    doctor?: DoctorProfileOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<DoctorProfileScalarRelationFilter, DoctorProfileWhereInput>
  }, "id" | "appointmentId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    appointmentId?: StringWithAggregatesFilter<"Review"> | string
    patientId?: StringWithAggregatesFilter<"Review"> | string
    doctorId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorProfileCreateInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileCreateManyInput = {
    id?: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
    consultationNote?: ConsultationNoteCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    doctorId: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultationNote?: ConsultationNoteUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    consultationNote?: ConsultationNoteUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationNote?: ConsultationNoteUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    doctorId: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationNoteCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutConsultationNoteInput
    doctor: DoctorProfileCreateNestedOneWithoutConsultationNotesInput
  }

  export type ConsultationNoteUncheckedCreateInput = {
    id?: string
    appointmentId: string
    doctorId: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultationNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutConsultationNoteNestedInput
    doctor?: DoctorProfileUpdateOneRequiredWithoutConsultationNotesNestedInput
  }

  export type ConsultationNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationNoteCreateManyInput = {
    id?: string
    appointmentId: string
    doctorId: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultationNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameProgressCreateInput = {
    id?: string
    userId?: string | null
    gameId: string
    gameName: string
    score?: number
    levelReached?: number
    timePlayedSecs?: number
    playedAt?: Date | string
  }

  export type GameProgressUncheckedCreateInput = {
    id?: string
    userId?: string | null
    gameId: string
    gameName: string
    score?: number
    levelReached?: number
    timePlayedSecs?: number
    playedAt?: Date | string
  }

  export type GameProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    levelReached?: IntFieldUpdateOperationsInput | number
    timePlayedSecs?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    levelReached?: IntFieldUpdateOperationsInput | number
    timePlayedSecs?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameProgressCreateManyInput = {
    id?: string
    userId?: string | null
    gameId: string
    gameName: string
    score?: number
    levelReached?: number
    timePlayedSecs?: number
    playedAt?: Date | string
  }

  export type GameProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    levelReached?: IntFieldUpdateOperationsInput | number
    timePlayedSecs?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameName?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    levelReached?: IntFieldUpdateOperationsInput | number
    timePlayedSecs?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogCreateInput = {
    id?: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMoodLogsInput
  }

  export type MoodLogUncheckedCreateInput = {
    id?: string
    userId: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
  }

  export type MoodLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoodLogsNestedInput
  }

  export type MoodLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogCreateManyInput = {
    id?: string
    userId: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
  }

  export type MoodLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutBlogPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    authorId: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBlogPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    authorId: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    post: BlogPostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    postId: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityGroupCreateInput = {
    id?: string
    name: string
    type: string
    moderatorId?: string | null
    description: string
    memberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: CommunityPostCreateNestedManyWithoutGroupInput
  }

  export type CommunityGroupUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    moderatorId?: string | null
    description: string
    memberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: CommunityPostUncheckedCreateNestedManyWithoutGroupInput
  }

  export type CommunityGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: CommunityPostUpdateManyWithoutGroupNestedInput
  }

  export type CommunityGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: CommunityPostUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type CommunityGroupCreateManyInput = {
    id?: string
    name: string
    type: string
    moderatorId?: string | null
    description: string
    memberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateInput = {
    id?: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
    group: CommunityGroupCreateNestedOneWithoutPostsInput
    user: UserCreateNestedOneWithoutCommunityPostsInput
  }

  export type CommunityPostUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: CommunityGroupUpdateOneRequiredWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    id?: string
    title: string
    category: string
    fileUrl: string
    description: string
    uploadedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    title: string
    category: string
    fileUrl: string
    description: string
    uploadedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyInput = {
    id?: string
    title: string
    category: string
    fileUrl: string
    description: string
    uploadedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    uploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutReviewInput
    doctor: DoctorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    appointmentId: string
    patientId: string
    doctorId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
    doctor?: DoctorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    appointmentId: string
    patientId: string
    doctorId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DoctorProfileNullableScalarRelationFilter = {
    is?: DoctorProfileWhereInput | null
    isNot?: DoctorProfileWhereInput | null
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommunityPostListRelationFilter = {
    every?: CommunityPostWhereInput
    some?: CommunityPostWhereInput
    none?: CommunityPostWhereInput
  }

  export type MoodLogListRelationFilter = {
    every?: MoodLogWhereInput
    some?: MoodLogWhereInput
    none?: MoodLogWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoodLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    diagnosisLevel?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    diagnosisLevel?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    diagnosisLevel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type ConsultationNoteListRelationFilter = {
    every?: ConsultationNoteWhereInput
    some?: ConsultationNoteWhereInput
    none?: ConsultationNoteWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    bio?: SortOrder
    languages?: SortOrder
    fee?: SortOrder
    isApproved?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    availabilityJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileAvgOrderByAggregateInput = {
    fee?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
  }

  export type DoctorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    bio?: SortOrder
    fee?: SortOrder
    isApproved?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    bio?: SortOrder
    fee?: SortOrder
    isApproved?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorProfileSumOrderByAggregateInput = {
    fee?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type DoctorProfileScalarRelationFilter = {
    is?: DoctorProfileWhereInput
    isNot?: DoctorProfileWhereInput
  }

  export type ConsultationNoteNullableScalarRelationFilter = {
    is?: ConsultationNoteWhereInput | null
    isNot?: ConsultationNoteWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    doctorId?: SortOrder
    scheduledAt?: SortOrder
    durationMins?: SortOrder
    status?: SortOrder
    sessionType?: SortOrder
    stripePaymentId?: SortOrder
    videoRoomUrl?: SortOrder
    bookingReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    durationMins?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    doctorId?: SortOrder
    scheduledAt?: SortOrder
    durationMins?: SortOrder
    status?: SortOrder
    sessionType?: SortOrder
    stripePaymentId?: SortOrder
    videoRoomUrl?: SortOrder
    bookingReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    doctorId?: SortOrder
    scheduledAt?: SortOrder
    durationMins?: SortOrder
    status?: SortOrder
    sessionType?: SortOrder
    stripePaymentId?: SortOrder
    videoRoomUrl?: SortOrder
    bookingReference?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    durationMins?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type ConsultationNoteCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationNoteMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type GameProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    gameName?: SortOrder
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameProgressAvgOrderByAggregateInput = {
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
  }

  export type GameProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    gameName?: SortOrder
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    gameName?: SortOrder
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
    playedAt?: SortOrder
  }

  export type GameProgressSumOrderByAggregateInput = {
    score?: SortOrder
    levelReached?: SortOrder
    timePlayedSecs?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MoodLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moodScore?: SortOrder
    sensoryLogJson?: SortOrder
    eventNotes?: SortOrder
    loggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodLogAvgOrderByAggregateInput = {
    moodScore?: SortOrder
  }

  export type MoodLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moodScore?: SortOrder
    eventNotes?: SortOrder
    loggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moodScore?: SortOrder
    eventNotes?: SortOrder
    loggedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodLogSumOrderByAggregateInput = {
    moodScore?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    coverImageUrl?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    readTimeMins?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostAvgOrderByAggregateInput = {
    readTimeMins?: SortOrder
    likesCount?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    coverImageUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    readTimeMins?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    coverImageUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    readTimeMins?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    publishedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostSumOrderByAggregateInput = {
    readTimeMins?: SortOrder
    likesCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlogPostScalarRelationFilter = {
    is?: BlogPostWhereInput
    isNot?: BlogPostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moderatorId?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityGroupAvgOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type CommunityGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moderatorId?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moderatorId?: SortOrder
    description?: SortOrder
    memberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityGroupSumOrderByAggregateInput = {
    memberCount?: SortOrder
  }

  export type CommunityGroupScalarRelationFilter = {
    is?: CommunityGroupWhereInput
    isNot?: CommunityGroupWhereInput
  }

  export type CommunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    isAnonymous?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    relatedUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    relatedUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    relatedUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DoctorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type BlogPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommunityPostCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type MoodLogCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput> | MoodLogCreateWithoutUserInput[] | MoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodLogCreateOrConnectWithoutUserInput | MoodLogCreateOrConnectWithoutUserInput[]
    createMany?: MoodLogCreateManyUserInputEnvelope
    connect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type DoctorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type BlogPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type MoodLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput> | MoodLogCreateWithoutUserInput[] | MoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodLogCreateOrConnectWithoutUserInput | MoodLogCreateOrConnectWithoutUserInput[]
    createMany?: MoodLogCreateManyUserInputEnvelope
    connect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DoctorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommunityPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type MoodLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput> | MoodLogCreateWithoutUserInput[] | MoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodLogCreateOrConnectWithoutUserInput | MoodLogCreateOrConnectWithoutUserInput[]
    upsert?: MoodLogUpsertWithWhereUniqueWithoutUserInput | MoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodLogCreateManyUserInputEnvelope
    set?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    disconnect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    delete?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    connect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    update?: MoodLogUpdateWithWhereUniqueWithoutUserInput | MoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodLogUpdateManyWithWhereWithoutUserInput | MoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodLogScalarWhereInput | MoodLogScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DoctorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutUserInput
    upsert?: DoctorProfileUpsertWithoutUserInput
    disconnect?: DoctorProfileWhereInput | boolean
    delete?: DoctorProfileWhereInput | boolean
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutUserInput, DoctorProfileUpdateWithoutUserInput>, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput> | BlogPostCreateWithoutAuthorInput[] | BlogPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutAuthorInput | BlogPostCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutAuthorInput | BlogPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogPostCreateManyAuthorInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutAuthorInput | BlogPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutAuthorInput | BlogPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type MoodLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput> | MoodLogCreateWithoutUserInput[] | MoodLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodLogCreateOrConnectWithoutUserInput | MoodLogCreateOrConnectWithoutUserInput[]
    upsert?: MoodLogUpsertWithWhereUniqueWithoutUserInput | MoodLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodLogCreateManyUserInputEnvelope
    set?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    disconnect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    delete?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    connect?: MoodLogWhereUniqueInput | MoodLogWhereUniqueInput[]
    update?: MoodLogUpdateWithWhereUniqueWithoutUserInput | MoodLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodLogUpdateManyWithWhereWithoutUserInput | MoodLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodLogScalarWhereInput | MoodLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DoctorProfileCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ConsultationNoteCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput> | ConsultationNoteCreateWithoutDoctorInput[] | ConsultationNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutDoctorInput | ConsultationNoteCreateOrConnectWithoutDoctorInput[]
    createMany?: ConsultationNoteCreateManyDoctorInputEnvelope
    connect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ConsultationNoteUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput> | ConsultationNoteCreateWithoutDoctorInput[] | ConsultationNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutDoctorInput | ConsultationNoteCreateOrConnectWithoutDoctorInput[]
    createMany?: ConsultationNoteCreateManyDoctorInputEnvelope
    connect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type DoctorProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    upsert?: UserUpsertWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfileInput, UserUpdateWithoutDoctorProfileInput>, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ConsultationNoteUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput> | ConsultationNoteCreateWithoutDoctorInput[] | ConsultationNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutDoctorInput | ConsultationNoteCreateOrConnectWithoutDoctorInput[]
    upsert?: ConsultationNoteUpsertWithWhereUniqueWithoutDoctorInput | ConsultationNoteUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ConsultationNoteCreateManyDoctorInputEnvelope
    set?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    disconnect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    delete?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    connect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    update?: ConsultationNoteUpdateWithWhereUniqueWithoutDoctorInput | ConsultationNoteUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ConsultationNoteUpdateManyWithWhereWithoutDoctorInput | ConsultationNoteUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ConsultationNoteScalarWhereInput | ConsultationNoteScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ConsultationNoteUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput> | ConsultationNoteCreateWithoutDoctorInput[] | ConsultationNoteUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutDoctorInput | ConsultationNoteCreateOrConnectWithoutDoctorInput[]
    upsert?: ConsultationNoteUpsertWithWhereUniqueWithoutDoctorInput | ConsultationNoteUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ConsultationNoteCreateManyDoctorInputEnvelope
    set?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    disconnect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    delete?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    connect?: ConsultationNoteWhereUniqueInput | ConsultationNoteWhereUniqueInput[]
    update?: ConsultationNoteUpdateWithWhereUniqueWithoutDoctorInput | ConsultationNoteUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ConsultationNoteUpdateManyWithWhereWithoutDoctorInput | ConsultationNoteUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ConsultationNoteScalarWhereInput | ConsultationNoteScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput> | ReviewCreateWithoutDoctorInput[] | ReviewUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDoctorInput | ReviewCreateOrConnectWithoutDoctorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDoctorInput | ReviewUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ReviewCreateManyDoctorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDoctorInput | ReviewUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDoctorInput | ReviewUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type DoctorProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type ConsultationNoteCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutAppointmentInput
    connect?: ConsultationNoteWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type ConsultationNoteUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutAppointmentInput
    connect?: ConsultationNoteWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorProfileUpsertWithoutAppointmentsInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutAppointmentsInput, DoctorProfileUpdateWithoutAppointmentsInput>, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ConsultationNoteUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutAppointmentInput
    upsert?: ConsultationNoteUpsertWithoutAppointmentInput
    disconnect?: ConsultationNoteWhereInput | boolean
    delete?: ConsultationNoteWhereInput | boolean
    connect?: ConsultationNoteWhereUniqueInput
    update?: XOR<XOR<ConsultationNoteUpdateToOneWithWhereWithoutAppointmentInput, ConsultationNoteUpdateWithoutAppointmentInput>, ConsultationNoteUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type ConsultationNoteUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultationNoteCreateOrConnectWithoutAppointmentInput
    upsert?: ConsultationNoteUpsertWithoutAppointmentInput
    disconnect?: ConsultationNoteWhereInput | boolean
    delete?: ConsultationNoteWhereInput | boolean
    connect?: ConsultationNoteWhereUniqueInput
    update?: XOR<XOR<ConsultationNoteUpdateToOneWithWhereWithoutAppointmentInput, ConsultationNoteUpdateWithoutAppointmentInput>, ConsultationNoteUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutAppointmentInput
    upsert?: ReviewUpsertWithoutAppointmentInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutAppointmentInput, ReviewUpdateWithoutAppointmentInput>, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedOneWithoutConsultationNoteInput = {
    create?: XOR<AppointmentCreateWithoutConsultationNoteInput, AppointmentUncheckedCreateWithoutConsultationNoteInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutConsultationNoteInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DoctorProfileCreateNestedOneWithoutConsultationNotesInput = {
    create?: XOR<DoctorProfileCreateWithoutConsultationNotesInput, DoctorProfileUncheckedCreateWithoutConsultationNotesInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutConsultationNotesInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutConsultationNoteNestedInput = {
    create?: XOR<AppointmentCreateWithoutConsultationNoteInput, AppointmentUncheckedCreateWithoutConsultationNoteInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutConsultationNoteInput
    upsert?: AppointmentUpsertWithoutConsultationNoteInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutConsultationNoteInput, AppointmentUpdateWithoutConsultationNoteInput>, AppointmentUncheckedUpdateWithoutConsultationNoteInput>
  }

  export type DoctorProfileUpdateOneRequiredWithoutConsultationNotesNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutConsultationNotesInput, DoctorProfileUncheckedCreateWithoutConsultationNotesInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutConsultationNotesInput
    upsert?: DoctorProfileUpsertWithoutConsultationNotesInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutConsultationNotesInput, DoctorProfileUpdateWithoutConsultationNotesInput>, DoctorProfileUncheckedUpdateWithoutConsultationNotesInput>
  }

  export type UserCreateNestedOneWithoutMoodLogsInput = {
    create?: XOR<UserCreateWithoutMoodLogsInput, UserUncheckedCreateWithoutMoodLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMoodLogsNestedInput = {
    create?: XOR<UserCreateWithoutMoodLogsInput, UserUncheckedCreateWithoutMoodLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodLogsInput
    upsert?: UserUpsertWithoutMoodLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodLogsInput, UserUpdateWithoutMoodLogsInput>, UserUncheckedUpdateWithoutMoodLogsInput>
  }

  export type BlogPostCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBlogPostsInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BlogPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBlogPostsNestedInput = {
    create?: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogPostsInput
    upsert?: UserUpsertWithoutBlogPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogPostsInput, UserUpdateWithoutBlogPostsInput>, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogPostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutCommentsInput
    upsert?: BlogPostUpsertWithoutCommentsInput
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutCommentsInput, BlogPostUpdateWithoutCommentsInput>, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommunityPostCreateNestedManyWithoutGroupInput = {
    create?: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput> | CommunityPostCreateWithoutGroupInput[] | CommunityPostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutGroupInput | CommunityPostCreateOrConnectWithoutGroupInput[]
    createMany?: CommunityPostCreateManyGroupInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput> | CommunityPostCreateWithoutGroupInput[] | CommunityPostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutGroupInput | CommunityPostCreateOrConnectWithoutGroupInput[]
    createMany?: CommunityPostCreateManyGroupInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type CommunityPostUpdateManyWithoutGroupNestedInput = {
    create?: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput> | CommunityPostCreateWithoutGroupInput[] | CommunityPostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutGroupInput | CommunityPostCreateOrConnectWithoutGroupInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutGroupInput | CommunityPostUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: CommunityPostCreateManyGroupInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutGroupInput | CommunityPostUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutGroupInput | CommunityPostUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput> | CommunityPostCreateWithoutGroupInput[] | CommunityPostUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutGroupInput | CommunityPostCreateOrConnectWithoutGroupInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutGroupInput | CommunityPostUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: CommunityPostCreateManyGroupInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutGroupInput | CommunityPostUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutGroupInput | CommunityPostUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type CommunityGroupCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityGroupCreateWithoutPostsInput, CommunityGroupUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityGroupCreateOrConnectWithoutPostsInput
    connect?: CommunityGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommunityPostsInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityGroupUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CommunityGroupCreateWithoutPostsInput, CommunityGroupUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityGroupCreateOrConnectWithoutPostsInput
    upsert?: CommunityGroupUpsertWithoutPostsInput
    connect?: CommunityGroupWhereUniqueInput
    update?: XOR<XOR<CommunityGroupUpdateToOneWithWhereWithoutPostsInput, CommunityGroupUpdateWithoutPostsInput>, CommunityGroupUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutCommunityPostsNestedInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    upsert?: UserUpsertWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityPostsInput, UserUpdateWithoutCommunityPostsInput>, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentCreateNestedOneWithoutReviewInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DoctorProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<DoctorProfileCreateWithoutReviewsInput, DoctorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutReviewsInput
    connect?: DoctorProfileWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutReviewInput
    upsert?: AppointmentUpsertWithoutReviewInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutReviewInput, AppointmentUpdateWithoutReviewInput>, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type DoctorProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<DoctorProfileCreateWithoutReviewsInput, DoctorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DoctorProfileCreateOrConnectWithoutReviewsInput
    upsert?: DoctorProfileUpsertWithoutReviewsInput
    connect?: DoctorProfileWhereUniqueInput
    update?: XOR<XOR<DoctorProfileUpdateToOneWithWhereWithoutReviewsInput, DoctorProfileUpdateWithoutReviewsInput>, DoctorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type DoctorProfileCreateWithoutUserInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutUserInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
  }

  export type BlogPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type BlogPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type BlogPostCreateOrConnectWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostCreateManyAuthorInputEnvelope = {
    data: BlogPostCreateManyAuthorInput | BlogPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    post: BlogPostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostCreateWithoutUserInput = {
    id?: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
    group: CommunityGroupCreateNestedOneWithoutPostsInput
  }

  export type CommunityPostUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostCreateOrConnectWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostCreateManyUserInputEnvelope = {
    data: CommunityPostCreateManyUserInput | CommunityPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoodLogCreateWithoutUserInput = {
    id?: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
  }

  export type MoodLogUncheckedCreateWithoutUserInput = {
    id?: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
  }

  export type MoodLogCreateOrConnectWithoutUserInput = {
    where: MoodLogWhereUniqueInput
    create: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput>
  }

  export type MoodLogCreateManyUserInputEnvelope = {
    data: MoodLogCreateManyUserInput | MoodLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorProfileUpsertWithoutUserInput = {
    update: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorProfileCreateWithoutUserInput, DoctorProfileUncheckedCreateWithoutUserInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutUserInput, DoctorProfileUncheckedUpdateWithoutUserInput>
  }

  export type DoctorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type BlogPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogPostCreateWithoutAuthorInput, BlogPostUncheckedCreateWithoutAuthorInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutAuthorInput, BlogPostUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    authorId?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    coverImageUrl?: StringNullableFilter<"BlogPost"> | string | null
    category?: StringFilter<"BlogPost"> | string
    tags?: StringNullableListFilter<"BlogPost">
    status?: StringFilter<"BlogPost"> | string
    readTimeMins?: IntFilter<"BlogPost"> | number
    likesCount?: IntFilter<"BlogPost"> | number
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    isApproved?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutUserInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityPostScalarWhereInput = {
    AND?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    OR?: CommunityPostScalarWhereInput[]
    NOT?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    groupId?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    isAnonymous?: BoolFilter<"CommunityPost"> | boolean
    isApproved?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
  }

  export type MoodLogUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodLogWhereUniqueInput
    update: XOR<MoodLogUpdateWithoutUserInput, MoodLogUncheckedUpdateWithoutUserInput>
    create: XOR<MoodLogCreateWithoutUserInput, MoodLogUncheckedCreateWithoutUserInput>
  }

  export type MoodLogUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodLogWhereUniqueInput
    data: XOR<MoodLogUpdateWithoutUserInput, MoodLogUncheckedUpdateWithoutUserInput>
  }

  export type MoodLogUpdateManyWithWhereWithoutUserInput = {
    where: MoodLogScalarWhereInput
    data: XOR<MoodLogUpdateManyMutationInput, MoodLogUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodLogScalarWhereInput = {
    AND?: MoodLogScalarWhereInput | MoodLogScalarWhereInput[]
    OR?: MoodLogScalarWhereInput[]
    NOT?: MoodLogScalarWhereInput | MoodLogScalarWhereInput[]
    id?: StringFilter<"MoodLog"> | string
    userId?: StringFilter<"MoodLog"> | string
    moodScore?: IntFilter<"MoodLog"> | number
    sensoryLogJson?: JsonNullableFilter<"MoodLog">
    eventNotes?: StringNullableFilter<"MoodLog"> | string | null
    loggedBy?: StringFilter<"MoodLog"> | string
    createdAt?: DateTimeFilter<"MoodLog"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    relatedUrl?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultationNote?: ConsultationNoteCreateNestedOneWithoutAppointmentInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultationNote?: ConsultationNoteUncheckedCreateNestedOneWithoutAppointmentInput
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationNoteCreateWithoutDoctorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutConsultationNoteInput
  }

  export type ConsultationNoteUncheckedCreateWithoutDoctorInput = {
    id?: string
    appointmentId: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultationNoteCreateOrConnectWithoutDoctorInput = {
    where: ConsultationNoteWhereUniqueInput
    create: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput>
  }

  export type ConsultationNoteCreateManyDoctorInputEnvelope = {
    data: ConsultationNoteCreateManyDoctorInput | ConsultationNoteCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutDoctorInput = {
    id?: string
    appointmentId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewCreateManyDoctorInputEnvelope = {
    data: ReviewCreateManyDoctorInput | ReviewCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorProfileInput = {
    update: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type UserUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    guestName?: StringFilter<"Appointment"> | string
    guestEmail?: StringFilter<"Appointment"> | string
    guestPhone?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    durationMins?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    sessionType?: StringFilter<"Appointment"> | string
    stripePaymentId?: StringNullableFilter<"Appointment"> | string | null
    videoRoomUrl?: StringNullableFilter<"Appointment"> | string | null
    bookingReference?: StringFilter<"Appointment"> | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type ConsultationNoteUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ConsultationNoteWhereUniqueInput
    update: XOR<ConsultationNoteUpdateWithoutDoctorInput, ConsultationNoteUncheckedUpdateWithoutDoctorInput>
    create: XOR<ConsultationNoteCreateWithoutDoctorInput, ConsultationNoteUncheckedCreateWithoutDoctorInput>
  }

  export type ConsultationNoteUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ConsultationNoteWhereUniqueInput
    data: XOR<ConsultationNoteUpdateWithoutDoctorInput, ConsultationNoteUncheckedUpdateWithoutDoctorInput>
  }

  export type ConsultationNoteUpdateManyWithWhereWithoutDoctorInput = {
    where: ConsultationNoteScalarWhereInput
    data: XOR<ConsultationNoteUpdateManyMutationInput, ConsultationNoteUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ConsultationNoteScalarWhereInput = {
    AND?: ConsultationNoteScalarWhereInput | ConsultationNoteScalarWhereInput[]
    OR?: ConsultationNoteScalarWhereInput[]
    NOT?: ConsultationNoteScalarWhereInput | ConsultationNoteScalarWhereInput[]
    id?: StringFilter<"ConsultationNote"> | string
    appointmentId?: StringFilter<"ConsultationNote"> | string
    doctorId?: StringFilter<"ConsultationNote"> | string
    content?: StringFilter<"ConsultationNote"> | string
    createdAt?: DateTimeFilter<"ConsultationNote"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
    create: XOR<ReviewCreateWithoutDoctorInput, ReviewUncheckedCreateWithoutDoctorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutDoctorInput, ReviewUncheckedUpdateWithoutDoctorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutDoctorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    appointmentId?: StringFilter<"Review"> | string
    patientId?: StringFilter<"Review"> | string
    doctorId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type DoctorProfileCreateWithoutAppointmentsInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
    consultationNotes?: ConsultationNoteCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    consultationNotes?: ConsultationNoteUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
  }

  export type ConsultationNoteCreateWithoutAppointmentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutConsultationNotesInput
  }

  export type ConsultationNoteUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultationNoteCreateOrConnectWithoutAppointmentInput = {
    where: ConsultationNoteWhereUniqueInput
    create: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
  }

  export type ReviewCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAppointmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorProfileUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorProfileUpdateWithoutAppointmentsInput, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorProfileCreateWithoutAppointmentsInput, DoctorProfileUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutAppointmentsInput, DoctorProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorProfileUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    consultationNotes?: ConsultationNoteUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationNotes?: ConsultationNoteUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type ConsultationNoteUpsertWithoutAppointmentInput = {
    update: XOR<ConsultationNoteUpdateWithoutAppointmentInput, ConsultationNoteUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ConsultationNoteCreateWithoutAppointmentInput, ConsultationNoteUncheckedCreateWithoutAppointmentInput>
    where?: ConsultationNoteWhereInput
  }

  export type ConsultationNoteUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ConsultationNoteWhereInput
    data: XOR<ConsultationNoteUpdateWithoutAppointmentInput, ConsultationNoteUncheckedUpdateWithoutAppointmentInput>
  }

  export type ConsultationNoteUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutConsultationNotesNestedInput
  }

  export type ConsultationNoteUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutAppointmentInput = {
    update: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ReviewCreateWithoutAppointmentInput, ReviewUncheckedCreateWithoutAppointmentInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutAppointmentInput, ReviewUncheckedUpdateWithoutAppointmentInput>
  }

  export type ReviewUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutConsultationNoteInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
    review?: ReviewCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutConsultationNoteInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    doctorId: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutConsultationNoteInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutConsultationNoteInput, AppointmentUncheckedCreateWithoutConsultationNoteInput>
  }

  export type DoctorProfileCreateWithoutConsultationNotesInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    reviews?: ReviewCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutConsultationNotesInput = {
    id?: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutConsultationNotesInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutConsultationNotesInput, DoctorProfileUncheckedCreateWithoutConsultationNotesInput>
  }

  export type AppointmentUpsertWithoutConsultationNoteInput = {
    update: XOR<AppointmentUpdateWithoutConsultationNoteInput, AppointmentUncheckedUpdateWithoutConsultationNoteInput>
    create: XOR<AppointmentCreateWithoutConsultationNoteInput, AppointmentUncheckedCreateWithoutConsultationNoteInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutConsultationNoteInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutConsultationNoteInput, AppointmentUncheckedUpdateWithoutConsultationNoteInput>
  }

  export type AppointmentUpdateWithoutConsultationNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutConsultationNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type DoctorProfileUpsertWithoutConsultationNotesInput = {
    update: XOR<DoctorProfileUpdateWithoutConsultationNotesInput, DoctorProfileUncheckedUpdateWithoutConsultationNotesInput>
    create: XOR<DoctorProfileCreateWithoutConsultationNotesInput, DoctorProfileUncheckedCreateWithoutConsultationNotesInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutConsultationNotesInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutConsultationNotesInput, DoctorProfileUncheckedUpdateWithoutConsultationNotesInput>
  }

  export type DoctorProfileUpdateWithoutConsultationNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutConsultationNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutMoodLogsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoodLogsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoodLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodLogsInput, UserUncheckedCreateWithoutMoodLogsInput>
  }

  export type UserUpsertWithoutMoodLogsInput = {
    update: XOR<UserUpdateWithoutMoodLogsInput, UserUncheckedUpdateWithoutMoodLogsInput>
    create: XOR<UserCreateWithoutMoodLogsInput, UserUncheckedCreateWithoutMoodLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodLogsInput, UserUncheckedUpdateWithoutMoodLogsInput>
  }

  export type UserUpdateWithoutMoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogPostsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogPostsInput = {
    update: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
    create: XOR<UserCreateWithoutBlogPostsInput, UserUncheckedCreateWithoutBlogPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogPostsInput, UserUncheckedUpdateWithoutBlogPostsInput>
  }

  export type UserUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type BlogPostCreateWithoutCommentsInput = {
    id?: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutBlogPostsInput
  }

  export type BlogPostUncheckedCreateWithoutCommentsInput = {
    id?: string
    authorId: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutCommentsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BlogPostUpsertWithoutCommentsInput = {
    update: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogPostCreateWithoutCommentsInput, BlogPostUncheckedCreateWithoutCommentsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutCommentsInput, BlogPostUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogPostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutBlogPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityPostCreateWithoutGroupInput = {
    id?: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommunityPostsInput
  }

  export type CommunityPostUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostCreateOrConnectWithoutGroupInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput>
  }

  export type CommunityPostCreateManyGroupInputEnvelope = {
    data: CommunityPostCreateManyGroupInput | CommunityPostCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutGroupInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutGroupInput, CommunityPostUncheckedUpdateWithoutGroupInput>
    create: XOR<CommunityPostCreateWithoutGroupInput, CommunityPostUncheckedCreateWithoutGroupInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutGroupInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutGroupInput, CommunityPostUncheckedUpdateWithoutGroupInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutGroupInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutGroupInput>
  }

  export type CommunityGroupCreateWithoutPostsInput = {
    id?: string
    name: string
    type: string
    moderatorId?: string | null
    description: string
    memberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityGroupUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    type: string
    moderatorId?: string | null
    description: string
    memberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityGroupCreateOrConnectWithoutPostsInput = {
    where: CommunityGroupWhereUniqueInput
    create: XOR<CommunityGroupCreateWithoutPostsInput, CommunityGroupUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutCommunityPostsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunityPostsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunityPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
  }

  export type CommunityGroupUpsertWithoutPostsInput = {
    update: XOR<CommunityGroupUpdateWithoutPostsInput, CommunityGroupUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityGroupCreateWithoutPostsInput, CommunityGroupUncheckedCreateWithoutPostsInput>
    where?: CommunityGroupWhereInput
  }

  export type CommunityGroupUpdateToOneWithWhereWithoutPostsInput = {
    where?: CommunityGroupWhereInput
    data: XOR<CommunityGroupUpdateWithoutPostsInput, CommunityGroupUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityGroupUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityGroupUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    moderatorId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    memberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCommunityPostsInput = {
    update: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type UserUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    fullName: string
    role?: $Enums.UserRole
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    diagnosisLevel?: string | null
    doctorProfile?: DoctorProfileUncheckedCreateNestedOneWithoutUserInput
    blogPosts?: BlogPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    moodLogs?: MoodLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    diagnosisLevel?: NullableStringFieldUpdateOperationsInput | string | null
    doctorProfile?: DoctorProfileUncheckedUpdateOneWithoutUserNestedInput
    blogPosts?: BlogPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    moodLogs?: MoodLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCreateWithoutReviewInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorProfileCreateNestedOneWithoutAppointmentsInput
    consultationNote?: ConsultationNoteCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutReviewInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    doctorId: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultationNote?: ConsultationNoteUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutReviewInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
  }

  export type DoctorProfileCreateWithoutReviewsInput = {
    id?: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    specialty: string
    licenseNumber: string
    bio: string
    languages?: DoctorProfileCreatelanguagesInput | string[]
    fee: Decimal | DecimalJsLike | number | string
    isApproved?: boolean
    rating?: Decimal | DecimalJsLike | number | string
    totalReviews?: number
    availabilityJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    consultationNotes?: ConsultationNoteUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorProfileCreateOrConnectWithoutReviewsInput = {
    where: DoctorProfileWhereUniqueInput
    create: XOR<DoctorProfileCreateWithoutReviewsInput, DoctorProfileUncheckedCreateWithoutReviewsInput>
  }

  export type AppointmentUpsertWithoutReviewInput = {
    update: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
    create: XOR<AppointmentCreateWithoutReviewInput, AppointmentUncheckedCreateWithoutReviewInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutReviewInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutReviewInput, AppointmentUncheckedUpdateWithoutReviewInput>
  }

  export type AppointmentUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    consultationNote?: ConsultationNoteUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationNote?: ConsultationNoteUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type DoctorProfileUpsertWithoutReviewsInput = {
    update: XOR<DoctorProfileUpdateWithoutReviewsInput, DoctorProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<DoctorProfileCreateWithoutReviewsInput, DoctorProfileUncheckedCreateWithoutReviewsInput>
    where?: DoctorProfileWhereInput
  }

  export type DoctorProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: DoctorProfileWhereInput
    data: XOR<DoctorProfileUpdateWithoutReviewsInput, DoctorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type DoctorProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    languages?: DoctorProfileUpdatelanguagesInput | string[]
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalReviews?: IntFieldUpdateOperationsInput | number
    availabilityJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    consultationNotes?: ConsultationNoteUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type BlogPostCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    coverImageUrl?: string | null
    category: string
    tags?: BlogPostCreatetagsInput | string[]
    status?: string
    readTimeMins?: number
    likesCount?: number
    createdAt?: Date | string
    publishedAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    postId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostCreateManyUserInput = {
    id?: string
    groupId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type MoodLogCreateManyUserInput = {
    id?: string
    moodScore: number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: string | null
    loggedBy: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    isRead?: boolean
    relatedUrl?: string | null
    createdAt?: Date | string
  }

  export type BlogPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type BlogPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogPostUpdatetagsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    readTimeMins?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: BlogPostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: CommunityGroupUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    moodScore?: IntFieldUpdateOperationsInput | number
    sensoryLogJson?: NullableJsonNullValueInput | InputJsonValue
    eventNotes?: NullableStringFieldUpdateOperationsInput | string | null
    loggedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    relatedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    guestName: string
    guestEmail: string
    guestPhone: string
    scheduledAt: Date | string
    durationMins?: number
    status?: $Enums.AppointmentStatus
    sessionType: string
    stripePaymentId?: string | null
    videoRoomUrl?: string | null
    bookingReference: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationNoteCreateManyDoctorInput = {
    id?: string
    appointmentId: string
    content: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyDoctorInput = {
    id?: string
    appointmentId: string
    patientId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationNote?: ConsultationNoteUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationNote?: ConsultationNoteUncheckedUpdateOneWithoutAppointmentNestedInput
    review?: ReviewUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMins?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    sessionType?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    videoRoomUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bookingReference?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationNoteUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutConsultationNoteNestedInput
  }

  export type ConsultationNoteUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationNoteUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    userId: string
    content: string
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateManyGroupInput = {
    id?: string
    userId: string
    content: string
    isAnonymous?: boolean
    isApproved?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}