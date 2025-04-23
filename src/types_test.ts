import { assertEquals } from '@std/assert'
import {
	alias,
	awaited,
	constructorParameters,
	exclude,
	exportAll,
	exportThis,
	extract,
	instanceType,
	noInfer,
	nonNullable,
	omit,
	omitThisParameter,
	parameters,
	partial,
	pick,
	readOnly,
	record,
	required,
	returnType,
	thisParameterType,
	thisType,
} from './types.ts'
import { singleQuoteLit, stringLits, stringUnion } from './strings.ts'
import { intersect, union } from './composite.ts'

Deno.test('export type alias', () => {
	assertEquals(
		exportThis(alias(
			'Color',
			union(stringLits(['red', 'green', 'blue'])),
		)),
		"export type Color = 'red' | 'green' | 'blue';",
	)
})

Deno.test('export type alias with newline', () => {
	assertEquals(
		exportThis(alias(
			'Color',
			union(stringLits(['red', 'green', 'blue'])),
			true,
		)),
		"export type Color =\n'red' | 'green' | 'blue';",
	)
})

Deno.test('export multiple symbols', () => {
	const types = exportAll([
		alias('A', singleQuoteLit('Foo')),
		alias('B', singleQuoteLit('Bar')),
	])

	const expected = []
	expected.push("export type A = 'Foo';")
	expected.push("export type B = 'Bar';")

	assertEquals(types, expected.join('\n'))
})

Deno.test('Awaited<Type>', () => {
	assertEquals(
		awaited('Promise<string>'),
		'Awaited<Promise<string>>',
	)
})

Deno.test('Partial<Type>', () => {
	assertEquals(
		partial('Todo'),
		'Partial<Todo>',
	)
})

Deno.test('Required<Type>', () => {
	assertEquals(
		required('Todo'),
		'Required<Todo>',
	)
})

Deno.test('Readonly<Type>', () => {
	assertEquals(
		readOnly('Foo'),
		'Readonly<Foo>',
	)
})

Deno.test('Record<Keys, Type>', () => {
	assertEquals(
		record(
			'CatName',
			stringUnion(['miffy', 'boris', 'mordred']),
		),
		"Record<CatName, 'miffy' | 'boris' | 'mordred'>",
	)
})

Deno.test('Pick<Type, Keys>', () => {
	assertEquals(
		pick('Todo', stringUnion(['title', 'completed'])),
		"Pick<Todo, 'title' | 'completed'>",
	)
})

Deno.test('Omit<Type, Keys>', () => {
	assertEquals(
		omit('Todo', stringUnion(['completed', 'createdAt'])),
		"Omit<Todo, 'completed' | 'createdAt'>",
	)
})

Deno.test('Exclude<UnionType, ExcludedMembers>', () => {
	assertEquals(
		exclude(
			stringUnion(['a', 'b', 'c']),
			singleQuoteLit('a'),
		),
		"Exclude<'a' | 'b' | 'c', 'a'>",
	)
})

Deno.test('Extract<Type, Union>', () => {
	assertEquals(
		extract(
			stringUnion(['a', 'b', 'c']),
			stringUnion(['a', 'f']),
		),
		"Extract<'a' | 'b' | 'c', 'a' | 'f'>",
	)
})

Deno.test('NonNullable<Type>', () => {
	assertEquals(
		nonNullable(union(['string', 'null', 'undefined'])),
		'NonNullable<string | null | undefined>',
	)
})

Deno.test('Parameters<Type>', () => {
	assertEquals(
		parameters('() => string'),
		'Parameters<() => string>',
	)
})

Deno.test('ConstructorParameters<Type>', () => {
	assertEquals(
		constructorParameters('ErrorConstructor'),
		'ConstructorParameters<ErrorConstructor>',
	)
})

Deno.test('ReturnType<Type>', () => {
	assertEquals(
		returnType('() => string'),
		'ReturnType<() => string>',
	)
})

Deno.test('InstanceType<Type>', () => {
	assertEquals(
		instanceType('typeof C'),
		'InstanceType<typeof C>',
	)
})

Deno.test('NoInfer<Type>', () => {
	assertEquals(
		noInfer('typeof C'),
		'NoInfer<typeof C>',
	)
})

Deno.test('ThisParameterType<Type>', () => {
	assertEquals(
		thisParameterType('typeof toHex'),
		'ThisParameterType<typeof toHex>',
	)
})

Deno.test('OmitThisParameter<Type>', () => {
	assertEquals(
		omitThisParameter('typeof toHex'),
		'OmitThisParameter<typeof toHex>',
	)
})

Deno.test('ThisType<Type>', () => {
	assertEquals(
		thisType(intersect(['D', 'M'])),
		'ThisType<D & M>',
	)
})
