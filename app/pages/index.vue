<template>
    <HomeTheBanner />
    <div v-for="
    service in services">
        <HomeTheServices :service="service" class="mt-4"/>
    </div>
</template>


<script setup lang="ts">

const services = [
    {
        label:'لیست بارها',
        content:'لیست بارهای اعلام شده',
        path:'requests',
        image:''
    },
    {
        label:'بارنامه',
        content:'درخواست بارنامه برای بارها (تست)',
        path:'bill-of-lading',
        image:''
    },
    {
        label:'بیمه ماشین',
        content:'درخواست بیمه برای ماشین (تست)',
        path:'car-insurance',
        image:''
    }
]
</script>