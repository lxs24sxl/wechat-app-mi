// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: [
      {
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
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm5.png"
              },
              {
                id: 2010102,
                title: "红米5 Plus",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm5_plus.png"
              },
              {
                id: 2010103,
                title: "小米MIX 2",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_mix2.png"
              },
              {
                id: 2010104,
                title: "小米Note 3",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_note3.png"
              },
              {
                id: 2010105,
                title: "小米6",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm6.png"
              },
              {
                id: 2010106,
                title: "小米5X",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_5x.png"
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
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/32yc.png"
              },
              {
                id: 2010202,
                title: "43英寸",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/43yc.png"
              },
              {
                id: 2010203,
                title: "55英寸",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/55yc.png"
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
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bjb_pro_15.6.png"
              },
              {
                id: 2010202,
                title: '笔记本13.3" i7',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bjb_13.3_i7.png"
              }
            ]
          }
        ]
      },
      {
        name: "phone",
        title: "手机",
        data: [
          {
            name: "xmphone",
            title: "小米手机",
            childData: [
              {
                id: 2020101,
                title: "小米Mix 2",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_mix2.png"
              },
              {
                id: 2020102,
                title: "小米Note 3",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_note3.png"
              },
              {
                id: 2020103,
                title: "小米6",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm6.png"
              },
              {
                id: 2020104,
                title: "小米5X",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_5x.png"
              },
              {
                id: 2020105,
                title: "小米Max 2",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_max2.png"
              }
            ]
          },
          {
            name: "hmphone",
            title: "红米手机",
            childData: 
            [
            {
              id: 2020201,
              title: "红米5",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm5.png"
            },
            {
              id: 2020202,
              title: "红米5 Plus",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm5_plus.png"
            },
            {
              id: 2020203,
              title: "红米5A",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_5a.png"
            },
            {
              id: 2020204,
              title: "红米Note 5A",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_note5a.png"
            },
            {
              id: 2020205,
              title: "红米Note 4X",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_note4x.png"
            },
            {
              id: 2020206,
              title: "红米4X",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_4x.png"
            },
            {
              id: 2020207,
              title: "红米4A",
              imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_4a.png"
            }
            ]
          },
          {
            name: "mobile4g",
            title: "移动4G+专区",
            childData: [
              {
                id: 2020301,
                title: "小米6",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm6.png"
              },
              {
                id: 2020302,
                title: '红米Note 4X',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_note4x.png"
              },
              {
                id: 2020303,
                title: '红米4X',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hm_4x.png"
              },
              {
                id: 2020304,
                title: '小米5X',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xm_5x.png"
              }
            ]
          },
          {
            name: "phoneAcce",
            title: "手机配件",
            childData: [
              {
                id: 2020401,
                title: "以旧换新",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yjhx.png"
              },
              {
                id: 2020402,
                title: '定位电话',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dwdh.png"
              },
              {
                id: 2020403,
                title: '贴膜',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/tm.png"
              },
              {
                id: 2020204,
                title: '保护壳',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bhk.png"
              },
              {
                id: 2020205,
                title: '充电器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cdq.png"
              },
              {
                id: 2020206,
                title: '数据线',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sjx.jpg"
              },
              {
                id: 2020207,
                title: '存储卡',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sdk.jpg"
              },
              {
                id: 2020208,
                title: '自拍杆',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/zpg.jpg"
              },
              {
                id: 2020209,
                title: '手机支架',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sjzj.png"
              }
            ]
          }
        ]
      },
      {
        name: "tv",
        title: "电视",
        data: [
          {
            name: "tv-tv",
            title: "电视",
            childData: [
              {
                id: 2030101,
                title: '32英寸',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/32yc.png"
              },
              {
                id: 2030102,
                title: '43英寸',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/43yc.png"
              },
              {
                id: 2030103,
                title: '49-50英寸',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/49-50yc.png"
              },
              {
                id: 2030104,
                title: '55英寸',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/55yc.png"
              },
              {
                id: 2030105,
                title: '65英寸',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/65yc.png"
              }
            ]
          },
          {
            name: "tv-hz",
            title: "盒子",
            childData: [
              {
                id: 2030201,
                title: '盒子3s',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hz3.jpg"
              },
              {
                id: 2030202,
                title: '盒子3c',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hz3.jpg"
              },
              {
                id: 2030203,
                title: '盒子3加强版',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hz3_pro.jpg"
              }
            ]
          },
          {
            name: "tv-yx",
            title: "音箱",
            childData: [
              {
                id: 2030301,
                title: '家庭音箱',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/jtyx.png"
              },
              {
                id: 2030302,
                title: '蓝牙音箱',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/lyyx.png"
              }
            ]
          },
          {
            name: "tv-vip",
            title: "电视配件及会员",
            childData: [
              {
                id: 2030301,
                title: '会员卡',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/hyk.png"
              },
              {
                id: 2030302,
                title: '遥控器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/lyyx.png"
              },
              {
                id: 2030303,
                title: '线材转接器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xczjq.jpg"
              },
              {
                id: 2030304,
                title: '安装服务',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/azfw.png"
              },
              {
                id: 2030305,
                title: '麦克风',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mkf.png"
              }
            ]
          }
        ]
      },
      {
        name: "computer",
        title: "电脑",
        data: [
          {
            name: "computer-dn",
            title: "电脑",
            childData: [
              {
                id: 2040101,
                title: '笔记本12.5"',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bjb_12.5.png"
              },
              {
                id: 2040102,
                title: '笔记本13.3"',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bjb_13.3_i7.png"
              },
              {
                id: 2040103,
                title: '笔记本15.6"',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bjb_pro_15.6.png"
              },
            ]
          },
          {
            name: "computer-acce",
            title: "电脑配件",
            childData: [
              {
                id: 2040201,
                title: '鼠标/鼠标垫',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sb-sbd.jpg"
              },
              {
                id: 2040202,
                title: '机械键盘',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/jxjp.png"
              },
              {
                id: 2040203,
                title: '平板保护类',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/pbbhl.png"
              },
              {
                id: 2040204,
                title: '转接线/电源',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xczjq.jpg"
              },
              {
                id: 2040205,
                title: '随身WiFi',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sswifi.png"
              },
            ]
          },
        ]
      },
      {
        name: "appliances",
        title: "家电",
        data: [
          {
            name: "appliances-jd",
            title: "家电",
            childData: [
              {
                id: 2050101,
                title: '电饭煲',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dfb.png"
              },
              {
                id: 2050102,
                title: '净水器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/jsq.png"
              },
              {
                id: 2050103,
                title: '净化器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/jhq.png"
              },
              {
                id: 2050104,
                title: '扫地机器人',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sdjqr.png"
              },
              {
                id: 2050105,
                title: '米家投影仪',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mjtyy.jpg"
              },
              {
                id: 2050106,
                title: '电水壶',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dsh.png"
              },
              {
                id: 2050107,
                title: '灯具',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dj.png"
              },
              {
                id: 2050108,
                title: '空调',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/kt.jpg"
              },
              {
                id: 2050109,
                title: '电磁炉',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dcl.jpg"
              }
            ]
          }
        ]
      },
      {
        name: "router",
        title: "路由",
        data: [
          {
            name: "router-ly",
            title: "路由",
            childData: [
              {
                id: 2060101,
                title: '路由器3A',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/router3a.jpg"
              },
              {
                id: 2060102,
                title: '路由器3G',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/router3g.jpg"
              },
              {
                id: 2060103,
                title: '路由器3',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/router3.jpg"
              },
              {
                id: 2060104,
                title: '路由器3C',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/router3c.png"
              },
              {
                id: 2060105,
                title: '路由器HD',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/routerhd.png"
              },
              {
                id: 2060106,
                title: '路由器Pro',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/routerhd.png"
              },
              {
                id: 2060107,
                title: 'WiFi放大器',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/wifi_fdq.jpg"
              },
              {
                id: 2060108,
                title: '电力猫',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dlm.png"
              },
              {
                id: 2060109,
                title: '线材',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xc.png"
              }
            ]
          }
        ]
      },
      {
        name: "smart",
        title: "智能",
        data: [
          {
            name: "smart-zn",
            title: "智能",
            childData: [
              {
                id: 2070101,
                title: '剃须刀',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/txd.jpg"
              },
              {
                id: 2070102,
                title: '智能家庭',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/znjt.png"
              },
              {
                id: 2070103,
                title: 'VR眼镜',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/vryj.png"
              },
              {
                id: 2070104,
                title: '摄像机',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sxj.jpg"
              },
              {
                id: 2070105,
                title: '智能插排',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/zncp.jpg"
              }
            ]
          },
          {
            name: "smart-jk",
            title: "健康",
            childData: [
              {
                id: 2070201,
                title: '手环',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xmsh.png"
              },
              {
                id: 2070202,
                title: '血压计',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xyj.png"
              },
              {
                id: 2070203,
                title: '秤',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/c.png"
              },
              {
                id: 2070204,
                title: '体温计',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/twj.png"
              }
            ]
          },
          {
            name: "smart-hw",
            title: "户外",
            childData: [
              {
                id: 2070301,
                title: '出行',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cx.png"
              },
              {
                id: 2070302,
                title: '无人机',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/wrj.png"
              },
              {
                id: 2070303,
                title: '对讲机',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/djj.png"
              },
              {
                id: 2070304,
                title: '车载用品',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/czyp.png"
              },
              {
                id: 2070305,
                title: '摄影摄像',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sysx.png"
              },
              {
                id: 2070306,
                title: '智能硬件套装',
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/znyjtz.png"
              }
            ]
          },
        ]
      },
      {
        name: "child",
        title: "儿童",
        data: [
          {
            name: "child-et",
            title: "儿童",
            childData: [
              {
                id: 2080101,
                title: "儿童手表2",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/etsb2.jpg"
              },
              {
                id: 2080101,
                title: "米兔智能积木",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mtznjm.jpg"
              },
              {
                id: 2080103,
                title: "积木机器人",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/jmjqr.jpg"
              },
              {
                id: 2080104,
                title: "故事机mini",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/gsj_mini.jpg"
              },
              {
                id: 2080105,
                title: "70粒益智积木",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/70_yzjm.jpg"
              },
              {
                id: 2080106,
                title: "米兔儿童书包",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mtetsb.jpg"
              },
              {
                id: 2080107,
                title: "定位电话",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dwdh.png"
              },
              {
                id: 2080108,
                title: "智能故事机",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/zngsj.jpg"
              },
            ]
          }
        ]
      },
      {
        name: "power",
        title: "电源",
        data: [
          {
            name: "power-dy",
            title: "电源",
            childData: [
              {
                id: 2090101,
                title: "插线板",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cxb.png"
              },
              {
                id: 2090101,
                title: "移动电源",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yddy.jpg"
              },
              {
                id: 2090103,
                title: "智能插排",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/zncp.jpg"
              },
              {
                id: 2090104,
                title: "电池",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dc.png"
              },
              {
                id: 2090105,
                title: "电源配件",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dypj.png"
              },
              {
                id: 2090106,
                title: "充电器",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cdq.png"
              }
            ]
          }
        ]
      },
      {
        name: "headset",
        title: "耳机",
        data: [
          {
            name: "headset-ej",
            title: "耳机",
            childData: [
              {
                id: 2100101,
                title: "线控耳机",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xkej.png"
              },
              {
                id: 2100101,
                title: "蓝牙耳机",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/lyej.jpg"
              },
              {
                id: 2100103,
                title: "头戴式耳机",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/tdsej.jpg"
              },
              {
                id: 2100104,
                title: "品牌耳机",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/ppej.png"
              }
            ]
          }
        ]
      },
      {
        name: "speaker",
        title: "音箱",
        data: [
          {
            name: "speaker-yx",
            title: "音箱",
            childData: [
              {
                id: 2110101,
                title: "AI音箱",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/aiyx.png"
              },
              {
                id: 2110101,
                title: "蓝牙音箱",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/lyyx.png"
              },
              {
                id: 2110103,
                title: "电视音箱",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/dsyx.jpg"
              },
              {
                id: 2110104,
                title: "音乐闹钟",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yynz.jpg"
              },
              {
                id: 2110105,
                title: "网络音响",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/wlyx.png"
              },
              {
                id: 2110106,
                title: "配件",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/pj.png"
              }
            ]
          }
        ]
      },
      {
        name: "gift",
        title: "礼品",
        data: [
          {
            name: "gift-lp",
            title: "礼品",
            childData: [
              {
                id: 2120101,
                title: "送长辈",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/szb.png"
              },
              {
                id: 2120101,
                title: "送孩子",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/shz.png"
              },
              {
                id: 2120103,
                title: "送男生",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sns.png"
              },
              {
                id: 2120104,
                title: "送女生",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/snh.png"
              },
              {
                id: 2120105,
                title: "优惠套装",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yhtz.png"
              },
              {
                id: 2120106,
                title: "新品",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/xp.png"
              }
            ]
          }
        ]
      },
      {
        name: "life",
        title: "生活",
        data: [
          {
            name: "life-sh",
            title: "生活",
            childData: [
              {
                id: 2130101,
                title: "运动鞋",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/ydx.png"
              },
              {
                id: 2130102,
                title: "服饰",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/fs.jpg"
              },
              {
                id: 2130103,
                title: "旅行箱",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/lxx.png"
              },
              {
                id: 2130104,
                title: "背包/收纳",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bb-sn.png"
              },
              {
                id: 2130105,
                title: "眼镜",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yj.png"
              },
              {
                id: 2130106,
                title: "口罩",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/kz.jpg"
              },
              {
                id: 2130107,
                title: "雨伞",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/ys.png"
              },
              {
                id: 2130108,
                title: "保温杯",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bwb.png"
              }
            ]
          },
          {
            name: "life-jj",
            title: "居家",
            childData: [
              {
                id: 2130201,
                title: "牙刷",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/ys.png"
              },
              {
                id: 2130202,
                title: "床垫",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cd.png"
              },
              {
                id: 2130203,
                title: "毛巾",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mj.jpg"
              },
              {
                id: 2130204,
                title: "枕头",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/zt.png"
              },
              {
                id: 2130205,
                title: "工具",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/gj.jpg"
              },
              {
                id: 2130206,
                title: "沙发",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/sf.png"
              },
              {
                id: 2130207,
                title: "被子",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/bz.png"
              }
            ]
          },
          {
            name: "life-wj",
            title: "文具",
            childData: [
              {
                id: 2130301,
                title: "笔",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/b.jpg"
              },
              {
                id: 2130302,
                title: "米兔",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/mt.jpg"
              },
              {
                id: 2130303,
                title: "印刷品",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/ysp.png"
              }
            ]
          }
        ]
      },
      {
        name: "simCard",
        title: "米粉卡",
        data: [
          {
            name: "simCard-mfk",
            title: "米粉卡",
            childData: [
              {
                id: 2140101,
                title: "日租卡",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/rzk.png"
              },
              {
                id: 2140102,
                title: "月租卡",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/yzk.png"
              },
              {
                id: 2140103,
                title: "吃到饱",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/cdb.jpg"
              },
              {
                id: 2140103,
                title: "任我行",
                imgSrc: "http://github.com/lxs24sxl/readme_add_pic/raw/master/wx_mi_images/b2c-mimall-media/rwx.jpg"
              },
            ]
          }
        ]
      },
    ],
    _num: 0,
    toView: "new"
  },
  categoryClick: function ( e ) {
    var num = e.currentTarget.dataset.num,
        data = this.data;
    this.setData({
      _num: num,
      toView: data.categoryData[ num ].name
    });
    // console.log( data.heightArr[ data._num ] );
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  
  }
})