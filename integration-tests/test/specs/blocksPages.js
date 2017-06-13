module.exports = {
  '@tags': ['blocks'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  blocksPages(client) {
    const blocksIntroduction = client.page.blocks_pages.blocksIntroduction();
    const blocksOverviewBlock = client.page.blocks_pages.blocksOverviewBlock();
    const blocksHeadlineBlock = client.page.blocks_pages.blocksHeadlineBlock();
    const blocksTitledTextBlock = client.page.blocks_pages.blocksTitledTextBlock();
    const blocksVideoBlock = client.page.blocks_pages.blocksVideoBlock();
    
    blocksIntroduction.navigate().buttonPress();
    blocksIntroduction.checkHeader();
    blocksOverviewBlock.navigate().buttonPress();
    blocksOverviewBlock.checkHeader();
    blocksHeadlineBlock.navigate().buttonPress();
    blocksHeadlineBlock.checkHeader();
    blocksTitledTextBlock.navigate().buttonPress();
    blocksTitledTextBlock.checkHeader();
    blocksVideoBlock.navigate().buttonPress();
    blocksVideoBlock.checkHeader();
  },
   after(client) {
   client.end();
 }
};
