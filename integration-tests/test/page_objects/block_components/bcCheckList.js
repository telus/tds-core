const bcCheckList = {
   buttonPress() {
    return this.click('@bcCheckListOnMenu');
  },
  checkHeader() {
     this.expect.element('@bcCheckList').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [bcCheckList],
  elements: {
    bcCheckListOnMenu: { 
      //click intro on the sidebar
      selector: '.nav-checklist' },
      //has the page loaded?
     bcCheckList: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A CheckList is a container that has a header')]" }
  }
};


