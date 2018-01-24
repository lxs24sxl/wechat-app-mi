// components/cellBox/cellBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        name: "order",
        title: "我的订单",
        imgSrc: "../../images/mine/icon_order.png"
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

  }
})
