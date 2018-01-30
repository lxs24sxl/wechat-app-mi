// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cellData: {
      user: {
        name: "user",
        title: "用户",
        childData: [
          {
            name: "order",
            title: "我的订单",
            imgSrc: "../../images/mine/icon_order.png"
          },
          {
            name: "coupon",
            title: "我的优惠券",
            imgSrc: "../../images/mine/icon_coupon.png"
          },
          {
            name: "fcode",
            title: "我的f码",
            imgSrc: "../../images/mine/icon_fcode.png"
          }
        ]
      },
      setting: {
        name: "setting",
        title: "设置",
        childData: [
          {
            name: "setting",
            title: "我的订单",
            imgSrc: "../../images/mine/icon_setting.png"
          }
        ]
      }
    },
    userInfo: null,
    qrcodeSrc: "../../images/common/qrcode.png",
    micode: 918473906
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
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