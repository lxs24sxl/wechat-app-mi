// pages/subPages/search/search.js
var tempArr = {
  title: "搜索历史", isVisible: false,data:[]};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowClear: false,
    inputValue: "",
    popularData: [
      {
        title: "红米5 新品"
      },
      {
        title: "电视32英寸"
      },
      {
        title: "净水器厨下"
      },
      {
        title: "小米MIX 2"
      },
      {
        title: "小米笔记本Pro"
      }
    ],
    historyData: {
      title: "搜索历史",
      isVisible: false,
      data: [
        
      ]
    },
    storageHistory: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载完的时候，发送请求返回缓存数据
    try {
      // 获得缓存值(数组)
      var value = wx.getStorageSync('_history_search');
      // 当值存在时
        var valLen = value.length;
        // 但缓存值为数组且长度不等于之前的长度时
        if ( valLen && valLen != this.data.historyData.data.length) {
          // 初始化数组
          tempArr.data = [];
          // 显示历史记录盒子
          tempArr.isVisible = true;
          // 遍历 存放缓存数据
          for (var i = 0; i < valLen; i++ ) {
            tempArr.data.push(value[i]);
          }
          // 替换数据
          this.setData({
            historyData: tempArr
          }); 
        }
      } catch ( e ) {
      }
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
  // 输入绑定事件
  _beingInput: function ( e ) {
    var value = e.detail.value;
    // 当值不为空时，显示清空图标，否则不显示清空图标
    if (value != "" ) {
      this.setData({
        isShowClear: true,
        inputValue: value
      });
    } else {
      this.setData({
        isShowClear: false,
        inputValue: value
      });
    }
  },
  // 清除输入框内容
  _clearContent: function () {
    this.setData({
      inputValue: ""
    });
  },
  // 发送搜索请求，并存储缓存
  _sendSearchReq: function () {
    try {
      // 获取输入的数据
      var value = this.data.inputValue;
      if ( value ) {
        // 插入到临时数组的第一行
        tempArr.data.unshift({ "title": value });
        tempArr.isVisible = true;
        // 替换数据
        this.setData({
          historyData: tempArr
        })
        // 存放缓存数据
        wx.setStorageSync('_history_search', tempArr.data)
      }
    } catch (e) {
    }
  },
  _clearHistory: function () {
    try {
      // 清空历史
      wx.removeStorageSync('_history_search');
      // 清空数组数据
      tempArr.data = [];
      // 隐藏历史记录盒子
      tempArr.isVisible = false;
      // 替换数据
      this.setData({
        historyData: tempArr
      });
    } catch (e) {
      // Do something when catch error
    }
  },
  _sendPopData: function ( e ) {
    let value = e.currentTarget.dataset.title;
    this.setData({
      inputValue: value
    });
    this._sendSearchReq();
  }
})