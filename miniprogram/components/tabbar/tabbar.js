// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [
      {
        "pagePath": "../../pages/time/time",
        "text": "查询",
        "iconPath": "../../images/query.png" // 因为子页面点击图标的不需要变化，因为直接跳转到首页了
      },
      {
        "pagePath": "../../pages/mine/mine",
        "text": "我的",
        "iconPath": "../../images/mine.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail: function (e) {
      var pages = getCurrentPages()    //获取加载的页面
      var currentPage = pages[pages.length-1]    //获取当前页面的对象
      var url1 = currentPage.route    //当前页面url
      if ('../../'+url1 != e.currentTarget.dataset.url){
        wx.reLaunch({ // 关闭所有打开过的页面，跳转到相对于的页面
          url: e.currentTarget.dataset.url  // 获取tabbar.wxml中data-url传递的参数
        })
      }
    }
  }
})

