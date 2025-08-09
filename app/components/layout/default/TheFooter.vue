<template>
  <UTabs :items="items" v-model="active" :content="false" class="w-full my-4" />
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const route = useRoute()
const router = useRouter()

const items = ref<TabsItem[]>([
  {
    icon: 'i-lucide-clipboard-list',
    to: '/my-requests'
  },
  {
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    icon: 'i-lucide-circle-plus',
    to: '/new-request'
  }
])

const active = ref('0')
let isRouteChange = false // Flag to prevent circular updates

const setActiveTabFromRoute = () => {
  const path = route.path
  console.log('Route path:', path)
  
  isRouteChange = true // Set flag before updating active
  
  if (path === '/') {
    active.value = '1' // Home is the second tab, index 1
  } else if (path.startsWith('/my-requests')) {
    active.value = '0'
  } else if (path.startsWith('/new-request')) {
    active.value = '2'
  }
  
  // Reset flag after a short delay
  nextTick(() => {
    isRouteChange = false
  })
}

// Watch route changes and update active tab
watch(
  () => route.path,
  () => setActiveTabFromRoute(),
  { immediate: true }
)

// Watch active tab changes and navigate (only when not a route change)
watch(active, (val) => {
  console.log('Active tab changed to:', val)
  
  // Only navigate if this isn't triggered by a route change
  if (!isRouteChange) {
    const target = items.value[Number(val)]?.to
    if (target && target !== route.path) {
      router.push(target)
    }
  }
})
</script>
