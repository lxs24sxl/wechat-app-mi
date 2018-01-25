// components/cellListBox/cellListBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        id: 3010101,
        title: "50元红包等你划分",
        typeTitle: "年货节",
        imgSrc: "../../images/discovery/new_year_bonus.png"
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
    isVisible: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready: function () {
    this.setData({
      isVisible: "is-visible"
    });
  }
})
