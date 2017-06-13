const homePage = {
  pageLoad() {
     this.expect.element('@homePageLoad').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [homePage],
  elements: {
  //has the page loaded?
    homePageLoad: {
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'a platform designed to enable')]"}
}
};