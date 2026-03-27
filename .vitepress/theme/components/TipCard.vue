<template>
  <div class="custom-block tip">
    <p class="custom-block-title">
      <span class="icon">💡</span>
      {{ title || '提示' }}
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
