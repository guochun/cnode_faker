<template>
  <div class="user_info">
    <Loading :isLoading="isLoading" >
       <div class="userInfomation">

        <section>
          <div class="user_name">
            <img :src="userInfo.avatar_url" alt="">
            <span>{{userInfo.loginname}}</span>
          </div>
          <p>{{userInfo.score}}积分</p>
          <p>创建时间: {{userInfo.create_at | formatDate}}</p>
        </section>

        <div class="replies">
          <p>回复的主题</p>
          <ul>
            <li v-for="item in userInfo.recent_replies" :key="item.id">
              <router-link :to="{
              name:'post_content',
              params:{
                id:item.id,
              }
              }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="topics">
          <p>创建的主题</p>
          <ul>
            <li v-for="item in userInfo.recent_topics" :key="item.id">
              <router-link :to="{
              name:'post_content',
              params:{
                id:item.id,
              }
              }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </Loading>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'UserInfo',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true,
      userInfo: {}
    }
  },
  mounted () {
    this.$http.getUserInfoData(this.$route.params.name)
      .then((data) => {
        this.userInfo = data
        this.isLoading = false
      })
  }

}
</script>

<style scoped>
.userInfomation {
  background: white;
  width: 75%;
  margin: 10px auto;
}
.userInfomation section {
  padding: 12px;
}
.userInfomation section > * {
  margin-bottom: 10px;
}

.user_name {
  display: flex;
  align-items: center;
}
.userInfomation img {
  width: 30px;
  margin-right: 10px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>
