// index.js
import Toast from '@vant/weapp/toast/toast';
// 获取应用实例
const app = getApp()

Page({
  data: {
    searchVal: '',
    imgUrls: [
      { url: '/image/iPhone12Pro.jpg' },
      { url: '/image/macbook_air.jpg' }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    isSignin: false
  },

  signin() {
    if (!this.data.isSignin) {
      Toast.success('签到成功！');
      this.setData({ isSignin: true })
    } else {
      Toast.fail('您已经签到过');
    }
  },

  hotCommodity() {
    wx.navigateTo({
      url: "../detail/index"
    })
  },

  goDetail() {
    wx.navigateTo({
      url: "../detail/index"
    })
  },

  onLoad() {

  }
})
