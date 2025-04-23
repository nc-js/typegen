/** A token literal for either a union or intersection */
export type CompositeToken = '|' | '&'

/** A composite type representing a union */
export type UnionType = Composite<'|'>

/** A composite type representing an intersection */
export type IntersectionType = Composite<'&'>

/**
 * A generic type composed of multiple types.
 *
 * @note The built-in formatter is opinionated, and will format
 * as one of the following based on the number of types.
 * - a single-line string, with types separating by a singular space
 * - a multi-line string, with types prefixed by tabs and separated by newlines
 *
 * The default threshold of items to break into a multi-line string is 5.
 */
export class Composite<T extends CompositeToken> {
	private token: T
	private multilineItemsTreshold: number
	private types: string[]

	public constructor(
		token: T,
		types: string[],
		multilineItemsTreshold: number = 5,
	) {
		this.token = token
		this.multilineItemsTreshold = multilineItemsTreshold
		this.types = types
	}

	public toString(): string {
		return this.types.length >= this.multilineItemsTreshold
			? this.types.map((ty) => `\t${this.token} ${ty}\n`).join('')
			: this.types.join(` ${this.token} `)
	}
}

export function union(
	types: string[],
	mulitlineItemsThreshold: number = 5,
): UnionType {
	return new Composite('|', types, mulitlineItemsThreshold)
}

export function intersect(
	types: string[],
	mulitlineItemsThreshold: number = 5,
): IntersectionType {
	return new Composite('&', types, mulitlineItemsThreshold)
}
