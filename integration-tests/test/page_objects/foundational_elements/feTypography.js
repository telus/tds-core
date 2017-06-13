const feTypography = {
  buttonPress() {
    return this.click('@feTypography');
  },
  checkHeader() {
     this.expect.element('@feTypographyHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [feTypography],
  elements: { 
    feTypography: {  
    //click typography on the sidebar
      selector: '.nav-typography' },
   //find the typography header element 
    feTypographyHeader: { 
      locateStrategy: 'xpath',
      selector: "//p[contains (text (), 'It’s designed with precision')]"},
    }
  };