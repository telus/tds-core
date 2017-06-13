const clickDesignVision = {
  buttonPress() {
    return this.click('@aboutDesignVisionOnMenu');
  },
    checkHeader() {
     this.expect.element('@designHeader').to.be.visible.before(1000);
  } 
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickDesignVision],
  elements: {
    aboutDesignVisionOnMenu: {
      //click design vision on sidebar
      selector: '.nav-design-vision' },
      //has the page loaded?
    designHeader: {
      locateStrategy: 'xpath',
      selector: "//strong[contains (text (), 'Create clear and simple designs')]"}
}
};