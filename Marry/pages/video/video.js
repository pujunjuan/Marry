// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:[{
      title: "海景实拍",
      create_time: "2020-12-13 12.02.36",
      url: "http://127.0.0.1:8080/weixinDemo/video1.mp4"
    },{
        title: "海景实拍",
        create_time: "2020-12-13 12.02.36",
        url: "http://127.0.0.1:8080/weixinDemo/video2.mp4"
      }, {title: "海景实拍",
        create_time: "2020-12-13 12.02.36",
        url: "http://127.0.0.1:8080/weixinDemo/video3.mp4"}
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8080/weixinDemo/videoInfo.json',
      success(result) {
        var data = result.data;
        console.log(data);
        that.setData({
            video:data  , 
        })
      }
    })

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