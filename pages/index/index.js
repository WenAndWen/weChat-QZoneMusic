//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    songData:[]
  },
 
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.sojson.com/api/qqmusic/87920151',
      success: function (res) {
        that.setData({
          songData:res.data
        })
      }
    })
  },
  
})
