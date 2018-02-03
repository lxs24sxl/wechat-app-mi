// components/promotions/promotions.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        title: "促销",
        typeTitle: "赠品",
        desc: "无限流量米粉卡 含100元话费"
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
