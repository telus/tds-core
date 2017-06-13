module.exports = {
  '@tags': ['foundationalElements'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  foundational_elements(client) {
    const feButtons = client.page.foundational_elements.feButtons();
    const feColour = client.page.foundational_elements.feColour();
    const feForms = client.page.foundational_elements.feForms();
    const feGrid = client.page.foundational_elements.feGrid();
    const feLists = client.page.foundational_elements.feLists();
    const feTypography = client.page.foundational_elements.feTypography();
    const feUtilityIcons = client.page.foundational_elements.feUtilityIcons();
    const feUtilityMixins = client.page.foundational_elements.feUtilityMixins();

  feButtons.navigate().buttonPress();
  feButtons.checkHeader();
  feColour.navigate().buttonPress();
  feColour.checkHeader();
  feForms.navigate().buttonPress();
  feForms.checkHeader();
  feGrid.navigate().buttonPress();
  feGrid.checkHeader();
  feLists.navigate().buttonPress();
  feLists.checkHeader();
  feTypography.navigate().buttonPress();
  feTypography.checkHeader();
  feUtilityIcons.navigate().buttonPress();
  feUtilityIcons.checkHeader();
  feUtilityMixins.navigate().buttonPress();
  feUtilityMixins.checkHeader();
  },
  after(client) {
   client.end();
 }
};
