//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indexData: {
      star: {
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
      news: {
        name: 'news',
        title: '新品上线',
        bannerSrc: '../../images/index/news/news_banner1.png',
        isShowBanner: true,
        child: [
          [
            {
              index: 1,
              title: '小米降噪耳机',
              desc: '双动圈+动铁声学架构',
              price: '299元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_earphone3-5.png'
            },
            {
              index: 2,
              title: '小米笔记本Air 12.5',
              desc: '像杂志一般轻薄',
              price: '3599元起',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_air12.9.png'
            }
          ],
          [
            {
              index: 3,
              title: '米家思维四控插线板',
              desc: '四位分控,随用随开',
              price: '89元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_powerstrip-4k4.png'
            },
            {
              index: 4,
              title: '霍尼韦尔新风口罩米家定制',
              desc: '高效防护,佩戴舒适',
              price: '249元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_mask.png'
            }
          ],
          [
            {
              index: 5,
              title: 'USB3.0至千兆网口多功能转接器',
              desc: '以一敌四,高效办公好搭档',
              price: '129元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_usb3.0zjk.png'
            },
            {
              index: 6,
              title: '70迈只能后视镜',
              desc: '大屏大视野，看得更清晰',
              price: '1299元',
              price_del: '',
              commodityType: '',
              imgSrc: '../../images/index/news/mi_mirror.png'
            }
          ]
        ]
      }
    }
  },
  onLoad: function () {
  }
})
