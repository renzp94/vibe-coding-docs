<template>
  <DefaultLayout>
    <template #doc-footer-before>
      <ContentTracker :pagePath="pagePath" />
      <GiscusComments />
    </template>
  </DefaultLayout>
</template>

<script setup>
import { useData } from 'vitepress'
import DefaultLayout from 'vitepress/dist/client/theme-default/Layout.vue'
import { computed } from 'vue'

const { page } = useData()

const pagePath = computed(() => {
  return page.value?.filePath || ''
})
</script>
