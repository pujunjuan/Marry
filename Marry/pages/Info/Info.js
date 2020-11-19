// pages/Info/Info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['1','2','3','4','5','6'],
    index:"0",
    sava:[]

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindnName:function(e){
    console.log(e.detail.value);
    var name = e.detail.value;
    //中英文姓名验证(没有长度限制，考虑到少数名族和外国人名字很长)
    if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(name))) {
      wx.showToast({
        title: '姓名有误',
        duration: 2000,
        icon: "none"
      });
    }

  },
  bindPhone:function(e){
    var phone = e.detail.value;
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
      wx.showToast({

        title: '手机号码有误',

        duration: 2000,

        icon: 'none'
      });
    }
  },
  successInfo:function(e){
    e.detail.value.num =this.data.array[parseInt(e.detail.value.num)];
    console.log(e.detail.value);
    if(e.detail.value.name==""){
      wx.showToast({
        title: '不能为空',
        duration: 2000,
        icon: 'none'
      });
    }else{
  wx.showToast({
    title: '成功',
    duration: 2000,
    icon: true
  });
    }
   
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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