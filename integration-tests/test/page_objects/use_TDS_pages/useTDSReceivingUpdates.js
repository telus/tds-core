const clickReceivingUpdates = {
  buttonPress() {
    return this.click('@useTDSReceivingUpdates');
  },
  checkHeader() {
     this.expect.element('@receivingUpdatesHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickReceivingUpdates],
  elements: { 
    useTDSReceivingUpdates: { 
      selector: '.nav-receiving-updates' },
    receivingUpdatesHeader: { selector: '.content>h1'},
  }
};