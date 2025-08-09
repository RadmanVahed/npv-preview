export const useConfigStore = defineStore('config', () => {
  const openModal = ref(false)

  const changeModalValue = () => {
    openModal.value = !openModal.value
  }
  return { openModal , changeModalValue }
})