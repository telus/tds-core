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
2. **CSS integration:** Use `telus-thorium-core` css styles only
3. **JS integration:** Use `telus-thorium-enriched`, for this you must be familiar with the React framework.

[Deciding between NPM vs CDN](/2-Use-Thorium/1-getting-started.html#choosing-cdn-vs-npm) should be based on your level of functional complexity.
