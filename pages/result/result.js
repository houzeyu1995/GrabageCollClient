// pages/result/result.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:[
      {
        name:'啤酒',
        type:'厨余垃圾',
        style:'type1'
      },
      {
        name:'啤酒瓶',
        type:'可回收垃圾',
        style:'type2'
      },
      {
        name: '啤酒瓶盖',
        type: '可回收垃圾',
        style: 'type2'
      }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      [], // 热点搜索推荐，[]表示不使用
      [],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
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
    console.log(value)
    // 跳转
    wx.redirectTo({
      url: '../result/result?searchValue=' + value
    })
  },

  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    console.log('jump')
    wx.navigateBack({
      url: '../index/index',
    })
    // 跳转
    
  }
})