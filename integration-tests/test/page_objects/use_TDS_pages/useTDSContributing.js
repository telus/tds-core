const clickContributing = {
  buttonPress() {
    return this.click('@useTDSContributing');
  },
  checkHeader() {
     this.expect.element('@contributingHeader').to.be.visible.before(1000);
  },
  clickCreateAnIssue() {
    this.expect.element('@clickCreateAnIssue').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickContributing],
  elements: { 
    useTDSContributing: { 
      selector: '.nav-contributing' },
    contributingHeader: { selector: '.content>h1'},
    clickCreateAnIssue: { locateStrategy: 'xpath', selector: "html/body/main/div/div/article/section/p[3]/a"},
  }
};