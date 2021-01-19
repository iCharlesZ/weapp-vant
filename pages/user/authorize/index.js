const app = getApp()

Page({
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    wx.navigateBack();
  }
})