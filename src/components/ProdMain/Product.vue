<template>
  <div
    class="products-container"
  >
    <div
      v-if="picturesNum===1 && pictureSide==='left'"
      class="grid-container grid-container__one-pic"
    >
      <img 
        :src="`/${product.images.main[0].path}`" 
        :alt="product.images.main[0].name" 
        class="grid-img grid-img__1 grid-img__1-1-left js-scroll"
      >
      <div
        class="info info__1-1-left js-scroll"
        :class="product.main.styleClass"
      >
        <h2>{{ translate(product.productName) }}</h2>
        <p>{{ translate(product.main.description) }}</p>
      </div>
    </div>
    <div
      v-if="picturesNum===1 && pictureSide==='right'"
      class="grid-container grid-container__one-pic"
    >
      <div
        class="info info__1-1-right js-scroll"
        :class="product.main.styleClass"
      >
        <h2>{{ translate(product.productName) }}</h2>
        <p>{{ translate(product.main.description) }}</p>
      </div>
      <img 
        :src="`/${product.images.main[0].path}`" 
        :alt="product.images.main[0].name" 
        class="grid-img grid-img__1 grid-img__1-1-right js-scroll"
      >
    </div>
    <div
      v-if="picturesNum===2"
      class="grid-container grid-container__two-pic"
    >
      <img 
        :src="`/${product.images.main[0].path}`" 
        :alt="product.images.main[0].name" 
        class="grid-img grid-img__2 grid-img__2-1-left js-scroll"
      >
      <div
        class="info info__2 js-scroll"
        :class="product.main.styleClass"
      >
        <h2>{{ translate(product.productName) }}</h2>
        <p>{{ translate(product.main.description) }}</p>
      </div>
      <img 
        :src="`/${product.images.main[1].path}`" 
        :alt="product.images.main[1].name" 
        class="grid-img grid-img__2 grid-img__2-2-right js-scroll"
      >
    </div>
  </div>
</template>

<script setup lang="ts">

  import { inject } from 'vue'
  import { TranslateKey } from '@/localizations/localizations'

  import { ProductType } from '../../data/products'

  interface Props {
    picturesNum: 1 | 2,
    pictureSide?: 'left' | 'right',
    product: ProductType
  }
  defineProps<Props>()

  const translate = inject(TranslateKey, () => '')


  // interface Props {
  //   picture: {
  //     picturesNum: 1 | 2,
  //     pictureSide?: 'left' | 'right',
  //     pictures: {
  //       pic1: {
  //         name: string,
  //         url: string
  //       }
  //       pic2?: {
  //         name: string,
  //         url: string
  //       }
  //     },
  //     info: {
  //       title: string,
  //       text: string,
  //       styleClass?: string[]
  //     }
  //   }
  // }
  

  // const props = defineProps<Props>()

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

  .js-scroll
    transition transform, background-color 1000ms ease
  // .js-scrolled - is only indicator for scrollAndOut
  .js-scrolled-tr-down
    transform translateY(20px)
  .js-scrolled-tr-up
    @media (min-width 650px)
      transform translateY(-20px)

</style>