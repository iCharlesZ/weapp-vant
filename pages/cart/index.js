// pages/cart/index.js
import Toast from '@vant/weapp/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartList: [
      { id: '10001', title: 'iPhone 12 Pro', desc: '海蓝色 256G', thumb: '/image/iphone-12-pro-blue-hero.png', price: '9299.00', num: '1' },
      { id: '10002', title: 'MacBook Pro', desc: '13英寸 Apple M1 芯片 8核处理器 512G', thumb: '/image/mbp-spacegray-select-202011.jpg', price: '10699.00', num: '1' },
      { id: '10003', title: 'iPad pro', desc: '12.9 英寸 深空灰色 512G 无线局域网', thumb: '/image/ipad-pro.png', price: '9499.00', num: '1' },
    ],
    result: [],
    isAllSelect: false,
    allPrice: 0
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

  },

  onChange(event) {
    this.setData({
      result: event.detail,
      isAllSelect: event.detail.length === this.data.cartList.length
    });
  },

  noop() {
    let price = 0
    for (let item of this.data.cartList) {
      for (let i of this.data.result) {
        if (i === item.id) {
          price += parseFloat(item.price)
        }
      }
    }
    price *= 100
    this.setData({
      allPrice: price
    });
  },

  allSelect(event) {
    if (event.detail) {
      let arr = []
      let price = 0
      for (let item of this.data.cartList) {
        arr.push(item.id)
      }
      for (let item of this.data.cartList) {
        price += parseFloat(item.price)
      }
      price *= 100
      this.setData({
        result: arr,
        isAllSelect: event.detail,
        allPrice: price
      });
    } else {
      this.setData({
        result: [],
        isAllSelect: event.detail,
        allPrice: 0
      });
    }
  },

  onclick(e) {
    console.log('id:', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "../detail/index"
    })
  },

  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        instance.close();
        let arr = this.data.cartList
        arr.splice(event.currentTarget.dataset.index, 1)
        this.setData({
          cartList: arr,
          isAllSelect: false,
          result: [],
          allPrice: 0
        });
        break;
    }
  },

  onSubmit() {
    if (this.data.result.length !== 0) {
      Toast.success('提交订单成功');
    } else {
      Toast.fail('请先选择商品');
    }
  },

  addAddress() {
    wx.navigateTo({
      url: "../user/address/add"
    })
  }
})