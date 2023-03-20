/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    username?: string
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}