<template>
  <div id="app">
    <header-nav />
    <div class="main">
       <post-list/>
    </div>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav'
import PostList from './components/PostList'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line
    HeaderNav,
    PostList
  }
}
</script>

<style>
.clearfix ::after {
  content: "";
  display: block;
  clear: both;
}
.main {
  width: 100%;
  margin: 0 auto;

}
</style>
