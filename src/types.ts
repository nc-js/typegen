import type { UnionType } from './composite.ts'
import type { Stringable, StringLit } from './strings.ts'

/**
 * Exports a symbol for reuse
 * @see https://www.typescriptlang.org/docs/handbook/modules/reference.html#importing-and-exporting-typescript-specific-declarations
 */
export const exportThis = (type: Stringable): string => `export ${type}`

/**
 * Exports multiple symbols for reuse
 * @see https://www.typescriptlang.org/docs/handbook/modules/reference.html#importing-and-exporting-typescript-specific-declarations
 */
export const exportAll = (types: Stringable[]): string =>
	types.map((type) => exportThis(type)).join('\n')

/**
 * Creates a new type alias
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 */
export const alias = (
	ident: string,
	value: Stringable,
	withNewline: boolean = false,
): string => `type ${ident} =${withNewline ? '\n' : ' '}${value};`

/**
 * Creates a type of `Awaited<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
 */
export const awaited = (type: Stringable): string => `Awaited<${type}>`

/**
 * Creates a type of `Partial<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */
export const partial = (type: Stringable): string => `Partial<${type}>`

/**
 * Creates a type of `Required<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 */
export const required = (type: Stringable): string => `Required<${type}>`

/**
 * Creates a type of `Readonly<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
 */
export const readOnly = (type: Stringable): string => `Readonly<${type}>`

/**
 * Creates a type of `Record<Keys, Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#record
 */
export const record = (keys: Stringable, type: Stringable): string =>
	`Record<${keys}, ${type}>`

/**
 * Creates a type of `Pick<Type, Keys>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
 */
export const pick = (
	type: Stringable,
	keys: StringLit | UnionType,
): string => `Pick<${type}, ${keys}>`

/**
 * Creates a type of `Omit<Type, Keys>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
 */
export const omit = (
	type: Stringable,
	keys: StringLit | UnionType,
): string => `Omit<${type}, ${keys}>`

/**
 * Creates a type of `Exclude<UnionType, ExcludedMembers>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 */
export const exclude = (
	unionType: UnionType,
	excludedMembers: StringLit | UnionType,
): string => `Exclude<${unionType}, ${excludedMembers}>`

/**
 * Creates a type of `Extract<Type, Union>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
 */
export const extract = (
	type: Stringable,
	union: StringLit | UnionType,
): string => `Extract<${type}, ${union}>`

/**
 * Creates a type of `NonNullable<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
 */
export const nonNullable = (type: Stringable): string => `NonNullable<${type}>`

/**
 * Creates a type of `Parameters<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 */
export const parameters = (type: Stringable): string => `Parameters<${type}>`

/**
 * Creates a type of `ConstructorParameters<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype
 */
export const constructorParameters = (type: Stringable): string =>
	`ConstructorParameters<${type}>`

/**
 * Creates a type of `ReturnType<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype
 */
export const returnType = (type: Stringable): string => `ReturnType<${type}>`

/**
 * Creates a type of `InstanceType<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype
 */
export const instanceType = (type: Stringable): string =>
	`InstanceType<${type}>`

/**
 * Creates a type of `NoInfer<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#noinfertype
 */
export const noInfer = (type: Stringable): string => `NoInfer<${type}>`

/**
 * Creates a type of `ThisParameter<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertype
 */
export const thisParameterType = (type: Stringable): string =>
	`ThisParameterType<${type}>`

/**
 * Creates a type of `ThisParameter<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype
 */
export const omitThisParameter = (type: Stringable): string =>
	`OmitThisParameter<${type}>`

/**
 * Creates a type of `ThisType<Type>`
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype
 */
export const thisType = (type: Stringable): string => `ThisType<${type}>`
