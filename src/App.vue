<template>
  <!-- TODO - make this a common component with slot -->
  <div
    id="jeraby"
    class="app"
  >
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="stylus">
  // try to set absolute path(@avast/common) instead of relative path. There should be some setting for HMR update in vite config
  // @import "../../../common/styles/Themes"
  // @import "../../../common/styles/GlobalStyles"
</style>
