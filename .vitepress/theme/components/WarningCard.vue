<template>
  <div class="custom-block warning">
    <p class="custom-block-title">
      <span class="icon">⚠️</span>
      {{ title || '注意' }}
    </p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.icon {
  margin-right: 8px;
}
</style>
