// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    department: "",
    username: "",
    post: "",
    IDnum: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.IDnum)
    var that=this
    const db = wx.cloud.database()
    const result=db.collection(options.time).where(
      {
        IDnum:"'"+options.IDnum
      }
    ).get(
      {
        success: function(res) {
          // res.data 包含该记录的数据
          that.setData({
          account:res.data[0].account,
          department:res.data[0].department,
          username:res.data[0].name,
          post:res.data[0].post,
          time:options.time,
          IDnum: res.data[0].IDnum
          })
      },fail: function(){
        wx.showToast({
          icon: 'none',
          title: '查询错误'
        })
        wx.navigateTo({
          url: '../../pages/mine/mine' //要跳转到的页面路径
      })
      }
    }
  )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})