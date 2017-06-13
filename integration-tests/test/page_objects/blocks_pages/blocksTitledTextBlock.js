const blocksTitledTextBlock = {
  buttonPress() {
    return this.click('@blocksTitledTextBlockOnMenu');
  },
  checkHeader() {
     this.expect.element('@titleTextBlockHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [blocksTitledTextBlock],
  elements: {
    blocksTitledTextBlockOnMenu: { 
    //click titledtextblock
      selector: '.nav-titled-text-block' },
    //has the page loaded?
     titleTextBlockHeader: { selector: '#titled-text' }
  }
};


