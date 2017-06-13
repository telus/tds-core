module.exports = {
  '@tags': ['useTDSPages'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  use_TDS_pages(client) {
    const useTDSGettingStarted = client.page.use_TDS_pages.useTDSGettingStarted();  
    const useTDSSettingUpProjects = client.page.use_TDS_pages.useTDSSettingUpProjects();
    const useTDSReceivingUpdates = client.page.use_TDS_pages.useTDSReceivingUpdates();
    const useTDSContributing = client.page.use_TDS_pages.useTDSContributing();
    const useTDSDownloads = client.page.use_TDS_pages.useTDSDownloads();

  useTDSGettingStarted.navigate().buttonPress();
  useTDSGettingStarted.checkHeader();
  useTDSSettingUpProjects.navigate().buttonPress();
  useTDSSettingUpProjects.checkHeader();
  useTDSReceivingUpdates.navigate().buttonPress();
  useTDSReceivingUpdates.checkHeader();
  useTDSContributing.navigate().buttonPress();
  useTDSContributing.checkHeader();
  useTDSContributing.clickCreateAnIssue();
  client.back();
  useTDSDownloads.navigate().buttonPress();
  useTDSDownloads.checkHeader();
  },
 after(client) {
   client.end();
 }
};
