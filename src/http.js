import axios from 'axios'

const url = 'http://cnodejs.org/api/v1/'

export default {
  get (path, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url + path, {
          params
        })
        .then(res => {
          resolve(res.data.data)
        })
        .catch(err => {
          throw new Error(err)
        })
    })
  },
  getPostLiatData (page = 1, limit = 20) {
    return this.get('topics', { page, limit })
  },
  getArticelData (id) {
    return this.get('topic/' + id)
  },
  getUserInfoData (name) {
    return this.get('user/' + name)
  }
}
