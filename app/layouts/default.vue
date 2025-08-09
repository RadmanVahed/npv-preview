<template>
    <UContainer class="min-h-screen flex flex-col">
        <header class="flex-shrink-0">
            <LayoutDefaultTheHeader />
        </header>
        <slot />
        <footer class="flex-shrink-0 mt-auto">
           <LayoutDefaultTheFooter />
        </footer>
    </UContainer>
</template>


