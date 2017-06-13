const blocksIntroduction = {
   buttonPress() {
    return this.click('@blocksIntroductionOnMenu');
  },
  checkHeader() {
     this.expect.element('@introductionHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [blocksIntroduction],
  elements: {
    blocksIntroductionOnMenu: { 
    //click intro for blocks on sidebar
      selector: "a[href*='6-Blocks/0-Intro.html']" },
    //has the page loaded
     introductionHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A block is a react component')]" }
  }
};


