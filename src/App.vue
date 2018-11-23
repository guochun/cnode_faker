<template>
  <div id="app">
    <header-nav />
    <div class="main">
      <router-view name="sliderBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
html {
  background: #e1e1e1;

}
.main {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
}
</style>
