<template>
    <div dir="rtl" @click="openPath()" class="bg-surface w-full flex flex-row justify-start items-center rounded-lg shadow p-4 gap-6 border border-[var(--ui-border)]">
        <img src="assets/images/appointment.svg">
        <div class="flex flex-col gap-2"><span class="font-bold light:text-neutral-800">{{ p.service.label }}
                </span><span class="text-sm light:text-neutral-500">{{ p.service.content }}</span></div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
interface ServiceType {
    label: string;
    content: string;
    image: string;
    path: string;
}

const p = defineProps<{
    service: ServiceType;
}>();


function openPath() {
    router.push(p.service.path)
}

</script>