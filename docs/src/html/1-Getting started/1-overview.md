---
title: Overview
template: doc.jade
---

Welcome to the TELUS Design System. We're glad you're planning on using Thorium in your project! Our Getting started pages have all the information you need to start using the system today.

As this is a pre-release there are a couple of things you should be comfortable before you use the system:

- Must be comfortable using Thorium aesthetic (B4YB).
- Created to support new builds (greenfield). The new tech stack may clash with your existing architecture.
It requires:
Using Thorium build pipeline

**Core**:
- Leverage Thorium typestack
- Leverage SCSS for stylesheets in order to use Thorium’s NPM module. If not, the CDN version of Thorium should be used.

**Enriched**:
- All of core
- Leverage React as a Javascript framework
- Thorium requires ES6 javascript syntax.
- Leverage the Chai, Mocha, and Enzyme (React specific) testing frameworks.

Design team should be ramped up and comfortable working in Sketch
Plan for technical debt to contribute site elements and incorporate feedback from the Design Guild/Thorium System.


## Adoption thresholds

---

1. **Design integration:** Use styles from the [Sketch file](/assets/downloads/thorium.sketch), but custom code the entirety of the site.
2. **CSS integration:** Teams on different JS stacks must use 100% of the core (CSS) library. Some projects may require “vendoring the file”, which will no longer use the Thorium update pipeline.
2. **Connected integration:** You can [connect](/5-Governance/1-consumption.html#getting-updates) and always have the latest styles. Staying in the loop may make your life a lot easier. Use CDN to connect to Thorium, unless you envision overwriting styles. Then use NPM.
3. **JS integration:** For the enriched experience, you must be 100% able to use the React framework. This will lead to the most efficient Thorium experience. [Deciding between NPM vs CDN](/5-Governance/1-consumption.html#choosing-cdn-vs-npm) should be based on your level of functional complexity.


## Websites that use the early release of Thorium

---

Below are a handful of the website and applications currently using the Design System. If your project is currently using the System and you do not see it on this list, please feel free to email the team at [sebastian.krumhausen@telus.com](mailto:sebastian.krumhausen@telus.com)

* [TELUS Business](http://business.telus.com)
* [TELUS Business Authenticated](http://business.telus.com)
* NaaS
* [TELUS.com Detail & Bundles pages](http://www.telus.com/en/bc/deals/new/switch-to-4k)

Note: these websites are in different states of completion (e.g. prototype, MVP, live) and use the design standards at different levels of involvement (e.g. fonts, colours, components, front end code).