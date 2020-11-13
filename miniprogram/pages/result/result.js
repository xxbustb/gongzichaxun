// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    accumulation_fund: null,
    adding_insurance: null,
    adjustment: null,
    after_tax: null,
    age_wage: null,
    award:null,
    before_tax:null,
    degree: null,
    department: null,
    dormitory: null,
    duty: null,
    endowment_insurance: null,
    festival: null,
    housing: null,
    large_medical:null,
    maternity: null,
    medical_insurance: null,
    username: '',
    nursery: null,
    one_child: null,
    performance_wage: null,
    personal_tax: null,
    post: null,
    post_wage:null,
    rate: null,
    secrecy: null,
    subsidy: null,
    supplementary_pension: null,
    tenement: null,
    traffic: null,
    unemployment_insurance: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.IDnum,options.time)
      const db = wx.cloud.database()
      const result=db.collection(options.time).where(
        {
          IDnum:"'"+options.IDnum
        }
      ).get(
        {
          success: function(res) {
            // res.data 包含该记录的数据
            //console.log(res.data.length)
            console.log(res.data[0].name)
            this.accumulation_fund=res.data[0].accumulation_fund
            this.adding_insurance=res.data[0].adding_insurance
            this.adjustment=res.data[0].adjustment
            this.after_tax=res.data[0].after_tax
            
            this.age_wage=res.data[0].age_wage
            this.award=res.data[0].award
            this.before_tax=res.data[0].before_tax
            this.degree=res.data[0].degree
            this.department=res.data[0].department

            this.dormitory=res.data[0].dormitory
            this.duty=res.data[0].duty
            this.endowment_insurance=res.data[0].endowment_insurance
            this.festival=res.data[0].festival
            this.housing=res.data[0].housing
            this.large_medical=res.data[0].large_medical

            this.maternity=res.data[0].maternity
            this.medical_insurance=res.data[0].medical_insurance
            this.username=res.data[0].name
            this.nursery=res.data[0].nursery
            this.one_child=res.data[0].one_child
            this.performance_wage=res.data[0].performance_wage

            this.personal_tax=res.data[0].personal_tax
            this.post=res.data[0].post
            this.post_wage=res.data[0].post_wage
            this.rate=res.data[0].rate
            this.secrecy=res.data[0].secrecy
            this.subsidy=res.data[0].subsidy
            this.supplementary_pension=res.data[0].supplementary_pension
            this.subsidy=res.data[0].subsidy
            this.tenement=res.data[0].tenement
            this.traffic=res.data[0].traffic
            this.unemployment_insurance=res.data[0].unemployment_insurance

            //console.log('000')
            //console.log(this.after_tax)


           

            
          },fail: function(){
            wx.showToast({
              icon: 'none',
              title: '查询错误'
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