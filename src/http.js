import axios from 'axios'

const url = 'https://cnodejs.org/api/v1/'

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
  getPostLiatData (tab, page = 1) {
    return this.get('topics', { tab, page })
  },
  getArticelData (id) {
    return this.get('topic/' + id)
  },
  getUserInfoData (name) {
    return this.get('user/' + name)
  }
}
