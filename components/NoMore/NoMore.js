Component({
  /**
   * 组件的属性列表
   */
  properties: {
    error: {
      type: String,
      value: '加载失败,点击重新加载'
    },
    nomore: {
      type: String,
      value: '没有更多了'
    },
    /**
     * -2 不显示
     * -1 加载失败
     * 0 加载中
     * 1 没有更多了
     */
    loadingFlag: {
      type: Number,
      value: -2
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.triggerEvent('click')
    }
  }
})
