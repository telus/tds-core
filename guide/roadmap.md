# Roadmap

We plan the TELUS Design Platform roadmap based on the priorities of TELUS and partner teams. In addition, we coordinate with
the other Digital Platform teams to provide a comprehensive platform for building rich Web experiences in the TELUS ecosystem.

The TELUS Design System will continue to release incrementally while we work towards wide-reaching Platform initiatives.

## Current Release V2 (March 2018)

TELUS Design System "v2": independently versioned components (March 2018)

Version 1 paved the way for re-architecting the React components into separately versioned packages. We now have a growing library
of components that are identifiable with the `core-` prefix, which represents our seal of quality.

Independently versioned components unlocks many optimizations for consumers, including:

- Applications only need to depend on the core components that are actually being used, reducing bundle size
- Component upgrades can be done more granularly
- The overall versioning scheme is more predictable

Upgrading from v1.0 to "v2" is straightforward and short. Follow [the upgrade instructions](https://github.com/telusdigital/tds-core/releases/v2.0.0) in
Github and use the [tds-codemod](https://github.com/telusdigital/tds-codemod) automatic refactoring tool.

**Note: As of "v2", there will be no more feature releases to the [@telusdigital/tds](https://www.npmjs.com/package/@telusdigital/tds) package.
Instead, all design system components will be released independenly. View available TELUS Design System component packages
[in the TDS npm organization](https://www.npmjs.com/org/tds).**

## Next release: TELUS Design Platform MVP (Q2 2018)

With a foundational set of components available in the system for immediate use, we are shifting our focus from delivery of
_components_ to delivery of a _platform_ that enables others to contribute components into the system. The major initiatives are:

- Creation of the tds-community platform, which enables others to publish components safely and smoothly
- Kickoff the Digital Platform Ambassadors to provide community leadership
- Establish self-governance strategies so that the system can scale organicly

We will continue to enhance and expand the core components in the design system in accordance with their needs.

## More information

You can view our full roadmap and description of initiatives in our [Google Slides deck](https://docs.google.com/presentation/d/1Tw062DhhKKLnasgEzkoA-UHnj3qp7iRATNmiwLG7kzA/edit?usp=sharing).

## Want to get involved?

We continuously tune the plan based on feedback and priorities. Please follow along and let us know what you think!

Learn [how to contribute](./contributing/contributing.md) and discuss features. Or [reach out to us](contact.md).

## History

### Alpha and Beta (2017)

TDS alpha and beta versions established a structure of "core" and "enriched" packages, which separated styles from interactive React
components. The core layer contained the styles needed to skin all fundamental HTML elements (e.g. text, links, lists,
form elements, etc) and the enriched components pulled in the core CSS to provide more complex experience elements, such
as step trackers and accordions.

From the alpha and beta periods, we learned that large amounts of CSS in the global namespace is very difficult to maintain
at scale. CSS classes only provide look-and-feel, while missing other critical concerns such as accessibility and interactivity.
Finally, CSS classes do not have a straightforward evolution path, often requiring breaking changes.

TELUS digital is aligned on JavaScript and React as the target for creating rich user experiences on the web. Because React
makes components a first-class citizen, the CSS-first approach of TDS makes less sense. We can provide a richer
TDS experience by embracing React completely.

Future versions of TDS will move the core styles into React components with a JavaScript API.

See the [last beta release in Github](https://github.com/telusdigital/tds-core/releases/v0.34.0).

### TELUS Design System v1.0 (January 2018)

Since v0.19.0 (August 2017), the TELUS Design System team set out to create a React component library and organized Sketch symbols. The goal
was to create a design system that featured reusable components with built-in accessibility, branding, and variations to serve
TELUS developers in building web properties that adhere to the TELUS brand and have all the features necessary to promote fast
and high-quality development.

Equally importantwas the creation of a library of Sketch assets to promote fast design iteration and easy sharing and syncing of designs.
"Release 1" of the TELUS Design System is the realization of these goals.

More specifically, the TELUS Design System at v1.0 focuses on foundational components and Sketch symbols in the following categories:

- **Typography**: font settings, body copy, and headings
- **Layout**: responsiveness, spacing, and 2-dimensional alignment (grid)
- **Content**: images, dividers, and iconography
- **Forms**: button, text-based input, multiple choice input, checkboxes, and radios
- **Feedback**: notification, busy indicator

See the [v1.0.0 release](https://github.com/telusdigital/tds-core/releases/v1.0.0) in Github.
