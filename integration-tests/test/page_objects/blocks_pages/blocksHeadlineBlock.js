const blocksHeadlineBlock = {
   buttonPress() {
    return this.click('@blocksHeadlineBlockOnMenu');
  },
  checkHeader() {
     this.expect.element('@headlineHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [blocksHeadlineBlock],
  elements: {
    blocksHeadlineBlockOnMenu: { 
    //click the headline page on the sidebar
      selector: '.nav-headline-block' },
    //has the page loaded?
     headlineHeader: { selector: '#headline' }
  }
};


