<template>
    <div v-if="!showForm">
        <div dir="rtl" class="mb-4">
            <h1 class="font-medium text-lg">درخواست های تکمیل نشده</h1>
        </div>
        <RequestCPending />
        <div @click="showForm = !showForm">
            <RequestCButton />
        </div>
    </div>
    <div class="flex flex-col gap-2 rtl" v-else>
        <UFormField label="شماره تماس جهت هماهنگی">
            <UInput default-value="09130000000" class="w-full" />
        </UFormField>
        <div class="flex w-full gap-1">
            <UFormField class="w-full" label="استان مبدا">
                <USelect class="w-full" :items="['اصفهان']" />
            </UFormField>
            <UFormField class="w-full" label="شهر مبدا">
                <USelect class="w-full" :items="['اصفهان']" />
            </UFormField>
        </div>
        <div>
            <LMap ref="mapRef" style="height: 500px" :zoom="13" :center="markerLatLng" :use-global-leaflet="false"
                @click="onMapClick">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" />
                <LMarker :lat-lng="markerLatLng" />
            </LMap>
            <button @click="setUserLocation" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                موقعیت کنونی من
            </button>
        </div>
        <UFormField label="آدرس دقیق مبدا">
            <UTextarea class="w-full" />
        </UFormField>
        <div class="flex w-full gap-1">
            <UFormField class="w-full" label="استان مقصد">
                <USelect class="w-full" :items="['خوزستان']" />
            </UFormField>
            <UFormField class="w-full" label="شهر مقصد">
                <USelect class="w-full" :items="['اهواز']" />
            </UFormField>
        </div>
        <div>
            <LMap ref="mapRef" style="height: 500px" :zoom="13" :center="markerLatLng2" :use-global-leaflet="false"
                @click="onMapClick">
                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                    layer-type="base" name="OpenStreetMap" />
                <LMarker :lat-lng="markerLatLng" />
            </LMap>
            <button @click="setUserLocation" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                موقعیت کنونی من
            </button>
        </div>
        <UFormField label="آدرس دقیق مقصد">
            <UTextarea class="w-full" />
        </UFormField>
        <div class="w-full flex gap-1">
            <UFormField class="w-full" label="نوع وسیله نقلیه">
                <USelect class="w-full" :items="['کامیون', 'وانت', 'تریلی']" />
            </UFormField>
            <UFormField class="w-full" label="نوع کالا">
                <USelect class="w-full" :items="['پوشاک', 'آهن', 'مواد غذایی']" />
            </UFormField>
        </div>
        <div class="w-full flex gap-1">
            <UFormField class="w-full" label="نوع بسته بندی">
                <USelect class="w-full" :items="['کارتن مقوایی', 'وکیوم']" />
            </UFormField>
            <UFormField class="w-full" label="وزن کالا">
                <UInput placeholder="بر حسب تن" class="w-full" />
            </UFormField>
        </div>
        <UFormField label="توضیحات بار">
            <UTextarea class="w-full" />
        </UFormField>
        <div class="flex w-full items-end gap-1">
            <UFormField class="w-full" label="مبلغ پرداختی">
                <UInput placeholder="مبلغ کرایه را وارد کنید" v-model="price" class="w-full" />
            </UFormField>
            <div
                class="border-dashed h-fit items-center border border-[var(--ui-border)] rounded py-1 px-2 flex gap-2 w-full mt-2">
                <span class="w-full flex justify-center">{{ splitNumber(price) }} تومان</span>
            </div>
        </div>
        <UButton label="ثبت بار" class="mt-4" block />
    </div>

</template>
<script setup lang="ts">
import L from '@nuxtjs/leaflet'
import { splitNumber } from '@/utils/UNumber'
const price = ref()
const showForm = ref(false)
// مختصات اولیه مارکر، می‌توانید آن را به عنوان یک مقدار پیش‌فرض یا از طریق props دریافت کنید
const markerLatLng = ref([32.65300096814452, 51.66696086165911]);
const markerLatLng2 = ref([31.31844779444928, 48.678646982574676]);
const mapRef = ref<any | null>(null);
const onMapClick = (e: any) => {
    const { lat, lng } = e.latlng; // مختصات کلیک شده
    markerLatLng.value = [lat, lng];
    console.log('Location selected by click:', markerLatLng.value);
};

// تابع برای دریافت موقعیت مکانی کاربر و تنظیم مارکر
const setUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                markerLatLng.value = [lat, lng];

                // اگر بخواهید نقشه را هم به موقعیت کاربر منتقل کنید
                if (mapRef.value) {
                    mapRef.value.setView([lat, lng], 13); // زوم 13 برای نمایش جزئیات بیشتر
                }
            },
            (error) => {
                console.error('Error getting user location:', error);
                // در صورت بروز خطا، می‌توانید یک پیام به کاربر نمایش دهید
                alert('Could not retrieve your location. Please check permissions or try again.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
};

</script>

<style scoped>
button {
    display: block;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
}
</style>