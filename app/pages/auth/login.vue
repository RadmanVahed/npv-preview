<template>
    <div class="h-screen flex flex-col">
        <div class="flex items-center justify-between">
            <h1 class="text-xl my-4">ورود</h1>
            <div class="grid content-center" @click="prev()">
                <UIcon name="i-lucide-arrow-right" class="size-8" />
            </div>
        </div>
        <div class="p-16">
            <h1 class="text-2xl flex justify-center">MAK LOGO</h1>
        </div>
        <div v-if="step == 1" class="flex rtl justify-center flex-col gap-4 flex-shrink-0 my-auto">
            <UFormField label="شماره تلفن">
                <UInput class="w-full" />
            </UFormField>
            <div class="text-sm flex items-center justify-center">
                <h1>حساب کاربری ندارید؟</h1>
                <UButton to="register" variant="link">ثبت نام</UButton>
            </div>
        </div>
        <div v-else class="flex justify-center flex-col gap-4 flex-shrink-0 my-auto">
            <h1 class="flex justify-center">کد پیامک شده را وارد کنید</h1>
            <UPinInput class="justify-center" :length="6" />
            <UButton variant="link" @click="prev()" class="flex justify-center text-sm">ویرایش شماره</UButton>
        </div>
         <footer class="flex-shrink-0 mt-auto mb-4">
            <UButton v-if="step == 1" @click="next()" block label="ورود" />
            <UButton v-else to="/" block label="تایید کد" />
        </footer>
    </div>

</template>
<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
const router = useRouter()
const step = ref(1)

function next() {
    step.value += 1
}
function prev() {
    if (step.value == 1) {
        router.back()
    }
    step.value -= 1
}
</script>