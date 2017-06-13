const clickOverview = {
  buttonPress() {
    return this.click('@aboutOverviewOnMenu'); },
  checkHeader() {
     this.expect.element('@overviewHeader').to.be.visible.before(1000); },
  jestFirstLink() {
    return this.click('@jestFirstLink');},
  jestLoaded() {
     this.expect.element('@jestLoaded').to.be.visible.before(1000); },
  enzymeSecondLink() {
    return this.click('@enzymeSecondLink'); },
  enzymeLoaded() {
     this.expect.element('@enzymeLoaded').to.be.visible.before(1000); },
  npmThirdLink() {
    return this.click('@npmThirdLink'); },
  npmLoaded() {
    this.expect.element('@npmLoaded').to.be.visible.before(2000); }
  };

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickOverview],
  elements: {
  //click overview on the menu
    aboutOverviewOnMenu: { 
      selector: '.nav-overview' },
  //has element on the page loaded?
    overviewHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'We’re glad you’re planning on using TDS in your project!')]" },
  //click jest
    jestFirstLink: {
      selector: "a[href*='facebook.github.io/jest/']" },
  //has the page loaded?
    jestLoaded: {
      locateStrategy: 'xpath',
      selector: "//small[contains (text (), 'Delightful JavaScript Testing')]"},
  //click enzyme
    enzymeSecondLink: {
      selector: "a[href*='http://airbnb.io/enzyme/']" },
  //has the page loaded?
    enzymeLoaded: {
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'JavaScript Testing utility')]" },
  //click deciding between NPM vs CDN
    npmThirdLink: {
      selector: "a[href*='/2-Use-TDS/1-getting-started.html#choosing-cdn-vs-npm']" },
  //has the page loaded?
    npmLoaded: {
      locateStrategy: 'xpath',
      selector: "//h2[contains (text (), 'Choosing CDN vs. NPM')]"}
    },
};