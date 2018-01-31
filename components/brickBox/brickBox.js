// components/brickBox/brickBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerObject: {
      type: Object,
      value: {
        name: 'star',
        title: '明星单品',
        bannerSrc: '../../images/index/star/star_banner1.png',
        isShowBanner: true,
        child: [
          [
            {
              index: 1,
              title: '小米5X 变焦双摄',
              desc: '5.5"大屏轻薄全金属',
              price: '1299元起',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/star/mi_5x.png'
            },
            {
              index: 2,
              title: '红米5',
              desc: '千元全面屏,前置柔光自拍',
              price: '799元起',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/star/hm_5.png'
            }
          ],
          [
            {
              index: 3,
              title: '小米移动电源高配版',
              desc: '轻薄设计,轻松出行',
              price: '149元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/star/mi_powerpro.png'
            },
            {
              index: 4,
              title: '小米电视4A 65"',
              desc: '4K超清大屏,64位处理器',
              price: '4999元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/star/mi_tv_4a65.png'
            }
          ],
          [
            {
              index: 5,
              title: '小米电视4A 49英寸"',
              desc: '全高清,HDR,64位处理器',
              price: '2399元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/star/mi_tv_4a49.png'
            },
            {
              index: 6,
              title: '小米空气净化器 2"',
              desc: '10分钟,房间空气焕然一新',
              price: '599元',
              price_del: '699元',
              commodityType: 'discount',
              imgSrc: '../../images/index/star/mi_air2.png'
            }
          ]
        ]
      },
      observer: function ( newVal, oldVal ) {
        this.setData({
          data: newVal
        });
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    data: {
      name: 'star',
      title: '明星单品',
      bannerSrc: '../../images/index/star/star_banner1.png',
      isShowBanner: true,
      child: [
        [
          {
            index: 1,
            title: '小米5X 变焦双摄',
            desc: '5.5"大屏轻薄全金属',
            price: '1299元起',
            price_del: '',
            commodityType: '',
            imgSrc: '../../images/index/star/mi_5x.png'
          },
          {
            index: 2,
            title: '红米5',
            desc: '千元全面屏,前置柔光自拍',
            price: '799元起',
            price_del: '',
            commodityType: '',
            imgSrc: '../../images/index/star/hm_5.png'
          }
        ],
        [
          {
            index: 3,
            title: '小米移动电源高配版',
            desc: '轻薄设计,轻松出行',
            price: '149元',
            price_del: '',
            commodityType: '',
            imgSrc: '../../images/index/star/mi_powerpro.png'
          },
          {
            index: 4,
            title: '小米电视4A 65"',
            desc: '4K超清大屏,64位处理器',
            price: '4999元',
            price_del: '',
            commodityType: '',
            imgSrc: '../../images/index/star/mi_tv_4a65.png'
          }
        ],
        [
          {
            index: 5,
            title: '小米电视4A 49英寸"',
            desc: '全高清,HDR,64位处理器',
            price: '2399元',
            price_del: '',
            commodityType: '',
            imgSrc: '../../images/index/star/mi_tv_4a49.png'
          },
          {
            index: 6,
            title: '小米空气净化器 2"',
            desc: '10分钟,房间空气焕然一新',
            price: '599元',
            price_del: '699元',
            commodityType: 'discount',
            imgSrc: '../../images/index/star/mi_air2.png'
          }
        ]
      ]
    },
    isLazyLoad: true
  },
  ready: function () {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _changeToDetail: function ( e ) {
      var uid = e.currentTarget.dataset.uid;
      wx.showToast({
        title: "正在请求数据",
        mask: true,
        icon: "loading",
        duration: 800
      })
      setTimeout(function () {
        if (uid == 1010101 || uid == 1010102) {
          wx.navigateTo({
            url: '/pages/subPages/detail/detail?uid=' + uid,
          })
        } else {
          wx.showModal({
            content: '由于没有后台数据，所以该页面没有制作，点击确认跳转到小米5X详细页面',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/subPages/detail/detail?uid=1010101',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }, 800);
      
      
    }
  }
})
