// components/categoryIistBox/categoryListBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        name: "new",
        title: "新品",
        data: [
          {
            name: "phone",
            title: "手机",
            childData: [
              {
                id: 2010101,
                title: "红米5",
                imgSrc: "../../images/b2c-mimall-media/hm5.png"
              },
              {
                id: 2010102,
                title: "红米5 Plus",
                imgSrc: "../../images/b2c-mimall-media/hm5_plus.png"
              },
              {
                id: 2010103,
                title: "小米MIX 2",
                imgSrc: "../../images/b2c-mimall-media/xm_mix2.png"
              },
              {
                id: 2010104,
                title: "小米Note 3",
                imgSrc: "../../images/b2c-mimall-media/xm_note3.png"
              },
              {
                id: 2010105,
                title: "小米6",
                imgSrc: "../../images/b2c-mimall-media/xm6.png"
              },
              {
                id: 2010106,
                title: "小米5X",
                imgSrc: "../../images/b2c-mimall-media/xm_5x.png"
              }
            ]
          },
          {
            name: "tv",
            title: "电视",
            childData: [
              {
                id: 2010201,
                title: "32英寸",
                imgSrc: "../../images/b2c-mimall-media/32yc.png"
              },
              {
                id: 2010202,
                title: "43英寸",
                imgSrc: "../../images/b2c-mimall-media/43yc.png"
              },
              {
                id: 2010203,
                title: "55英寸",
                imgSrc: "../../images/b2c-mimall-media/55yc.png"
              }
            ]
          },
          {
            name: "computer",
            title: "电脑",
            childData: [
              {
                id: 2010301,
                title: "笔记本Pro 15.6",
                imgSrc: "../../images/b2c-mimall-media/bjb_pro_15.6.png"
              },
              {
                id: 2010202,
                title: '笔记本13.3" i7',
                imgSrc: "../../images/b2c-mimall-media/bjb_13.3_i7.png"
              }
            ]
          }
        ]
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
