// components/productSection/productSection.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        title: "已选",
        desc: "小米5X 4GB+32GB 金色",
        num: 1
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
