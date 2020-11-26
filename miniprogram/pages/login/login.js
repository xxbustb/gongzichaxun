//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username: '',
    password: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  login: function (options) {  
    //console.log(this.data.username)
    //console.log(this.data.password)
    var name=this.data.username
    var password=this.data.password
     // 查询当前用户所有的 counters
    if(this.data.username.length == 0 || this.data.password.length == 0){
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    }else{
      //console.log(this.data.username.slice(2))
      const db = wx.cloud.database()
      const result=db.collection('usernameAndPassword').where(
        {
          IDnum:"'"+name
        }
      ).get({
        success: function(res) {
          // res.data 包含该记录的数据
          //console.log(res.data.length)
          console.log(res.data)
          if(res.data.length==0){
            wx.showToast({
              icon: 'none',
              title: '账号错误'
            })
          }
          console.log(password)
 
          console.log(res.data[0].IDnum.slice(13))
 
          
 
          if(res.data[0].password=="'"+password){
 
            if(password==res.data[0].IDnum.slice(13)){
 
              wx.navigateTo({
 
                url: '../../pages/change_password/change_password?IDnum='+name+'&password='+password,//要跳转到的页面路径
 
        })
 
            }else{
 
              wx.navigateTo({
 
                url: '../../pages/time/time?IDnum='+name,//要跳转到的页面路径
 
        })
 
            }
 
            
 
          }else{
            wx.showToast({
              icon: 'none',
              title: '密码错误'
            })
          }
        },fail: function(){
          wx.showToast({
            icon: 'none',
            title: '账号错误'
          })
        }
      })
    }   
 },

 forget:function(){
  wx.showModal({
      title: '提示',
      showCancel: false,
      content: '请联系管理员修改密码！',
  })
}
 
})
 