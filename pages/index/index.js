import * as indexRequest from '../../request/api/index/index'

Page({
  data: {
    swipers: [],
    navs: []
  },
  //options(Object)
  async onLoad() {
    const { message } = await indexRequest.swipers()
    const { message: navs } = await indexRequest.navs()

    this.setData({
      swipers: message,
      navs
    })
  }
})
