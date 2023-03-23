!INCLUDE "tds-sunset.html"

# TDS Announcement Board 📣

Welcome to the TDS Announcement Board! Check back here regularly for the latest updates on TDS!

- [April 2020](#april-2020)
- [March 2020](#march-2020)
- [February 2020](#february-2020)
- [January 2020](#january-2020)
- [December 2019](#december-2019)
- [November 2019](#november-2019)
- [October 2019](#october-2019)
- [September 2019](#september-2019)
- [August 2019](#august-2019)
- [July 2019](#july-2019)
- [June 2019](#june-2019)
- [May 2019](#may-2019)
- [April 2019](#april-2019)
- [March 2019](#march-2019)
- [February 2019](#february-2019)
- [January 2019](#january-2019)
- [December 2018](#december-2018)

<hr/>

## April 2020

### New TDS Community Component 🎁

**Modal v1.0.0**

- Render a Content Modal and Dialogue Modal on your page, please use with care and see its documentation
- [Docs for community-modal](https://tds.telus.com/community/index.html#modal)
- DSM release: TDS_Community DSM Library v1.0.13
- Special thanks to Nicholas Mak for co-developing, Apurv Ray and Dan Genuardi for co-designing, and Oskar Westin for a11y research

### TDS Community fixes

**InputGroup v1.0.1**

- A passed-in `id` will now render correctly in the `<input />` element
- [Docs for community-input-group](https://tds.telus.com/community/index.html#inputgroup)
- [Release notes for @tds/community-input-group@1.0.1](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-input-group%401.0.1)
- Special thanks to Matt Burch for reporting and Edison Li for fixing

### TDS Core Features 🎁

**ExpandCollapse 2.1.0**

- Render an id attribute on each ExpandCollapse panel
- [Docs for core-expand-collapse](https://tds.telus.com/components/index.html#/Expand%20collapse?id=expandcollapse)
- [GitHub issue #1415](https://github.com/telus/tds-core/issues/1415)
- [Release notes for @tds/core-expand-collapse@2.1.0](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%402.1.0)

## March 2020

### DSM Updates

**TDS_Community v1.0.12**

- New: Tags are the first element in a larger filter system. It is used to represent information used in catalogue experiences and allows for filtering of that content.

### New TDS Community Component 🎁

**Tags v1.0.0**

- Filter your product catalogues using Tags
- See documentation for accessibility and content guidelines!
- [Docs for community-tags](https://tds.telus.com/community/index.html#tags)
- TDS_Community DSM Release: v1.0.12
- [GitHub release notes for @tds/community-tags@1.0.0](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-tags%401.0.0)

### TDS Core Features 🎁

**Breadcrumbs v2.2.0**

- Allow use of reactRouterLinkComponent on individual Breadcrumbs.Item
- [GitHub issue #1414](https://github.com/telus/tds-core/issues/1414)
- [Docs for core-breadcrumbs](https://tds.telus.com/components/index.html#/Links?id=breadcrumbs)
- [Release notes for @tds/core-breadcrumbs@2.2.0](https://gihub.com/telus/tds-core/releases/tag/%40tds%2Fcore-breadcrumbs%402.2.0)
- Shoutout to Stuart Wilson for contributing this feature

**Text v3.1.0**

- Text will now inherit font sizing from parent components
- [Release notes for @tds/core-text@3.1.0](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text%403.1.0)

**CSS Reset v3.0.0**

- Fonts are now cache-busted
- [Release Notes for @tds/core-css-reset@3.0.0](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-css-reset%403.0.0)

### TDS Core Fixes

**Link v2.2.5, ChevronLink 2.1.1, ButtonLink v2.1.15, Breadcrumbs v2.2.2**

- Resolved prop validation issue with React Router 5
- Release notes:
  - [@tds/core-link@2.2.5](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-link%402.2.5)
  - [@tds/chevron-link@2.1.15](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-chevron-link%402.1.15)
  - [@tds/core-button-link@2.1.15](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-link%402.1.15)
  - [@tds/core-breadcrumbs@2.2.2](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-breadcrumbs%402.2.2)

## February 2020

### DSM Updates

**Resolving Invision DSM sync issues**

- Re-released TDS Core DSM library v2.3.11 to fix sync issue notifications that were appearing in TDS Core DSM library

**v2.3.11.1**

- Updated screenshots for [Card](https://tds.telus.com/components/index.html#!/Card) documentation
- Available in TDS Core DSM Library v2.3.11.1
- Provided example components instead of artboards

### TDS Core Features 🎁

**styleguidist v10**

- Upgraded our docs site to use styleguidist v10. This provides us with per-component routing and increased performance

### TDS Community Features 🎁

**ProgressBar 2.0.0**

- Three visual variants are available (positive, negative, disabled)
- Available in two sizes (default and mini), height no longer changes based on viewport
- Available in TDS Community DSM Library v1.0.10
- Thanks go out to Apurv, Lynne, and Daniel for their extensive help with research and designs
- [Release Notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-progress%402.0.0)
- [Docs](https://tds.telus.com/community/index.html#!/Progress%20Bar)

### TDS Core Fixes

**FlexGrid 3.0.8**

- Add `flex-grow: 1` to FlexGrid.Col
- [GitHub issue](https://github.com/telus/tds-core/issues/1373)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%403.0.9)
- [Docs](https://tds.telus.com/components/index.html#!/FlexGrid)

**FlexGrid 3.0.8**

- Prevent the width of a FlexGrid component from breaking when used inside a Box component
- [GitHub issue](https://github.com/telus/tds-core/issues/1355)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%403.0.8)
- [Docs](https://tds.telus.com/components/index.html#!/FlexGrid)

**ExpandCollapse 2.0.34**

- Prevent panel button from submitting a form
- [GitHub issue](https://github.com/telus/tds-core/issues/1394)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%402.0.34)
- [Docs](https://tds.telus.com/components/index.html#!/ExpandCollapse)

**ExpandCollapse 2.0.33**

- Prevent `tertiaryText` from wrapping in Safari
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%402.0.33)
- [Docs](https://tds.telus.com/components/index.html#!/ExpandCollapse)

**InteractiveIcon 1.4.4**

- Fix a prop type warning when using NavButton icons
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-interactive-icon%401.4.4)
- [Docs](https://tds.telus.com/components/index.html#!/Interactive%20Icons)

**TermsAndConditions 1.2.14**

- Prevents interactive with footnote button from submitting form
- [GitHub issue](https://github.com/telus/tds-core/issues/1394)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.2.14)
- [Docs](https://tds.telus.com/components/index.html#!/Terms%20and%20Conditions)

**Box 2.1.3**

- Use flexbox when `between` is 0
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-box%402.1.3)
- [Docs](https://tds.telus.com/components/index.html#!/Box)

## January 2020

### DSM Updates

**v2.3.11**

- The Success icon has been deprecated and the Check icon should be used instead
- You can now change the inner padding of Card for various contexts.

**v2.3.10**

New Dependent Icons (Interactive Icons)

- Each icon has a recommendation for purposeful use
- Must depend on other interactive components (such as Link (with icons))
- Available in Link (with icons) component
- Don’t use decoratively

Updated Link (Link with icons)

- Available in TDS Core DSM Library v2.3.10
- Switch between sizes/styles (default/inverted) before applying overrides. For optimal use, import LinkIcon (selected size or style), then apply overrides
- Available in @tds/core-link@2.2.0

Removed “Links” folder and moved “Link, LinkIcon, and ChevronLink” to the root “Components” folder

**v2.3.0**

Updated NavButton (Interactive Icons)

- Updated CartFilled icon to have a more accessible indicator
- Updated interactive states for inverted NavButton (hover, active, focus, focus and active); designs are more accessible and aligned with art direction

Removed SB Blocks from TDS-Core Library

- Designers who use DSM to mock-up designs using Layout Grids (with components, or block templates) there is now a . [Site Builder DSM library](https://telus.invisionapp.com/dsm/telus/site-builder)
- It will be maintained by the EPT designers: Marie and Phil [Full announcement here](https://telusdigital.slack.com/archives/C08K0G798/p1578587471000200)

### TDS Core Features 🎁

**InteractiveIcon 1.4.0**

- New Dependent Icons (Interactive Icons)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-interactive-icon%401.4.0)
- [Docs](https://tds.telus.com/components/index.html#!/Dependent)

**Link 2.2.0**

- Updated link with icons
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-link%402.2.0)
- [Docs](https://tds.telus.com/components/index.html#!/Link)

**Notification v3.0.11**

- Added spacing between text and dismiss button
- You should not allow error or warning notifications to be dismissible, and a console warning will be thrown if you do
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%403.0.11)
- [Docs](https://tds.telus.com/components/index.html#!/Notification)

**Box 2.1.0**

- Box can now change its sizing depending on the viewport
- The old way of using Box is still supported (non-breaking change)
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-box%402.1.0)
- [Docs](https://tds.telus.com/components/index.html#!/Box)

**Card 2.3.0**

- You can now change the inner padding of Card for various contexts.
- The old way of using Box is still supported (non-breaking change)
- Available in TDS Core DSM Library v2.3.11
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-box%402.1.0)
- [Docs](https://tds.telus.com/components/index.html#!/Card)

**DecorativeIcon 2.6.0**

- The Success icon has been deprecated and the Check icon should be used instead
- Available in TDS Core DSM Library v2.3.11
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.6.0)

### TDS Community Features 🎁

**ToggleSwitch 3.0.1**

- isLoading propType is now optional and must be used with `spinnerLabel`
- [Release Notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-toggle-switch%403.0.1)

### TDS Core Fixes

**InteractiveIcon 1.3.2**

- Accessibility improvement: when focusing on the NavButton icon group, a white circle appears. When active, a dark background appears behind the icons
- Accessibility improvement: the inverted CartFilledBold icon now uses TELUS Green for its dot, to appear clearly on dark backgrounds
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-interactive-icon%401.3.2)
- [Docs](https://tds.telus.com/components/index.html#!/NavButton)

**Link 2.1.3**

- prevent React router prop type error by settings Link’s `invert` prop to `undefined` by default, rather than `false`.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-link%402.1.3)
- [Docs](https://tds.telus.com/components/index.html#!/Link)

**Video 1.2.32**

- Accessibility improvement: prevents controls from being focused while the video is displaying its splash screen.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-video%401.2.32)
- [Docs](https://tds.telus.com/components/index.html#!/Video)

**ChevronLink 2.1.18**

- Prevent misalignment in IE11 when placing content next to ChevronLink while inside the Notification component
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-chevron-link%402.1.8)
- [Docs](https://tds.telus.com/components/index.html#!/Video)

## December 2019

### TDS Core Fixes

**HairlineDivider 2.0.9**

- Prevent <1px width in grid with line wrap
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-hairline-divider%402.0.9)

## November 2019

### DSM Updates

**v2.3.8**

New Modal/Overlay Layer Style

- New layer style to use on top of content as part of the content/dialog modal
- Must display a hint label when on hover/focus state
- Use only for top-level navigation (i.e. Global Elements, My TELUS applications like Casa)

**v2.3.7**

New NavButton (Interactive Icons)

- NavButton is a button element that renders an icon from a new, specific set of icons
- Restricted use for upcoming community component
- [Docs](https://tds.telus.com/components/index.html#navbutton)

### New Community Component 🎁

**DatePicker v1.0.0**

- The DatePicker component is used to select a single date
- It is available in 2 variants: Overlay DatePicker and Inline DatePicker
- Overlay DatePicker allows the user to select a date, either by keying in (Input form field) or selecting through the overlay
- Inline DatePicker allows the user to select a date directly on the page
- Available in TDS Community DSM Library v1.0.9
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-date-picker%401.0.0)
- [Docs](https://tds.telus.com/community/index.html#!/DatePicker)

### TDS Core Features 🎁

**Text 3.0.0**

- Removed sup component. Please use the standard HTML <sup> tag in the future.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text%403.0.0)

**Heading 3.0.0**

- Removed sup component. Please use the standard HTML <sup> tag in the future.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-heading%403.0.0)

**DisplayHeading 3.0.0**

- Removed sup component. Please use the standard HTML <sup> tag in the future.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-display-heading%403.0.0)

**InteractiveIcon 1.3.0**

- NavButton is a button element that renders an icon from a new, specific set of icons
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-interactive-icon%401.3.0)

**Card 2.2.0**

- Add fullHeight property
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-card%402.2.0)

**DecorativeIcon 1.5.0**

- Deprecate User icon
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.5.0)

### TDS Core Fixes

**StandaloneIcon 2.1.9**

- Reduce deprecation warnings.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-standalone-icon%402.1.9)

**Input 3.0.30**

- Reduce deprecation warnings.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.30)

**DecorativeIcon 2.5.1**

- Reduce deprecation warnings.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.5.1)

**Notification 3.0.7**

- Unmount error fixed.
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%403.0.7)

### New Community Features 🎁

**TermsAndConditions v1.2.6**

- Add aria-expanded to TermsAndConditons
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.2.6)

**ToggleSwitch v3.0.0**

- new usage guidelines! You can now set focus to toggle switch as well as feedback text after an asynchronous process.
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-toggle-switch%403.0.0)
- [Docs](https://tds.telus.com/community/index.html#!/ToggleSwitch)

## October 2019

### TDS Core Features 🎁

**Select@3.2.0**

- Supports option groups, see our docs
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%403.2.0)
- [Docs](https://tds.telus.com/components/index.html#!/Select)

**TermsAndConditions@1.2.0**

- Add support for tags in footnote
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.2.0)

**DecorativeIcon@2.4.1**

- Converts icon sizes from pixels to rem, explicitly set rem units on the size values
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.4.1)

**WebVideo@2.4.1**

- Add onStart callback that fires when the video begins playing
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-web-video%401.1.0)

**DecorativeIcon@2.4.0**

- Update Accessible icon and add new Donate icon
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.4.0)

### TDS Core Fixes

**Notification@3.0.4**

- Fixes issue with Notification throwing error after being dismissed
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%403.0.4)

**ExpandCollapse@2.0.21 & TermsAndConditions@1.2.1**

- Fixes issue where elements are focusable when collapsed
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fshared-animation%402.0.2)

**Colours@2.2.1**

- Fix path to deprecate.js for windows
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%402.2.1)

**Checkbox@2.0.23**

- Fix disproportioned size
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%402.0.23)

**Checkbox@2.0.23**

- Fix disproportioned size
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%402.0.23)

**Radio@2.0.18**

- Fix disproportioned size
- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%402.0.18)

### New Community Features 🎁

**Pagination v2.0.0**

- Upgrade to styled components and visual design changes
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-pagination%402.0.0)
- [Docs](https://tds.telus.com/community/index.html#pagination)

## September 2019

### DSM Updates

**v2.3.4**

Icons

- New "Offices" icon added to 'General' DecorativeIcon set
- [Docs](https://tds.telus.com/components/index.html#decorativeicon)

**v2.3.3**

Notifications (new addition and updates to existing)

- Added 2 new components: Warning and Dismissible Warning
- Warning and Dismissible Warning use the new Warning Feedback Icon, Close Interactive Icon, and Rajah Light (yellow) background
- Updated existing Dismissible Error/Success with the Close Interactive Icon
- [Docs](https://tds.telus.com/components/index.html#notification)

Card (new addition)

- Teams can use the defaultWithBorder variant to add a border to the Card for comparison, horizontal plan, and My TELUS account overview cards
- Added a new layer style; same as default card background but with a border
- [Docs](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-card%402.1.0)

### TDS Core Features 🎁

**DecorativeIcon@2.3.0**

- @tds/core-decorative-icon@2.3.0 now includes the `Offices` icon!
- [Docs](https://tds.telus.com/components/index.html#svgicon)

### New Community Features 🎁

**SideNavigation v3.0.0**

- Updated UI and removal of `active` prop from `SubMenu`, hence a breaking change
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-side-navigation%403.0.0)

**Skeleton v3.0.0**

- Skelton component is now converted to styled-components
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fshared-animation%402.0.0)

**Testimonal v3.0.0**

- Testimonal component is now converted to styled-components
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-testimonial%403.0.0)

## August 2019

### TDS Core Component ✨

👉**Interactive icons** 👈

- InteractiveIcon is an icon you interact with to trigger an action
- The physical container is bound to 40px W by 40px H (interactive area)
- The visual icon is bound to 24px W by 24px H, centered within the container
- https://tds.telus.com/components/index.html#interactiveicon

💡**Feedback icons**❗️

- Feedback icons are icons that provide feedback based on a user’s action
- They are accessible and are read out by assistive technology
- These icons are not meant to be resized or utilized in other colours
- https://tds.telus.com/components/index.html#feedbackicon

### DSM Updates

**v2.3.1**

StepTracker

- Fixed the ability to select the state of the step
- Fixed the title from nudging between states (regular and bold text)
- Enabled the ability to select number of steps instead of manually adjusting
- Small and Large components are responsive width-wise
- Small component adjusts height automatically according to the label
- Large component must detach from symbol to adjust height automatically according to the label
- https://tds.telus.com/components/index.html#steptracker

Terms and Conditions

- Fixed missing icons
- https://tds.telus.com/components/index.html#terms-and-conditions

**v2.3.0**

- Icons are going to be built into their own component folder; Decorative Icons will be moved to the component folder along with Interactive and Feedback Icons in the near future

**v2.2.3**
Input and Select components

- Recommended 16px (Box 3) spacing between form fields
- Decreased the height from 52px to 48px to optimize vertical spacing
- See “Forms” category for pre-built components
- See “Forms (build your own)” category for individual form field symbols
- https://tds.telus.com/components/index.html#forms

Colours

- Updated Accessible Green to allow text to be more accessible on other backgrounds
- Addition of Raven Grey to provide a lighter yet accessible grey alternative
- Addition of Rajah Yellow colour set; currently limited to a specific icon use and Notification component
- https://tds.telus.com/components/index.html#colours

UnorderedList and OrderedList

- Updated UnorderedList to left align icons to the edge for visual harmony with content
- Updated UnorderedList and OrderedList to correct missing linked symbols issue
- https://tds.telus.com/components/index.html#lists

Shadow

- Updated the shadow specifications to use pure black instead of grey which removed the soft, white blur when placed on darker images or backgrounds
- Updated affected layer styles which automatically updates affected components
- Updated Footnote to include the shadow and border, to align with code

📝 Other notes

- This is a reminder that the Helper element is deprecated, please use Hint instead

**v1.0.3**

- Colours (updated Accessible Green, added Raven Grey and Rajah Yellow colour set)
- Shadow (updated shadow specifications on affected layer styles)

### TDS Core Features 🎁

**DecorativeIcon@2.2.0**

- Newly-added icons
  - General
    - TowTruck
    - Car
    - BatteryCar
    - Diamond
  - Internet
    - SpeedReduced
- Removed Phone; use Mobility icon instead
- Removed Bell and Download; being built to be an Interactive Icon
- Removed LocationAdd, LocationRemove, LocationVerified; this is now a Feedback Icon
- https://tds.telus.com/components/index.html#decorativeicon
- If none of the icons from the current set suits your design needs, submit an Icon request on our TDS-Core github https://github.com/telus/tds-core/issues/new?template=icon_template.md

**Spinner@3.1.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%403.1.0)

**Animation@2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fshared-animation%402.0.0)

**ButtonGroup@2.1.0**

- allow ButtonGroup to be uncontrolled; allow unselected by default
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fshared-animation%402.0.0)
- [Docs](Docs: https://tds.telus.com/components/index.html#!/ButtonGroup)

**Colours@2.1.0**

- added Rajah and Raven Grey colours:
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%402.1.0)

### TDS Core Fixes

**TermsAndConditions@1.0.18**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.0.18)

**TermsAndConditions@1.0.17**

- Listed content no longer throws an error when mixing nodes and strings.
- [Release notes T&C](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.0.17)

**FlexGrid@3.0.1**

- Convert pixel to rem units in FlexGrid container.
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%403.0.1)

**Heading@2.2.5**

- Add letterSpacing: inherit to Heading children.
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-heading%402.2.5)

**DecorativeIcon@2.1.3**

- Cleaned up and removed ids from SVG Decorative Icons
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.1.3)

**Tooltip@4.1.0**

- Generate unique id using @tds/util-helpers uniqueId
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%404.1.0)

**Spinner@3.0.3**

- `inline` prop now responsively wraps the Button component
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%403.0.3)

**Input@3.0.16**

- position tooltip next to label
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.16)

**Select@3.1.6**

- position tooltip next to label
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%403.1.6)

**TextArea@3.0.15**

- position tooltip next to label
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text-area%403.0.15)

**TermsAndConditions@1.0.9**

- renderContent handles multiple anchors
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.0.9)

**Input@3.0.15**

- add event propagation to onKeyDown to Input
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.15)

**Input@3.0.12**

- Input’s height has been changed to 48px
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.12)

