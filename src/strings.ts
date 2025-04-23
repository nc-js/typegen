/**
 * This module contains types and functions for representing string literals.
 *
 * ```ts
 * import { singleQuoteLit } from '@nc/tasty/strings'
 *
 * ```
 * @module
 */

import type { UnionType } from './composite.ts'
import { union } from './composite.ts'

/** A type that is either a string or can be converted to a string */
export type Stringable = string | { toString(): string }

/** A single-quoted string literal */
export type SingleQuoteLit<T extends string = string> = `'${T}'`

/** A double-quoted string literal */
export type DoubleQuoteLit<T extends string = string> = `"${T}"`

/** A template string literal */
export type TemplateLit<T extends string = string> = `\`${T}\``

/** A string literal type */
export type StringLit<T extends string = string> =
	| SingleQuoteLit<T>
	| DoubleQuoteLit<T>
	| TemplateLit<T>

/**
 * Creates a string literal type with single quotes
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export const singleQuoteLit = (s: string): SingleQuoteLit => `'${s}'`

/**
 * Creates a string literal type with double quotes
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export const doubleQuoteLit = (s: string): DoubleQuoteLit => `"${s}"`

/**
 * Creates a string template literal type
 * @see https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 */
export const templateLit = (s: string): TemplateLit => `\`${s}\``

/**
 * Creates multiple string literal types
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export const stringLits = (vals: string[]): SingleQuoteLit[] =>
	vals.map((l) => singleQuoteLit(l))

/**
 * Creates a union type of string literals
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
export const stringUnion = (vals: string[]): UnionType =>
	union(stringLits(vals))
