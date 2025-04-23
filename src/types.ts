/**
 * Printable built-in utility types
 * @module
 */

import type { UnionType } from './composite.ts'
import type { Stringable, StringLit } from './strings.ts'

/**
 * Exports a symbol for reuse
 * @see {@link https://www.typescriptlang.org/docs/handbook/modules/reference.html#importing-and-exporting-typescript-specific-declarations | TypeScript Handbook}
 */
export const exportThis = (type: Stringable): string => `export ${type}`

/**
 * Exports multiple symbols for reuse
 * @see {@link https://www.typescriptlang.org/docs/handbook/modules/reference.html#importing-and-exporting-typescript-specific-declarations | TypeScript Handbook}
 */
export const exportAll = (types: Stringable[]): string =>
	types.map((type) => exportThis(type)).join('\n')

/**
 * Creates a new type alias
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases | TypeScript Handbook}
 */
export const alias = (
	ident: string,
	value: Stringable,
	withNewline: boolean = false,
): string => `type ${ident} =${withNewline ? '\n' : ' '}${value};`

/**
 * Creates a type of `Awaited<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype | TypeScript Handbook}
 */
export const awaited = (type: Stringable): string => `Awaited<${type}>`

/**
 * Creates a type of `Partial<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype | TypeScript Handbook}
 */
export const partial = (type: Stringable): string => `Partial<${type}>`

/**
 * Creates a type of `Required<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype | TypeScript Handbook}
 */
export const required = (type: Stringable): string => `Required<${type}>`

/**
 * Creates a type of `Readonly<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype | Typescript Handbook}
 */
export const readOnly = (type: Stringable): string => `Readonly<${type}>`

/**
 * Creates a type of `Record<Keys, Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#record | TypeScript Handbook}
 */
export const record = (keys: Stringable, type: Stringable): string =>
	`Record<${keys}, ${type}>`

/**
 * Creates a type of `Pick<Type, Keys>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys | TypeScript Handbook}
 */
export const pick = (
	type: Stringable,
	keys: StringLit | UnionType,
): string => `Pick<${type}, ${keys}>`

/**
 * Creates a type of `Omit<Type, Keys>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys | TypeScript Handbook}
 */
export const omit = (
	type: Stringable,
	keys: StringLit | UnionType,
): string => `Omit<${type}, ${keys}>`

/**
 * Creates a type of `Exclude<UnionType, ExcludedMembers>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers | TypeScript Handbook}
 */
export const exclude = (
	unionType: UnionType,
	excludedMembers: StringLit | UnionType,
): string => `Exclude<${unionType}, ${excludedMembers}>`

/**
 * Creates a type of `Extract<Type, Union>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union | TypeScript Handbook}
 */
export const extract = (
	type: Stringable,
	union: StringLit | UnionType,
): string => `Extract<${type}, ${union}>`

/**
 * Creates a type of `NonNullable<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype | TypeScript Handbook}
 */
export const nonNullable = (type: Stringable): string => `NonNullable<${type}>`

/**
 * Creates a type of `Parameters<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype | TypeScript Handbook}
 */
export const parameters = (type: Stringable): string => `Parameters<${type}>`

/**
 * Creates a type of `ConstructorParameters<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype | TypeScript Handbook}
 */
export const constructorParameters = (type: Stringable): string =>
	`ConstructorParameters<${type}>`

/**
 * Creates a type of `ReturnType<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype | TypeScript Handbook}
 */
export const returnType = (type: Stringable): string => `ReturnType<${type}>`

/**
 * Creates a type of `InstanceType<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype | TypeScript Handbook}
 */
export const instanceType = (type: Stringable): string =>
	`InstanceType<${type}>`

/**
 * Creates a type of `NoInfer<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#noinfertype | TypeScript Handbook}
 */
export const noInfer = (type: Stringable): string => `NoInfer<${type}>`

/**
 * Creates a type of `ThisParameter<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertype | TypeScript Handbook}
 */
export const thisParameterType = (type: Stringable): string =>
	`ThisParameterType<${type}>`

/**
 * Creates a type of `ThisParameter<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omitthisparametertype | TypeScript Handbook}
 */
export const omitThisParameter = (type: Stringable): string =>
	`OmitThisParameter<${type}>`

/**
 * Creates a type of `ThisType<Type>`
 * @see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype | TypeScript Handbook}
 */
export const thisType = (type: Stringable): string => `ThisType<${type}>`
