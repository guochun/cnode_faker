<template>
  <div class="header clearfix">
    <router-link :to="{name: 'root'}">
      <img src="../assets/cnodejs_light.svg" alt="logo">
    </router-link>
    <ul>
      <router-link  :to="{name: 'root'}" tag="li"><a>首页</a></router-link>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped>
.header {
  background: #5a5555;
  height: 50px;
  overflow: hidden;
}
img {
  max-width: 120px;
  margin-top: 10px;
  margin-left: 100px;
}
ul {

  float: right;
  margin: 8px 100px;
}
li {
  display: inline-block;
  padding: 10px 15px;
}
a {
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  text-shadow: none;
}
</style>