**Select@3.1.2**

- Select’s height has been changed to 48px
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%403.1.2)

**Colours@2.1.0**

- updated AccessibleGreen to use a slightly darker tone, providing better colour contrast to text on light grey backgrounds
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%402.1.0)

**Card@2.0.6**

- change box shadow to slightly opaque black
- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%402.1.0)

### TDS Community Features

**Testimonial@2.0.1**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-card%402.0.6)

### TDS Community Fixes

**SideNavigation@2.0.2**

- Fix button font override on site builder. The component now uses telus font from shared typography
- [Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-side-navigation%402.0.2)

## July 2019

### TDS Core Component ✨

**TermsAndConditions v1**

TermsAndConditions component
Replace all those ExpandCollapses with a component purpose-built for the distribution of legal copy! A more subtle look
and feel combined with options for numbered and non-numbered legal terms will make your page look nicer while also making
the developer experience smoother.

Footnote and FootnoteLink
Show legal copy to your users quickly and in an accessible manner! Footnote combined with FootnoteLink will open a modal on the bottom of the screen that shows the relevant legal copy to the link selected.

[Terms and Conditions docs](https://tds.telus.com/components/index.html#terms-and-conditions)

### TDS Community Component ✨

**Skeleton Provider**

Skeleton provider is used as a container for other components, it enhances a subset of TDS core components by adding skeleton property. The skeleton property will transform the child component into a skeleton. The skeleton property can be set to an object with options to customize how the skeleton will appear.

[SkeletonProvider docs](https://tds.telus.com/community/index.html#skeletonprovider)

### Features 🎁

**StandaloneIcon 2.1.0**

Additional icon sizes are available (20px, 32px) in StandaloneIcon

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-standalone-icon%402.1.0)

**DecorativeIcon 2.1.0**

Additional icon sizes are available (20px, 32px) in DecorativeIcon

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.1.0)

