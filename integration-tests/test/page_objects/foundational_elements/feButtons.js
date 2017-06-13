const clickButtons = {
  buttonPress() {
    return this.click('@feButtons');
  },
  checkHeader() {
     this.expect.element('@feButtonsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickButtons],
  elements: { 
    //click buttons on the sidebar
    feButtons: { 
      selector: '.nav-buttons' },
    //has the page loaded?
    feButtonsHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A button is a graphical control element')]"},
  }
};