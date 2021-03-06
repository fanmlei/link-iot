const API_BASE_URL = 'http://127.0.0.1:8000/'

const request = (url, data, method) => {
  let _url = API_BASE_URL + url
  let _header = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + wx.getStorageSync('token')
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: _header,
      success(response) {
        if (response.statusCode == 500){
          wx.showToast({
            title: '服务器错误！',
            duration: 2000
          })
        }
        resolve(response.data)
      },
      fail(error) {
        wx.showToast({
          title: '请求失败!',
          duration: 2000
        })
        reject(error)
      },
    })
  })
}
module.exports = {
  request,
}