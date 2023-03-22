// pages/signin/signin.ts
Page({

  /**
   * Page initial data
   */
  data: {
    message: "我有一只拿破仑"
  },
  changeData: function(){
    this.setData({ message: "拿破仑今天不吃饭"});
  },
  getUsername: function(){
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo.nickName)
        that.setData({name: res.userInfo.nickName})
      },
      fail: function (res) {
        console.log("fail", res)
      }
    })
  },

  usrInfo: function() {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo.nickName)
        that.setData({name: res.userInfo.nickName})
      },
      fail: function (res) {
        console.log("fail", res)
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})