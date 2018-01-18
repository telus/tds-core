# The TELUS Design Platform Roadmap

We plan the TELUS Design Platform roadmap based on the priorities of TELUS and vendor teams. In addition, we coordinate with 
the wider Digital Platform teams to provide a holistic platform for building rich Web experiences in the TELUS ecosystem.

TDS will continue to release incrementally while we work towards our larger goals.


## TDS Alpha and Beta versions (2016-2017)

TDS alpha and beta versions established a structure of "core" and "enriched" packages, which separated styles from interactive React 
components. The Core layer contained the styles needed to skin all fundamental HTML elements (e.g. text, links, lists, 
form elements, etc) and the Enriched components pulled in the Core CSS to provide more complex experience elements, such 
as step trackers or accordions.

From the alpha and beta periods, we learned that large amounts of CSS in the global namespace is very difficult to maintain 
at scale. CSS classes only provide look-and-feel, while missing other critical concerns such as accessibility and interactivity. 
Finally, CSS classes do not have a straightforward evolution path, often requiring breaking changes.

TELUS digital is aligned on JavaScript and React as the target for creating rich user experiences on the web. Because React 
makes components a first-class citizen, the CSS-first approach of TDS makes less sense. We can provide a richer 
TDS experience by embracing React completely.

Future versions of TDS will move the Core styles into React components and a JavaScript API.


## Current: TDS version 1 (January 2018)

TDS has fully migrated away from the CSS-first approach of alpha and beta, fully embracing React components. It focuses 
on basic, foundational components that immediately allow more complex experiences to be built on top of them in the following 
categories:

* **Typography**: font settings, body copy, and headings
* **Layout**: responsiveness, spacing, and 2-dimensional alignment (grid)
* **Content**: images, dividers, and iconography
* **Forms**: button, text-based input, multiple choice input, checkboxes, and radios
* **Feedback**: notification, busy indicator

All components are available both as React components and Sketch symbols.


## Next: TELUS Design Platform MVP (Q2 2018)

With a foundational set of components available in the system for immediate use, we plan to shift our focus from delivery of
components to delivery of a platform that enables others to contribute components into the system. This will likely include:

* **Architecture changes** such as splitting up the TDS components into separately versioned packages
* The initial release of a **component catalogue** so that you can share and reuse components developed by others in the community.
* More scalable **governance strategies** so that the system can self-govern as the number of participants increases.

At the same time we will continue to enhance and expand the components in the design system in accordance with their individual
roadmaps.

We are currently analysing and prioritizing initiatives for this release. Stay tuned for more!


## Future initiatives

* Ensuring full integration with specialist applications such as Global Elements and SiteBuilder
* A more branded and customized documentation portal
* Adoption of a CSS-in-JS methodology. [react-native-web](https://github.com/necolas/react-native-web) is the current front runner 
* Deeper integration of code-based components with design tools. Bleeding edge beacons: [React Sketch.app](http://airbnb.io/react-sketchapp) 
and [html-sketchapp](https://github.com/brainly/html-sketchapp)


## Want to get involved?

We continuously tune the plan based on feedback and priorities. Please follow along and let us know what you think!

Learn [how to contribute](./contributing/contributing.md) and discuss features.

[Reach out to us](contact.md)!
