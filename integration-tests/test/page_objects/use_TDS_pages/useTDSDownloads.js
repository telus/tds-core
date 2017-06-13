const clickDownloads = {
  buttonPress() {
    return this.click('@useTDSDownloads');
  },
  checkHeader() {
     this.expect.element('@downloadsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickDownloads],
  elements: { 
    useTDSDownloads: { 
      selector: '.nav-downloads' },
    downloadsHeader: { selector: '.content>h1'},
  }
};