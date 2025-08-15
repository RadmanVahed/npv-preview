<template>
    <div dir="rtl" class="flex justify-between p-4">
        <span class="text-lg font-bold">MAK</span>
        <div @click="t()">
            <UIcon name="i-lucide-circle-user-round" class="size-7 text-[var(--ui-text-muted)]" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useConfigStore } from '~/store/config';


const configStore = useConfigStore()

function t () {
configStore.changeModalValue()
}

</script>