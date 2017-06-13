const clickSettingUpProjects = {
  buttonPress() {
    return this.click('@useTDSSettingUpProjects');
  },
  checkHeader() {
     this.expect.element('@settingUpProjectsHeader').to.be.visible.before(1000);
  },
};

module.exports = {
    url() {
    return this.api.launch_url;
  },

  commands: [clickSettingUpProjects],
  elements: { 
    useTDSSettingUpProjects: { 
      selector: '.nav-setting-up-projects' },
    settingUpProjectsHeader: { selector: '.content>h1'},
  }
};