**Shared-hocs 1.1.0**

An improvement to the focus trap HOC, which will affect the accessibility of modal components, including Terms and Conditions:

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fshared-hocs%401.1.0)

**Select 3.1.0**

Select component now has a new prop: hintPosition

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%403.1.0)

**Notification 1.3.0**

Notification component has new props to add onDismiss and onExit callbacks

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%401.3.0)

### Fixes

**TermsAndConditions 1.0.8**

Terms and conditions component renders anchor tags as TDS Links

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-terms-and-conditions%401.0.8)

**UnorderedList 3.0.7**

UnorderedList released with icon padding adjustments

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%403.0.7)

**Input 3.0.9**

Input uncontrolled to controlled warning fix

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.9)

**Tooltip 4.0.3**

Added `type="button"` to the StandaloneIcon in Tooltip

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%404.0.3)

**StandaloneIcon 1.1.2**

Standalone icon accessibility fix

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-standalone-icon%401.1.2)

### Documentation 🎁

Check out the updated documentation for [Expand Collapse](https://tds.telus.com/components/index.html#expandcollapse)

### Styled Components upgrades 💅

With all 40 components refactored, TDS V3 “with styled components” has been officially released!
See our release notes for full details: https://github.com/telus/tds-core/releases/tag/v3.0.0

**Spinner 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%403.0.0)

