# Thorium
Thorium, the TELUS Design system is a set of living guidelines that communicates our brand promise through our digital’ experiences. It's a holistic platform that integrates documentation, guidelines and design management and that serves as single source for digital design guidelines, code patterns and UI elements.

## Contributor Quick Start

Clone this repository, install dependencies, transpile assets, then start the project in development mode.

```
git clone git@github.com:telusdigital/telus-thorium-core.git
npm install
npm run build
npm run start:dev
```

The documentation site will be available at `http://localhost:8080`.

For more information about contributing, please see the [Governance - Contribution page](/docs/5-Governance/2-contributing.md).

## Building and Maintaining the Icon Font

Core icons are implemented as an icon font. The source file is at `./designs/core-icons.glyphs`

The change process is:

1. Update `./designs/core-icons.glyphs`
2. Export an OTF file to `./fonts/core-icons.otf`
3. Execute `npm run build:icons`

This process creates EOT, TTF, and WOFF files from `./fonts/core-icons.otf` and saves them in the same directory.

The next time you run `npm build`, the re-generated icons will be picked up by the documentation site.
