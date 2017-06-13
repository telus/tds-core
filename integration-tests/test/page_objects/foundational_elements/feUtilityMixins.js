const clickUtilityMixins = {
  buttonPress() {
    return this.click('@feUtilityMixins');
  },
  checkHeader() {
     this.expect.element('@feUtilityMixinsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickUtilityMixins],
  elements: { 
    feUtilityMixins: { 
    //click utility mixins
      selector: '.nav-utility-mixins' },
    //has the page loaded?
    feUtilityMixinsHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'TDS SCSS files')]"},
  }
};