**Css-reset 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-css-reset%402.0.0)

**FlexGrid 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%403.0.0)

**Core-colours 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%402.0.0)

**StepTracker 4.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-step-tracker%404.0.0)

**Notification 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%402.0.0)

**Box 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-box%402.0.0)

**Text 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text%402.0.0)

**Paragraph 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-paragraph%402.0.0)

**StandloneIcon 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-standalone-icon%402.0.0)

**DecorativeIcon 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%402.0.0)

**Tooltip 4.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%404.0.0)

## June 2019

### Community component updates

**SideNavigation 2.0.0**

SideNavigation component is now converted to styled components.
[Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-side-navigation%402.0.0)

### Features 🎁

**StandaloneIcon 1.1.1**

StandaloneIcon renders `a11yText` in A11yContent

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-standalone-icon%401.1.1)

**Button 2.1.0**

Button now supports forwarding refs

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button%402.1.0)

**ButtonLink 2.1.0**

ButtonLink now supports forwarding refs

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-link%402.1.0)
- [Docs](https://tds.telus.com/components/index.html#spinner)

**Spinner 2.2.0**

Spinner has been released with new visual styles, and comprehensive accessibility documentation

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%402.2.0)

**A11yContent 2.1.0**

A11yContent now supports `rest` props

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-a11y-content%402.1.0)

