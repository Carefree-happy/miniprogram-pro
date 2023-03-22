// pages/location/location.ts
const util = require('../../utils/util')
const urlLists = require("../../utils/util")
const twmap = getApp().globalData.qqmapsdk

Page({
  data: {
    time: "0:0:0",
    markers: '',
    poi: {
      latitude: 0,
      longitude: 0
    },
    addressName: 'jijijiji',
    timer: 0,
    timer2: 0,  // 用来每个一段时间自动刷新一次定位
    canClick: true
  },

  checkIn() {
    console.log("checkin")
  },

  rePosition() {
    console.log("rePosition")
  },
  
  onLoad() {
    console.log("onload")
    let timestamp = Date.now()
    let date = new Date(timestamp)
    wx.getFuzzyLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
      },
      fail (res) {
        console.log(res)
      }
    })
  },


})