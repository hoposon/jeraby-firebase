<template>
  <Product 
    v-for="product in products"
    :key="product.productId"
    :pictures-num=""
    :picture-side=""
    :product="product"
  />
</template>

<script setup lang="ts">
  import Product from './Product.vue'
  import { ProductType } from '../../data/products'

  interface Props {
    products: ProductType[]
  }

  defineProps<Props>()
</script>