<template>
    
    <div class="h-screen flex items-center justify-center">
        <h1 class="text-2xl absolute top-15 flex justify-center">MAK LOGO</h1>
        <UCard>
        <template #header>
            <div class="flex justify-center">
                <h1>Login</h1>
            </div>
        </template>
        <UFormField label="Phone Number">
            <UInput class="w-full" />
        </UFormField>
        <UButton to="/" class="my-4 mt-8" label="Login" block />
        <template #footer>
            <div class="text-sm flex items-center justify-center">
                <h1>Don't have an account?</h1>
                <UButton to="register" variant="link">Register now</UButton>
            </div>
        </template>
    </UCard>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
</script>