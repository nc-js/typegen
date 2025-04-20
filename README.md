# TypeScript package with JSR

This repository template allows writing TypeScript packages in pure ESM, and
publishing them to the [JSR registry](https://jsr.io). It provides some default settings for a
relatively zero-config startup.

## Getting started

First, create a new repository. Choose your method:

- **GitHub UI**:
  [Click here](https://github.com/new?template_name=jsr&template_owner=neoncitylights)
  to use this template. (Or, press "Use this template" button in the top-right corner)
- **GitHub CLI**:
  ```shell
  # create a public or private repository from the template
  gh repo create --template neoncitylights/jsr --public --clone {{repository}}
  gh repo create --template neoncitylights/jsr --private --clone {{repository}}
  ```

Then, make sure to update the following:
 - [`./LICENSE`](./LICENSE): change `{{author}}` to your username
or real name, whichever you prefer.
 - [`./deno.json`](./deno.json): change the package name to your own.
 - [`./.github/workflows/publish.yml`](./.github/workflows/publish.yml): Uncomment out the top so that the workflow will publish your package every time there's a commit pushed to `main` branch.
 - Delete this `README.md` file, rename `LIBRARY.md` to `README.md`, and update with your own information.

## Basic commands to know
- `deno fmt`: Format files
- `deno lint`: Lint files
- `deno lint --fix`: Auto-apply lint fixes where possible
- `deno test`: Run unit tests
- `deno check`: Type-check code without executing
- `deno doc --lint`: Lint the JSDoc in your source code before publishing
- `deno doc --html ./src/mod.ts`: Generate HTML documentation from the entrypoint

## Further reading
- [JSR documentation](https://jsr.io/docs/)
- [`deno.json` documentation reference](https://docs.deno.com/runtime/fundamentals/configuration/
)
- [Deno CLI subcommands reference](https://docs.deno.com/runtime/reference/cli/)

## License

This software is licensed under the MIT license ([`LICENSE`](./LICENSE) or
<https://opensource.org/license/mit/>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the MIT license, shall be
licensed as above, without any additional terms or conditions.
