<template>
<div class="pagination">
  <button @click="returnHomePage">首页</button>
  <button @click="chagePrevPage">上一页</button>
  <button  class='pagebtn' v-if="judge">......</button>
  <button
    v-for="(btn, index) in pagesBtn"
    :key="index"
    :class="[{currentPage: (btn === currentPage)},'pagebtn']"
    @click="changePage(btn)"
  >
    {{btn}}
  </button>
  <button @click="chageNextPage">下一页</button>
</div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      pagesBtn: [1, 2, 3, 4, 5, '......'],
      currentPage: 1,
      judge: false
    }
  },
  methods: {
    changePage (page) {
      this.currentPage = page
      if (this.currentPage > 4) {
        this.judge = true
      } else {
        this.judge = false
      }
      if (page === this.pagesBtn[4]) {
        this.pagesBtn.shift()
        this.pagesBtn.splice(4, 0, this.pagesBtn[3] + 1)
      } else if (page === this.pagesBtn[0] && page !== 1) {
        // 在开头添加一个数字
        this.pagesBtn.unshift(this.pagesBtn[0] - 1)
        // 在结尾删除一个数字
        this.pagesBtn.splice(5, 1)
      }

      this.$emit('changePage', page)
    },
    returnHomePage () {
      this.judge = false
      this.pagesBtn = [1, 2, 3, 4, 5, '......']
      this.currentPage = 1
      this.$emit('changePage', 1)
    },
    chageNextPage () {
      this.changePage(this.currentPage + 1)
    },
    chagePrevPage () {
      let prevPage = this.currentPage - 1
      if (prevPage <= 0) return
      this.changePage(prevPage)
    }
  }
}
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
  margin-right: 5px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>
