const blocksOverviewBlock = {
   buttonPress() {
    return this.click('@blocksOverviewBlockOnMenu');
  },
  checkHeader() {
     this.expect.element('@overviewBlockHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [blocksOverviewBlock],
  elements: {
    blocksOverviewBlockOnMenu: { 
    //click the overview block page on the sidebar
      selector: '.nav-overview-block' },
    //has the page loaded?
     overviewBlockHeader: { selector: '#overview' }
  }
};


