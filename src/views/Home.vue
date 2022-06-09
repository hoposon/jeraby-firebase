<template>
  <div>{{ translate('h1.home') }}</div>
  <router-link to="contact">Contact</router-link>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { TranslateKey } from '../localizations/localizations'

const translate = inject(TranslateKey, () => '')

</script>