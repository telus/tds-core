const clickUtilityIcons = {
  buttonPress() {
    return this.click('@feUtilityIcons');
  },
  checkHeader() {
     this.expect.element('@feUtilityIconsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickUtilityIcons],
  elements: { 
    feUtilityIcons: { 
    //click utility icons on the sidebar
      selector: '.nav-utility-icons' },
    //has the page loaded?
    feUtilityIconsHeader: { 
      locateStrategy: 'xpath',
      selector: "//h2[contains (text (), 'Icons')]"},
  }
};