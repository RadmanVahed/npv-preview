<template>
  <UApp>
    <div class="md:w-[25rem] md:mx-auto md:border border-[var(--ui-border)] h-[calc(100vh - 200px)]">
      <NuxtLayout>
        <NuxtPwaManifest />
        <NuxtPage />
        <BaseTheLoginPopup />
      </NuxtLayout>
    </div>
  </UApp>
</template>