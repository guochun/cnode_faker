<template>
  <div>
    <div  class="loading" v-if="isLoading">
      <img :src="loadingUrl">
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    loadingUrl: {
      type: String,
      default: '/img/loading.078fcd09.gif'
    }
  }
}
</script>

<style scoped>
.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
