//index.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      '/images/pic1.png',
      '/images/pic2.png',
      '/images/pic7.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    searchValue: '',
    
  },

  // 搜索栏
  onLoad: function () {
  },
  showMenu: function () {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      ['啤酒瓶', '塑料袋', "果皮", "剩饭", '过期药', '宠物粪便', '茶叶渣', '尘土', '卫生巾', '一次性餐具'], // 热点搜索推荐，[]表示不使用
      ['西瓜皮'],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
  },
  onShow: function () {
    this.showMenu();
  },
  // 转发函数,固定部分
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数

  // 搜索回调函数  
  mySearchFunction: function (value) {
    // do your job here
    // 跳转
    console.log(value)
    wx.navigateTo({
      url: '../result/result?searchValue=' + value
    })
    // wx.redirectTo({
    //   url: '../result/result?searchValue='+value
    // })
  },
  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    // console.log('jump')
    // wx.redirectTo({
    //   url: '../index/index',
    // })
  }
  // 搜索页面跳回
  // onLoad: function (options) {
  //   if (options && options.searchValue) {
  //     this.setData({
  //       searchValue: "搜索：" + options.searchValue
  //     });
  //   }
  // },
})
