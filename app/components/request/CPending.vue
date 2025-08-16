<template>
    <div class="border rtl flex flex-col gap-4 border-[var(--ui-border)] rounded-lg p-2">
        <div>
            <div class="flex justify-between">
                <h1>
                    جزییات درخواست بار
                </h1>
                <UIcon name="i-lucide-x" class="text-red-500 text-lgS" />
            </div>
            <div class="flex gap-2 mt-4">
                <UBadge variant="soft" label="بسته بندی وکیوم" />
                <UBadge variant="soft" label="مواد غذایی" />
                <UBadge variant="soft" label="کامیون" />
                <UBadge variant="soft" label="1 تن" />
            </div>
        </div>
        <div>
            <h1>مسیر مبدا و مقصد</h1>
            <UTimeline orientation="horizontal" size="3xs" color="neutral" :items="items" class="w-full mt-2" />
        </div>
        <div class="border-dashed items-center border border-[var(--ui-border)] rounded py-1 px-2 flex gap-2 w-full mt-2">
            <p class="w-full">مبلغ پرداختی:</p>
            <div class="h-auto border border-[var(--ui-border)]"></div>
            <span class="w-full flex justify-center">{{ splitNumber(12000000) }} تومان</span>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'
import { splitNumber } from '@/utils/UNumber'
const items = ref<TimelineItem[]>([
    {
        title: 'اصفهان - اصفهان',
    },
    {
        title: 'خوزستان - اهواز',
    }
])
</script>