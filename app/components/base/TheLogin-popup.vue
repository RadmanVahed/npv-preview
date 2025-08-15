<template>
    <UModal :open="configStore.openModal"  :close="{onClick: () => configStore.changeModalValue()}">
    <template #content>
      <div class="p-4">
        <div class="flex justify-center mb-4">
            <UIcon name="i-lucide-info" class="size-8" />
        </div>
        <span class="text-lg mb-2 flex justify-center">ورود/ثبت نام</span>
        <h1 class="flex mb-3 justify-center">لطفا وارد حساب کاربری خود شوید</h1>
        <UButton block to="auth/login" @click="configStore.changeModalValue()" label="ورود" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store/config';

const configStore = useConfigStore()
</script>