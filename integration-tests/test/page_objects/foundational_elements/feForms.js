const clickForms = {
  buttonPress() {
    return this.click('@feForms');
  },
  checkHeader() {
     this.expect.element('@feFormsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickForms],
  elements: { 
    //click forms on the sidebar
    feForms: { 
      selector: '.nav-forms' },
    //has the page loaded?
    feFormsHeader: { 
      locateStrategy: 'xpath',
      selector: "//strong[contains (text (), 'Keep forms as simple as possible')]"},
  }
};