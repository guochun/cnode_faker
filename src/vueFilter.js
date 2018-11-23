import Vue from 'vue'

Vue.filter('formatDate', (str) => {
  if (str === '') return ''
  const date = new Date(str)
  const time = new Date().getTime() - date.getTime()
  if (time < 0) return ''
  else if (time / 1000 < 30) return '刚刚'
  else if (time / 1000 < 60) return parseInt(time / 1000) + '秒前'
  else if (time / 60000 < 60) return parseInt(time / 60000) + '分前'
  else if (time / 3600000 < 24) return parseInt(time / 3600000) + '小时前'
  else if (time / 86400000 < 31) return parseInt(time / 86400000) + '天前'
  else if (time / 2592000000 < 12) return parseInt(time / 2592000000) + '月前'
  else return parseInt(time / 31536000000) + '年前'
})

Vue.filter('formatTab', (post) => {
  if (post.good) return '精华'
  if (post.top) return '置顶'
  if (post.tab === 'share') return '分享'
  if (post.tab === 'ask') return '问答'
  if (post.tab === 'share') return '分享'
  if (post.tab === 'job') return '招聘'
})

Vue.filter('formatPostType', (post) => {
  if (post.tab === 'share') return '分享'
  if (post.tab === 'ask') return '问答'
  if (post.tab === 'share') return '分享'
  if (post.tab === 'job') return '招聘'
})
