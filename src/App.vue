<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="stylus">
  // try to set absolute path(@avast/common) instead of relative path. There should be some setting for HMR update in vite config
  // @import "../../../common/styles/Themes"
  @import "./styles/global-styles"
  
</style>
