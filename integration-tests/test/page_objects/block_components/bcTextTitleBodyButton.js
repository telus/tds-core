const bcTextTitleBodyButton = {
   buttonPress() {
    return this.click('@bcTextTitleBodyButtonOnMenu');
  },
  checkHeader() {
     this.expect.element('@bcTextTitleOnHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [bcTextTitleBodyButton],
  elements: {
    bcTextTitleBodyButtonOnMenu: { 
      //click texttitlebodybutton on the sidebar
      selector: '.nav-texttitlebodybutton' },
      //has the page loaded?
     bcTextTitleOnHeader: {
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A TextTitleBodyButton is a component composed of')]" }
  }
};


