const blocksVideoBlock = {
   buttonPress() {
    return this.click('@videoBlockOnMenu');
  },
  checkHeader() {
     this.expect.element('@videoBlockHeader').to.be.visible.before(1000);
  }
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [blocksVideoBlock],
  elements: {
    videoBlockOnMenu: { 
    //click video block on sidebar
    selector: '.nav-video-block' },
    //has the page loaded?
    videoBlockHeader: { selector: '#video' }
  }
};


