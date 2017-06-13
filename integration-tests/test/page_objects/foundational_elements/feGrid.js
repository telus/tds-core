const clickGrid = {
  buttonPress() {
    return this.click('@feGrid');
  },
  checkHeader() {
     this.expect.element('@feGridHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGrid],
  elements: { 
    //open grid on the sidebar
    feGrid: { 
      selector: "a[href*='/3-Foundational-Elements/4-grid.html']" },
    //has the page loaded?
    feGridHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'Grids give order to the vertical')]"},
  }
};