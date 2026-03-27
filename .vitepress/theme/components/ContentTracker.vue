<template>
  <div class="content-tracker">
    <div class="tracker-header" @click="toggleExpanded">
      <div class="tracker-title">
        <svg class="tracker-icon" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.46-.984A.75.75 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"/>
        </svg>
        <span>内容变更历史</span>
      </div>
      <svg class="expand-icon" :class="{ expanded: isExpanded }" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 8L1 3h10l-5 5z"/>
      </svg>
    </div>
    <div v-if="isExpanded" class="tracker-content">
      <div v-if="isLoading" class="loading">加载中...</div>
      <div v-else-if="changes.length === 0" class="no-changes">暂无变更记录</div>
      <div v-else class="changes-list">
        <div
          v-for="change in changes"
          :key="change.commitHash"
          class="change-item"
          :class="change.type"
          :title="formatTooltip(change)"
        >
          <span class="change-type-badge" :class="change.type">
            {{ getTypeLabel(change.type) }}
          </span>
          <span class="change-message">{{ change.message }}</span>
          <span class="change-date">{{ formatDate(change.date) }}</span>
          <span class="change-author">{{ change.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  pagePath: {
    type: String,
    required: true
  }
})

const isExpanded = ref(false)
const isLoading = ref(false)
const changes = ref([])

// 模拟从后端获取 git blame 数据
// 实际项目中需要通过 API 获取
async function fetchChanges() {
  isLoading.value = true
  try {
    // 这里应该调用你的 Deno Deploy API 获取真实数据
    // const response = await fetch(`https://your-api.deno.dev/blame?path=${props.pagePath}`)
    // changes.value = await response.json()

    // 模拟数据用于演示
    changes.value = [
      {
        commitHash: 'abc123',
        type: 'add',
        message: '添加新章节：快速开始指南',
        date: '2024-01-15T10:30:00Z',
        author: '张三'
      },
      {
        commitHash: 'def456',
        type: 'modify',
        message: '更新代码示例',
        date: '2024-01-14T14:20:00Z',
        author: '李四'
      },
      {
        commitHash: 'ghi789',
        type: 'delete',
        message: '删除过时的配置说明',
        date: '2024-01-13T09:15:00Z',
        author: '王五'
      }
    ]
  } catch (error) {
    console.error('获取变更历史失败:', error)
  } finally {
    isLoading.value = false
  }
}

function toggleExpanded() {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value && changes.value.length === 0) {
    fetchChanges()
  }
}

function getTypeLabel(type) {
  const labels = {
    add: '新增',
    modify: '修改',
    delete: '删除'
  }
  return labels[type] || type
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

function formatTooltip(change) {
  return `${change.message}\n提交: ${change.commitHash}\n时间: ${formatDate(change.date)}\n作者: ${change.author}`
}

onMounted(() => {
  // 可以在这里预加载数据
})
</script>

<style scoped>
.content-tracker {
  margin-top: 32px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.tracker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}

.tracker-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tracker-icon {
  width: 16px;
  height: 16px;
  color: var(--vp-c-brand-1);
}

.expand-icon {
  width: 12px;
  height: 12px;
  color: var(--vp-c-text-2);
  transition: transform 0.3s ease;
}

.expand-icon.expanded {
  transform: rotate(180deg);
}

.tracker-content {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.loading, .no-changes {
  text-align: center;
  padding: 24px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.changes-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.change-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  font-size: 13px;
  transition: background 0.2s ease;
}

.change-item:hover {
  background: var(--vp-c-bg-mute);
}

.change-type-badge {
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.change-type-badge.add {
  background: #d4edda;
  color: #155724;
}

.change-type-badge.modify {
  background: #fff3cd;
  color: #856404;
}

.change-type-badge.delete {
  background: #f8d7da;
  color: #721c24;
}

.change-message {
  flex: 1;
  color: var(--vp-c-text-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.change-date {
  flex-shrink: 0;
  color: var(--vp-c-text-2);
}

.change-author {
  flex-shrink: 0;
  color: var(--vp-c-text-2);
}
</style>
