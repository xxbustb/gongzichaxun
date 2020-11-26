// pages/change_password/change_password.js 
const app=getApp(); 
Page({ 
  
  /** 
   * 页面的初始数据 
   */ 
  data: { 
     IDnum:null, 
     password:null 
  }, 
  onSubmit:function(e){ 
    console.log( e.detail.value) 
    var oldpwd=e.detail.value.oldpwd; 
    var newpwd = e.detail.value.newpwd; 
    var newpwd2 = e.detail.value.newpwd2; 
    var password=this.data.password 
    var name=this.data.IDnum 
    if(oldpwd=='' || newpwd=='' || newpwd2==''){ 
      wx.showToast({ 
        title: '密码不能为空', 
        icon:'none', 
        duration:1000 
      })} 
    else if(password!=oldpwd){ 
      wx.showToast({ 
        title: '原密码不正确', 
        icon:'none', 
        duration:1000 
      }) 
    }else if(newpwd!=newpwd2){ 
      wx.showToast({ 
        title: '两次输入不一致,请重新输入', 
        icon: 'none', 
        duration: 1000 
      }) 
    }else{ 
      wx.cloud.callFunction({ 
        // 云函数名称 
        name: 'update', 
        // 传给云函数的参数 
        data: { 
          IDnum:name, 
          password: newpwd, 
        }, 
        success: function(res) { 
          console.log(res.result)  
          wx.navigateTo({ 
            url: '../../pages/time/time?IDnum='+name,//要跳转到的页面路径 
    }) 
        }, 
        fail: console.error 
      }) 
 
 
    } 
  }, 
  formSubmit:function(e){ 
   // console.log(e); 
    console.log(1111) 
    var oldpwd=e.detail.value.oldpwd; 
    var newpwd = e.detail.value.newpwd; 
    var newpwd2 = e.detail.value.newpwd2; 
    name=this.data.IDnum 
    //onsole.log( this.data.IDnum, this.data.password) 
    //var no = wx.getStorageSync('student').no; 
    // console.log(no); 
    if(oldpwd=='' || newpwd=='' || newpwd2==''){ 
      wx.showToast({ 
        title: '密码不能为空', 
        icon:'none', 
        duration:1000 
      }) 
    }else if(newpwd!=newpwd2){ 
      wx.showToast({ 
        title: '两次输入不一致', 
        icon: 'none', 
        duration: 1000 
      }) 
    }else{ 
      console.log(11111) 
      const cloud = require('wx-server-sdk') 
      cloud.init() 
      const db = cloud.database() 
      const _ = db.command 
       
      exports.main = async (event, context) => { 
       try { 
          return await db.collection('usernameAndPassword').where({ 
           IDnum: "'"+name 
        }) 
    .update({ 
      data: { 
        password:newpwd 
      }, 
    }) 
  } catch(e) { 
    console.error(e) 
  } 
} 
 
    } 
  
  }, 
  /** 
   * 生命周期函数--监听页面加载 
   */ 
  onLoad: function (options) { 
    this.data.IDnum=options.IDnum 
    this.data.password=options.password 
    console.log( this.data.IDnum, this.data.password) 
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