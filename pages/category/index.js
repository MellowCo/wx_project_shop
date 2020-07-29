// pages/category/index.js
import { categories } from '../../request/api/category/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    siderbars: [],
    goods: [],
    active: 0,
    top: 0
  },
  async onLoad() {
    const time = new Date().valueOf()
    const categoryTime = wx.getStorageSync('categoryTime')
    const category = wx.getStorageSync('category')

    let _data

    if (categoryTime && time - categoryTime < 1000 * 60 * 60 * 24 * 7) {
      _data = category
    } else {
      _data = await this.getCategory(time)
    }

    this.setData({
      siderbars: _data,
      goods: _data[0].children
    })
  },
  async getCategory(time) {
    const { message } = await categories()
    wx.setStorageSync('category', message)
    wx.setStorageSync('categoryTime', time)
    return message
  },
  handleSiderbarTap(e) {
    const {
      target: {
        dataset: { active }
      }
    } = e

    this.setData({
      active,
      goods: this.data.siderbars[active].children,
      top: 0
    })
  }
})
