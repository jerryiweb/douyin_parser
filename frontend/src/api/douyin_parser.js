import dy from '@/utils/request/dy.js'

export const parser = function(url) {
  return dy.post('/api/douyin', {
    params: {
      url: url
    }
  })
}
