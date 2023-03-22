!INCLUDE "tds-sunset.html"

# Roadmap

We plan the TELUS Design System (TDS) roadmap based on the priorities of TELUS and partner teams. In addition, we coordinate with the other Digital Platform teams to provide a comprehensive system for building rich Web experiences in the TELUS ecosystem.

You can view our detailed 2020 roadmap in our [Google Sheet](https://docs.google.com/spreadsheets/d/1CBviBSSxOKwsr5CsQxofJ6_HmybpLlG3PEh0jpEb74Q).

## Current: TDS V3 (August 2019)

The TELUS Design System (TDS) and Architecture Support (AST) teams aligned on a common CSS-in-JS standard at TELUS in February 2019, thereby moving ahead with Styled Components V4 as the selected framework.

More information can be found here:

- [Reference Architecture CSS standard](https://github.com/telus/reference-architecture/blob/bb7059d135574c380d2865aa1bbdd633c2345461/development/css.md)
- [Guide: Upgrading to TDS v3](https://tds.telus.com/v3-upgrade.html)
- [TDS Sunset Strategy](https://github.com/telus/technology-forum/issues/285)

## TDS V2 (March 2018)

TELUS Design System "V2": independently versioned components (March 2018)

Version 1 paved the way for re-architecting the React components into separately versioned packages.

Independently versioned components unlocks many optimizations for consumers, including:

- Applications only need to depend on the core components that are actually being used, reducing bundle size
- Component upgrades can be done more granularly
- The overall versioning scheme is more predictable

Upgrading from v1.0 to "v2" is straightforward and short. Follow [the upgrade instructions](https://github.com/telusdigital/tds-core/releases/v2.0.0) in
Github and use the [tds-codemod](https://github.com/telusdigital/tds-codemod) automatic refactoring tool.

**Note: As of "v2", there will be no more feature releases to the [@telusdigital/tds](https://www.npmjs.com/package/@telusdigital/tds) package. Instead, all design system components will be released independenly. View available TELUS Design System component packages [in the TDS npm organization](https://www.npmjs.com/org/tds).**

## Want to get involved?

We continuously tune the plan based on feedback and priorities. Please follow along and let us know what you think!

Get involved with TDS Community: [Google Slides deck](https://docs.google.com/presentation/d/1lp127fvomlsWVsM9aShhtGi-Xnacw3lJGk4LJ81jfIQ/edit#slide=id.g3b3c6d42e7_0_0).

Learn [how to contribute](./contributing/contributing.md) and discuss features. Or [reach out to us](contact.md).
