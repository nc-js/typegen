import { assertEquals } from '@std/assert'
import { assertType } from '@std/testing/types'
import type { IsExact } from '@std/testing/types'
import {
	doubleQuoteLit,
	singleQuoteLit,
	stringLits,
	stringUnion,
	templateLit,
} from './strings.ts'
import type { DoubleQuoteLit, SingleQuoteLit, TemplateLit } from './strings.ts'
import type { UnionType } from './composite.ts'

Deno.test('string types', () => {
	assertType<IsExact<ReturnType<typeof singleQuoteLit>, SingleQuoteLit>>(true)
	assertType<IsExact<ReturnType<typeof doubleQuoteLit>, DoubleQuoteLit>>(true)
	assertType<IsExact<ReturnType<typeof templateLit>, TemplateLit>>(true)
	assertType<IsExact<ReturnType<typeof stringLits>, SingleQuoteLit[]>>(true)
	assertType<IsExact<ReturnType<typeof stringUnion>, UnionType>>(true)
})

Deno.test('single-quoted string literal', () => {
	assertEquals(singleQuoteLit('test'), "'test'")
})

Deno.test('double-quoted string literal', () => {
	assertEquals(doubleQuoteLit('test'), '"test"')
})

Deno.test('template string literal', () => {
	assertEquals(templateLit('test'), '`test`')
})

Deno.test('multiple single-quoted string literals as an array', () => {
	assertEquals(
		stringLits(['Red', 'Green', 'Blue']),
		["'Red'", "'Green'", "'Blue'"],
	)
})

Deno.test('multiple single-quoted string literals as a union', () => {
	assertEquals(
		stringUnion(['Red', 'Green', 'Blue']).toString(),
		"'Red' | 'Green' | 'Blue'",
	)
})
