#### 0.21.1 (2017-08-29)

##### Continuous Integration

* **openshift-template:** Fix tabbing for npmrc secret ([206824a6](https://github.com/telusdigital/tds/commit/206824a6b5f183c54ff893de248180474abec9e1))
* **publish:**
  * Use npm-libraries npmrc token for read and publish to fix permissions issue ([88264096](https://github.com/telusdigital/tds/commit/88264096a6e1db82d5f888df7f36ccd20dfb2d92))
  * Own the .npmrc file by node user in Dockerfile ([d79b464e](https://github.com/telusdigital/tds/commit/d79b464e116a5e7926692d15db40b2950acda2b1))

##### Documentation Changes

* **link:** hide link components from sidebar ([d54a7797](https://github.com/telusdigital/tds/commit/d54a77971a551e52c5d94176794d1f2e733f0537))

##### New Features

* **heading:** limit size props, transfer styles ([d510537a](https://github.com/telusdigital/tds/commit/d510537a61ab342804b756633ca014bdaf5cc5da))
* **notification:** Add new notification component to next release ([460330eb](https://github.com/telusdigital/tds/commit/460330eb3b88f267d5e297f3d6d4c767ded808f3))
* **button-link:** Add inverted variant to replace the invert prop to match Button ([e3684436](https://github.com/telusdigital/tds/commit/e368443635fba9661af2fe5c041a457e505d05fc))
* **button:** Add inverted variant ([0e1071bd](https://github.com/telusdigital/tds/commit/0e1071bdc3b4230a342bca078fccef056f58c99c))

##### Bug Fixes

* **link:** Add ChevronLink and ButtonLink to the bundle ([7c91374e](https://github.com/telusdigital/tds/commit/7c91374eee49c214b30b857880c2e8efa6e37fb0))

##### Reverts

* **link:** hide link components from sidebar ([5e0a5ab9](https://github.com/telusdigital/tds/commit/5e0a5ab93b882ee90f4a5de25b3bdfeb97e6dfc0))

#### 0.21.0 (2017-08-28)

##### Build System / Dependencies

* **link:** add link to index.jsx to generate new npm package ([ee29309d](https://github.com/telusdigital/tds/commit/ee29309dbf6bdb44fd6282575e0f752f370af9ee))
* **docker:** Update Dockerfile with starter-kit performance improvements ([0dd841cb](https://github.com/telusdigital/tds/commit/0dd841cb7ad8d32d82580a81146db18506738fa4))
* **css-modules:** Move non-CSS Modules components to ease the rollup build ([bbf56d95](https://github.com/telusdigital/tds/commit/bbf56d954f909d61fa802b4d1f1e65d3d23f8d00))

##### Chores

* **eslint:** remove config folder from eslint command ([a0ffac60](https://github.com/telusdigital/tds/commit/a0ffac6095cf2283cf455d7eab7eaa48a90ab1bf))
* **readme:** Correct docs link to tds.telus.com ([96a8ccf3](https://github.com/telusdigital/tds/commit/96a8ccf32f0bf7ca78aa19e80346191181b220a7))
* remove eslint errors ([0c612f7d](https://github.com/telusdigital/tds/commit/0c612f7d24adca83985d769bc7649a725801b503))
* **eslint:** add config and docs to lint test, fix errors ([a606a92f](https://github.com/telusdigital/tds/commit/a606a92fcc4ccc7cf0c07ea02b3bb1fe04c3c8cd))

##### Continuous Integration

* **publish:** Own the .npmrc file by node user in Dockerfile ([d79b464e](https://github.com/telusdigital/tds/commit/d79b464e116a5e7926692d15db40b2950acda2b1))
* **deploy-docs:**
  * Abort early if no AWS keys are present in the environment ([b179ea76](https://github.com/telusdigital/tds/commit/b179ea763557cedb6ef364bc462dd985e3f94063))
  * Edit the logging during deploy and remove test folder. ([f2543687](https://github.com/telusdigital/tds/commit/f2543687cba84b18c4cf8a21f3fc7675d108f944))
  * Try with promises so that only 1 deploy at a time happens. ([c9b1738c](https://github.com/telusdigital/tds/commit/c9b1738c7b55ab1bd7d26aa3b915c9c662539a84))
  * Change prod deploy-docs to deploy to latest and versioned folder. ([ee99c6c1](https://github.com/telusdigital/tds/commit/ee99c6c151810313ae49c6b26a2f7496feeb33ba))
  * Test deploying to a folder with a period in the name. ([d45ea825](https://github.com/telusdigital/tds/commit/d45ea8250e6fc1ea9221f52ba95aae3bd74ed973))
  * Try deploying to 2 staging sites using syncronous upload ([91fc31c0](https://github.com/telusdigital/tds/commit/91fc31c0fdec39f20de5b2abe90a3cc74813a2ad))
  * remove call to second promise when on staging ([601d6137](https://github.com/telusdigital/tds/commit/601d61370a9487437d6515eb4765f77059b0e421))
  * add reject to promises ([8bdbe0e9](https://github.com/telusdigital/tds/commit/8bdbe0e9382c1ca0270cf60eca1d5fde44e47b55))
  * using promises to push to 2 buckets ([dc2f39e9](https://github.com/telusdigital/tds/commit/dc2f39e99978dfffd16ba26fb94889bb6a5f5326))
  * Turn off deploy to staging to old bucket. ([a28659ca](https://github.com/telusdigital/tds/commit/a28659ca29f6bd340d60c85ddd90ab4f778c1d7d))
  * Turn back on the deployment of docs to staging. ([c3f33996](https://github.com/telusdigital/tds/commit/c3f3399612e45f33dc61dd6ae3e99b43d76095c9))
  * Deploy staging docs to old bucket again to resolve AWS S3 permissions issues. ([993c0ef5](https://github.com/telusdigital/tds/commit/993c0ef5e8ff2ac03d87ee1d7eff98bfd8c5dd52))

##### Documentation Changes

* **link:**
  * hide link components from sidebar ([d54a7797](https://github.com/telusdigital/tds/commit/d54a77971a551e52c5d94176794d1f2e733f0537))
  * add paragraph example ([14bd9066](https://github.com/telusdigital/tds/commit/14bd9066d4116272ebcfd2a00aec5f97e7dd48af))
  * add designer friendly usage criteria ([eb7cfb84](https://github.com/telusdigital/tds/commit/eb7cfb84514cf8fe19b5797bde2e5dc91a70c438))
  * make chevron docs designer-friendly ([61bcaa97](https://github.com/telusdigital/tds/commit/61bcaa97200f30d92f46d746f5535f98a9d498a7))
  * fix syntax errors on LinkWrapper example ([ee368bf3](https://github.com/telusdigital/tds/commit/ee368bf39295c357fbc6b5e585885f113aa41cf8))
  * adjust react router example ([98e85bb3](https://github.com/telusdigital/tds/commit/98e85bb31f3e0ccd6d637febd29f72d62b8af0e3))
  * more es2015 adjustments to router example :fried_shrimp: ([d66e0345](https://github.com/telusdigital/tds/commit/d66e034513a5c4f0089fd27826e0449453eb172e))
  * adjust react router example ([edf9034a](https://github.com/telusdigital/tds/commit/edf9034a90b3cbeec8b290bd0a5b0db5e438c502))
  * provide wrapper for react router links ([1e6178a6](https://github.com/telusdigital/tds/commit/1e6178a64baeed1fe5ab9f2a9aceecdf48ef8eaf))
  * add chevron link ([70758f8b](https://github.com/telusdigital/tds/commit/70758f8b34176e6ac178cebc6d05150abe56cb2f))
  * add button link ([24f5aa2b](https://github.com/telusdigital/tds/commit/24f5aa2b528603f0103bf9b7d255bea0500c2259))
  * adjust sidebar to include links section ([9fc3e902](https://github.com/telusdigital/tds/commit/9fc3e902202ed77f467ef1326058846a754961fb))
  * depracate link element ([c9815262](https://github.com/telusdigital/tds/commit/c9815262d93db4d2686190bf0c9a115a7ca21597))
  * add hash anchor to link docs from button docs ([92529815](https://github.com/telusdigital/tds/commit/925298151bf4e0ea20e2aa2972d52ba665595f92))
* **notification:**
  * show Notification in old-components folder in sidebar ([2f76f1c4](https://github.com/telusdigital/tds/commit/2f76f1c44f0c56b35e9da302ed7ea12913874842))
  * Toggle display of Notification component in sidebar for staging/production ([69a49638](https://github.com/telusdigital/tds/commit/69a49638bb1a596f8fcd26b738f60f5a2615c0a0))
  * Untoggle the new notification component for higher environments ([5a7d0fd4](https://github.com/telusdigital/tds/commit/5a7d0fd488f37c252a6738e6a05bcd4f1fcad4eb))
  * Cleanup and format ([b3a7df83](https://github.com/telusdigital/tds/commit/b3a7df83504c81094b6c3f706a0901517e72b9f4))
* **button:** Update documentation for Button outlined inverted usage ([a9e54e5a](https://github.com/telusdigital/tds/commit/a9e54e5acd065ce413243775a4807cd88da026c9))
* **icon:** Add the left chevron into the list of available icons ([06572795](https://github.com/telusdigital/tds/commit/06572795c436ac589184963544dd65a7af136982))
* **hint:** Fix incorrect spelling of button--plain class ([597ba653](https://github.com/telusdigital/tds/commit/597ba6533a3e5323a5f71a8ea32bfae675953dee))

##### New Features

* **notification:**
  * Add new notification component to next release ([460330eb](https://github.com/telusdigital/tds/commit/460330eb3b88f267d5e297f3d6d4c767ded808f3))
  * Add Row and Column wrapper to Notification ([7c2ad913](https://github.com/telusdigital/tds/commit/7c2ad913a9ccd55487fdd45e3ccbcb6555eeb86e))
  * Size the icon as "large" ([df2772de](https://github.com/telusdigital/tds/commit/df2772de22328d601928b0730104cf12b281b108))
  * Remove extra typography classes from the build ([676d5cf7](https://github.com/telusdigital/tds/commit/676d5cf70d9bf1f5af4dd84eed979242f5187cdf))
  * Rename ColoredText to ColoredTextProvider ([89c6425b](https://github.com/telusdigital/tds/commit/89c6425baacee79b8fd18629363defc6db3beaf1))
  * Introduce components to color text and links for error notifications. ([d228b292](https://github.com/telusdigital/tds/commit/d228b2924e42e1f36196468c5722f39c62c00567))
  * Align content with flexbox. Give success and error proper text styling. ([a427ee78](https://github.com/telusdigital/tds/commit/a427ee78668c39c347166de0bb6c47e22daa256e))
  * Introduce new Notification component that is full width ([1ec90e29](https://github.com/telusdigital/tds/commit/1ec90e29a6972464f9222f8598e886c73bfddd39))
* **button-link:**
  * Add inverted variant to replace the invert prop to match Button ([e3684436](https://github.com/telusdigital/tds/commit/e368443635fba9661af2fe5c041a457e505d05fc))
  * Add text-decoration none and :link pseudo selector ([74b99169](https://github.com/telusdigital/tds/commit/74b99169d20001df46e00c0c7a4a8c35101b41f3))
  * remove ButtonLink.modules.css ([02ac9338](https://github.com/telusdigital/tds/commit/02ac9338e60a743094c56a71d6f54c6c04b90dab))
* **button:**
  * Add inverted variant ([0e1071bd](https://github.com/telusdigital/tds/commit/0e1071bdc3b4230a342bca078fccef056f58c99c))
  * Align invert styles for Button with what we have for ButtonLink ([dc50ffc2](https://github.com/telusdigital/tds/commit/dc50ffc26bbb026c9ccb9bd376d625b828cb06b9))
* **link:**
  * use generated displayname for sidebar ([b5551139](https://github.com/telusdigital/tds/commit/b55511399e29522361e5ecc0539d8eb162e6c95e))
  * use shark grey for outlined button ([42d6e4ec](https://github.com/telusdigital/tds/commit/42d6e4ec5739e0701d43ae89308be02ef52e233a))
  * use user-friendly names in sidebar ([04401095](https://github.com/telusdigital/tds/commit/04401095d4d4d06ae18aae38fa713b5cc5f95ea6))
  * Un-namespace ButtonLink and ChevronLink from Link as they are only related, not coupled. ([3a464975](https://github.com/telusdigital/tds/commit/3a464975cb13824c51322608f70ed27601f842c0))
  * Use CSS modules composes from Button in ButtonLink ([62b4698e](https://github.com/telusdigital/tds/commit/62b4698ed4a319e1b25e023efed6cd01d6959c7e))
  * untoggle display of Link Components for staging and production ([f6bfe088](https://github.com/telusdigital/tds/commit/f6bfe0885a6f57673b6a9a29396f71ae2d9dc79a))
  * remove variant prop ([c9357845](https://github.com/telusdigital/tds/commit/c935784524d5ecaf842924afd8d329c6ccf600c0))
  * add the invert prop back for Link Button ([c99b1282](https://github.com/telusdigital/tds/commit/c99b1282dcbbb83bf0fb4545f59bdb2b286fea1b))
  * touchup tests and component logic ([dedb598b](https://github.com/telusdigital/tds/commit/dedb598b6d2c91d483bebff8baa3da51053256d5))
  * replace invert prop in Button Link with secondaryInverted and outlinedInverted variants ([643346fd](https://github.com/telusdigital/tds/commit/643346fda010249c91b4a4ddde746c6fc966a8c0))
  * replace invert prop with inverted variant ([b1054fe2](https://github.com/telusdigital/tds/commit/b1054fe24af6567e81888c03b1257b31ae227801))
  * add prop for react router link to Button Link ([a67d7858](https://github.com/telusdigital/tds/commit/a67d78589f6726cfcdd81b7946df63353096a2d5))
  * add prop for react router link to Chevron Link ([510f4ba7](https://github.com/telusdigital/tds/commit/510f4ba708a1f8ed734ba3bbcc2cbc409c604361))
  * add prop for react router link ([b4e2e6d7](https://github.com/telusdigital/tds/commit/b4e2e6d7b40e1e03d8c2484c52004d62ad93a161))
  * add css module for link button ([05c88e82](https://github.com/telusdigital/tds/commit/05c88e82054b9b715aaec3d1475accd3361f1b5e))
  * add button link ([d8c2645a](https://github.com/telusdigital/tds/commit/d8c2645a2760add5577e83016d81fb727df11a41))
  * add left-facing chevron link ([312a3600](https://github.com/telusdigital/tds/commit/312a3600a857f907e490288ee3d3d7fe69d0600b))
  * add accessibility enhancements to Chevron and Button link ([389a4a8e](https://github.com/telusdigital/tds/commit/389a4a8e659b6a581cf8256a8c07eb09ff7579f3))
  * set base styles by default ([dd7baae1](https://github.com/telusdigital/tds/commit/dd7baae1985b8edced663f4322f0d07fca69bb42))
  * add :visited pseudo css for consistent text colour ([b9999f74](https://github.com/telusdigital/tds/commit/b9999f7477ac3fd76fe4fcc3bb39c64dd7038ee4))
  * remove disable function for anchors ([0f00046e](https://github.com/telusdigital/tds/commit/0f00046e773c27f4de28bce70782e3e478a27b78))
  * use standard medium font for chevron link ([9ff2fd74](https://github.com/telusdigital/tds/commit/9ff2fd74e48bddcd99cda8180e2b2d797733a8f0))
  * add specificity to chevron link colours ([90f0cd07](https://github.com/telusdigital/tds/commit/90f0cd073f3163be271d2b0529b804eb7d93064a))
* **scaffold:**
  * Update script to include default text for Components.jsx ([26dc36d7](https://github.com/telusdigital/tds/commit/26dc36d7cb8feb613aafe50528a151df0ddbc5e1))
  * Create script to generate empty component files for new components. ([7bc078da](https://github.com/telusdigital/tds/commit/7bc078da1a44e1c0257725bce768c7d300f5e5e1))
* **paragraph:**
  * Rename the base class as noSpacing to better describe its purpose ([8782b2d5](https://github.com/telusdigital/tds/commit/8782b2d512842030ea9004d1084ffaf00a971302))
  * add align prop to paragrant to center, left and right align paragraphs ([0abefa24](https://github.com/telusdigital/tds/commit/0abefa24c744564c15ed6c101c0539eed9f39250))
  * Add size prop and safeRest ([e7e79801](https://github.com/telusdigital/tds/commit/e7e79801ede6d47a341b17e81287c1e128675909))
  * Default paragraphs to text align left ([5617ca15](https://github.com/telusdigital/tds/commit/5617ca15742df4d54d6ebceb4b4411582e88bae0))
* **heading:** add module styles and sample docs ([93b3dd21](https://github.com/telusdigital/tds/commit/93b3dd21a7d250f8dec25e1985e160dafa4b5537))
* **text:**
  * Add invert prop to Paragraph and Text ([478fdd3a](https://github.com/telusdigital/tds/commit/478fdd3a1209d9b5d6324cbbd038093520233121))
  * Create Text component for rendering inline text blocks ([18e72744](https://github.com/telusdigital/tds/commit/18e72744a033d28487117aa206ab78265763b4c2))
* **small:** Add small text component ([b2b7908d](https://github.com/telusdigital/tds/commit/b2b7908d1841cbb4ea08620f9643070d07204368))
* **strong:** add Strong component ([78fe847e](https://github.com/telusdigital/tds/commit/78fe847e0823ffbfa3733e471925bf907a3882b8))
* **chevron-link:** Give Roman 55 font to Chevron links ([c1b5e9dd](https://github.com/telusdigital/tds/commit/c1b5e9dd891f375da2860f259c1651d321632942))

##### Performance Improvements

* **link:** remove bloated foundation/typography import in chevron link ([49a5e309](https://github.com/telusdigital/tds/commit/49a5e309e1e183720e0b638e6003e40a08fa513e))

##### Refactors

* **feature-toggle:**
  * Shorten the toggle function for in progress components ([827da41f](https://github.com/telusdigital/tds/commit/827da41f2212ab4e93b50c8f30c8aa9d6e953600))
  * Add a toggle ability for new components in progress ([ec76c46e](https://github.com/telusdigital/tds/commit/ec76c46eddc268d940be61ed04f56c3bc6a94ca6))
* **deploy-docs:** rewrite deployToS3 to make code easier to read ([30a81a0d](https://github.com/telusdigital/tds/commit/30a81a0d089511047fcf41ca99b740587d670a0c))

##### Reverts

* **link:**
  * hide link components from sidebar ([5e0a5ab9](https://github.com/telusdigital/tds/commit/5e0a5ab93b882ee90f4a5de25b3bdfeb97e6dfc0))
  * remove unnecessary attribute ([469fd2b7](https://github.com/telusdigital/tds/commit/469fd2b7dd7ee7e2b5635656efeaa37f059e00f0))

##### Code Style Changes

* **echint:**
  * ignore **/snapshots/** folder and fix errors on Video and TitledText ([a3abdef2](https://github.com/telusdigital/tds/commit/a3abdef25a7e0bf0618536479d5365d468fdaa9d))
  * add echint to enforce .editorconfig rules ([e0f75573](https://github.com/telusdigital/tds/commit/e0f755731ae2a937e9e96423150141bd5d7a69fe))
* **eslint:** integrate TD eslint config ([a9ff5ca4](https://github.com/telusdigital/tds/commit/a9ff5ca4f7bc08352535f26a0492ddbb8159fdd2))

##### Tests

* **link:** add afterEach function to reset all Mocks to ensure warnings work properly ([d7235530](https://github.com/telusdigital/tds/commit/d72355307a52f4e4d93fe91566e7afb7e223fc41))

#### 0.20.0 (2017-08-14)

##### Build System / Dependencies

* **rollup:** Introduce CSS Modules to the rollup build. ([2e40da3f](https://github.com/telusdigital/tds/commit/2e40da3f085f59d7b57c2d13397928ffdc0ad46a))

##### Chores

* **dependencies:** Remove redux-contentful as as a peer dependency as it is not actually used yet. ([0c372b81](https://github.com/telusdigital/tds/commit/0c372b811365c0299677117c1b86be9a6de4c3c0))
* **sketch:** remove designs/ folder ([c04d3a44](https://github.com/telusdigital/tds/commit/c04d3a44d3566df542c4319ce9c823ffa6fdec07))
* **Remove un-needed CI files.:** Includes removing the service config from openshift, the old s3 d ([290c7558](https://github.com/telusdigital/tds/commit/290c7558d49f0fb70c8857555bb0f017c323951d))
* **Old docs:** Remove old Wintersmith docs. They are no longer used. ([86e1ec2a](https://github.com/telusdigital/tds/commit/86e1ec2a98e878e623b8ed4b03fac3686268d8ac))

##### Documentation Changes
* **button:**
  * Add version badge to Button docs. ([26f02d02](https://github.com/telusdigital/tds/commit/26f02d02975129c1bf763b19f77309bb4e73c087))
  * Move around the disabled button docs for clarity. ([6a74cccc](https://github.com/telusdigital/tds/commit/6a74cccc7334c23d265f848c5e7cf0999b1de787))
* **css-modules:** Add local identifier name for CSS modules in docs site. ([d73e711b](https://github.com/telusdigital/tds/commit/d73e711b65a6bf2a07c97f696e276ee8d89fbc74))
* **grid:** adjust grammar ([d6b6356e](https://github.com/telusdigital/tds/commit/d6b6356e50672d62708c86d9649c27a98a95d48b))

##### New Features
* **button:**
  * Use button component in docs examples. ([65fb9a65](https://github.com/telusdigital/tds/commit/65fb9a6593a2409908eb6e6698c609061fa8fd94))
  * Add disabled and sizing to the Button docs. ([07603082](https://github.com/telusdigital/tds/commit/07603082ea21fa1155b6357f5146f30c52696212))
  * Prevent buttons from being disabled. ([30240998](https://github.com/telusdigital/tds/commit/30240998f58fa69692ffee98558f473520cc94b8))
  * Remove the primary invert option for Button. ([9988ca5a](https://github.com/telusdigital/tds/commit/9988ca5adebf44c5aae5eeeea8bcfcb89bd685c3))
* **link:**
  * Initial commit of unstyled Chevron Link component. ([277372ae](https://github.com/telusdigital/tds/commit/277372aeec11d98fc379f16bdacf6c2ee92ebfcc))
  * Add styles and inverting to Link component. ([da558cf3](https://github.com/telusdigital/tds/commit/da558cf314f075d3c7562fb29e4890324c1c4721))
  * begin link component ([31b4e535](https://github.com/telusdigital/tds/commit/31b4e53510d2934319fc335c82872276aa2b4a7f))
  * add logic for left-facing chevron wip ([b5469e3a](https://github.com/telusdigital/tds/commit/b5469e3a1e0453500735e674b19bce74b7c636f6))
  * add chevron link variants ([de02a7f1](https://github.com/telusdigital/tds/commit/de02a7f1f5ce52ef9bb3c5d623ff4a03ceb70933))
  * add icon to chevron link ([085be090](https://github.com/telusdigital/tds/commit/085be090ddb679d54802ff92ef04a555f931bf48))

#### 0.19.1 (2017-08-08)
##### Continuous Integration

* **Publish package:**
  * Use npm instead of yarn for the run-publish.sh script. ([8d1085f7](https://github.com/telusdigital/tds/commit/8d1085f7dee017e566512f642024c2e418e72d66))
  * Add a comma to run-publish to fix Publish stage. ([5ff58e21](https://github.com/telusdigital/tds/commit/5ff58e21f32c64a161690903ec6a1d05c3b151e3))

##### Bug Fixes

* **Sass:** Rename icons utility file to prevent overriding the variables file on build. ([0816b057](https://github.com/telusdigital/tds/commit/0816b057f62dc3a6920117445ab0f95038bd84e7))

#### 0.19.0 (2017-08-08)

##### Build System / Dependencies

* **docker:**
  * Add an express server to serve the static styleguide. ([ae26a084](https://github.com/telusdigital/tds/commit/ae26a0843e4dadf15544d4df3df6888edeeb2019))
  * Add comments to the docker config files to make them easy to understand. ([86f8187a](https://github.com/telusdigital/tds/commit/86f8187a14a663ac140cd3832ee33392e4a0c0df))
  * Add an initial docker-compose.yml file for easy running of docker commands. ([ec3c6fbd](https://github.com/telusdigital/tds/commit/ec3c6fbdef988b28a6919b5b7660a2242a8fd828))
  * Add an initial working Dockerfile and .dockerignore file. ([e48ae35b](https://github.com/telusdigital/tds/commit/e48ae35b8be0a2e629814effe16ad8fa509feb78))
* **bundler:**
  * Remove image copy for Headline block because it is not needed now. ([26265f36](https://github.com/telusdigital/tds/commit/26265f36f2530dbbb27b78404fe5ce008a844214))
  * add new tasks to copy scss files with re-usable vars, mixins to dist/scss ([93cb4b65](https://github.com/telusdigital/tds/commit/93cb4b6592f6f90d9491868784cd61a534ec949d))
  * add global CSS to the rollup build ([6c5daa72](https://github.com/telusdigital/tds/commit/6c5daa72333b26d5bacc1c30506d565d4f0e3f3f))
  * Remove overriding of caret up icon in Panel. Not needed. ([157b0a8d](https://github.com/telusdigital/tds/commit/157b0a8db2f86fabf47f6af84dc31d28b2569a41))
  * add block-components to the rollup build ([ae9507be](https://github.com/telusdigital/tds/commit/ae9507be508ded53e9504517d4c578619b6a5040))
  * add all blocks to the rollup build ([f3eb547b](https://github.com/telusdigital/tds/commit/f3eb547bc0cdcd2c558b2e55b06506c5ca12c29f))
  * add the rest of the components to the rollup build ([8ade54ac](https://github.com/telusdigital/tds/commit/8ade54ac55ce5024ca25780a9b68896772cdc2ab))
  * introduced rollup to do an ES6 modules build ([eb485e4e](https://github.com/telusdigital/tds/commit/eb485e4eed05a974fa0cdb463d3f99319121e623))
* **release script:** Enhance the release script for running locally. ([13c49b3d](https://github.com/telusdigital/tds/commit/13c49b3d1d3edc7189e75b86a44e033a03bcb1fb))
* **rollup:** Stop overriding babelrc with rollup, move it to the babelrc instead ([1eabaeeb](https://github.com/telusdigital/tds/commit/1eabaeeb95f1f7f40df4c41e359502d508477433))
* **package:**
  * Set semantic versions for peer dependencies ([8ea94a99](https://github.com/telusdigital/tds/commit/8ea94a99f43c4cf2e83ba39922bae5eb5a2356bc))
  * add dist and src to the files array for the package ([42cff529](https://github.com/telusdigital/tds/commit/42cff529a1b2c34281835a06891867f069435d0f))
  * remove /enriched ([959b8496](https://github.com/telusdigital/tds/commit/959b8496ae1f6386279fd8890f6f2da51362f51c))
  * remove core/ ([329779ee](https://github.com/telusdigital/tds/commit/329779ee0b9006e31b9d60802e7cf6831b2d176f))
  * merging core and enriched: copied all js files into src/ ([c4585b24](https://github.com/telusdigital/tds/commit/c4585b245cac99ee670e0892f17f41608f35298c))
  * merging core & enriched: copy global Sass files into src/scss ([141f1ab8](https://github.com/telusdigital/tds/commit/141f1ab81d88e33280ef5f92ea7d23c97c10684b))

##### Chores

* **webhook:** Add an empty line in README to test the Github webhook. ([cd95759d](https://github.com/telusdigital/tds/commit/cd95759dc1555ec99e897fcee4c920d93e7ba356))
* **package.json:** Remove README.md to prevent unwanted files getting packaged ([da485aa9](https://github.com/telusdigital/tds/commit/da485aa9dcca4e9598459574c11fadaf6891abcd))
* **README:** Correct Sass paths in usage of TDS Sass variables ([36edaedb](https://github.com/telusdigital/tds/commit/36edaedb0dc17e8391c6b58dc8a56a30e12bf912))
* **dependencies:** Upgrade styleguidist to get some patches. Add file-loader to fix peer-dependenc ([99823763](https://github.com/telusdigital/tds/commit/99823763e5302eae02da6cbb656b6ebd78384188))

##### Continuous Integration

* **Deploy Docs:** Edit deploy-docs script to deploy staging to a folder ([8b61d819](https://github.com/telusdigital/tds/commit/8b61d8198dc90cf789c5314b99623926ac2045b0))
* **DeployDocs:** Add missing comma in deploy-docs script. ([a4c49b54](https://github.com/telusdigital/tds/commit/a4c49b54ad8769cacc8c0bb85e7f3e7643c88df4))
* **Jenkins:** Add stages for deploying docs to s3 and publishing to npm. ([2b04d6f8](https://github.com/telusdigital/tds/commit/2b04d6f86870d56bcdac551bd19fba4a4d855e6d))
* **openshift:**
  * Move back to using S3 as deployment target for the docs site. ([cd18dd34](https://github.com/telusdigital/tds/commit/cd18dd34eb67a430bae1a69bf4f0206c55e76477))
  * Add a stage to deploy docs to prod and publish the npm package. ([90fbb414](https://github.com/telusdigital/tds/commit/90fbb41449d10b036d2fc8a40a032c3eea476bef))
  * Add the user input stage back into the pipeline ([fa61ee71](https://github.com/telusdigital/tds/commit/fa61ee7101e922cf4c0594412a14b87bc21a27a3))
  * Configure Jenkins pipeline and Openshift deployment to staging. ([b2e0e951](https://github.com/telusdigital/tds/commit/b2e0e9513766d867cb947e102dd5bd8ab697c58c))
  * Add openshift files from isomorphic-starter-kit. ([82957b00](https://github.com/telusdigital/tds/commit/82957b00410d44b9e551cb85e360cbcc1ac51118))
* **docker:** Add a new user to the Dockerfile to try to resolve CI errors. ([6a1cb974](https://github.com/telusdigital/tds/commit/6a1cb974c89c7dfc2e94dde8316a0339a813d87e))

##### Documentation Changes

* add brandhub references ([4b17482d](https://github.com/telusdigital/tds/commit/4b17482d6c40bda68128d8ac86fb3084e3a8bf88))
* adjust grammar ([61fa0390](https://github.com/telusdigital/tds/commit/61fa039036c4036cd546ffdeeff839c7e2ae8bdc))
* **Logo:**
  * Add the version into the custom logo. ([fc6c6ae1](https://github.com/telusdigital/tds/commit/fc6c6ae132e6a07200bad1d08ea5b6908f6016bc))
  * Add Telus Logo :) ([e2bd3e86](https://github.com/telusdigital/tds/commit/e2bd3e86c4adf555e760eda9a1315fd15fe55562))
* **contributing:**
  * add roadmap ([eb5f2fab](https://github.com/telusdigital/tds/commit/eb5f2fab55aec85623fa81294d510c5c9db0294f))
  * Add more detail to the contributing guide and docs ([1d97d093](https://github.com/telusdigital/tds/commit/1d97d093245ca3d47cdfb3715e09a00fb2e8c02f))
* **typography:**
  * Use header typography classes in the docs. ([230c97dc](https://github.com/telusdigital/tds/commit/230c97dc94ad81208f46dc3e5fe55a85b6b8a398))
  * Document typography page in Styleguidist ([c537b708](https://github.com/telusdigital/tds/commit/c537b70808312a7968ec224e89e18614c79c773c))
* **SelectorCounter:**
  * Add examples and document the API. ([4548abef](https://github.com/telusdigital/tds/commit/4548abef81e42598f09090a9bd38ee35d65df4ff))
  * migrate content to Styleguidist ([98cc612b](https://github.com/telusdigital/tds/commit/98cc612b184e55a2265bc81e92ee7e2621ad2243))
* **ExpandCollapse:** Polish the exmaples and API. ([1b283768](https://github.com/telusdigital/tds/commit/1b28376805edc7a0ba0b10f34e3fb11b4a5d009b))
* **Notification:**
  * add real examples ([503a1e91](https://github.com/telusdigital/tds/commit/503a1e91a70ad3350a50bc2c4ff61ed75dd8b97c))
  * Document Notification component in Styleguidist ([440b7375](https://github.com/telusdigital/tds/commit/440b73757003d2f531f15fad2f3f1fab54524782))
* **expandcollapse:**
  * complete examples ([9747b761](https://github.com/telusdigital/tds/commit/9747b761ff4472092eabd880d0a8fe7a2f1a141e))
  * add to styleguidist ([026311a8](https://github.com/telusdigital/tds/commit/026311a86d5aab79deac7b418b6f93d2bb982d21))
* **icon:** Write docs for Icon is stylguidist format. ([934309f3](https://github.com/telusdigital/tds/commit/934309f3677924cb015f6d779f6d46a3a391f5f6))
* **elements:** Write explanation of replacing styles with components. ([769da97c](https://github.com/telusdigital/tds/commit/769da97ccf67fe6b39918c9297b4eac9148501b7))
* **grid:**
  * Write docs for the Grid components in the stylguidist format ([7d3c91c0](https://github.com/telusdigital/tds/commit/7d3c91c032d1c429280d6db86f67827d82ab58b4))
  * Document Grid CSS in Styleguidist ([f0f6a59b](https://github.com/telusdigital/tds/commit/f0f6a59bce77f648797abbf2a3a5e924259fa6bc))
* **steps:** Document Steps in the styleguidist format ([dd10542b](https://github.com/telusdigital/tds/commit/dd10542b36062ae11aa9acd800d9394f08afa7d0))
* **overview:**
  * Add more detail to the overview and getting started sections ([40567906](https://github.com/telusdigital/tds/commit/40567906c2cd5f237fe21772d1edbbe2ab2fe035))
  * Add docs for TDS overview and releases ([074f8806](https://github.com/telusdigital/tds/commit/074f8806268608e29273a7357cce721f3985bee1))
* **README:**
  * Correct spellings and grammar ([a33a7783](https://github.com/telusdigital/tds/commit/a33a7783cf94a1225ffec0ec6b779cfea8edd68f))
  * Update the README with new installation and usage instructions ([ffdd73a9](https://github.com/telusdigital/tds/commit/ffdd73a9717cd242997a2b638d21d7a4ed64a2df))
* **Utility Icons:**
  * Document Utility icons CSS in Styleguidist ([44429d55](https://github.com/telusdigital/tds/commit/44429d55b03defbfde3eb41699a4b96a0ff0a2a5))
  * Document Utility icons CSS in Styleguidist ([48c0d2f0](https://github.com/telusdigital/tds/commit/48c0d2f0cc412a286ca92185a0afeeef43073fa9))
* **lists:** Document Lists CSS in Styleguidist ([a4dd1f7d](https://github.com/telusdigital/tds/commit/a4dd1f7dc2714bb5b5d2d5a07b7dbd9bacbb2f94))
* **forms:** Document forms CSS in Styleguidist ([ad98e225](https://github.com/telusdigital/tds/commit/ad98e225cf29751e49ced20e6841be706d5f32dc))
* **card:** add jsdoc ([8ea00287](https://github.com/telusdigital/tds/commit/8ea00287b40798f4deb01c41495926816caddabe))
* **colours:** Document Colours in Styleguidist format ([244e1b4c](https://github.com/telusdigital/tds/commit/244e1b4ccd649ef0d3b7c25498dfa637b3295728))
* **links:** Document links CSS in Styleguidist format ([477b1e3e](https://github.com/telusdigital/tds/commit/477b1e3e93aafc533c4ba3cfa75fa1836ed7b10e))
* **buttons:** Document buttons CSS in styleguidist format ([889dd40b](https://github.com/telusdigital/tds/commit/889dd40b72adfa989ca294a2cc299d8c39eea1f5))
* **spinner:** Document Spinner in styleguidist format ([e6f376f5](https://github.com/telusdigital/tds/commit/e6f376f58c5f14ab0e321063252e4909b2a4aea4))
* **changelog:** manual header fix ([6ad9da50](https://github.com/telusdigital/tds/commit/6ad9da505e2d2e770dc8b8f194a1fda1ff3d25e5))

##### New Features

* **Button:**
  * Improved the Button docs by showing a usage with a bg image. ([5dec9c37](https://github.com/telusdigital/tds/commit/5dec9c37ea02c3d40986d261de5c8918f69fb55b))
  * Improve the styles and docs. ([eebac58c](https://github.com/telusdigital/tds/commit/eebac58c94a9e78f3928015c2c843e6890cb6309))
* **docs:**
  * add design vision ([9c7584f5](https://github.com/telusdigital/tds/commit/9c7584f51058a8bc9f689067398091faed3314b0))
  * add link to release page ([acc690ef](https://github.com/telusdigital/tds/commit/acc690ef20b38322a33730f873161ee69d88092c))
  * begin stylegudist development ([2ad01ad6](https://github.com/telusdigital/tds/commit/2ad01ad6231deb56c2c006913f5459be4bd92c9d))
* **button:**
  * Removing un-needed `outline` prop for Button. ([36b2b65f](https://github.com/telusdigital/tds/commit/36b2b65f64daaf13b9224c864ce884965e85ce20))
  * Initial commit of a new Button component. ([ad01006e](https://github.com/telusdigital/tds/commit/ad01006e2be9bbb644227cda306919b766dd1e69))

##### Bug Fixes

* **css:**
  * properly apply focus styles to all form elements :fried_shrimp: ([07dcfd03](https://github.com/telusdigital/tds/commit/07dcfd0365a02bdcd051babeadc291b351a45c57))
  * use box shadow to represent :hover state on form elements ([262b9dc8](https://github.com/telusdigital/tds/commit/262b9dc80301f5814aa321b609104780687ab439))
* **button:** Set the font-family of buttons to TELUS-Web ([ee7cfc34](https://github.com/telusdigital/tds/commit/ee7cfc342622ebfce13758a80bedfd6750a4e99b))

##### Refactors

* **Icon:** Align Icon to coding standards. ([56f1e002](https://github.com/telusdigital/tds/commit/56f1e0029243ba61de5f98f3b049c4f4ef33ff02))
* **steps:** Introduce component folders for Step and Steps for more separation ([5cea7855](https://github.com/telusdigital/tds/commit/5cea78553c0967216060e61dc69d340e475705ff))
* **scss:** Split up scss utility and setting files for modularity ([460fd17b](https://github.com/telusdigital/tds/commit/460fd17bb1c2f89adf6c31e23a8b421606c74a6f))
* **deprecate:** Change the deprecating warning message level from log to warn ([fc73985b](https://github.com/telusdigital/tds/commit/fc73985bdb0fc2e5d1b40606b868a31f4d816377))
* **console.log:** remove console.dir statement in nav.js (docs) ([2ed91277](https://github.com/telusdigital/tds/commit/2ed9127761c0342a33422125070bcf173295a130))

##### Tests

* **mocks:** Replace sinon with jest mocks ([fe6439cb](https://github.com/telusdigital/tds/commit/fe6439cbdab46b73a2c3d248360789cdbc6d66d1))
* **snapshots:** Correct misnamed snapshot to try to fix Docker build. ([bb904bb5](https://github.com/telusdigital/tds/commit/bb904bb54d2b3dcf4f3911d3737417bab89b3a02))





## v0.18.1


https://github.com/telusdigital/tds/releases/tag/v0.18.1

- fix(Card and Notification): import css using require just like on previous versions



## v0.18.0


https://github.com/telusdigital/tds/releases/tag/v0.18.0

- fix(links): cleaned up link underline mixin
- fix(buttons): update anchor styles when styled as buttons
- fix(notification): make it more accessible by using role="banner"
- fix(Expand Collapse): fix hover states by using chevrons to indicate state
- docs(sketch file): update
- docs(hide blocks and block components): because they are not following latest standards and no one i
- Changelog and version bump for v0.18.0



## v0.17.0


https://github.com/telusdigital/tds/releases/tag/v0.17.0

- docs(sketch): update file to show colour updates
- docs(sketch): updates to versioning art board with details about colour changes
- docs(sketch): minor update to versioning details in sketch
- docs(sketch): update re: raven - shade of grey in forms
- build(dependencies): remove js-dom as a dependency as it was unused and causing install problems
- build(dependencies): add yarn.lock files to lock down dependencies for devs using yarn
- chore(editor): Add an .editorconfig file for aligning editor configurations
- feat(Card): Deprecate className and style.
- refactor(notification): deprecate className and style
- Changelog and version bump for v0.17.0



## v0.16.3


https://github.com/telusdigital/tds/releases/tag/v0.16.3

- docs(documentation to use 0.16.1 to fix release):
- Changelog and version bump for v0.16.3



## v0.16.1


https://github.com/telusdigital/tds/releases/tag/v0.16.1

- docs(changelog): usual manual update
- fix(repo rename updates): to keep the old repo instead of using the newly created so we don't loose
- fix(colours, chevron and display h1 updates): - colour renaming and updates
- chore(move over beta 0.16.1):



## v0.16.0


https://github.com/telusdigital/tds/releases/tag/v0.16.0

- docs(changelog): update
- Update README.md
- Remove console.log (#344)
- Update README.md
- Beta Release (#369)
- docs(typography example): fix typo on list class
- docs(links): update code to match example
- Changelog and version bump for v0.16.0



## v0.15.3


https://github.com/telusdigital/tds/releases/tag/v0.15.3

- Revert updates of latest blocks + component
- fix(component collapsible): make collapsible content height dynamic
- Revert "Revert updates of latest blocks + component"
- refactor(changed react.propTypes to PropTypes): (#337)
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- build(add prop-type package to enriched package.json):
- Changelog and version bump for v0.15.3



## v0.15.2


https://github.com/telusdigital/tds/releases/tag/v0.15.2

- fix(linting): remove jsx-filename-extension rule because spec.js need to be written using a differen
- fix(linting): fix javascript linting
- fix(linting): fix linting errors and warnings caused by updates to eslint file
- docs(changelog): manually update changelog.md with jade header :S
- Merge branch 'fix/linting' of github.com:telusdigital/telus-thorium-core
- build(preinstall): remove preinstall task and call /scripts/init-npm.sh instead
- build: groovy.ci
- build(groovy.ci): cd into /scripts folder to run init-npm.sh
- build(groovy.ci): updating path to init-npm.sh :)
- Changelog and version bump for v0.15.2



## v0.15.1


https://github.com/telusdigital/tds/releases/tag/v0.15.1

- Merge remote-tracking branch 'origin/qatesting' into qatesting
- Merge remote-tracking branch 'origin/qatesting' into qatesting
- Merge branch 'master' into qatesting
- docs(changelog): update manually
- fix(viewport): adding initial-scale to test
- Merge branch 'qatesting' of github.com:telusdigital/telus-thorium-core into qatesting
- fix(layout): make tablet view same as desktop
- fix(layout): css update for docs
- Merge remote-tracking branch 'origin/qatesting' into qatesting
- fix(change nav bg on medium to match large view):
- Merge branch 'qatesting' of github.com:telusdigital/telus-thorium-core into qatesting
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- add polyfill.io to fix layout issues on IE11
- Revert "add polyfill.io to fix layout issues on IE11"
- feat(buttons): remove styles from html tag
- switch from include to indexof
- typo fix
- fix(set <main/> to display:block on reset.css for IE11):
- fix(changelog.sh): update changelog_entry()
- docs(navigation): add classname to navigation items
- fix(button): make min-width: 180px
- feat(button): remove css styles from button html tag
- docs(sketch): update version on sketch file to v0.15.0
- BEMize button styles
- docs(links): moved links documentation to its own page, it didn't really make sense to have it on th
- docs(upgrading.md): add note about changes made to buttons.scss
- fix(buttons): remove border on hover state of disabled button
- fix(buttons): BEMized style for button's disabled state
- docs(buttons): add TOC
- feat(chevron links): refactor css/html to reduce markup, ie. chevron is now displayed using :after p
- docs(typography): showcase of typography layout changes
- fix(buttons): inverted button hover state to match the other buttons
- docs(upgrading.md): documenting updates to reset offsets
- add Steps component
- feat(buttons): refactor css to clean up buttons css and documentation
- add in unit tests
- fix(component: Card): remove border
- fix(buttons): on selector counter component needed .tds-button--plain class
- fix(component card): remove 1px border from Card component
- fix(collapsible): Fixes vertical alignment of items win Collapsible.Panel using flex (#321)
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(components with buttons in doc): update button classes
- fix(buttons): update cursor on button's disabled state
- Merge branch 'feature/steps' of github.com:telusdigital/telus-thorium-core into qatesting
- ci(package.json): remove --watch from test task
- add Spinner component
- add in unit tests
- add api in doc
- build(jest): update to version 0.19.0
- test(test snapshots): update
- Merge branch 'feature/Spinner' of github.com:telusdigital/telus-thorium-core into qatesting
- fix(component steps): add references to Steps in enriched/ and docs/ so the Step Tracker shows on it
- fix(steps): fix button on step tracker page
- docs(component collapsible): spelling mistake
- fix(button): fix button related bugs in documentation
- docs(forms): update code sample using tds-button--plain
- add spinner full screen mode
- remove console
- update style
- fix full screen bug
- type fix
- bug fix
- remove transition
- remove bulr effect
- Revert "docs(forms): update code sample using tds-button--plain"
- Revert "fix(button): fix button related bugs in documentation"
- Revert "fix(buttons): update cursor on button's disabled state"
- Revert "docs(components with buttons in doc): update button classes"
- Revert "Merge branch 'master' of github.com:telusdigital/telus-thorium-core"
- Revert "feat(buttons): refactor css to clean up buttons css and documentation"
- Revert "fix(buttons): inverted button hover state to match the other buttons"
- Revert "feat(chevron links): refactor css/html to reduce markup, ie. chevron is now displayed using :after p"
- Revert "docs(buttons): add TOC"
- Revert "fix(buttons): BEMized style for button's disabled state"
- Revert "docs(upgrading.md): add note about changes made to buttons.scss"
- Revert "BEMize button styles"
- Revert "feat(button): remove css styles from button html tag"
- Revert "fix(button): make min-width: 180px"
- Revert "fix(component: Card): remove border"
- Revert "docs(links): moved links documentation to its own page, it didn't really make sense to have it on th"
- refactor a bit
- refactor
- Merge branch 'qatesting'
- Revert "Merge branch 'qatesting'"
- fix(collapsible component): fix toggle buttons on collapsible doc and the ControlledCollapsible.jsx
- docs(sketch): update version number on sketch file because it was missed on 0.15.0 release
- updating issue template (#336)
- Changelog and version bump for v0.15.1



## v0.15.0


https://github.com/telusdigital/tds/releases/tag/v0.15.0

- fix(html tags style): remove styles on <button/> and set default font-weight: 400 globally
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- Issue #304
- update doc
- fix(form hinter): adjust font size to make it more legible
- docs(contributing): add Alex's email to email us links
- ci(changelog.sh): add .jade header to avoid seeing Untitled in left nav after a release
- Revert "fix(html tags style): remove styles on <button/> and set default font-weight: 400 globally"
- feat(dimple): add tds-dimple mixin and use it in accordion component
- feat(grid offset): revert back to previous offset functionality and added offset reset for each view
- Merge remote-tracking branch 'origin/collapsible-disable-state' into qatesting
- docs(changelog): updating .jade header manually for the last time
- Issue #304 (#306)
- Merge branch 'qatesting'
- Changelog and version bump for v0.15.0



## v0.14.1


https://github.com/telusdigital/tds/releases/tag/v0.14.1

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(fix container on sample forms page):
- docs(sketch): update new file v0.14.1
- Changelog and version bump for v0.14.1



## v0.14.0


https://github.com/telusdigital/tds/releases/tag/v0.14.0

- fix(typography): add etext for helvetica 45(400), 55(600), 65(700) and the corresponding line-height
- fix(fonts): adjust font-url-prefix for new extext fonts
- fix(grid): fix containers, including add new .container--fluid
- fix(typography): letter-spacing audit for etext
- docs(typography): update typography example layout
- fix(typography): adjust line-height on h2 mobile
- feat(grid): update dimensions
- docs(grid): update documentation re: grid containers
- docs(fonts): update list of fonts in documentation
- fix(etext): update path to load from cdn /production/core/fonts/etext
- BMK-000 - Dan & Guille: Add index to blocks directory. (#276)
- docs(PR template and changelog): update PR template with acceptance criteria and manually update cha
- add url loader to doc webpack config
- BMK-123: Rodrigo - Add WithLegal to OverviewBlock (#282)
- feat(titled text block): Adds titled text block and documentation (#279)
- docs(gh #281): update md parsing to display classes
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(build): add .npmrc to /enriched so we can install private contentful-redux package
- build(ci.groovy): call npm run preinstall explicitly
- build(ci.groovy and package.json): call npm run preinstall explicitly
- build(ci.groovy): add new jenkins job to get triggered from test branch to not pollute the master br
- build(ci.groovy): add ability to push to qa from test branch
- fix(package.json): move init-npm.sh to /enriched
- fix(init-npm.sh): update path to .npmrc
- Fixing tests (#291)
- fix(video block): fix unit test missing colon in console statement
- build(ci.groovy): update builds to accommodate pushing to qa to test
- fix(package.json): set react to 15.3.2 on peerDependencies
- Adding wrapper object to create an sshAgent containing an SSH key (#293)
- fix(docs): fix missing navigation
- build(ci.groovy): add sshAgent wrapper on new qa jenkins job
- build(ci.groovy): remove qa jenkins job
- fix(blocks): fix title on headline and titled text blocks due to title -> caption search and replace
- build(ci.groovy): setup jenkins job for qatesting branch
- feat(sketch): new version of sketch file
- Add overflow: hidden to collapsible to fix #294 (#295)
- docs(typography): map helvetica neue to it's corresponding css attribute (font-weight value)
- build(ci.groovy): remove tds-deploy line, not needed to push to qa
- build(ci.groovy): remove tds-deploy line for qa-build because we are not generating git tags
- Update ci.groovy
- refactor(package.json): consume redux-contentful
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- feat(grid and typography updates): grid gutter is now 16px on each side of a column and typography f
- fix(grid): offset class are now viewport specific
- docs(grid): update sample page to use .container--fluid
- docs(changelog): manually update changelog because it won't update automatically
- docs(markdown): fix broken TOC links and broken roadmap link
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- build(ci.groovy): add sshAgent to release job
- Changelog and version bump for v0.14.0



## v0.13.2


https://github.com/telusdigital/tds/releases/tag/v0.13.2

- fix(blocks): got rid of `blocks/blocks` folder
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- Changelog and version bump for v0.13.2



## v0.13.1


https://github.com/telusdigital/tds/releases/tag/v0.13.1





## v0.13.0


https://github.com/telusdigital/tds/releases/tag/v0.13.0

- docs(overview block): update order of elements in overview documentation page
- fix(headline block): Fixing headline block tests (#273)
- fix(overview block): move to blocks/blocks folder
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(overview block): update path to checklist now that block was  moved to blocks/blocks folder
- Changelog and version bump for v0.13.0



## v0.12.0


https://github.com/telusdigital/tds/releases/tag/v0.12.0

- Feature/bmk 30 overview check list block (#270)
- docs(changelog): update
- test(overview block): update test
- feat(package.json): update telus-thorium-core to 0.11.4
- feat(package.json): updates to package.jsons to manually update 0.10.2 to 0.11.4
- docs(blocks template): update layout on layout-blocks.jade to improve presentation of blocks
- update jest config to only scan src folder for unit tests; remove the extra block folder
- Changelog and version bump for v0.12.0



## v0.11.4


https://github.com/telusdigital/tds/releases/tag/v0.11.4

- Changelog and version bump for v0.11.4



## v0.11.3


https://github.com/telusdigital/tds/releases/tag/v0.11.3

- Changelog and version bump for v0.11.3



## v0.11.2


https://github.com/telusdigital/tds/releases/tag/v0.11.2

- Changelog and version bump for v0.11.2



## v0.11.1


https://github.com/telusdigital/tds/releases/tag/v0.11.1

- Changelog and version bump for v0.11.1



## v0.11.0


https://github.com/telusdigital/tds/releases/tag/v0.11.0

- docs(sketch): add version number on all TDS.sketch links
- Create ISSUE_TEMPLATE.md
- Create PULL_REQUEST_TEMPLATE.md
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(typography): adjust letter-spacing and font-weight for h2
- docs(display heading 1): add .display-heading-1 to typography.md documentation
- BMK-28 - Dan, Bruno, Fernanda: Add Checklist Component.
- Merge branch 'feature/BMK-28_check_list_component' of github.com:telusdigital/telus-thorium-core
- fix(icons): update core-icons.* path to fix .woff2 404 issue #260
- revert(checklist): Bo to review the code before it gets published
- docs(typography): add example on how sup and sub look like with p1,p2 and p3 on typography.html
- docs(blocks): add blocks section within documentation and Overview block boilerplate
- feat(blocks-components): add ability to add non-global components and their corresponding documentat
- feat(blocks): add sample Overview Block and corresponding documentation template and page
- Changelog and version bump for v0.11.0



## v0.10.2


https://github.com/telusdigital/tds/releases/tag/v0.10.2

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(buttons): accessibility: add role="button" in documentation
- fix(typography): fix p2 and p3 font-size
- Changelog and version bump for v0.10.2



## v0.10.1


https://github.com/telusdigital/tds/releases/tag/v0.10.1

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(manually run changelog script because deployment is buggy):
- Changelog and version bump for v0.10.1



## v0.10.0


https://github.com/telusdigital/tds/releases/tag/v0.10.0

- remove ## from readme link
- update stylelint to fix linting warnings
- adjust button padding to 17px 20px 17px 20px just like business site buttons
- fix issue#191 (#197)
- Updated grid boards to include max width (#180)
- adjust top/bottom padding on button
- update colours on documentation to match latest sketch file
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- add sass vars to documentation
- change hex value from upppercase to lowercase to prevent build from failing
- align colour documentation to the left
- Layout fix (#201)
- hide nav on automatically generated changelog page
- fix to changelog page
- remove fluidity section on grid.md
- remove hack for Changelog link on Nav
- hide doc nav on load on mobile views
- add box-shadow to buttons to avoid shifting on hover
- fix issue#188
- fix formatting on changelog
- add zip file with fonts needed to load sketch file
- add links to font-for-sketch.zip file
- remove min-height: 60px on buttons
- minor style updates to content in colours.md
- update Thorium to TDS in README.md copy
- update upgrading guide
- update getting started documentation
- add ToC and reviewed content in setting-up-projects
- update adoption thresholds section
- update receiving updates content
- update overview content
- remove more instances of “Thorium” in documentation
- add link to ttfautohint in icons script
- update homepage content
- fix issue#205
- add background to show how max-width on container—limited-width works
- document utility mixins
- fix for documentation mobile nav
- add ontouchstart event handler for mobile on doc nav
- refactor mobile nav using css
- add more details on how to use tds SCSS
- Collapsible top border fix (#210)
- add core-icons.otd to downloads page [doc]
- update Roadmap.md
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- make ms-input-placeholder pseudo class style more specific
- move core-icon mixin to mixins.scss
- minor copy updates/links
- add styles for sup and sub
- add minor copy updates
- Squashed commit of the following:
- generate core-icons.woff2
- remove font-weight: normal instances
- fix(buttons): adjust size of input fields and buttons now that default font-size has changed from 19
- docs(update to UPGRADING.md): with latest changes
- chore(add commitizen): command line utility used to follow standards for writing good commit message
- docs(foundations): add toc
- fix(webfonts): load helvetica 45, 55, 65 fonts from cdn
- remove core-icons from download because .otf is not working with font-book
- docs(downloads): updates fonts-for-sketch.zip with helvetica eText Pro 45, 55, 65
- docs(colours): switch green and purple colours between primary and response sections
- docs(docs navigation): remove bold style on links
- fix(grid): adjust padding on xs view columns
- docs(docs): add grid test example
- add grid test example
- docs(grid): adjust sample page with colorful grid
- fix(buttons): set font size to 16px
- fix(add new font size, line-heights and letter-spacing as per sketch file):
- fix(fonts): use cdn old helvetica fonts until brand buys etext font
- docs(colours): update colours section to match sketch file
- docs(docs): minor updates to colours and grid documentation
- docs(fonts): remove zip file with fonts for sketch
- docs(grid): add 12 column colorful grid example
- refactor(colours): update colour variables to match the colour names on sketch
- Changelog and version bump for v0.10.0



## v0.9.5


https://github.com/telusdigital/tds/releases/tag/v0.9.5

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- Changelog and version bump for v0.9.5



## v0.9.4


https://github.com/telusdigital/tds/releases/tag/v0.9.4

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- update buttons color/styles
- adjust disabled hover styles
- fix auto-width on SelectorCounter component
- Changelog and version bump for v0.9.4



## v0.9.3


https://github.com/telusdigital/tds/releases/tag/v0.9.3

- Changelog and version bump for v0.9.3



## v0.9.2


https://github.com/telusdigital/tds/releases/tag/v0.9.2

- Fix inconsistent newlines in the changelog (#167)
- Bug fix for collapsible pannel not receiving props
- update doc
- [[DSR-203](https://telusdigital.atlassian.net/browse/DSR-203)] Adding opt-in max-width to responsive grid (#145)
- Changelog and version bump for v0.9.2



## v0.9.1


https://github.com/telusdigital/tds/releases/tag/v0.9.1

- feature/BCM-165: Updated styling for Notification (#165)
- Changelog and version bump for v0.9.1



## v0.9.0


https://github.com/telusdigital/tds/releases/tag/v0.9.0

- Notification Component [[BCM-165](https://telusdigital.atlassian.net/browse/BCM-165)] (#156)
- Changelog and version bump for v0.9.0



## v0.8.0


https://github.com/telusdigital/tds/releases/tag/v0.8.0

- Bug fixes for version bumps and changelog formatting during automated deployment
- Fix misspelled card scss import (#159)
- Publish the Icon component documentation (#160)
- Changelog and version bump for v0.8.0



## v0.7.1


https://github.com/telusdigital/tds/releases/tag/v0.7.1

- Update dev & peer dependencies to TDS 0.7 (#157)
- Changelog and version bump for v0.7.1



## v0.7.0


https://github.com/telusdigital/tds/releases/tag/v0.7.0

- Added react import line to grid docs.
- Removed unused column div at the bottom of docs.
- Fixed a typo in an example.
- Updated to export a single Grid component, instead of individual ones.
- Updated grid components to match linter specs.
- Merge branch 'master' into feature/B4YBD-891_grid_components
- Fixing CounterButton code style (#123)
- [[DSR-143](https://telusdigital.atlassian.net/browse/DSR-143)] Adding Jenkins jobs configuration script
- [[DSR-143](https://telusdigital.atlassian.net/browse/DSR-143)] Updating build pipeline
- Merge pull request #108 from telusdigital/feature/DSR-143_jenkins
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] Adding CDN Jenkins deployment
- Sketch Update v0.7.0 (#124)
- Merge pull request #127 from telusdigital/feature/DSR-143_jenkins-cdn-release
- Merge pull request #115 from telusdigital/feature/B4YBD-891_grid_components
- Screen reader SelectorCounter improvements (#128)
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] SelectorCounter label fixes
- [[DSR-194](https://telusdigital.atlassian.net/browse/DSR-194)] Adding Release/Rollback documentation (#129)
- implementation from #93 - adds a mixin to allow easy mapping of hover styles to focus states (#131)
- Fixing sidebar nav layout in iOS 8 (#138)
- [DSR] Deploy static site to S3 via Jenkins (#139)
- Automating NPM Publish (#141)
- Creating a seed job for Jenkins Job DSL
- Merge pull request #142 from telusdigital/feature/DSR_seed-ci
- Adding include pattern for Copy Artifacts steps
- Add collapsible component (#140)
- Updating breakpoint documentation (#143)
- Updating stylelint binary path
- Consolidating install/lint/test/build into one Jenkins Job (#146)
- Run a fresh build before each npm start (#147)
- Authenticate with AWS using Jenkins credentials
- Bind AWS credentials for CDN deployment
- Moving CDN deployment credentials binding
- Add auth token for Jenkins to execute NPM publish (#149)
- Automate changelog generation [[BCM-211](https://telusdigital.atlassian.net/browse/BCM-211)] (#150)
- End-to-end release automation with Jenkins [[BCM-213](https://telusdigital.atlassian.net/browse/BCM-213)] (#153)
- Use bash instead of sh for shell scripts (#154)
- Changelog and version bump for v0.7.0



## v0.6.0


https://github.com/telusdigital/tds/releases/tag/v0.6.0

- Fixing the sketch file download
- Fixing webpack URL on consumption page
- Fixing enriched npm example
- Alpha 0.5.0 Update (#90)
- Fix build of docs (#96)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Adding link examples (#97)
- Adding SelectorCounter tests and refactoring component (#98)
- Updated documentation (#95)
- [[DSR-176](https://telusdigital.atlassian.net/browse/DSR-176)] Fixing off-by-1 breakpoints bug
- Sketch Update v0.6.0
- Merge pull request #101 from telusdigital/bugfix/DSR-176
- [DSR] simplifying comments
- [DSR] simplifying comments (#103)
- Merge pull request #102 from telusdigital/sketchupdate11012016
- [DSR] Adding Hot Module Replacement to the documentation site
- Merge pull request #104 from telusdigital/task/DSR_docs-hot-reload
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] Better Selector Counter accessibility
- Merge pull request #107 from telusdigital/bugfix/DSR-167_selector-counter-accessibility
- [[DSR-194](https://telusdigital.atlassian.net/browse/DSR-194)] Document changelog & version maintenance
- Documenting README maintenance
- Merge pull request #109 from telusdigital/task/DSR-194_release-documentation
- [[DSR-152](https://telusdigital.atlassian.net/browse/DSR-152)] Updating product documentation
- Merge pull request #111 from telusdigital/feature/DSR-152_product-doc-updates
- [B4YBD-891] Added Icon component.
- Updated and added deps
- Merge pull request #112 from telusdigital/feature/B4YBD-891_icon_component
- Prevent click handler from executing for disabled button
- Merge pull request #114 from telusdigital/bugfix/DSR-failing-selector-counter-tests
- [RFC] Deprecated custom React rendering and implemented React rendering on client (#116)
- Cleaning up Docs Site SCSS comments (issue #72) (#118)
- [[DSR-199](https://telusdigital.atlassian.net/browse/DSR-199)] IA re-organization (#121)
- Restoring original Foundational Components in IA
- Re-arranging Getting Started, nav menu
- [[DSR-195](https://telusdigital.atlassian.net/browse/DSR-195)] Automated release to CDN (#119)
- Releasing/v0.6.0 (#122)
- Updating inter-module dependencies



## v0.5.0


https://github.com/telusdigital/tds/releases/tag/v0.5.0

- Renaming icons to reflect their form. (#60)
- Alpha 0.4.1 Update (#61)
- [[DSR-115](https://telusdigital.atlassian.net/browse/DSR-115)] Optimizing Core Icons web fonts for Windows (#62)
- [[DSR-115](https://telusdigital.atlassian.net/browse/DSR-115)] Adding ttfautohint to the webfont build (#63)
- [[DSR-131](https://telusdigital.atlassian.net/browse/DSR-131)] Easy download of thorium.sketch (#64)
- Adding the downloads directory to the Documentation Site (#65)
- Fixing Markdown list rendering (#66)
- [[DSR-105](https://telusdigital.atlassian.net/browse/DSR-105)] Updating font sizes to match the type stack audit (#67)
- [[DSR-105](https://telusdigital.atlassian.net/browse/DSR-105)] Increase h2 to 2rem/32px on mobile (#68)
- [[DSR-96](https://telusdigital.atlassian.net/browse/DSR-96)] Documenting build/release/deploy/tech stack (#69)
- #73 - adding a helper function for getting breakpoints in sass (#74)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Add enriched library and re-format project (#75)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Adding testing frameworks (#76)
- [[DSR-69](https://telusdigital.atlassian.net/browse/DSR-69)] Implementing selector counter (#77)
- Bumping required version of core by enriched
- Fixing sass include paths
- Adding an example of the Selector Counter (#78)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Links (enhanced) (#79)
- Removing leading zero to fix linter error
- Fixing package.json warnings
- Fixing missing README files
- [[DSR-140](https://telusdigital.atlassian.net/browse/DSR-140)] Type stack size adjustments (#80)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Adjusting Documentation build (#81)
- Updating local setup (#82)
- [[DSR-140](https://telusdigital.atlassian.net/browse/DSR-140)] Adjusting H3, P1, P2 sizes (#83)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Implementing descender-aware underlines (#84)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Isomorphic React build pipeline (#88)
- Alpha 0.5.0 Update (#85)
- Updating version number and changelog for v0.5.0 (#89)



## v0.4.0


https://github.com/telusdigital/tds/releases/tag/v0.4.0

- Updating version & changelog for v0.3.1 (#38)
- Updating consumption page for v0.3.1 (#39)
- Alpha 0.3 Update (#40)
- [[DSR-35](https://telusdigital.atlassian.net/browse/DSR-35)] Implementing lists (#41)
- Optimizing NPM module size (#42)
- Making TELUS uppercase everywhere (#43)
- [[DSR-44](https://telusdigital.atlassian.net/browse/DSR-44)] Form states (#44)
- Refactoring the form states interactive example (#45)
- Bugfix: hovered selections should have a gray border (#46)
- [[DSR-51](https://telusdigital.atlassian.net/browse/DSR-51)] Dropdowns (#47)
- Documenting accessible form error reporting (#48)
- [[DSR-33](https://telusdigital.atlassian.net/browse/DSR-33)] Utility Icons (#49)
- Adding voids to the Spyglass and Location icons (#50)
- Bugfix: restore missing "plus" icon (#51)
- [[DSR-112](https://telusdigital.atlassian.net/browse/DSR-112)] Show all core features under one nav category (#52)
- Bugfix: restore missing icons to lists and forms (#53)
- [[DSR-109](https://telusdigital.atlassian.net/browse/DSR-109)] Fixing docs hamburger alignment on mobile (#54)
- Task: improving the accessible icon documentation (#55)
- Restoring the header to the examples pages (#56)
- Alpha 0.4.0 Update (#57)
- Releasing v0.4.0 (#58)



## v0.3.1


https://github.com/telusdigital/tds/releases/tag/v0.3.1

- Updating version & changelog for v0.3.1 (#38)
- Updating consumption page for v0.3.1 (#39)



## v0.3.0


https://github.com/telusdigital/tds/releases/tag/v0.3.0

- Sketch file updates (#20)
- [[DSR-20](https://telusdigital.atlassian.net/browse/DSR-20)] Order nav links consistently (#21)
- [[DSR-39](https://telusdigital.atlassian.net/browse/DSR-39)] Text fields & labels (#22)
- [[DSR-47](https://telusdigital.atlassian.net/browse/DSR-47)] Field helpers (#23)
- [[DSR-45](https://telusdigital.atlassian.net/browse/DSR-45)] Radio buttons & checkboxes (#24)
- [[DSR-67](https://telusdigital.atlassian.net/browse/DSR-67)] Fixing clipped descenders inside form fields (#25)
- [[DSR-70](https://telusdigital.atlassian.net/browse/DSR-70)] Making form fields & buttons the same height (#26)
- Bug: fixing mis-aligned and mis-colored checkboxes (#27)
- [[DSR-73](https://telusdigital.atlassian.net/browse/DSR-73)] Fixing color of form placeholders in IE11 (#28)
- [[DSR-81](https://telusdigital.atlassian.net/browse/DSR-81)] Fixing check box alignment (#29)
- [[DSR-74](https://telusdigital.atlassian.net/browse/DSR-74)] fixing content width on Android 5 & 4 (#30)
- [[DSR-46](https://telusdigital.atlassian.net/browse/DSR-46)] Form hints (#31)
- Using web fonts from the Thorium CDN (#32)
- Bugfix: making subhead/strong/label text heavier (#33)
- Task: fixing checkbox example indentation (#34)
- Task: adding a feature switch to Form Hints (#35)
- Updating changelog & version for 0.3.0 (#36)



## v0.2.1


https://github.com/telusdigital/tds/releases/tag/v0.2.1

- Updating to latest v0.1 Sketch file (#2)
- [[DSR-14](https://telusdigital.atlassian.net/browse/DSR-14)] Migrate documentation site scaffolding (#3)
- Fixing dist directory error on Jenkins
- Updating Contributor Quick Start with dependency instructions
- [[DSR-1](https://telusdigital.atlassian.net/browse/DSR-1)] Responsive grid (#4)
- [[DSR-7](https://telusdigital.atlassian.net/browse/DSR-7)] Light Governance - Contribution Model
- Implementing grid padding & ordering feedback
- Migrating "Introduction" documentation section. (#6)
- Updating documentation
- Adding & documenting column nesting and utility classes
- Merge pull request #8 from telusdigital/feedback/DSR-1_grid
- [[DSR-7](https://telusdigital.atlassian.net/browse/DSR-7)] Light Governance - Contribution Model (#5)
- [[DSR-3](https://telusdigital.atlassian.net/browse/DSR-3)] Typography (#10)
- DSR-2 Colour (#9)
- [[DSR-4](https://telusdigital.atlassian.net/browse/DSR-4)] Buttons (#11)
- [[DSR-24](https://telusdigital.atlassian.net/browse/DSR-24)] use small body copy below level 3 heading (#12)
- [[DSR-25](https://telusdigital.atlassian.net/browse/DSR-25)] Implementing button spacing feedback (#13)
- [[DSR-8](https://telusdigital.atlassian.net/browse/DSR-8)] Consumption model
- Updating consumption model with more SCSS instructions
- Merge pull request #14 from telusdigital/feature/DSR-8_consumption-model
- Updating Sketch file
- Updated type color and weight as per Thorium Designers (#16)
- Updating headline levels in Contributor docs (#17)



## 0.18.1
14 July 2017

https://github.com/telusdigital/tds/releases/tag/0.18.1

- fix(Card and Notification): import css using require just like on previous versions
- Changelog and version bump for v0.18.1



## v0.18.0
11 July 2017

https://github.com/telusdigital/tds/releases/tag/v0.18.0

- fix(links): cleaned up link underline mixin
- fix(buttons): update anchor styles when styled as buttons
- fix(notification): make it more accessible by using role="banner"
- fix(Expand Collapse): fix hover states by using chevrons to indicate state
- docs(sketch file): update
- docs(hide blocks and block components): because they are not following latest standards and no one i
- Changelog and version bump for v0.18.0



## v0.17.0
06 July 2017

https://github.com/telusdigital/tds/releases/tag/v0.17.0

- docs(sketch): update file to show colour updates
- docs(sketch): updates to versioning art board with details about colour changes
- docs(sketch): minor update to versioning details in sketch
- docs(sketch): update re: raven - shade of grey in forms
- build(dependencies): remove js-dom as a dependency as it was unused and causing install problems
- build(dependencies): add yarn.lock files to lock down dependencies for devs using yarn
- chore(editor): Add an .editorconfig file for aligning editor configurations
- feat(Card): Deprecate className and style.
- refactor(notification): deprecate className and style
- Changelog and version bump for v0.17.0



## v0.16.3
21 June 2017

https://github.com/telusdigital/tds/releases/tag/v0.16.3

- docs(documentation to use 0.16.1 to fix release):
- Changelog and version bump for v0.16.3



## v0.16.1
20 June 2017

https://github.com/telusdigital/tds/releases/tag/v0.16.1

- docs(changelog): usual manual update
- fix(repo rename updates): to keep the old repo instead of using the newly created so we don't loose
- fix(colours, chevron and display h1 updates): - colour renaming and updates
- chore(move over beta 0.16.1):



## v0.16.0
14 June 2017

https://github.com/telusdigital/tds/releases/tag/v0.16.0

- docs(changelog): update
- Update README.md
- Remove console.log (#344)
- Update README.md
- Beta Release (#369)
- docs(typography example): fix typo on list class
- docs(links): update code to match example
- Changelog and version bump for v0.16.0



## v0.15.3
17 May 2017

https://github.com/telusdigital/tds/releases/tag/v0.15.3

- Revert updates of latest blocks + component
- fix(component collapsible): make collapsible content height dynamic
- Revert "Revert updates of latest blocks + component"
- refactor(changed react.propTypes to PropTypes): (#337)
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- build(add prop-type package to enriched package.json):
- Changelog and version bump for v0.15.3



## v0.15.2
16 May 2017

https://github.com/telusdigital/tds/releases/tag/v0.15.2

- fix(linting): remove jsx-filename-extension rule because spec.js need to be written using a differen
- fix(linting): fix javascript linting
- fix(linting): fix linting errors and warnings caused by updates to eslint file
- docs(changelog): manually update changelog.md with jade header :S
- Merge branch 'fix/linting' of github.com:telusdigital/telus-thorium-core
- build(preinstall): remove preinstall task and call /scripts/init-npm.sh instead
- build: groovy.ci
- build(groovy.ci): cd into /scripts folder to run init-npm.sh
- build(groovy.ci): updating path to init-npm.sh :)
- Changelog and version bump for v0.15.2



## v0.15.1
15 May 2017

https://github.com/telusdigital/tds/releases/tag/v0.15.1

- Merge remote-tracking branch 'origin/qatesting' into qatesting
- Merge remote-tracking branch 'origin/qatesting' into qatesting
- Merge branch 'master' into qatesting
- docs(changelog): update manually
- fix(viewport): adding initial-scale to test
- Merge branch 'qatesting' of github.com:telusdigital/telus-thorium-core into qatesting
- fix(layout): make tablet view same as desktop
- fix(layout): css update for docs
- Merge remote-tracking branch 'origin/qatesting' into qatesting
- fix(change nav bg on medium to match large view):
- Merge branch 'qatesting' of github.com:telusdigital/telus-thorium-core into qatesting
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- add polyfill.io to fix layout issues on IE11
- Revert "add polyfill.io to fix layout issues on IE11"
- feat(buttons): remove styles from html tag
- switch from include to indexof
- typo fix
- fix(set <main/> to display:block on reset.css for IE11):
- fix(changelog.sh): update changelog_entry()
- docs(navigation): add classname to navigation items
- fix(button): make min-width: 180px
- feat(button): remove css styles from button html tag
- docs(sketch): update version on sketch file to v0.15.0
- BEMize button styles
- docs(links): moved links documentation to its own page, it didn't really make sense to have it on th
- docs(upgrading.md): add note about changes made to buttons.scss
- fix(buttons): remove border on hover state of disabled button
- fix(buttons): BEMized style for button's disabled state
- docs(buttons): add TOC
- feat(chevron links): refactor css/html to reduce markup, ie. chevron is now displayed using :after p
- docs(typography): showcase of typography layout changes
- fix(buttons): inverted button hover state to match the other buttons
- docs(upgrading.md): documenting updates to reset offsets
- add Steps component
- feat(buttons): refactor css to clean up buttons css and documentation
- add in unit tests
- fix(component: Card): remove border
- fix(buttons): on selector counter component needed .tds-button--plain class
- fix(component card): remove 1px border from Card component
- fix(collapsible): Fixes vertical alignment of items win Collapsible.Panel using flex (#321)
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(components with buttons in doc): update button classes
- fix(buttons): update cursor on button's disabled state
- Merge branch 'feature/steps' of github.com:telusdigital/telus-thorium-core into qatesting
- ci(package.json): remove --watch from test task
- add Spinner component
- add in unit tests
- add api in doc
- build(jest): update to version 0.19.0
- test(test snapshots): update
- Merge branch 'feature/Spinner' of github.com:telusdigital/telus-thorium-core into qatesting
- fix(component steps): add references to Steps in enriched/ and docs/ so the Step Tracker shows on it
- fix(steps): fix button on step tracker page
- docs(component collapsible): spelling mistake
- fix(button): fix button related bugs in documentation
- docs(forms): update code sample using tds-button--plain
- add spinner full screen mode
- remove console
- update style
- fix full screen bug
- type fix
- bug fix
- remove transition
- remove bulr effect
- Revert "docs(forms): update code sample using tds-button--plain"
- Revert "fix(button): fix button related bugs in documentation"
- Revert "fix(buttons): update cursor on button's disabled state"
- Revert "docs(components with buttons in doc): update button classes"
- Revert "Merge branch 'master' of github.com:telusdigital/telus-thorium-core"
- Revert "feat(buttons): refactor css to clean up buttons css and documentation"
- Revert "fix(buttons): inverted button hover state to match the other buttons"
- Revert "feat(chevron links): refactor css/html to reduce markup, ie. chevron is now displayed using :after p"
- Revert "docs(buttons): add TOC"
- Revert "fix(buttons): BEMized style for button's disabled state"
- Revert "docs(upgrading.md): add note about changes made to buttons.scss"
- Revert "BEMize button styles"
- Revert "feat(button): remove css styles from button html tag"
- Revert "fix(button): make min-width: 180px"
- Revert "fix(component: Card): remove border"
- Revert "docs(links): moved links documentation to its own page, it didn't really make sense to have it on th"
- refactor a bit
- refactor
- Merge branch 'qatesting'
- Revert "Merge branch 'qatesting'"
- fix(collapsible component): fix toggle buttons on collapsible doc and the ControlledCollapsible.jsx
- docs(sketch): update version number on sketch file because it was missed on 0.15.0 release
- updating issue template (#336)
- Changelog and version bump for v0.15.1



## v0.15.0
28 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.15.0

- fix(html tags style): remove styles on <button/> and set default font-weight: 400 globally
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- Issue #304
- update doc
- fix(form hinter): adjust font size to make it more legible
- docs(contributing): add Alex's email to email us links
- ci(changelog.sh): add .jade header to avoid seeing Untitled in left nav after a release
- Revert "fix(html tags style): remove styles on <button/> and set default font-weight: 400 globally"
- feat(dimple): add tds-dimple mixin and use it in accordion component
- feat(grid offset): revert back to previous offset functionality and added offset reset for each view
- Merge remote-tracking branch 'origin/collapsible-disable-state' into qatesting
- docs(changelog): updating .jade header manually for the last time
- Issue #304 (#306)
- Merge branch 'qatesting'
- Changelog and version bump for v0.15.0



## v0.14.1
26 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.14.1

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(fix container on sample forms page):
- docs(sketch): update new file v0.14.1
- Changelog and version bump for v0.14.1



## v0.14.0
25 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.14.0

- fix(typography): add etext for helvetica 45(400), 55(600), 65(700) and the corresponding line-height
- fix(fonts): adjust font-url-prefix for new extext fonts
- fix(grid): fix containers, including add new .container--fluid
- fix(typography): letter-spacing audit for etext
- docs(typography): update typography example layout
- fix(typography): adjust line-height on h2 mobile
- feat(grid): update dimensions
- docs(grid): update documentation re: grid containers
- docs(fonts): update list of fonts in documentation
- fix(etext): update path to load from cdn /production/core/fonts/etext
- BMK-000 - Dan & Guille: Add index to blocks directory. (#276)
- docs(PR template and changelog): update PR template with acceptance criteria and manually update cha
- add url loader to doc webpack config
- BMK-123: Rodrigo - Add WithLegal to OverviewBlock (#282)
- feat(titled text block): Adds titled text block and documentation (#279)
- docs(gh #281): update md parsing to display classes
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(build): add .npmrc to /enriched so we can install private contentful-redux package
- build(ci.groovy): call npm run preinstall explicitly
- build(ci.groovy and package.json): call npm run preinstall explicitly
- build(ci.groovy): add new jenkins job to get triggered from test branch to not pollute the master br
- build(ci.groovy): add ability to push to qa from test branch
- fix(package.json): move init-npm.sh to /enriched
- fix(init-npm.sh): update path to .npmrc
- Fixing tests (#291)
- fix(video block): fix unit test missing colon in console statement
- build(ci.groovy): update builds to accommodate pushing to qa to test
- fix(package.json): set react to 15.3.2 on peerDependencies
- Adding wrapper object to create an sshAgent containing an SSH key (#293)
- fix(docs): fix missing navigation
- build(ci.groovy): add sshAgent wrapper on new qa jenkins job
- build(ci.groovy): remove qa jenkins job
- fix(blocks): fix title on headline and titled text blocks due to title -> caption search and replace
- build(ci.groovy): setup jenkins job for qatesting branch
- feat(sketch): new version of sketch file
- Add overflow: hidden to collapsible to fix #294 (#295)
- docs(typography): map helvetica neue to it's corresponding css attribute (font-weight value)
- build(ci.groovy): remove tds-deploy line, not needed to push to qa
- build(ci.groovy): remove tds-deploy line for qa-build because we are not generating git tags
- Update ci.groovy
- refactor(package.json): consume redux-contentful
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- feat(grid and typography updates): grid gutter is now 16px on each side of a column and typography f
- fix(grid): offset class are now viewport specific
- docs(grid): update sample page to use .container--fluid
- docs(changelog): manually update changelog because it won't update automatically
- docs(markdown): fix broken TOC links and broken roadmap link
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core into qatesting
- build(ci.groovy): add sshAgent to release job
- Changelog and version bump for v0.14.0



## v0.13.2
18 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.13.2

- fix(blocks): got rid of `blocks/blocks` folder
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- Changelog and version bump for v0.13.2



## v0.13.1
18 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.13.1

- docs(sketch): add version number on all TDS.sketch links
- Create ISSUE_TEMPLATE.md
- Create PULL_REQUEST_TEMPLATE.md
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(typography): adjust letter-spacing and font-weight for h2
- docs(display heading 1): add .display-heading-1 to typography.md documentation
- BMK-28 - Dan, Bruno, Fernanda: Add Checklist Component.
- Merge branch 'feature/BMK-28_check_list_component' of github.com:telusdigital/telus-thorium-core
- fix(icons): update core-icons.* path to fix .woff2 404 issue #260
- revert(checklist): Bo to review the code before it gets published
- docs(typography): add example on how sup and sub look like with p1,p2 and p3 on typography.html
- docs(blocks): add blocks section within documentation and Overview block boilerplate
- feat(blocks-components): add ability to add non-global components and their corresponding documentat
- feat(blocks): add sample Overview Block and corresponding documentation template and page
- docs(changelog): manually update changelog for 0.10.2 release
- build(jenkins): update deployment key for repo tagging
- build(jenkins): add ssh agent wrapper
- fix(icons): update core icons path to cdn v0.4.0
- Feature/bmk 30 overview check list block (#269)
- Feature/bmk 30 overview check list block (#270)
- docs(changelog): update
- test(overview block): update test
- feat(package.json): update telus-thorium-core to 0.11.4
- feat(package.json): updates to package.jsons to manually update 0.10.2 to 0.11.4
- docs(blocks template): update layout on layout-blocks.jade to improve presentation of blocks
- update jest config to only scan src folder for unit tests; remove the extra block folder
- Feature/bmk 102 headline block (#271)
- docs(overview block): update order of elements in overview documentation page
- fix(headline block): Fixing headline block tests (#273)
- fix(overview block): move to blocks/blocks folder
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- fix(overview block): update path to checklist now that block was  moved to blocks/blocks folder
- Changelog and version bump for v0.13.1



## v0.10.2
06 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.10.2

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(buttons): accessibility: add role="button" in documentation
- fix(typography): fix p2 and p3 font-size
- Changelog and version bump for v0.10.2



## v0.10.1
06 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.10.1

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- docs(manually run changelog script because deployment is buggy):
- Changelog and version bump for v0.10.1



## v0.10.0
05 April 2017

https://github.com/telusdigital/tds/releases/tag/v0.10.0

- remove ## from readme link
- update stylelint to fix linting warnings
- adjust button padding to 17px 20px 17px 20px just like business site buttons
- fix issue#191 (#197)
- Updated grid boards to include max width (#180)
- adjust top/bottom padding on button
- update colours on documentation to match latest sketch file
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- add sass vars to documentation
- change hex value from upppercase to lowercase to prevent build from failing
- align colour documentation to the left
- Layout fix (#201)
- hide nav on automatically generated changelog page
- fix to changelog page
- remove fluidity section on grid.md
- remove hack for Changelog link on Nav
- hide doc nav on load on mobile views
- add box-shadow to buttons to avoid shifting on hover
- fix issue#188
- fix formatting on changelog
- add zip file with fonts needed to load sketch file
- add links to font-for-sketch.zip file
- remove min-height: 60px on buttons
- minor style updates to content in colours.md
- update Thorium to TDS in README.md copy
- update upgrading guide
- update getting started documentation
- add ToC and reviewed content in setting-up-projects
- update adoption thresholds section
- update receiving updates content
- update overview content
- remove more instances of “Thorium” in documentation
- add link to ttfautohint in icons script
- update homepage content
- fix issue#205
- add background to show how max-width on container—limited-width works
- document utility mixins
- fix for documentation mobile nav
- add ontouchstart event handler for mobile on doc nav
- refactor mobile nav using css
- add more details on how to use tds SCSS
- Collapsible top border fix (#210)
- add core-icons.otd to downloads page [doc]
- update Roadmap.md
- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- make ms-input-placeholder pseudo class style more specific
- move core-icon mixin to mixins.scss
- minor copy updates/links
- add styles for sup and sub
- add minor copy updates
- Squashed commit of the following:
- generate core-icons.woff2
- remove font-weight: normal instances
- fix(buttons): adjust size of input fields and buttons now that default font-size has changed from 19
- docs(update to UPGRADING.md): with latest changes
- chore(add commitizen): command line utility used to follow standards for writing good commit message
- docs(foundations): add toc
- fix(webfonts): load helvetica 45, 55, 65 fonts from cdn
- remove core-icons from download because .otf is not working with font-book
- docs(downloads): updates fonts-for-sketch.zip with helvetica eText Pro 45, 55, 65
- docs(colours): switch green and purple colours between primary and response sections
- docs(docs navigation): remove bold style on links
- fix(grid): adjust padding on xs view columns
- docs(docs): add grid test example
- add grid test example
- docs(grid): adjust sample page with colorful grid
- fix(buttons): set font size to 16px
- fix(add new font size, line-heights and letter-spacing as per sketch file):
- fix(fonts): use cdn old helvetica fonts until brand buys etext font
- docs(colours): update colours section to match sketch file
- docs(docs): minor updates to colours and grid documentation
- docs(fonts): remove zip file with fonts for sketch
- docs(grid): add 12 column colorful grid example
- refactor(colours): update colour variables to match the colour names on sketch
- Changelog and version bump for v0.10.0



## v0.9.5
01 March 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.5

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- Changelog and version bump for v0.9.5



## v0.9.4
01 March 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.4

- Merge branch 'master' of github.com:telusdigital/telus-thorium-core
- update buttons color/styles
- adjust disabled hover styles
- fix auto-width on SelectorCounter component
- Changelog and version bump for v0.9.4



## v0.9.3
28 February 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.3

- Changelog and version bump for v0.9.3



## v0.9.2
15 February 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.2

- Fix inconsistent newlines in the changelog (#167)
- Bug fix for collapsible pannel not receiving props
- update doc
- [[DSR-203](https://telusdigital.atlassian.net/browse/DSR-203)] Adding opt-in max-width to responsive grid (#145)
- Changelog and version bump for v0.9.2



## v0.9.1
25 January 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.1

- feature/BCM-165: Updated styling for Notification (#165)
- Changelog and version bump for v0.9.1



## v0.9.0
23 January 2017

https://github.com/telusdigital/tds/releases/tag/v0.9.0

- Notification Component [[BCM-165](https://telusdigital.atlassian.net/browse/BCM-165)] (#156)
- Changelog and version bump for v0.9.0



## v0.8.0
20 January 2017

https://github.com/telusdigital/tds/releases/tag/v0.8.0

- Bug fixes for version bumps and changelog formatting during automated deployment
- Fix misspelled card scss import (#159)
- Publish the Icon component documentation (#160)
- Changelog and version bump for v0.8.0



## v0.7.1
19 January 2017

https://github.com/telusdigital/tds/releases/tag/v0.7.1

- Update dev & peer dependencies to TDS 0.7 (#157)
- Changelog and version bump for v0.7.1



## v0.7.0
19 January 2017

https://github.com/telusdigital/tds/releases/tag/v0.7.0

- Added react import line to grid docs.
- Removed unused column div at the bottom of docs.
- Fixed a typo in an example.
- Updated to export a single Grid component, instead of individual ones.
- Updated grid components to match linter specs.
- Merge branch 'master' into feature/B4YBD-891_grid_components
- Fixing CounterButton code style (#123)
- [[DSR-143](https://telusdigital.atlassian.net/browse/DSR-143)] Adding Jenkins jobs configuration script
- [[DSR-143](https://telusdigital.atlassian.net/browse/DSR-143)] Updating build pipeline
- Merge pull request #108 from telusdigital/feature/DSR-143_jenkins
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] Adding CDN Jenkins deployment
- Sketch Update v0.7.0 (#124)
- Merge pull request #127 from telusdigital/feature/DSR-143_jenkins-cdn-release
- Merge pull request #115 from telusdigital/feature/B4YBD-891_grid_components
- Screen reader SelectorCounter improvements (#128)
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] SelectorCounter label fixes
- [[DSR-194](https://telusdigital.atlassian.net/browse/DSR-194)] Adding Release/Rollback documentation (#129)
- implementation from #93 - adds a mixin to allow easy mapping of hover styles to focus states (#131)
- Fixing sidebar nav layout in iOS 8 (#138)
- [DSR] Deploy static site to S3 via Jenkins (#139)
- Automating NPM Publish (#141)
- Creating a seed job for Jenkins Job DSL
- Merge pull request #142 from telusdigital/feature/DSR_seed-ci
- Adding include pattern for Copy Artifacts steps
- Add collapsible component (#140)
- Updating breakpoint documentation (#143)
- Updating stylelint binary path
- Consolidating install/lint/test/build into one Jenkins Job (#146)
- Run a fresh build before each npm start (#147)
- Authenticate with AWS using Jenkins credentials
- Bind AWS credentials for CDN deployment
- Moving CDN deployment credentials binding
- Add auth token for Jenkins to execute NPM publish (#149)
- Automate changelog generation [[BCM-211](https://telusdigital.atlassian.net/browse/BCM-211)] (#150)
- End-to-end release automation with Jenkins [[BCM-213](https://telusdigital.atlassian.net/browse/BCM-213)] (#153)
- Use bash instead of sh for shell scripts (#154)
- Changelog and version bump for v0.7.0



## v0.6.0
30 November 2016

https://github.com/telusdigital/tds/releases/tag/v0.6.0

- Fixing the sketch file download
- Fixing webpack URL on consumption page
- Fixing enriched npm example
- Alpha 0.5.0 Update (#90)
- Fix build of docs (#96)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Adding link examples (#97)
- Adding SelectorCounter tests and refactoring component (#98)
- Updated documentation (#95)
- [[DSR-176](https://telusdigital.atlassian.net/browse/DSR-176)] Fixing off-by-1 breakpoints bug
- Sketch Update v0.6.0
- Merge pull request #101 from telusdigital/bugfix/DSR-176
- [DSR] simplifying comments
- [DSR] simplifying comments (#103)
- Merge pull request #102 from telusdigital/sketchupdate11012016
- [DSR] Adding Hot Module Replacement to the documentation site
- Merge pull request #104 from telusdigital/task/DSR_docs-hot-reload
- [[DSR-167](https://telusdigital.atlassian.net/browse/DSR-167)] Better Selector Counter accessibility
- Merge pull request #107 from telusdigital/bugfix/DSR-167_selector-counter-accessibility
- [[DSR-194](https://telusdigital.atlassian.net/browse/DSR-194)] Document changelog & version maintenance
- Documenting README maintenance
- Merge pull request #109 from telusdigital/task/DSR-194_release-documentation
- [[DSR-152](https://telusdigital.atlassian.net/browse/DSR-152)] Updating product documentation
- Merge pull request #111 from telusdigital/feature/DSR-152_product-doc-updates
- [B4YBD-891] Added Icon component.
- Updated and added deps
- Merge pull request #112 from telusdigital/feature/B4YBD-891_icon_component
- Prevent click handler from executing for disabled button
- Merge pull request #114 from telusdigital/bugfix/DSR-failing-selector-counter-tests
- [RFC] Deprecated custom React rendering and implemented React rendering on client (#116)
- Cleaning up Docs Site SCSS comments (issue #72) (#118)
- [[DSR-199](https://telusdigital.atlassian.net/browse/DSR-199)] IA re-organization (#121)
- Restoring original Foundational Components in IA
- Re-arranging Getting Started, nav menu
- [[DSR-195](https://telusdigital.atlassian.net/browse/DSR-195)] Automated release to CDN (#119)
- Releasing/v0.6.0 (#122)
- Updating inter-module dependencies



## v0.5.0
20 October 2016

https://github.com/telusdigital/tds/releases/tag/v0.5.0

- Renaming icons to reflect their form. (#60)
- Alpha 0.4.1 Update (#61)
- [[DSR-115](https://telusdigital.atlassian.net/browse/DSR-115)] Optimizing Core Icons web fonts for Windows (#62)
- [[DSR-115](https://telusdigital.atlassian.net/browse/DSR-115)] Adding ttfautohint to the webfont build (#63)
- [[DSR-131](https://telusdigital.atlassian.net/browse/DSR-131)] Easy download of thorium.sketch (#64)
- Adding the downloads directory to the Documentation Site (#65)
- Fixing Markdown list rendering (#66)
- [[DSR-105](https://telusdigital.atlassian.net/browse/DSR-105)] Updating font sizes to match the type stack audit (#67)
- [[DSR-105](https://telusdigital.atlassian.net/browse/DSR-105)] Increase h2 to 2rem/32px on mobile (#68)
- [[DSR-96](https://telusdigital.atlassian.net/browse/DSR-96)] Documenting build/release/deploy/tech stack (#69)
- #73 - adding a helper function for getting breakpoints in sass (#74)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Add enriched library and re-format project (#75)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Adding testing frameworks (#76)
- [[DSR-69](https://telusdigital.atlassian.net/browse/DSR-69)] Implementing selector counter (#77)
- Bumping required version of core by enriched
- Fixing sass include paths
- Adding an example of the Selector Counter (#78)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Links (enhanced) (#79)
- Removing leading zero to fix linter error
- Fixing package.json warnings
- Fixing missing README files
- [[DSR-140](https://telusdigital.atlassian.net/browse/DSR-140)] Type stack size adjustments (#80)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Adjusting Documentation build (#81)
- Updating local setup (#82)
- [[DSR-140](https://telusdigital.atlassian.net/browse/DSR-140)] Adjusting H3, P1, P2 sizes (#83)
- [[DSR-32](https://telusdigital.atlassian.net/browse/DSR-32)] Implementing descender-aware underlines (#84)
- [[DSR-113](https://telusdigital.atlassian.net/browse/DSR-113)] Isomorphic React build pipeline (#88)
- Alpha 0.5.0 Update (#85)
- Updating version number and changelog for v0.5.0 (#89)



## v0.4.0
04 October 2016

https://github.com/telusdigital/tds/releases/tag/v0.4.0

- Updating version & changelog for v0.3.1 (#38)
- Updating consumption page for v0.3.1 (#39)
- Alpha 0.3 Update (#40)
- [[DSR-35](https://telusdigital.atlassian.net/browse/DSR-35)] Implementing lists (#41)
- Optimizing NPM module size (#42)
- Making TELUS uppercase everywhere (#43)
- [[DSR-44](https://telusdigital.atlassian.net/browse/DSR-44)] Form states (#44)
- Refactoring the form states interactive example (#45)
- Bugfix: hovered selections should have a gray border (#46)
- [[DSR-51](https://telusdigital.atlassian.net/browse/DSR-51)] Dropdowns (#47)
- Documenting accessible form error reporting (#48)
- [[DSR-33](https://telusdigital.atlassian.net/browse/DSR-33)] Utility Icons (#49)
- Adding voids to the Spyglass and Location icons (#50)
- Bugfix: restore missing "plus" icon (#51)
- [[DSR-112](https://telusdigital.atlassian.net/browse/DSR-112)] Show all core features under one nav category (#52)
- Bugfix: restore missing icons to lists and forms (#53)
- [[DSR-109](https://telusdigital.atlassian.net/browse/DSR-109)] Fixing docs hamburger alignment on mobile (#54)
- Task: improving the accessible icon documentation (#55)
- Restoring the header to the examples pages (#56)
- Alpha 0.4.0 Update (#57)
- Releasing v0.4.0 (#58)



## v0.3.1
21 September 2016

https://github.com/telusdigital/tds/releases/tag/v0.3.1

- Updating version & changelog for v0.3.1 (#38)
- Updating consumption page for v0.3.1 (#39)



## v0.3.0
20 September 2016

https://github.com/telusdigital/tds/releases/tag/v0.3.0

- Sketch file updates (#20)
- [[DSR-20](https://telusdigital.atlassian.net/browse/DSR-20)] Order nav links consistently (#21)
- [[DSR-39](https://telusdigital.atlassian.net/browse/DSR-39)] Text fields & labels (#22)
- [[DSR-47](https://telusdigital.atlassian.net/browse/DSR-47)] Field helpers (#23)
- [[DSR-45](https://telusdigital.atlassian.net/browse/DSR-45)] Radio buttons & checkboxes (#24)
- [[DSR-67](https://telusdigital.atlassian.net/browse/DSR-67)] Fixing clipped descenders inside form fields (#25)
- [[DSR-70](https://telusdigital.atlassian.net/browse/DSR-70)] Making form fields & buttons the same height (#26)
- Bug: fixing mis-aligned and mis-colored checkboxes (#27)
- [[DSR-73](https://telusdigital.atlassian.net/browse/DSR-73)] Fixing color of form placeholders in IE11 (#28)
- [[DSR-81](https://telusdigital.atlassian.net/browse/DSR-81)] Fixing check box alignment (#29)
- [[DSR-74](https://telusdigital.atlassian.net/browse/DSR-74)] fixing content width on Android 5 & 4 (#30)
- [[DSR-46](https://telusdigital.atlassian.net/browse/DSR-46)] Form hints (#31)
- Using web fonts from the Thorium CDN (#32)
- Bugfix: making subhead/strong/label text heavier (#33)
- Task: fixing checkbox example indentation (#34)
- Task: adding a feature switch to Form Hints (#35)
- Updating changelog & version for 0.3.0 (#36)



## v0.2.1
06 September 2016

https://github.com/telusdigital/tds/releases/tag/v0.2.1

- Updating to latest v0.1 Sketch file (#2)
- [[DSR-14](https://telusdigital.atlassian.net/browse/DSR-14)] Migrate documentation site scaffolding (#3)
- Fixing dist directory error on Jenkins
- Updating Contributor Quick Start with dependency instructions
- [[DSR-1](https://telusdigital.atlassian.net/browse/DSR-1)] Responsive grid (#4)
- [[DSR-7](https://telusdigital.atlassian.net/browse/DSR-7)] Light Governance - Contribution Model
- Implementing grid padding & ordering feedback
- Migrating "Introduction" documentation section. (#6)
- Updating documentation
- Adding & documenting column nesting and utility classes
- Merge pull request #8 from telusdigital/feedback/DSR-1_grid
- [[DSR-7](https://telusdigital.atlassian.net/browse/DSR-7)] Light Governance - Contribution Model (#5)
- [[DSR-3](https://telusdigital.atlassian.net/browse/DSR-3)] Typography (#10)
- DSR-2 Colour (#9)
- [[DSR-4](https://telusdigital.atlassian.net/browse/DSR-4)] Buttons (#11)
- [[DSR-24](https://telusdigital.atlassian.net/browse/DSR-24)] use small body copy below level 3 heading (#12)
- [[DSR-25](https://telusdigital.atlassian.net/browse/DSR-25)] Implementing button spacing feedback (#13)
- [[DSR-8](https://telusdigital.atlassian.net/browse/DSR-8)] Consumption model
- Updating consumption model with more SCSS instructions
- Merge pull request #14 from telusdigital/feature/DSR-8_consumption-model
- Updating Sketch file
- Updated type color and weight as per Thorium Designers (#16)
- Updating headline levels in Contributor docs (#17)
