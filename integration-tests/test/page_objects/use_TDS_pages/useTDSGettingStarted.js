const clickGettingStarted = {
  buttonPress() {
    return this.click('@useTDSGettingStarted'); },
  checkHeader() {
    this.waitForElementVisible('@gettingStartedHeader', 1000); },
  clickTelusThoriumCore() {
    return this.click('@clickTelusThoriumCore'); },
  loadedTelusThoriumCore() {
    return this.click('@loadedTelusThoriumCore'); },
  clickTelusThoriumEnriched() {
    return this.click('@clickTelusThoriumEnriched'); },
  loadedTelusThoriumEnriched() {
    return this.click('@loadedTelusThoriumEnriched'); },

};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGettingStarted],
  elements: { 
    //click getting started on the menu
    useTDSGettingStarted: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'TELUS Design System')]" },
    //has the page loaded?
    gettingStartedHeader: { 
      selector: '.content>h1'
    },
    //click telus thorium core first link on the page
    clickTelusThoriumCore: {
      selector: "a[href*='package/telus-thorium-core']"
    },
    //has the page loaded?
    loadedTelusThoriumCore: {
      selector: ".package-description-redundant"
    },
    //click telus thorium enriched
    clickTelusThoriumEnriched: {
      selector: "a[href*='package/telus-thorium-enriched']"
    },
    //has the page loaded?
    loadedTelusThoriumEnriched: {
      selector: "#readme>h1"
    },
  }
};