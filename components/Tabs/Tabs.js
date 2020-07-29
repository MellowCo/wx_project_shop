// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    activeIndex: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handleTap(e) {
      const { index } = e.target.dataset
      this.triggerEvent('click', index)
    }
  }
})
