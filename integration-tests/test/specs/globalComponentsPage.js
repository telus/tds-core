module.exports = {
  '@tags': ['globalComponents'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  globalComponents(client) {
    const clickGCCard = client.page.global_components.clickGCCard();
    const clickGCCollapsible = client.page.global_components.clickGCCollapsible();
    const clickGCNotification = client.page.global_components.clickGCNotification();
    const clickGCGrid = client.page.global_components.clickGCGrid();
    const clickGCIcon = client.page.global_components.clickGCIcon();
    const clickGCSelectorCounter = client.page.global_components.clickGCSelectorCounter();

  clickGCCard.navigate().buttonPress();
  clickGCCard.checkHeader();
  clickGCCollapsible.navigate().buttonPress();
  clickGCCollapsible.checkHeader();
  clickGCNotification.navigate().buttonPress();
  clickGCNotification.checkHeader();
  clickGCGrid.navigate().buttonPress();
  clickGCGrid.checkHeader();
  clickGCIcon.navigate().buttonPress();
  clickGCIcon.checkHeader();
  clickGCSelectorCounter.navigate().buttonPress();
  clickGCSelectorCounter.checkHeader();
  },
 after(client) {
   client.end();
 }
};
