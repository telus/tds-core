module.exports = {
  '@tags': ['blockComponentPages'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  blockComponentPages(client) {
    const bcIntroduction = client.page.block_components.bcIntroduction();
    const bcCheckList = client.page.block_components.bcCheckList();
    const bcTextTitleBodyButton = client.page.block_components.bcTextTitleBodyButton();
    
    bcIntroduction.navigate().buttonPress();
    bcIntroduction.checkHeader();
    bcCheckList.navigate().buttonPress();
    bcCheckList.checkHeader();
    bcTextTitleBodyButton.navigate().buttonPress();
    bcTextTitleBodyButton.checkHeader();
  },
   after(client) {
   client.end();
 }
};
