// pages/location/location.ts
const util = require('../../utils/util')
const urlLists = require("../../utils/util")
const twmap = getApp().globalData.qqmapsdk

type resultProps = { result: { address: string }; address: string; location: { lat: number; lng: number } }

Page({
  data: {
    markers: {},
    poi: {
      latitude: 0,
      longitude: 0
    },
    addressName: 'jijijiji',
    time: '',
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

  getAddress() {
    var that = this;
    twmap.reverseGeocoder({
      success(res: resultProps) {
        console.log(res);
        that.setData({
          addressName: res.result.address
        })
        let re = res.result;
        let mks = [];
        //当get_poi为0时或者为不填默认值时，检索目标位置，按需使用
        mks.push({ // 获取返回结果，放到mks数组中
          title: re.address,
          id: 0,
          latitude: res.location.lat,
          longitude: res.location.lng,
          iconPath: '../../images/zcxj/myPosition.png', // 图标路径
          width: 21,
          height: 28,
          callout: { //在markers上展示地址名称，根据需求是否需要
            content: res.address,
            color: '#000',
            display: 'ALWAYS'
          }
        });
        that.setData({ // 设置markers属性和地图位置poi，将结果在地图展示
          markers: mks,
          poi: {
            latitude: res.location.lat,
            longitude: res.location.lng
          }
        });
        console.log("success");
      },
      fail (error: any) {
        console.error(error);
      },
      complete: function(res: any) {
        console.log(res);
      }
    })
  },

  getTime: function () {
    let that = this
    let time = that.data.time
    that.setData({
      timer: setInterval(function () {
        time = util.formatTime(new Date())
        that.setData({
          time: time.substr(-8)
        });
        if (parseInt(time, 10) == 0) {
          // 页面跳转后，要把定时器清空掉，免得浪费性能
          clearInterval(that.data.timer)
        }
      }, 1000)
    })
  },
  
  onLoad() {
    console.log("onload")
    let that = this
    that.getAddress()
    // that.getTime()
  },

  onUnload: function () {
    clearInterval(this.data.timer)
    clearInterval(this.data.timer2)
    console.log("定时器已被清除")
  },
})