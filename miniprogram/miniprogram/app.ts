// app.ts
import QQMapWX from "./utils/qqmap-wx-jssdk.min.js"

App<IAppOption>({
  globalData: {
    username: 'napolun',
    // 实例化API核心类
    qqmapsdk: new QQMapWX({
      key: 'ZIXBZ-YGTHU-75RV6-GYJA6-L6GIZ-5BFEO'
    }),
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})