export function ajax({ url, data, method = 'GET', loading = true }) {
  return new Promise((resolve, reject) => {
    if (loading) {
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
    }

    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/'

    wx.request({
      url: `${baseUrl}${url}`,
      data: data,
      header: { 'content-type': 'application/json' },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        resolve(result.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        if (loading) {
          wx.hideLoading()
        }
      }
    })
  })
}
