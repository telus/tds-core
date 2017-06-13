const clickChangelog = {
  buttonPress() {
    return this.click('@aboutChangelogOnMenu');
  },
  checkHeader() {
     this.expect.element('@changelogHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickChangelog],
  elements: {
    aboutChangelogOnMenu: {  
      //click changelog on sidebar
      selector: '.nav-changelog' },
      //has the page loaded?
    changelogHeader: { 
      locateStrategy: 'xpath',
      selector: "//h1[contains (text (), 'Changelog')]"}
  }
};