<template>
    <UCarousel dir="ltr" v-slot="{ item }" :items="items" :ui="{ item: '' }">
    <img :src="item" width="640" height="300" class="rounded-lg w-[600px] h-[250px]">
  </UCarousel>
</template>
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/300?random=1',
  'https://picsum.photos/640/300?random=2',
  'https://picsum.photos/640/300?random=3',
  'https://picsum.photos/640/300?random=4',
  'https://picsum.photos/640/300?random=5',
  'https://picsum.photos/640/300?random=6'
]
</script>