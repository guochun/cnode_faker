<template>
  <div class="post_list">
    <!-- loading 动画 -->
    <div class="loading" v-show="isLoading">
      <img src="../assets/loading.gif" >
    </div>

    <!-- 发布帖子列表 -->
    <div class="posts" v-show="!isLoading">
      <ul>
        <li >
          <div class="toobar">
            <span  class="toobar-item" :class="{active: currentType === item.type }" @click="getPostListData(item.type)" v-for="(item, index) in  postTypeList" :key="index" >{{item.name}}</span>
          </div>
        </li>
        <li v-for="post of posts" :key="post.id" class=".clearfix">
          <!-- 作者头像 -->
          <img :src="post.author.avatar_url" alt="author_avatar">
          <!-- 回复人数和访问人数 -->
          <span class="allcount">
            <span title="回复数" class="reply_count">{{post.reply_count}}</span>
            /
            <span title="点击数">{{post.visit_count}}</span>
          </span>
          <span
            :class="{
                put_good: post.good,
                put_top: post.top,
                topiclist_tab: (!post.good && !post.top)
              }"
          >
            {{post | formatTab}}
          </span>
          <router-link :to="{
              name: 'post_content',
              params: {
                id: post.id,
                name: post.author.loginname
              }
            }"
          >
            <!-- 标题 -->
            <span>{{post.title}}</span>
          </router-link>
          <!-- 时间 -->
          <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
        </li>
        <li><Pagination ref="pagination" @changePage="handleChangePage"></Pagination></li>
      </ul>
    </div>

  </div>
</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'PostList',
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      posts: [],
      postPage: 1,
      currentType: 'all',
      postTypeList: [
        {
          name: '全部',
          type: 'all'
        },
        {
          name: '精华',
          type: 'good'
        },
        {
          name: '分享',
          type: 'share'
        },
        {
          name: '问答',
          type: 'ask'
        },
        {
          name: '招聘',
          type: 'job'
        }
      ]
    }
  },
  mounted () {
    this.isLoading = true
    this.getPostListData(this.currentType, this.postPage)
  },

  methods: {
    handleChangePage (page) {
      this.postPage = page
      this.getPostListData(this.currentType, page)
    },
    getPostListData (tab, page = 1) {
      this.isLoading = true
      this.$http.getPostLiatData(tab, page)
        .then(data => {
          this.isLoading = false
          this.posts = data
          if (tab !== this.currentType) {
            this.currentType = tab
            this.$refs.pagination.returnHomePage()
          }
        })
    }
  }
}
</script>

<style scoped>
.post_list {
  background: #e1e1e1;
}
.posts {
  margin-top: 10px;
}
ul {
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
}
.post_list img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist_tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  float: right;
  text-align: right;
  min-width: 50px;
  white-space: nowrap;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar .toobar-item {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
  padding: 3px;
}

.toobar .toobar-item:hover {
  color: #9e78c0;
}

.toobar .toobar-item.active {
  color: #fff;
  background: #80bd01;
  border-radius: 3px;
}
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
