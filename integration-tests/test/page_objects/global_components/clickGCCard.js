const clickGCCard = {
  buttonPress() {
    return this.click('@gcCard');
  },
  checkHeader() {
     this.expect.element('@gcCardHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCCard],
  elements: { 
    gcCard: { 
    //click card on the sidebar
      selector: '.nav-card' },
    //has the page loaded
    gcCardHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A card is a container')]"},
  }
};