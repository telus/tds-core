const clickLists = {
  buttonPress() {
    return this.click('@feLists');
  },
  checkHeader() {
     this.expect.element('@feListsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickLists],
  elements: { 
    //click lists on the sidebar
    feLists: { 
      selector: '.nav-lists' },
      //has the page loaded?
    feListsHeader: { 
      locateStrategy: 'xpath',
      selector: "//li[contains (text (), 'Try to keep lists consistent')]"},
  }
};