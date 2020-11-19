Page({

  /**
   * 页面的初始数据
   */
  data: {
    men:"易鑫 ",
    women:"蒲俊娟 ",
    time:"2020年5月二十日 ",
    address:" 湖南长沙岳麓区XXX酒店",
    http:''
    
  },
  player: '',
  isPlay: true,
  playmusic: function () {
    if(this.isPlay){
      this.player.pause();
      this.isPlay = false;
    }
    else{
      this.player.play();
      this.isPlay = true;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
that.player = wx.getBackgroundAudioManager();
that.player.title="hhhahha";
  that.player.src ="http://127.0.0.1:8080/weixinDemo/music.mp3";

    wx.request({
      url: 'http://127.0.0.1:8080/weixinDemo/user.json',
      success(result){
        console.log(result);
        that.setData({
          men:result.data.BOY,
          women:result.data.girl,
          time:result.data.Time,
          address:result.data.Address,
          http:result.data.http
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