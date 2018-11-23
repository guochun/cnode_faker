<template>
  <div class="article">
    <!-- loading 动画 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>

    <div v-else>

      <!-- 文章标题部分开始 -->
      <div class="topic_header">
       <div class="topic_title">
          <span
            :class="{
              put_good: post.good,
              put_top: post.top,
              topiclist_tab: (!post.good && !post.top)
            }"
          >
            {{post | formatPostType}}
          </span>
          {{post.title}}
       </div>
        <ul>
          <li>•发布于: {{post.create_at | formatDate}}</li>
          <li>•作者: {{post.author.loginname}}</li>
          <li>•{{post.visit_count}} 次浏览</li>
          <li>•来至 {{post | formatPostType}}</li>
        </ul>
        <div class="topic_content" v-html="post.content" ></div>
      </div>
      <!-- 文章标题部分结束 -->

      <div id="reply">
        <div class="topbar">{{post.reply_count}} 回复</div>
        <div v-for="(reply, index) in post.replies" :key="index" class="replySec">
          <div class="replyUp">
            <router-link :to="{name: 'user_info', params:{name: reply.author.loginname}}">
              <img :src="reply.author.avatar_url" alt="avatar">
            </router-link>
            <router-link :to="{name: 'user_info', params:{name: reply.author.loginname}}">
              <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>{{index+1}}楼</span>
            <span v-if="reply.ups.lenght > 0">☝{{reply.ups.length}}</span>
            <span v-else></span>
          </div>
          <p  class="reply_html" v-html="reply.content"></p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Articel',
  data () {
    return {
      isLoading: true,
      post: {}
    }
  },
  mounted () {
    this.$http.getArticelData(this.$route.params.id)
      .then((data) => {
        this.isLoading = false
        this.post = data
      })
  },
  watch: {
    '$route' (to, from) {
      this.$http.getArticelData(this.$route.params.id)
        .then((data) => {
          this.isLoading = false
          this.post = data
        })
    }
  }
}
</script>

<style>
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 8px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
  margin-right: 5px;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

.markdown-text img {
  width: 92% !important;
}

.reply_html {
  margin-top: 15px;
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
</style>
