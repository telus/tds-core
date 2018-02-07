const baseUrl = process.env.BASE_URL || 'http://localhost:6060'

module.exports = {
  url: `${baseUrl}/`,
  elements: {
    root: {
      selector: 'div[id="app"]',
    },
    title: {
      selector: 'h1',
    },
  },
}
