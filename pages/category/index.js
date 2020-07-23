// pages/category/index.js
import { categories } from '../../request/api/category/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    siderbars: [],
    goods: [],
    active: 0
  },
  async onLoad() {
    const { message } = await categories()
    this.setData({
      siderbars: message,
      goods: message[0].children
    })
    console.log(message)
  },
  handleSiderbarTap(e) {
    const {
      target: {
        dataset: { active }
      }
    } = e

    this.setData({
      active,
      goods: this.data.siderbars[active].children
    })
  }
})