**Video 1.2.0**

Video component has `simpleMode`

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-video%401.2.0)

### Styled Components upgrades 💅

**ExpandCollapse 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%402.0.0)

**HairlineDivider 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-hairline-divider%402.0.0)

**DimpleDivider 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-dimple-divider%402.0.0)

**Card 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-card%402.0.0)

**TextArea 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text-area%403.0.0)

**Select 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%403.0.0)

**InputFeedback 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input-feedback%402.0.0)

## May 2019

### New community component ✨

**PreviewCard**

The PreviewCard component creates the appearance of a page snippet, and can be used in a list format.
[PreviewCard docs](https://tds.telus.com/community/index.html#previewcard)

### Community component updates

**Testimonial 2.0.0**

Testimonial component for displaying testimonial in a standalone, pre-styled component.
[Release notes](https://github.com/telus/tds-community/releases/tag/%40tds%2Fcommunity-testimonial%402.0.0)

### Features 🎁

**Video 1.1.0**

Video has been released with better support for smaller player sizes and a new crossOrigin prop.

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-video%401.1.0)

### Fixes 🔧

**HairlineDivider 1.0.7**

Hairline divider no longer disappears when you zoom out in Chrome [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-hairline-divider%401.0.7)

**Checkbox 1.1.22**

Labels now render correctly when in the error state in IE11 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%401.1.22)

