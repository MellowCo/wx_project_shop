import { search } from '../../request/api/goods_list/index'
// pages/goods_list/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    query: {
      query: '',
      cid: '',
      pagenum: 0,
      pagesize: 8
    },
    goods: [],
    refresh: false,
    loadingFlag: 0,
    notBottomLoading: false,
    tabs: [
      { id: 1, value: '综合' },
      { id: 2, value: '销量' },
      { id: 3, value: '价格' }
    ],
    activeIndex: 0,
    tabsLength: 3
  },
  async onLoad(options) {
    const { cat_id: cid } = options
    this.setData({
      'query.cid': cid
    })

    this.scrollBottom()
    // const goods = await this.queryGoods()
    // this.setData({
    //   goods
    // })
  },
  /**
   * 查询商品
   */
  async queryGoods() {
    const {
      message: { goods }
    } = await search(this.data.query)

    return goods
  },
  /**
   * 到底 加载
   */
  async scrollBottom() {
    // 不需要底部加载
    if (this.data.notBottomLoading) {
      return
    }

    this.setData({
      notBottomLoading: true,
      'query.pagenum': this.data.query.pagenum + 1
    })

    try {
      const goods = await this.queryGoods()

      if (goods.length === 0) {
        // 没有更多数据了
        this.setData({
          loadingFlag: 1,
          notBottomLoading: true
        })
      } else {
        this.setData({
          notBottomLoading: false,
          goods: [...this.data.goods, ...goods]
        })
      }
    } catch (e) {
      // 没有获取到数据
      this.setData({
        loadingFlag: -1,
        notBottomLoading: false
      })
    }
  },
  async refreshPull() {
    if (this.data.refresh) {
      return
    }

    let goods
    try {
      this.setData({
        refresh: true,
        loadingFlag: 0,
        notBottomLoading: false,
        'query.query': '',
        'query.pagenum': 1
      })
      goods = await this.queryGoods()
    } finally {
      this.setData({
        refresh: false,
        goods
      })
    }
  },
  // 点击 tab 栏
  handleTap(e) {
    const { detail } = e
    this.setData({
      activeIndex: detail
    })
  }
})
