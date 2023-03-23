!INCLUDE "../tds-sunset.html"

# Contributing standards

The TELUS Design System maintains a set of standards and practices for core components and community components.

- [What is Core and Community?](#what-is-core-and-community)
  - [Core versus Community](#core-versus-community)
- [Community component criteria](#community-component-criteria)
- [Component principles](#component-principles)
- [References](#references)

## What is Core and Community?

**TDS Core** provides a library of highly-reusable components and foundational principles that can be composed and combined to help solve
complex designs rapidly. **TDS Community** is a centralized library of components that are not quite foundational, but are
identified as reusable among several teams at TELUS.

Learn more by reading the [TELUS Design Platform roadmap](../roadmap.md) or by [reaching out to us](../contact.md).

### Core versus Community

TDS Core and TDS Community are very similar. They have:

- **Tooling**: Sketch users consume InVision DSM components, React users consume npm packages
- **Quality**: both Core and Community embody the same quality standards

Core and Community differ in the following ways:

- **Governance**: Core's roadmap and maintenance is determined by a single product team, whereas Community utilizes a federated governance model;
  with a group of representatives from every major team at TELUS appraising and triaging contributions made to Community components
- **Reusability**: Core components typically wrap simple patterns that are highly reusable across most teams, whereas Community components
  represent solved designs that are coded and sharable among outcome teams without reliance on the Core design system team
- **Ownership**: Core components are built and maintained by the TELUS Design System team. Community components are built and maintained by all consumers, and and owned by the Digital Platform Ambassadors
  <!-- TODO: add link to digital platform ambassadors -->

## Community component criteria

Before designing or contributing new components, confirm the following criteria in order to qualify
a viable community component. If knowing that a component can qualify for TDS Community is uncertain, we still welcome
[opening a new issue][tds-community-new-issue] to gather more details and find opportunities.

A community component:

<!-- prettier-ignore-start -->

1. **Must** have an identified use case in at least 2 unique experiences
  - Community components have the most impact when shared across multiple situations in many experiences
  - Core components have the most impact when they can be used across most experiences and can be composed to solve complex designs
2. **Must** be brand aligned and assessed by Design Direction (if applicable)
  - New user experience patterns must involve Design Direction to preserve a high-quality and consistent end customer experience
3. **Must** not include business logic or proprietary information  
  - The presence of these things limits the breadth of reuse for a component
  - Design system components are focused on reusable user experience patterns. Keep business logic, API calls, content, or other application-specific behaviour in the application
    <details>
      <summary>See more details regarding business logic</summary>
      Examples of business logic:
      <ul>
        <li>Controlling, fetching, and displaying proprietary TELUS data</li>
        <li>Controlling, fetching, and displaying information from an external API (such as YouTube or Google Maps) in a manner that could limit the component scope, or reusability of the API. Even if the external API has evaluated use cases, use discretion as it could increase the maintenance scope of the component</li>
        <li>Interacting with other components on a page that are not self-contained</li>
      </ul>

      Examples of not business logic:
      <ul>
        <li>Rendering different views based on designs</li>
        <li>Controlling global aspects of the DOM (window, document). Not recommended, but acceptable</li>
        <li>Having internal component state (i.e. React class components)</li>
      </ul>
    </details>
4. **Must** be sufficiently different than other available shared components
  - Community components reduce duplication by promoting flexibility and reuse of existing code
  - Before creating a new component, consider whether an existing pattern and component is sufficient. If not, consider extending or adding features to an existing component before creating a new one
5. **Should** be sufficiently granular to promote reuse
  - Design system components should encapsulate a single pattern or user experience "element." Seek to find the most granular, standalone, reusable pattern

Note, this criteria should be interpreted as described in [RFC2119](https://tools.ietf.org/html/rfc2119).

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

<!-- prettier-ignore-end -->

## References

- [TDS Core on GitHub](https://github.com/telus/tds-core)
- [TDS Community on GitHub](https://github.com/telus/tds-community)

[tds-community-new-issue]: https://github.com/telus/tds-community/issues/new/choose
