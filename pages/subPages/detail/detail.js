// pages/subPages/detail/detail.js
var data = require('../../../utils/detailData1.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {
      id: 1010101,
      name: "小米5X 4GB+32GB",
      swiperImgurls: [
        "//i8.mifile.cn/v1/a1/2da996b7-4b5d-0b42-917d-fdb27db12dc9!720x792.webp",
        "//i8.mifile.cn/v1/a1/090d6b69-5d8b-2895-85f2-13c22577bede!720x792.webp",
        "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/16c29ae096d0d35eaa8a2139b6ed2bd1.jpg?thumb=1&w=720&h=792",
        "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a5b5500ba1f1a1ed3eade6d83ccd64b4.jpg?thumb=1&w=720&h=792",
        "//i8.mifile.cn/v1/a1/ed954a23-2c30-98ca-4379-86818f95e75e.jpg"
      ],
      desc: "光学变焦双摄，拍人更美 / 5.5''大屏轻薄全金属 / 骁龙八核处理器 / 4GB大内存 ",
      price: "1299",
      promotions: {
        title: "促销",
        typeTitle: "赠品",
        desc: "无限流量米粉卡 含100元话费"
      },
      ptc: {
        title: "已选",
        desc: "小米5X 4GB+32GB 金色",
        num: 1
      },
      view_content: data.data.data.view_content
    },
    curNum: 0,
    tabContent: []
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabContent: this.data.detailData.view_content.descTabsView.descTabsView[0].tabContent
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
  
  },
  /**
   * 导航跳转
   */
  _changeTab: function ( e ) {
    // 导航当前下标
    var num = e.currentTarget.dataset.num;
    // 当前导航下的数据
    var tabContentData = this.data.detailData.view_content.descTabsView.descTabsView[ num ].tabContent;
    // 设置变量
    this.setData({
      curNum: num,
      tabContent: tabContentData  
    });
  }

  
})