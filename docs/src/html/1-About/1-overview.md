---
title: Overview
template: doc.jade
---

Welcome to the TELUS Design System. We're glad you're planning on using TDS in your project! Our Getting started pages have all the information you need to start using the system today.

As this is a pre-release there are a couple of things you should be comfortable before you use the system:

- Must be comfortable using TDS aesthetic (B4YB).
- Created to support new builds (greenfield). The new tech stack may clash with your existing architecture.

**Core**:
- Includes foundational CSS, webfonts and icons

**Enriched**:
- Depends on Core CSS styles
- Uses React Javascript Framework
- Uses ES2015 Javascript syntax
- Uses [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) for Unit testing


Design team should be ramped up and comfortable working in Sketch

## Adoption thresholds

---

1. **Design integration:** Use styles from the [Sketch file](/assets/downloads/thorium.sketch), but custom code the entirety of the site.
2. **CSS integration:** Use `telus-thorium-core` css styles only
3. **JS integration:** Use `telus-thorium-enriched`, for this you must be familiar with the React framework.

[Deciding between NPM vs CDN](/2-Use-TDS/1-getting-started.html#choosing-cdn-vs-npm) for CSS and JS integration should be based on your level of functional complexity.
