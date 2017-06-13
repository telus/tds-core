module.exports = {
  beforeEach(browser, done) {
    require('nightwatch-video-recorder').start(browser, done);
   //before : function (browser) {
    //browser.resizeWindow(1280, 800);
  },
  afterEach(browser, done) {
    require('nightwatch-video-recorder').stop(browser, done);  
  //after : function (browser) {
    //browser.end();
  },
};