**Radio 1.1.20**

Labels now render correctly when in the error state in IE11 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%401.2.20)

**ExpandCollapse 1.2.23**

Expand collapse now has a reduced size [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%401.2.23)

**ButtonLink 2.0.9**

Label text is now centered in Mobile Safari on iOS 10 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-link%402.0.9)

**Button 2.0.7**

Label text is now centered in Mobile Safari on iOS 10 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button%402.0.7)

### Styled Components upgrades 💅

**Input 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%403.0.0)

**Checkbox 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%402.0.0)

**Radio 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%402.0.0)

**OrderedList 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-ordered-list%403.0.0)

**ButtonGroup 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-group%402.0.0)

## April 2019

### New community component ✨

**Pagination**

Pagination helps in content heavy pages to divide content and present in a limited and digestible manner.
[Pagination docs](https://tds.telus.com/community/index.html#pagination)

### Features 🎁

**DecorativeIcon 1.2.1**

More SVG Icons are now available in code. New Check, Heartbeat, HomeSecurity, PhoneHome, and PikTV icons added

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%401.2.1)
- [Documentation](https://tds.telus.com/components/index.html#!/SVGIcon)

**UnorderedList and OrderedList were patched to support conditionally rendered children**

- Unordered List 2.0.15 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%402.0.15)
- Ordered List 2.0.15 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-ordered-list%402.0.15)

