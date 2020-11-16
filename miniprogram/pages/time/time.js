//const util = require('../../utils/util.js')
var util = require('../utils/util');
Page({
  data: {
      date:util.formatTime(new Date()),
      IDnum:'',
      time:'',
      hiddenLoading: true
  },
  onLoad: function (option) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    this.data.IDnum=option.IDnum
    
  },
  
  // 时间段选择  
  bindDateChange(e) {
    let that = this;
    
    that.setData({
      date: e.detail.value,
    })
    this.data.time=e.detail.value
  },
  query: function () {
    var IDnum=this.data.IDnum
    var time=this.data.time
    var hiddenLoading=this.data.hiddenLoading
    var that=this
    const db = wx.cloud.database()
    const result=db.collection(time).where(
      {
        IDnum:"'"+IDnum
      }
    ).get(
      {
        success: function(res) {
            if(res.data.length==0){
              wx.showToast({
                icon: 'none',
                title: '无记录'
              })
            }else{ 
            that.setData({
              hiddenLoading:!hiddenLoading
            })
            wx.navigateTo({
                url: '../../pages/result/result?IDnum='+IDnum+'&time='+time, //要跳转到的页面路径
            })
          }
        },fail: function(){
          wx.showToast({
            icon: 'none',
            title: '查询失败'
          })
        }
      }
    )
  },
  onShow: function () {
    let that = this;
    that.setData({
      hiddenLoading:true
    })
  }
}
)