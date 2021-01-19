// pages/user/index.js
import Dialog from '@vant/weapp/dialog/dialog';

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  toAddress() {
    wx.navigateTo({
      url: "./address/index"
    })
  },

  toOrder() {
    wx.navigateTo({
      url: "./order/index"
    })
  },

  aboutUs: function () {
    // Dialog.alert({
    //   message: '弹窗内容',
    //   theme: 'round-button',
    // }).then(() => {
    //   // on close
    // });
	  wx.showModal({
		  title: '关于我们',
		  content: '这是一个商城小程序',
		  showCancel: false
	  })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (!app.globalData.userInfo) {
      wx.navigateTo({
        url: "./authorize/index"
      })
    } else {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }
  }
})