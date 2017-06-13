const clickRoadmap = {
  buttonPress() {
    return this.click('@aboutRoadmapOnMenu');
  },
  checkHeader() {
    this.expect.element('@roadmapHeader').to.be.visible.before(1000);
  },
  checkListOfUsers() {
    return this.click('@clickListOfUsers');
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickRoadmap],
  elements: {
      //click roadmap on sidebar
    aboutRoadmapOnMenu: { 
      selector: '.nav-roadmap' },
      //has the page loaded?
    roadmapHeader: {
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'we’ve published TDS Roadmap')]"},
    clickListOfUsers: {
      selector: "a[href*= 'docs.google.com/']" }
  }
};