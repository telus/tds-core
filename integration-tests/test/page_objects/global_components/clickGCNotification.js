const clickGCNotification = {
  buttonPress() {
    return this.click('@gcNotification');
  },
  checkHeader() {
     this.expect.element('@gcNotificationHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickGCNotification],
  elements: { 
    gcNotification: { 
    //click notification on sidebar
      selector: '.nav-notification' },
    //has the page loaded
    gcNotificationHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'A reusable notification banner')]"},
  }
};