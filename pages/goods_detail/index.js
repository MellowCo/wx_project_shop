import { detail } from '../../request/api/goods_detail/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: null
  },
  onLoad: function (options) {
    this.getDetail(options.goods_id)
  },
  async getDetail(goods_id) {
    const { message } = await detail(goods_id)

    this.setData({
      detail: message
    })
  }
})
