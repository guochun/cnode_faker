<template>
  <div class="post_list">
    <!-- loading 动画 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <!-- 发布帖子列表 -->
    <div class="posts" v-else>
      <ul>
        <li >
          <div class="toobar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="post of posts" :key="post.id" class=".clearfix">
          <!-- 作者头像 -->
          <img :src="post.author.avatar_url" alt="author_avatar">
          <!-- 回复人数和访问人数 -->
          <span class="allcount">
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
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
                id: post.id
              }
            }"
          >
            <!-- 标题 -->
            <span >{{post.title}}</span>
          </router-link>
          <!-- 时间 -->
          <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      isLoading: false,
      posts: []
    }
  },
  mounted () {
    this.isLoading = true
    this.$http.getPostLiatData('http://cnodejs.org/api/v1/topics')
      .then(data => {
        this.isLoading = false
        this.posts = data
      })
  }
}
</script>

<style scoped>
.post_list {
  width: 100%;
  background: #e1e1e1;
}
.posts {
  margin-top: 10px;
}
ul {
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
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

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
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
