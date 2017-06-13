const clickGCIcon = {
  buttonPress() {
    return this.click('@gcIcon');
  },
  checkHeader() {
     this.expect.element('@gcIconHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCIcon],
  elements: { 
    gcIcon: { 
    //click icon on the sidebar
      selector: '.nav-icon' },
    //has the page loaded
    gcIconHeader: { 
      locateStrategy: 'xpath',
      selector: "//h3[contains (text (), 'Plain icon')]"},
  }
};