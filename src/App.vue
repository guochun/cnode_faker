<template>
  <div id="app">
    <Header />
  </div>
</template>
<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line
    Header
  }
}
</script>

<style>
.clearfix ::after {
  content: "";
  display: block;
  clear: both;
}
</style>
