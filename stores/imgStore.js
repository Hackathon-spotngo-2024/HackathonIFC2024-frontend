import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useImg = defineStore('img', () => {
  const images = ref([])
  const isDragging = ref(false)
  const fileInputRef = ref(null)

  const onFileSelect = (event) => {
    const files = event.target.files
    processFiles(files)
  }

  const processFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue
      if (!images.value.some((e) => e.name === files[i].name)) {
        images.value.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i])
        })
      }
    }
  }

  const onDragOver = (event) => {
    event.preventDefault()
    isDragging.value = false
  }

  const onDrop = (event) => {
    event.preventDefault()
    isDragging.value = false
    const files = event.dataTransfer.files
    processFiles(files)
  }

  return {
    isDragging,
    images,
    fileInputRef,
    onFileSelect,
    onDragOver,
    onDrop
  }
})