**Hover states added to Radio and Checkbox**

- Radio 1.2.15 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%401.1.15)
- Checkbox 1.1.15 [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-checkbox%401.1.15)

### Fixes 🔧

**Unordered list 2.1.0**

This release features mixed icon styles (SASS) -[Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%402.1.0)

**Smaller package sizes for form elements**

The following package sizes were vastly decreased in
@tds/shared-form-field@2.2.0
@tds/core-select@2.0.14
@tds/core-input@2.1.11
@tds/core-text-area@2.0.12

### Styled Components upgrades 💅

TDS is currently engaging in an initiative to upgrade all of our components to use the Styled Components CSS-in-JS framework. Check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/274) for more details!

**Tooltip 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%403.0.0)

**Price Lockup 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%402.0.0)

**Unordered list 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%403.0.0)

**Link list 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-link%402.0.0)

**Display Heading 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-display-heading%402.0.0)

**Heading 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-heading%402.0.0)

**ChevronLink 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-chevron-link%402.0.0)

### Documentation updates

- New documentation added for Benefit component, for Business uses: https://tds.telus.com/components/index.html#benefitwithheading

### What's coming up in May ✨

- Terms and Conditions core component
- More core components converted to Styled Components
- Motion documentation
- Workshop: How to build a community component (both design and code)

## March 2019

### New core components ✨

**Benefit**
Want a clear, concise and design-approved way to tell your users how great something is? Benefit is for you! Take a look over at the [Benefit docs (Heading)](https://tds.telus.com/components/index.html#!/BenefitWithHeading) and [Benefit docs (No Heading)](https://tds.telus.com/components/index.html#!/BenefitNoHeading)

**Video** and **WebVideo**
TDS now offers a consistent video experience! Have a video hosted on TELUS servers? Use the Video component to take advantage of a full video player experience! Want to use a YouTube video? We have a component for that too! WebVideo will insert YouTube videos into your page along with using a TELUS branded splash screen. Take a look at the [Video docs](https://tds.telus.com/components/index.html#!/Video) and [WebVideo docs](https://tds.telus.com/components/index.html#!/WebVideo)

### Features 🎁

**DecorativeIcon 1.1.0**

DecorativeIcon has gotten a new update that has over 150+ icons!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%401.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/SVGIcon)

**CSSReset 1.2.0**

New optional Sass mixin to help with page height. Shoutouts to Sean McCullough for the contribution!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-css-reset%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#!/CssReset)

**Input 2.1.0**

New `hintPosition` prop, now the Input can have a hint displayed below its label. Shoutouts to Ally Hui for the contribution!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%402.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/Input)

### Fixes 🔧

**FlexGrid 2.3.7**

Remove Broadcast and Subscriber deprecation warnings.

-[Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.7)

**Colours 1.1.1**

Properly export colours from commonjs. Thanks to Heather Vandervecht for bringing this issue to our attention.

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%401.1.1)

### Process upgrades 📈

**Animation** is now a published component. While not intended for use outside of TDS components, this will have the effect of decreasing TDS component build sizes. Thanks to Andrew Lam for the contribution!

### Styled Components upgrades 💅

TDS is currently engaging in an initiative to upgrade all of our components to use the Styled Components CSS-in-JS framework. Check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/274) for more details!

**A11yContent 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-a11y-content%402.0.0)

**Button 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button%402.0.0)

**ButtonLink 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-link%402.0.0)

**Colours 1.1.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%401.1.0)

**Image 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-image%402.0.0)

**Strong 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-strong%402.0.0)

**Small 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-small%402.0.0)

**WaveDivider 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-wave-divider%402.0.0)

### TDS sunset 🌅

TDS is planning on sunsetting old versions of the design system. The dates are as follows:

| TDS Version | Sunset Date       |
| ----------- | ----------------- |
| TDS v0.xx   | July 1 2019       |
| TDS v1.xx   | September 1, 2019 |
| TDS v2.xx   | February 1, 2020  |

TDS V3 is TDS utilizing Styled Components. Please have your projects using the relevant versions upgraded by these dates! For more information, check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/285).

## February 2019

### Features 🎁

**Input 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#input)

**Select 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#select)

**TextArea 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text-area%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#textarea)

### Fixes 🔧

