---
title: Contributing
template: doc.jade
---

- [Welcome](#welcome)
- [Types of Contributions](#types-of-contributions)
- [Start Contributing](#start-contributing)
- [Components and Blocks Contribution Criteria](#components-and-blocks contribution-criteria)


## Welcome!

---

We're so glad you're thinking about contributing to the TELUS Design System! If you're unsure about anything, just ask — or submit your issue or pull request anyway. The worst that can happen is we'll politely ask you to change something. We appreciate all friendly contributions.

If you have any questions [shoot us an email](mailto:alexandra.fedyk@telus.com).

## Types of contributions

---

### Report Bugs

If you find a bug please [create an issue through GitHub](https://github.com/telusdigital/tds/issues). Please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

For more details on how to file Github issues, refer to the repo's [wiki](https://github.com/telusdigital/tds/wiki/Tasks,-Defects-and-User-Story-Examples).

### Author documentation

The TELUS Design System could always use better documentation, whether as part of the official documentation site, in comments, or even on the web as blog posts or articles.

The current documentation lives in the [docs directory](https://github.com/telusdigital/tds/tree/master/docs) and follows just a few simple rules:

* Each category of documentation is a folder named like *1-Introduction* where "Introduction" is the name of the category, and 1 is its position in the navigation menu.
* Within each category folder are markdown files documenting TDS.
* Those markdown files follow the same naming convention as their parent folders.
* Submit a pull request with any new updates

### Submit Feedback

---

The best way to send feedback is to [file an issue on GitHub](https://github.com/telusdigital/tds/issues).

If you're proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions are welcome.

For more details on how to file Github issues, refer to the repo's [wiki](https://github.com/telusdigital/tds/wiki/Tasks,-Defects-and-User-Story-Examples).

### Contribute code

Fix [bugs](https://github.com/telusdigital/tds/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5BType%5D+Bug%22) and/or implement [features](https://github.com/telusdigital/tds/issues?q=is%3Aopen+is%3Aissue+label%3A%22Feature+Request%22) by choosing an open task from the [Github issues list](https://github.com/telusdigital/tds/issues).


## Start contributing

----

At its core, contributing with Git involves:

1. Pulling the latest changes from `master`.
2. Creating a working branch, from master, in which to make changes.
3. Opening a pull request from your branch to master.

For more details on how to contribute code, refer to the repo's [wiki](https://github.com/telusdigital/tds/wiki/Contributing-Code)


## Components and Blocks Contribution criteria

---

### Design Criteria

* Proposed **solution** (i.e.; element/component) must meet the below criteria to be considered for contribution. Please document and explain how the **solution** meets the following criteria:
    * Improves the experience
    * Fulfills a business requirement(s)
    * Modification validated by end-user testing (please map to KPIs)
    * Other

<p><em>**Note:** Before submitting, please ensure proposed **solution** has been vetted by development team(s), meets all accessibility requirements and is validated by end-user testing (if applicable).</em></p>

* Submit standalone Sketch file of proposed **solution** ("Sketch fragment") including:
    * All required states of **solution** (inactive, active, disabled, error, etc)
    * Definition of **solution** (What it is)
    * Design Rationale for usage of **solution** (How it's used)

Please refer to the [TDS Design contribution process](https://docs.google.com/a/telus.com/drawings/d/1MQ1fxF5SHEFLmatWzmthpHPu-DPuEohZCz6zeu6C-BA/edit?usp=sharing) when considering a component/block contribution.

### Development Criteria:

* Code for proposed solution must meet the below criteria to be considered for contribution:
    * Code passes all automated quality checks, such as linting and unit testing
    * Code is accompanied by automated tests wherever applicable
    * Changes are either backwards-compatible, or target the appropriate [semantically versioned](/2-Use-TDS/1-getting-started.html#versioning) release
    * CSS follows [BEM naming conventions](https://en.bem.info/methodology/)
    * JavaScript follows AirBnB [Javascript](https://github.com/airbnb/javascript) and [React](https://github.com/airbnb/javascript/tree/master/react) style guidelines and is written as ES2015

### Process

1. Team raises issue or need to Design Guild or dedicated team liaison
2. Design Guild identifies whether a viable **solution** already exists or not
    * If **solution** already exists:
        * Design Guild points team to **solution** (distribution)
    * If **solution** does not exist:
        * Design Guild provides mentorship, consultation and education around standardization requirements for design and/or build of **solution** (consumption)
        * Team designs and/or builds **solution**
            * Team is responsible for taking and incorporating Design Guild feedback into designs and builds
            * Team is encouraged to surface issues and/or blockers to the Design Guild
        * Team submits designed and/or coded **solution** to Design Guild with all criteria fulfilled
3. Design Guild reviews submitted **solution** and approves, or recommends more iteration.
4. If **solution** is approved:
    * Design Guild evaluates the following and provides recommendations for consumption into TDS
        * Impact on customers and their users
        * Level of effort to refactor and implement existing solution vs implement new **solution** (based on timing, available resources, etc)
        * Global impact across site (style, experience packages, etc)
    * TDS consumes **solution**
        * Sketch fragment is added into master Sketch file
        * Pull request for coded **solutions** is made on Git; code is reviewed, commented and ultimately incorporated into TDS master.
5. If **solution** is not approved (does not meet above criteria):
    * Team responsible for updating solution based on Design Guild Feedback
    * Team resubmits **solution** to Design Guild for review

<p><em>**Note:** While the Design Guild should have continuous visibility into a team’s design and code, they are not to be considered as a blocker, but as a facilitator.</em></p>
