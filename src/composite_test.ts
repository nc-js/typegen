import { assertEquals } from '@std/assert'
import { assertType } from '@std/testing/types'
import type { IsExact } from '@std/testing/types'
import { stringLits } from './strings.ts'
import { intersect, union } from './composite.ts'
import type {
	Composite,
	CompositeToken,
	IntersectionType,
	UnionType,
} from './composite.ts'

// deno-fmt-ignore
Deno.test('composite type tests', () => {
	assertType<IsExact<'|' | '&', CompositeToken>>(true)
	assertType<IsExact<Composite<'|'>, UnionType>>(true)
	assertType<IsExact<Composite<'&'>, IntersectionType>>(true)
	assertType<IsExact<ReturnType<typeof union>, UnionType>>(true)
	assertType<IsExact<ReturnType<typeof intersect>, IntersectionType>>(true)
})

Deno.test('union type - empty', () => {
	assertEquals(union([]).toString(), '')
})

Deno.test('union type - items on 1 line', () => {
	assertEquals(
		union(stringLits(['vanilla', 'chocolate', 'strawberry'])).toString(),
		"'vanilla' | 'chocolate' | 'strawberry'",
	)
})

Deno.test('union type - items on multiple line', () => {
	assertEquals(
		union(stringLits(['vanilla', 'chocolate', 'strawberry']), 3)
			.toString(),
		"\t| 'vanilla'\n\t| 'chocolate'\n\t| 'strawberry'\n",
	)
})

Deno.test('intersection type - empty', () => {
	assertEquals(
		intersect([]).toString(),
		'',
	)
})

Deno.test('intersection type - items on 1 line', () => {
	assertEquals(
		intersect(['Type1', 'Type2']).toString(),
		'Type1 & Type2',
	)
})
