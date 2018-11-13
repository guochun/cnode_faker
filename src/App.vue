<template>
  <div id="app">
    <header-nav />
    <div class="main">
       <router-view name="main"></router-view>
    </div>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line
    HeaderNav
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
