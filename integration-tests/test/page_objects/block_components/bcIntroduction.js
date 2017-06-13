const bcIntroduction = {
   buttonPress() {
    return this.click('@bcIntroductionOnMenu');
  },
  checkHeader() {
     this.expect.element('@introductionHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [bcIntroduction],
  elements: {
    bcIntroductionOnMenu: { 
      //click intro on the sidebar
      selector: "a[href*='/5-Block%20Components/0-Intro.html']" },
      //has the page loaded?
     introductionHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'Some components are not immediately re-useable')]" }
  }
};


