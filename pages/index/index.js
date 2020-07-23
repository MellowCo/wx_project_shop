import * as indexRequest from '../../request/api/index/index'

Page({
  data: {
    swipers: [],
    navs: [],
    floors: []
  },
  //options(Object)
  async onLoad() {
    const { message } = await indexRequest.swipers()
    const { message: navs } = await indexRequest.navs()
    const { message: floors } = await indexRequest.floor()

    this.setData({
      swipers: message,
      navs,
      floors
    })
  }
})
