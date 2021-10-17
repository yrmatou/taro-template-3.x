export default {
  pages: [
    'pages/index/index',
    'pages/pub/index',
    'pages/mine/index'
  ],
  window: {
    navigationStyle: 'custom'
  },
  tabBar: {
    custom: true,
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: "black",
    list: [{
      pagePath: "pages/index/index",
      iconPath: "assets/images/tab-bar/index.png",
      selectedIconPath: "assets/images/tab-bar/index-active.png",
      text: "首页"
    }, {
      pagePath: "pages/pub/index",
      iconPath: "assets/images/tab-bar/pub-active.png",
      selectedIconPath: "assets/images/tab-bar/pub-active.png",
      text: "发布"
    }, {
      pagePath: "pages/mine/index",
      iconPath: "assets/images/tab-bar/mine.png",
      selectedIconPath: "assets/images/tab-bar/mine-active.png",
      text: "我的"
    }]
  }
}
