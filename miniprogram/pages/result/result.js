Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    accumulation_fund: "",
    adding_insurance: "",
    adjustment: "",
    after_tax:'',
    age_wage: "",
    award:"",
    before_tax:"",
    degree: "",
    department: "",
    dormitory: "",
    duty: "",
    endowment_insurance: "",
    festival: "",
    housing: "",
    large_medical:"",
    maternity: "",
    medical_insurance: "",
    username: "",
    nursery: "",
    one_child: "",
    performance_wage: "",
    personal_tax: "",
    post: "",
    post_wage:"",
    rate: "",
    secrecy: "",
    subsidy: "",
    supplementary_pension: "",
    tenement: "",
    traffic: "",
    unemployment_insurance: "",
    time:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.IDnum,options.time)
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
          console.log(res.data.length)
          console.log(res.data[0].name)
          that.setData({
          after_tax:res.data[0].after_tax,
          accumulation_fund:res.data[0].accumulation_fund,
          adding_insurance:res.data[0].adding_insurance,
          adjustment:res.data[0].adjustment,
          after_tax:res.data[0].after_tax,
          age_wage:res.data[0].age_wage,
          award:res.data[0].award,
          before_tax:res.data[0].before_tax,
          degree:res.data[0].degree,
          department:res.data[0].department,
          dormitory:res.data[0].dormitory,
          duty:res.data[0].duty,
          endowment_insurance:res.data[0].endowment_insurance,
          festival:res.data[0].festival,
          housing:res.data[0].housing,
          large_medical:res.data[0].large_medical,
          maternity:res.data[0].maternity,
          medical_insurance:res.data[0].medical_insurance,
          username:res.data[0].name,
          nursery:res.data[0].nursery,
          one_child:res.data[0].one_child,
          performance_wage:res.data[0].performance_wage,
          personal_tax:res.data[0].personal_tax,
          post:res.data[0].post,
          post_wage:res.data[0].post_wage,
          rate:res.data[0].rate,
          secrecy:res.data[0].secrecy,
          subsidy:res.data[0].subsidy,
          supplementary_pension:res.data[0].supplementary_pension,
          subsidy:res.data[0].subsidy,
          tenement:res.data[0].tenement,
          traffic:res.data[0].traffic,
          unemployment_insurance:res.data[0].unemployment_insurance,
          time:options.time
          })
      },fail: function(){
        wx.showToast({
          icon: 'none',
          title: '查询错误'
        })
        wx.navigateTo({
          url: '../../pages/time/time' //要跳转到的页面路径
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