module.exports = {
  '@tags': ['about'], 
    before : function (browser) {
    browser.resizeWindow(1280, 800);
  },
  about_pages(client) {
    const aboutOverview = client.page.about_pages.aboutOverview();
    const aboutDesignVision = client.page.about_pages.aboutDesignVision();
    const aboutRoadmap = client.page.about_pages.aboutRoadmap();
    const aboutChangelog = client.page.about_pages.aboutChangelog();
    
    aboutOverview.navigate().buttonPress();
    aboutOverview.checkHeader();
    aboutOverview.jestFirstLink();
    aboutOverview.jestLoaded();
    client.back();
    aboutOverview.enzymeSecondLink();
    aboutOverview.enzymeLoaded();
    client.back();
    aboutOverview.npmThirdLink();
    aboutOverview.npmLoaded();

    aboutDesignVision.navigate().buttonPress();
    aboutDesignVision.checkHeader();

    aboutRoadmap.navigate().buttonPress();
    aboutRoadmap.checkHeader();
    aboutRoadmap.checkListOfUsers();
    client.back();

    aboutChangelog.navigate().buttonPress();
    aboutChangelog.checkHeader();
  },
  after(client) {
   client.end();
 }
};
