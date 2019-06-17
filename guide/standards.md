# Standards

The TELUS Design System maintains a set of standards and practices for core components and community components.

## What is Core and Community?

**TDS Core** provides a library of highly-reusable components and foundational principles that can be composed and combined to help solve
complex designs rapidly. **TDS Community** is a centralized library of components that are not quite foundational, but are
identified as reusable among several teams at TELUS.

Learn more by reading the [TELUS Design Platform roadmap](../roadmap.md) or by [reaching out to us](../contact.md).

### Core versus Community

TDS Core and TDS Community are very similar. They have:

- Tooling: Sketch users consume InVision DSM components, React users consume npm packages
- Quality: both Core and Community embody the same quality standards

Core and Community differ in the following ways:

- Governance: Core's roadmap and maintenance is determined by a single product team, whereas Community utilizes a federated governance model;
  with a group of representatives from every major team at TELUS appraising and triaging contributions made to Community components
- Reusability: Core components typically wrap simple patterns that are highly reusable across most teams, whereas Community components
  represent solved designs that are coded and sharable among outcome teams without reliance on the Core design system team
- Ownership: Core components are built and maintained by the TELUS Design System team. Community components are built and maintained by all consumers, and and owned by the Digital Platform Ambassadors
  <!-- TODO: add link to digital platform ambassadors -->

## Component principles

All TELUS Design System components follow these core principles.

1. Composable

- Components are most effective when they can be combined to form more complex patterns.

2. Accessible

- Follow accessible standards defined in the [TELUS Reference Architecture](https://github.com/telus/reference-architecture/blob/61520d0e05da6fe8d78247fef3ecc6d266b7b186/development/accessibility.md)

3. Responsive

- Mobile-first. Works on any viewport size.

4. Quality

- Thorough testing is a first class concern.

5. Cross-browser

- See browser support in [the FAQ](faq.md#what-browsers-does-tds-support)

## References

- [TDS Core on GitHub](https://github.com/telus/tds-core)
- [TDS Community on GitHub](https://github.com/telus/tds-community)
