<template>
<div class="autherinfo">
  <div class="authersummay">
    <div class="topbar">作者</div>
    <router-link :to="{name: 'user_info', params:{name: userinfo.loginname}}">
      <img :src="userinfo.avatar_url" alt="avatar">
    </router-link>
  </div>
  <div class="recent_replies">
    <div class="topbar">作者最近主题</div>
    <ul>
      <li v-for="item in recent_topics_limit" :key="item.id">
        <router-link :to="{
            name:'post_content',
            params:{
              id:item.id,
              name: item.author.loginname
            }
          }"
        >
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="recent_topics">
    <div class="topbar">作者最近回复</div>
    <ul>
      <li v-for="item in  recent_replies_limit" :key="item.id">
        <router-link :to="{
            name:'post_content',
            params:{
              id:item.id,
              name: item.author.loginname
            }
          }"
          >
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'SliderBar',
  data () {
    return {
      userinfo: {}
    }
  },
  mounted () {
    this.$http.getUserInfoData(this.$route.params.name)
      .then((data) => {
        this.userinfo = data
      })
  },
  computed: {
    recent_replies_limit () {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5)
      }
      return this.userinfo.recent_replies
    },
    recent_topics_limit () {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5)
      }
      return this.userinfo.recent_topics
    }
  }
}
</script>

<style scoped>
.authersummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.autherinfo {
  width: 328px;
  float: right;
  margin-top: 15px;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
</style>
