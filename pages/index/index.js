//index.js
//获取应用实例
const app = getApp()
var indexGlobalData = {},             // 首页中可视界面数据
    refreshGlobalData = []            // 需要动态加载的变量
Page({
  data: {
    indexData: {
      id: 1000001,
      data: [
        {
          name: 'star',
          title: '明星单品',
          bannerSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/star_banner1.png',
          asBannerSrc: [],
          isShowBanner: true,
          child: [
            [
              {
                id: 1010101,
                index: 1,
                title: '小米5X 变焦双摄',
                desc: '5.5"大屏轻薄全金属',
                price: '1299元起',
                price_del: '',
                commodityType: '',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/mi_5x.png'
              },
              {
                id: 1010102,
                index: 2,
                title: '红米5',
                desc: '千元全面屏,前置柔光自拍',
                price: '799元起',
                price_del: '',
                commodityType: '',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/hm_5.png'
              }
            ],
            [
              {
                id: 1010103,
                index: 3,
                title: '小米移动电源高配版',
                desc: '轻薄设计,轻松出行',
                price: '149元',
                price_del: '',
                commodityType: '',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/mi_powerpro.png'
              },
              {
                id: 1010104,
                index: 4,
                title: '小米电视4A 65"',
                desc: '4K超清大屏,64位处理器',
                price: '4999元',
                price_del: '',
                commodityType: '',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/mi_tv_4a65.png'
              }
            ],
            [
              {
                id: 1010105,
                index: 5,
                title: '小米电视4A 49英寸"',
                desc: '全高清,HDR,64位处理器',
                price: '2399元',
                price_del: '',
                commodityType: '',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/mi_tv_4a49.png'
              },
              {
                id: 1010106,
                index: 6,
                title: '小米空气净化器 2"',
                desc: '10分钟,房间空气焕然一新',
                price: '599元',
                price_del: '699元',
                commodityType: 'discount',
                imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/star/mi_air2.png'
              }
            ]
          ]
        }
      ]
    },
    refreshData: [
      {
        name: 'news',
        title: '新品上线',
        bannerSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/news_banner1.png',
        asBannerSrc: [],
        isShowBanner: true,
        child: [
          [
            {
              id: 1010201,
              index: 1,
              title: '小米降噪耳机',
              desc: '双动圈+动铁声学架构',
              price: '299元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_earphone3-5.png'
            },
            {
              id: 1010202,
              index: 2,
              title: '小米笔记本Air 12.5',
              desc: '像杂志一般轻薄',
              price: '3599元起',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_air12.9.png'
            }
          ],
          [
            {
              id: 1010203,
              index: 3,
              title: '米家思维四控插线板',
              desc: '四位分控,随用随开',
              price: '89元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_powerstrip-4k4.png'
            },
            {
              id: 1010204,
              index: 4,
              title: '霍尼韦尔新风口罩米家定制',
              desc: '高效防护,佩戴舒适',
              price: '249元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_mask.png'
            }
          ],
          [
            {
              id: 1010205,
              index: 5,
              title: 'USB3.0至千兆网口多功能转接器',
              desc: '以一敌四,高效办公好搭档',
              price: '129元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_usb3.0zjk.png'
            },
            {
              id: 1010206,
              index: 6,
              title: '70迈只能后视镜',
              desc: '大屏大视野，看得更清晰',
              price: '1299元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/news/mi_mirror.png'
            }
          ]
        ]
      },
      {
        name: 'router',
        title: '米家智能',
        bannerSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/router/router_banner1.png',
        asBannerSrc: [],
        isShowBanner: true,
        child: []
      },
      {
        name: 'phone',
        title: '手机',
        bannerSrc: '',
        asBannerSrc: [
          'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/phone/phone_banner2.png'
        ],
        isShowBanner: false,
        child: [
          [
            {
              id: 1010501,
              index: 1,
              title: '小米MIX 2 全面屏2.0',
              desc: '5.99"大屏,4轴光学防抖',
              price: '3299元起',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/phone/mi_mix2.png'
            },
            {
              id: 1010502,
              index: 2,
              title: '小米Note 3 人脸解锁',
              desc: '1600万美颜自拍',
              price: '1999元起',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/phone/mi_note3.png'
            }
          ],
        ]
      },
      {
        name: 'tv',
        title: '电视',
        bannerSrc: '',
        asBannerSrc: [
          'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/tv/tv_banner2.png'
        ],
        isShowBanner: false,
        child: [
          [
            {
              id: 1010601,
              index: 1,
              title: '小米电视4C 55英寸',
              desc: '4K HDR 人工智能系统',
              price: '3099元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/tv/mi_tv_4c55.png'
            },
            {
              id: 1010602,
              index: 2,
              title: '小米电视4A 49英寸',
              desc: '全高清,HDR,64位处理器',
              price: '2399元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/tv/mi_tv_4a49.png'
            }
          ],
          [
            {
              id: 1010603,
              index: 3,
              title: '小米电视4 55英寸',
              desc: '无边框式沉浸设计',
              price: '4499元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/tv/mi_tv4_55.png'
            },
            {
              id: 1010604,
              index: 4,
              title: '小米电视4A 55英寸',
              desc: '4K HDR,64位处理器',
              price: '2999元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/tv/mi_tv_4a55.png'
            }
          ]
        ]
      },
      {
        name: 'smart',
        title: '智能',
        bannerSrc: '',
        asBannerSrc: [
          'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/smart_banner2.png'
        ],
        isShowBanner: false,
        child: [
          [
            {
              id: 1010701,
              index: 1,
              title: '米家扫地机器人',
              desc: '智商高,扫的干净扫得快',
              price: '1699元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_roomrobot.png'
            },
            {
              id: 1010702,
              index: 2,
              title: '米家空气净化器Pro',
              desc: '大空间,快循环',
              price: '1299元',
              price_del: '1499元',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_airpro.png'
            }
          ],
          [
            {
              id: 1010703,
              index: 3,
              title: '小米路由器 3C',
              desc: '一款更轻快的好路由',
              price: '89元',
              price_del: '99元',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_router3C.png'
            },
            {
              id: 1010704,
              index: 4,
              title: '小米WiFi电力猫',
              desc: '有插座的地方 就有WiFi',
              price: '249元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_plc.png'
            }
          ],
          [
            {
              id: 1010705,
              index: 5,
              title: '米家飞利浦智睿吸顶灯',
              desc: '色温颜色可调',
              price: '349元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_philips_ceilinglamp.png'
            },
            {
              id: 1010706,
              index: 6,
              title: '小米手环 2',
              desc: 'OLED 显示屏, 触摸操作',
              price: '149元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_shouhuan2.png'
            }
          ],
          [
            {
              id: 1010707,
              index: 7,
              title: '米家小白智能摄像机',
              desc: '360° 全景拍摄,红外夜视',
              price: '399元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_smartcamera-v.png'
            },
            {
              id: 1010708,
              index: 8,
              title: '米家行车记录仪',
              desc: '晚上也可以拍清车牌',
              price: '349元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_mj-carcorder.png'
            }
          ],
          [
            {
              id: 1010709,
              index: 9,
              title: '90分旅行箱 20寸',
              desc: '静态轮胎,内饰纺织布料',
              price: '169元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_90trunk_20.png'
            },
            {
              id: 1010710,
              index: 10,
              title: '米家 LED 智能台灯',
              desc: '照明之上,光的艺术品',
              price: '169元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/smart/mi_mjsmartlamp.png'
            }
          ]
        ]
      },
      {
        name: 'computer',
        title: '电脑',
        bannerSrc: '',
        asBannerSrc: [
          'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/computer/computer_banner2.png'
        ],
        isShowBanner: false,
        child: [
          [
            {
              id: 1010801,
              index: 1,
              title: '12.5"笔记本Air 128GB',
              desc: '超薄长续航',
              price: '3599元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/computer/mi_mibookair-12.png'
            },
            {
              id: 1010802,
              index: 2,
              title: '15.6"笔记本i7 8GB',
              desc: '全新高性能独显',
              price: '6399元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/computer/mi_mibookpro.png'
            }
          ],
          [
            {
              id: 1010803,
              index: 3,
              title: '13.3"笔记本i7 独显',
              desc: '轻薄全金属,超长续航',
              price: '5999元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/computer/mi_mibookair.png'
            },
            {
              id: 1010804,
              index: 4,
              title: '15.6"笔记本i5 8GB',
              desc: '更强悍的专业笔记本',
              price: '5599元',
              price_del: '',
              commodityType: '',
              imgSrc: 'http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/computer/mi_mibookpro_i5.png'
            }
          ]
        ]
      }
    ],
    indexNavData: [
      {
        title: "手机",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/phone.png"
      },
      {
        title: "电视",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/tv.png"
      },
      {
        title: "电脑",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/computer.png"
      },
      {
        title: "智能",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/router.png"
      },
      {
        title: "新品",
        imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/index/cells/news.png"
      }
    ],
    isLazyLoad: true
  },
  onLoad: function () {
  },
  /**
   * 上拉加载
   */
  onReachBottom: function () {
    // 删除并返回数组的第一个
    var temp = refreshGlobalData.shift();
    if ( temp ) {
      // 存放截取的数据
      indexGlobalData.data.push(temp);
      // 替换数据
      this.setData({
        indexData: indexGlobalData
      });
    }
    
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    var data = this.data;
    // 存储初始的数据
    indexGlobalData = data.indexData;
    // 存储需要刷新的数据 
    refreshGlobalData = data.refreshData;
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  // 跳转到搜索商品页面
  moveToSearch: function () {
    wx.navigateTo({
      url: '/pages/subPages/search/search',
    })
  },
  test1: function ( e ) {
    console.log( e );
    wx.previewImage({
      urls: [e.currentTarget.dataset.img ],
    })
  }
})
