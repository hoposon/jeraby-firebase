<template>
  <div>{{ translate('h1.home') }}</div>
  <!-- <router-link to="contact">
    Contact
  </router-link> -->
  <div
    class="products-container"
  >
    <div
      class="grid-container grid-container__one-pic"
    >
      <img 
        src="/main-1.jpg" 
        alt="main-1" 
        class="grid-img grid-img__1 grid-img__1-1-left"
      >
      <div
        class="info info__1-1-left"
      >
        This is an Info
      </div>
    </div>
    <div
      class="grid-container grid-container__one-pic"
    >
      <div
        class="info info__1-1-right"
      >
        This is an Info
      </div>
      <img 
        src="/main-1.jpg" 
        alt="main-1" 
        class="grid-img grid-img__1 grid-img__1-1-right"
      >
    </div>
    <div
      class="grid-container grid-container__two-pic"
    >
      <img 
        src="/main-1.jpg" 
        alt="main-1" 
        class="grid-img grid-img__2 grid-img__2-1-left"
      >
      <div
        class="info info__2"
      >
        This is an Info
      </div>
      <img 
        src="/main-2.jpg" 
        alt="main-2" 
        class="grid-img grid-img__2 grid-img__2-2-right"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TranslateKey } from '../localizations/localizations'

const translate = inject(TranslateKey, () => '')

</script>

<style lang="stylus">
  
  .grid-container
    display grid
    grid-template-rows repeat(20, 30px)
    &__one-pic
      grid-template-columns 1fr repeat(18, 5%) 1fr
    &__two-pic
      grid-template-columns 1fr repeat(18, 5%) 1fr
  
  .grid-img
    &__1
      height 600px
      &-1-left
        grid-column 13
        justify-self end
      &-1-right
        grid-column 9
    &__2
      &-1-left
        height 600px
        grid-column 9
        grid-row 3
        justify-self end
      &-2-right
        height 700px
        grid-column 12

  .info
    width 250px
    height 250px
    background red
    border 1px solid black
    z-index 10
    &__1-1-left
      grid-column 13
      grid-row 5
    &__1-1-right
      grid-column 9
      grid-row 6
      justify-self end
    &__2
      grid-column 9
      grid-row 10


</style>