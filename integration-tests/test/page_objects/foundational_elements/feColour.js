const clickColour = {
  buttonPress() {
    return this.click('@feColour');
  },
  checkHeader() {
     this.expect.element('@feColourHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickColour],
  elements: { 
    //click colour on the sidebar
    feColour: { 
      selector: '.nav-colour' },
    //has the page loaded?
    feColourHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'Color creates visual impact')]"},
  }
};