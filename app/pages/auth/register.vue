<template>
    <div class="h-screen flex flex-col">
        <div class="flex items-center justify-between">
        <h1 class="text-xl my-4">Register</h1>
         <div @click="back()">
            <UIcon name="i-lucide-arrow-right" class="size-8" />
         </div>
    </div>
    <div class="flex flex-col gap-4 mt-8" v-if="step == 0">
        <div>
            <UCheckbox v-model="checkBox1"  class="relative top-6 left-2" />
            <img @click="changeBox1()" :src="images[0]" width="320" height="320" class="rounded-lg w-full h-[200px]"></img>
        </div>
        <div>
             <UCheckbox v-model="checkBox2" class="relative top-6 left-2" />
            <img @click="changeBox2()" :src="images[1]" width="320" height="320" class="rounded-lg w-full h-[200px]"></img>
        </div>
        
    </div>
    <div  class="flex flex-col flex-shrink-0 my-auto gap-4" v-else-if="step == 1">
        <UFormField label="Phone Number">
            <UInput class="w-full" />
        </UFormField>
       
    </div>
     <div  class="flex justify-center flex-col gap-4 flex-shrink-0 my-auto" v-else-if="step == 2">
         <h1 class="flex justify-center">Enter the code sent.</h1>
         <UPinInput class="justify-center" :length="6" />
         <UButton variant="link" @click="back()" class="flex justify-center text-sm">Change Number</UButton>
     </div>
      <div  class="flex flex-col gap-4 mt-8" v-else-if="step == 3">
        <div class="flex flex-col gap-2" v-if="checkBox1">
            <UFormField label="national code">
            <UInput class="w-full" />
        </UFormField>
        <UFormField label="birthdate">
            <UInput class="w-full" />
        </UFormField>
        </div>
        <div class="flex flex-col gap-2" v-else>
            <UFormField label="Car Type">
            <UInput class="w-full" />
        </UFormField>
        <UFormField label="Loader Type">
            <UInput class="w-full" />
        </UFormField>
        <UFormField label="Loader Feature">
            <UInput class="w-full" />
        </UFormField>
        <UFormField label="Car License plate">
            <UInput class="w-full" />
        </UFormField>
        <UFormField label="Smart card number">
            <UInput class="w-full" />
        </UFormField>

        </div>
      </div>
      <div class="flex flex-col gap-4 mt-4" v-else-if="step == 4">
        <img :src="images[0]" width="320" height="320" class="rounded-lg w-full h-[200px]"></img>
        <div class="p-2">
            <UFileUpload label="Drop your video here" class="w-full min-h-48" />
        </div>
      </div>
      <footer class="flex-shrink-0 mt-auto mb-4">
         <UButton block @click="next()" label="Next" />
      </footer>
    </div>
</template>
<script setup lang="ts">
const router = useRouter()
const step = ref(0)
const checkBox1 = ref(false)
const checkBox2 = ref(false)
function changeBox1() {
    checkBox1.value = !checkBox1.value
    checkBox2.value = false
}
function changeBox2() {
    checkBox2.value = !checkBox2.value
    checkBox1.value = false
}
function back() {
    if (step.value > 0) {
        step.value -= 1
    }
}
function next() {
    if (step.value == 4) {
        router.push('/')
    } else if (step.value == 3 && !checkBox1 ) {
        router.push('/')
    } else {
        step.value +=1
    }
}
const images = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
]
definePageMeta({
    layout: 'auth'
})
</script>