**FlexGrid 2.3.5** fixes a CSS specificity issue around `horizonalAlign` in `FlexGrid.Col`

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.5)
- [Documentation](https://tds.telus.com/components/index.html#col)

**Radio 1.2.3** no longer shows propType errors when you pass in a boolean `value`

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%401.2.3)
- [Documentation](https://tds.telus.com/components/index.html#radio)

**Notification 1.2.10** now supports dismissible notifications

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%401.2.10)
- [Documentation](https://tds.telus.com/components/index.html#notification)

## January 2019

### Features 🎁

**TDS Util Prop Types 1.2.0** has a new `or` propType for combining multiple Prop Types

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Futil-prop-types%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#proptypes)

### Fixes 🔧

**ExpandCollapse 1.2.4** does not reset state when a child element calls `this.setState()`

Thanks for the ongoing effort Ally Hui and Nicholas Mak! The conversation is continuing in [#892](https://github.com/telus/tds-core/issues/892).

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%401.2.4)
- [Documentation](https://tds.telus.com/components/index.html#expandcollapse)

## December 2018

### New core components ✨

**Button Group**

Feel like things are a bit empty when you have only a couple of radio buttons on your form? Want a bit of pizzazz in your user’s choices! Say no more! Today we’re introducing **Button Group**, a core component that displays radio inputs as big pretty buttons! Forms have never been so exciting. [Feel the excitement over at our docs!](https://tds.telus.com/components/index.html#buttongroup)

**Breadcrumbs**

Ever descend a hierarchy of pages and find that you’re lost and confused? At TELUS, we have a lot of deeply nested and complex pages. This is essential if we want to stay organized, but can be a little daunting to users who have been following links for a while. So, as a collaboration with **Global Elements**, we would like to introduce **Breadcrumbs**! This component is a consistent way of letting the user know which page they are on. It integrates right into projects already built with React Router 3 (or 4!), so minimal refactoring is required to use it! We hope you agree that it’s our most delicious component. [Try a sample at our docs!](https://tds.telus.com/components/index.html#breadcrumb)

Designers, check all of this out on DSM version **2.1.3**!

### Features 🎁

**Spinner 2.1.0** has a new `inline` prop to wrap Buttons and other inline elements more easily!

Thanks for being part of the conversation Ally Hui and Jeffrey Chang!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%402.1.0)
- [Documentation](https://tds.telus.com/components/index.html#spinner)

**Flex Grid 2.3.0** - New `horizontalAlign` added to `col`, allowing for horizontal alignment on a per-column basis. Thanks for being part of the conversation Nika Karliuchenko!

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.0)
- [Documentation](https://tds.telus.com/components/index.html#col)

**Radio 1.2.0** - Add optional descriptions to Radio (Reported by, and design contributed by Cherry Hung. Thank you!)

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#radio)

**Step Tracker 3.0.0** - Make Step Tracker full width and make default background colour grey. Thanks for submitting this GitHub issue, Cherry Hung!

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-step-tracker%403.0.0)
- [Documentation](https://tds.telus.com/components/index.html#steptracker)

### Fixes 🔧

- **Input 1.0.12** now conditionally renders icons. Thanks for reporting, Bo Xing!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%401.0.12)
- **Tooltip 2.0.4** can only have one open at a time. Thanks for reporting, Vishakha Sethi!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%402.0.4)
- **Price Lockup 1.0.4** resolves an issue with line-height overrides applying improperly. Thanks for reporting, Erich Welz!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%401.0.4)
- **Flex Grid 2.3.0** - Fix FlexGrid.Row from being improperly sized on IE 11
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.2)
- **Price Lockup 1.0.3** - Alignment has been fixed in some areas. Reported by: Tarek, Developed by: Nik Mak.
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%401.0.3)
- **Hairline Divider 1.0.1** - Vertical hairline divider now displays regardless of parent height.
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-hairline-divider%401.0.1)

<hr/>

**Pagination**
Pagination helps in content heavy pages to divide content and present in a limited and digestible manner.
[Pagination docs](https://tds.telus.com/community/index.html#pagination)

### Features 🎁

**DecorativeIcon 1.1.0**

DecorativeIcon has gotten a new update that has over 150+ icons!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%401.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/SVGIcon)

**DecorativeIcon 1.1.0**

DecorativeIcon has gotten a new update that has over 150+ icons!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%401.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/SVGIcon)

### Fixes 🔧

**Unordered list 2.1.0**

This release features mixed icon styles (SASS) -[Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%402.1.0)

### Styled Components upgrades 💅

TDS is currently engaging in an initiative to upgrade all of our components to use the Styled Components CSS-in-JS framework. Check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/274) for more details!

**Tooltip 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%403.0.0)

**Price Lockup 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%402.0.0)

**Unordered list 3.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-unordered-list%403.0.0)
