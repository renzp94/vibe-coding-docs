<template>
  <div class="giscus-comments">
    <div class="comments-header">
      <h3>💬 评论</h3>
      <p class="comments-hint">使用 GitHub 账号登录后即可发表评论</p>
    </div>
    <div class="giscus-container" ref="giscusContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const giscusContainer = ref(null)

// Giscus 配置
const GISCUS_CONFIG = {
  repo: 'renzp94/vibe-coding-docs',
  repoId: 'R_kgDORx69RQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDORx69Rc4C5Xn8',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'preferred_color_scheme',
  lang: 'zh-CN',
  loading: 'lazy'
}

onMounted(() => {
  // 动态加载 Giscus 脚本
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', GISCUS_CONFIG.repo)
  script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
  script.setAttribute('data-category', GISCUS_CONFIG.category)
  script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
  script.setAttribute('data-mapping', GISCUS_CONFIG.mapping)
  script.setAttribute('data-strict', GISCUS_CONFIG.strict)
  script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled)
  script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata)
  script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition)
  script.setAttribute('data-theme', GISCUS_CONFIG.theme)
  script.setAttribute('data-lang', GISCUS_CONFIG.lang)
  script.setAttribute('data-loading', GISCUS_CONFIG.loading)
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  if (giscusContainer.value) {
    giscusContainer.value.appendChild(script)
  }
})
</script>

<style scoped>
.giscus-comments {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}

.comments-header {
  margin-bottom: 24px;
}

.comments-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.comments-hint {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.giscus-container {
  min-height: 200px;
}
</style>
