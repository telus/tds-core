const clickGCSelectorCounter = {
  buttonPress() {
    return this.click('@gcSelectorCounter');
  },
  checkHeader() {
     this.expect.element('@gcSelectorCounterHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCSelectorCounter],
  elements: { 
    gcSelectorCounter: { 
    //click selector counter on sidebar
      selector: '.nav-selector-counter' },
    //check page has loaded
    gcSelectorCounterHeader: { 
      locateStrategy: 'xpath',
      selector: "//h3[contains (text (), 'Disabled selector counter')]"},
  }
};