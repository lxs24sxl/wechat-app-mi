// pages/subPages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 0,
    navData: [
      {
        title: "未使用",
        initData: {
          imgSrc: "../../images/common/coupon.png",
          backgroundColor: "#d4d4d4",
          title: "您没有 未使用 的优惠券",
          btnTitle: "到小米商城逛逛",
          isShowBtn: false,
          isSmallImg: true,
          isSmallBtn: true,
        },
      },
      {
        title: "已使用/已过期",
        initData: {
          imgSrc: "../../images/common/coupon.png",
          backgroundColor: "#d4d4d4",
          title: "您没有 已使用/已过期 的优惠券",
          btnTitle: "到小米商城逛逛",
          isShowBtn: false,
          isSmallImg: true,
          isSmallBtn: true,
        },
      }
    ]
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
  /**
   * 改变菜单
   */
  _changeNav: function ( e ) {
    this.setData({
      curNav: e.currentTarget.dataset.num
    });
  }
})