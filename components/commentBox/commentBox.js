// components/commentBox/commentBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerData: {
      type: Object,
      value: {
        add_time: "2018-01-30",
        average_grade: 5,
        comment_content: "我感觉手机比客服妹子美啊！",
        comment_full_images: ["//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/205abda3647029237da9871ae4d2fd58.webp", "//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/feef74ec3072012cf2bff96a7ad6c77a.webp"],
        comment_grade: 1,
        comment_id: "154482520",
        comment_images: ["//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/205abda3647029237da9871ae4d2fd58.webp", "//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/feef74ec3072012cf2bff96a7ad6c77a.webp"],
        comment_title: "",
        down: false,
        down_num: 0,
        has_up_customer: false,
        is_top: "1",
        reply_content: "那妹子就负责任的告诉你：这，不是你的错觉(✿◡‿◡)感谢您对小米的支持。",
        reply_time: "2018-01-30",
        site_id: "101",
        site_name: "小米移动商城",
        up: false,
        up_customer_num: 20,
        up_num: 14,
        up_rate: 100,
        user_avatar: "//s1.mi-img.com/mfsv2/avatar/fdsc3/p0136e7Mzb7r/z7PFQfgQffxwcD_90.jpg",
        user_id: "119***5273",
        user_name: "那就这样吧",
        user_reply_num: 0,
        user_replys: []
      },
      observer:function ( newVal, oldVal ) {
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
