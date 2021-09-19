export default {
  pages: [
    'pages/category/index',
    'pages/index/index',
    'pages/cart/index',
    'pages/profile/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
    {
      'iconPath': 'resource/icons/home.png',
      'selectedIconPath': 'resource/icons/home_selected.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'resource/icons/anki.png',
      'selectedIconPath': 'resource/icons/anki_selected.png',
      pagePath: 'pages/category/index',
      text: '分类'
    }, {
      'iconPath': 'resource/icons/statistics.png',
      'selectedIconPath': 'resource/icons/statistics_selected.png',
      pagePath: 'pages/cart/index',
      text: '购物车'
    }, {
      'iconPath': 'resource/icons/profile.png',
      'selectedIconPath': 'resource/icons/profile_selected.png',
      pagePath: 'pages/profile/index',
      text: '我的'
    }],
    'color': '#717172',
    'selectedColor': '#353436',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  }
}
