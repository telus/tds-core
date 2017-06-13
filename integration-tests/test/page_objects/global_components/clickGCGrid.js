const clickGCGrid = {
  buttonPress() {
    return this.click('@gcGrid');
  },
  checkHeader() {
     this.expect.element('@gcGridHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCGrid],
  elements: { 
    gcGrid: { 
    //click grid on the sidebar
      selector: "a[href*='/4-Global%20Components/4-Grid.html']" },
    //has the page loaded
    gcGridHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'The Grid is made up of')]"},
  }
};