# @nc/typegen

@nc/typegen is a small utility package for declaratively generating TypeScript types. Note that while this package is cross-platform, it is meant to be used server-side within build scripts.

## Usage
```ts
import { assertEquals } from '@std/assert'
import { alias, exportThis, stringUnion } from '@nc/typegen'

// your data
const colors = ['Red', 'Green', 'Blue']
// your formatter
const colorType = exportThis(alias('Color', stringUnion(colors)))

assertEquals(
	colorType,
	"export type Color = 'Red' | 'Green' | 'Blue';"
)
```

## License

This software is licensed under the MIT license ([`LICENSE`](./LICENSE) or
<https://opensource.org/license/mit/>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the MIT license, shall be
licensed as above, without any additional terms or conditions.
