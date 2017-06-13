const clickGCCollapsible = {
  buttonPress() {
    return this.click('@gcCollapsible');
  },
  checkHeader() {
     this.expect.element('@gcCollapsibleHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCCollapsible],
  elements: { 
    gcCollapsible: { 
    //click collapsible on the sidebar 
      selector: '.nav-collapsible' },
    //has the page loaded
    gcCollapsibleHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A content area which can be collapsed')]"},
  }
};