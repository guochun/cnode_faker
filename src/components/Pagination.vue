<template>
<div class="pagination">
  <div class="wrapper">
    <button @click="returnHomePage">首页</button>
    <button @click="chagePrevPage">上一页</button>
    <button @click="changePage(currentPage - pagesBtn.length)" v-show="judge">......</button>
    <button
      v-for="(btn, index) in pagesBtn"
      :key="index"
      @click="changePage(btn)"
      :class="{currentPage: (currentPage === pagesBtn[index]) }"
    >
      {{btn}}
    </button>
    <button @click="changePage(currentPage + pagesBtn.length)">......</button>
    <button @click="chageNextPage">下一页</button>
    <span class="gotopage">
      <input  v-model.number="inputNumber" type="number">
      <button @click="goToPage">GO</button>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      pagesBtn: [1, 2, 3, 4, 5],
      currentPage: 1,
      inputNumber: '',
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
      this.pagesBtn = this.pagesBtn.map((item, index) => {
        if (page > 4) return page + index
        return index + 1
      })
      this.$emit('changePage', page)
    },
    returnHomePage () {
      this.judge = false
      this.pagesBtn = [1, 2, 3, 4, 5]
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
    },
    goToPage () {
      if (!this.inputNumber) return
      if (this.inputNumber <= 0) {
        this.inputNumber = 1
      }
      this.changePage(this.inputNumber)
      this.inputNumber = ''
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #888888;
}
.wrapper {
  display: flex;
  align-items: center;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
  margin-right: 5px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}

.gotopage input {
  width: 47px;
  height: 21px;
  padding: 2px;
  border-radius: 3px;
  margin-right: 5px;
  text-align: center;
}
</style>
