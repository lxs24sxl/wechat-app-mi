// components/blankBox/blankBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        imgSrc: "../../images/cart/cc-cart.png",
        backgroundColor: "#d4d4d4",
        title: "购物车还是空的",
        btnTitle: "到小米商城逛逛",
        isShowBtn: true
      },
      observer: function ( newVal, oldVal ) {
        this.setData({
          innerData: newVal
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  /**
    * 返回首页
    */
  toIndex: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
  }
})
