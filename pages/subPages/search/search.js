// pages/subPages/search/search.js
var tempArr = {
  title: "搜索历史", isVisible: false,data:[]};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowClear: false,                 // 是否显示清空图标
    inputValue: "",                     // 输入框值
    popularData: [                      // 热门搜索数据
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
    historyData: {                      // 历史记录
      title: "搜索历史",
      isVisible: false,
      data: [
        
      ]
    },
    storageHistory: [],                 // 临时储存历史记录的数组
    searchKeyData: {                    // 关键字搜索数据
      data: [        
      ]
    },
    hongKeyData: {                      // 关键字为"红"的数据
      value: "红",
      data: [
        {
          title: "小米5X 红色版"
        },
        {
          title: "红米5 16GB"
        },
        {
          title: "红米5 Plus"
        },
        {
          title: "红米5A"
        },
        {
          title: "红米Note 5A 移动4G+"
        },
        {
          title: "红米Note 5A 16GB"
        },
        {
          title: "红米Note 5A"
        },
        {
          title: "红米Note 4X"
        },
        {
          title: "红米Note 4X 64GB"
        },
        {
          title: "红米Note 4X"
        }
      ]
    },
    hmKeyData: {                        // 关键字为"红米"的数据
      value: "红米",
      data: [
        {
          title: "红米5 16GB"
        },
        {
          title: "红米5 Plus"
        },
        {
          title: "红米5A"
        },
        {
          title: "红米Note 5A 移动4G+"
        },
        {
          title: "红米Note 5A 16GB"
        },
        {
          title: "红米Note 5A"
        },
        {
          title: "红米Note 4X"
        },
        {
          title: "红米Note 4X 64GB"
        },
        {
          title: "红米4X 64GB"
        }
      ]
    },
    isShowSearchKey: false,             // 是否显示关键字搜索结果展示区
    searchRetData: [                    // 搜索返回结果
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」千元全面屏 / 超长续航 / 前置柔光自拍 / 骁龙处理器",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      },
      {
        imgSrc: "../../../images/searchResult/hm5.jpg",
        name: "红米5 3GB+32GB",
        brief: "「小米年货节！赠小米活塞耳机，加送米粉卡，可享小米分期6期免息」",
        price: 899
      }
    ],
    isShowRetData: false                // 是否显示返回数据结果展示区
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
    let value = e.detail.value;
    let data = this.data;
    // 当值不为空时，显示清空图标，否则不显示清空图标
      switch ( value ) {
        case "红":                           // 关键字为"红"
            this.setData({
              searchKeyData: data.hongKeyData,
              isShowSearchKey: true,
              isShowClear: true,
              inputValue: value,
              isShowRetData: false
            });
            break;
        case "红米":                           // 关键字为"红米"
            this.setData({
              searchKeyData: data.hmKeyData,
              isShowSearchKey: true,
              isShowClear: true,
              inputValue: value,
              isShowRetData: false
            })
            break;
        case "":                              // 数据为空时
          this.setData({
            isShowClear: false,
            inputValue: value,
            searchKeyData: {
              data: []
            },
            isShowSearchKey: false,
            isShowRetData: false
          });
          break;
        default:                              // 默认情况下
            this.setData({
              searchKeyData: {
                data: []
              },
              isShowSearchKey: false,
              isShowClear: true,
              inputValue: value,
              isShowRetData: false
            })
            break;
      }
  },
  // 清除输入框内容
  _clearContent: function () {
    this.setData({
      inputValue: "",
      isShowSearchKey: false,
      isShowRetData: false
    });
  },
  // 发送搜索请求，并存储缓存
  _sendSearchReq: function () {
    try {
      // 获取输入的数据
      let value = this.data.inputValue;
      let that = this;
      if ( value ) {
        // 插入到临时数组的第一行
        tempArr.data.unshift({ "title": value });
        tempArr.isVisible = true;
        // 替换数据
        this.setData({
          historyData: tempArr
        })
        // 存放缓存数据
        wx.setStorageSync('_history_search', tempArr.data);
        // 当发送的记录为"红米"时
        if ( value == "红米" ) {
          wx.showLoading({
            title: '正在获取数据',
            mask: true
          })
          setTimeout(function () {
            wx.hideLoading();
            that.setData({
              isShowRetData: true,
              isShowSearchKey: false
            });
          }, 1500);
        }
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