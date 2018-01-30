// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [                              // 顶部导航数据
      {
        title: "新品预约",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/news.png"
      },
      {
        title: "线下门店",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/offline.png"
      },
      {
        title: "活动订阅",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/action.png"
      },
      {
        title: "小米团购",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/group.png"
      }
    ],
    discoveryData: [                        // 当前呈现内容数据区
      {
        id: 3010101,
        title: "50元红包等你划分",
        typeTitle: "年货节",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/new_year_bonus.png"
      },
      {
        id: 3010102,
        title: '"小米手机"公众号，领红包',
        typeTitle: "关注",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/xm_subscription.png"
      },
      {
        id: 3010103,
        title: "2017,小米年!",
        typeTitle: "专题",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/2017.png"
      },
      {
        id: 3010104,
        title: "小米2017感恩季",
        typeTitle: "活动",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/giving_2017.png"
      },
      {
        id: 3010105,
        title: "12月7日 红米新品发布",
        typeTitle: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/hm_5_plus.png"
      },
      
    ],
    loadingData: [                          // 需要呈现的内容数据区
      {
        id: 3010106,
        title: "买手环2,送橙色腕带，限量哦！",
        typeTitle: "专享福利",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/mi_band_2.png"
      },
      {
        id: 3010107,
        title: "红米5A 浅蓝色新版本 现货在售",
        typeTitle: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/hm_5a.png"
      },
      {
        id: 3010108,
        title: "小米Note 3 4GB+64GB",
        typeTitle: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/xm_note3.png"
      },
      {
        id: 3010109,
        title: "寒潮来袭 如何才能温暖这个冬天？",
        typeTitle: "专题",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/winter.png"
      },
      {
        id: 3010110,
        title: "空气净化器2S，经典再升级",
        typeTitle: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/air_cleaner_2s.png"
      },
      {
        id: 3010111,
        title: "小米11.11 返场特惠",
        typeTitle: "活动",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/discovery/11-11.png"
      }
    ],
    contentHeight: 0,                       // 内容区的高度
    isInsertData: true                      // 是否可以插入数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var query = wx.createSelectorQuery();
    var that = this;
    query.selectAll('.section').boundingClientRect(function (rect) {

    }).exec(function ( res ) {
      var data = res[0];
      var temp = 0;
      for ( var i = 0, len = data.length; i < len; i++ ) {
        console.log(data[i].height);
        temp += data[i].height;
      }
      that.setData({
        contentHeight: temp
      });
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
   * page滚动事件
   * :懒加载数据
   */
  onPageScroll: function ( e ) {
    // 获取滚动条距离顶部的位置
    var scrollTop = e.scrollTop;
    // 局部变量
    var data = this.data;
    // 当滚动条的距离顶部的位置大于等于数据内容区的2分之一且允许插入数据时，插入数据
    if (data.isInsertData && e.scrollTop >= (data.contentHeight / 2)) {
      // 临时数组
      var temp = new Array();
      // 获取当前数据
      var discoveryData = data.discoveryData;
      // 获取懒加载的数据
      var loadingData = data.loadingData;
      // 连接当前数据数组，将值赋予临时数组
      temp = discoveryData.concat( loadingData );
      // 设置属性
      this.setData({
        isInsertData: false,
        discoveryData: temp
      });
    }
    
  }
})