<template>
  <div class="github-auth">
    <div v-if="isLoading" class="auth-loading">
      <span class="loading-spinner"></span>
      <span>登录中...</span>
    </div>
    <template v-else>
      <div v-if="user" class="user-info">
        <img :src="user.avatar_url" :alt="user.login" class="avatar" />
        <span class="username">{{ user.login }}</span>
        <button @click="logout" class="auth-btn logout">退出</button>
      </div>
      <button v-else @click="login" class="auth-btn login">
        <svg class="github-icon" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        GitHub 登录
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)
const isLoading = ref(false)

// GitHub OAuth 配置
const GITHUB_CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID' // 需要在 GitHub 应用中配置
const REDIRECT_URI = typeof window !== 'undefined'
  ? `${window.location.origin}/callback`
  : ''

onMounted(() => {
  // 检查 URL 中是否有 OAuth 回调的 code 参数
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  if (code) {
    handleCallback(code)
  } else {
    // 检查本地存储的登录状态
    const savedUser = localStorage.getItem('github_user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }
})

function login() {
  // GitHub OAuth 授权 URL
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user:email`
  window.location.href = authUrl
}

async function handleCallback(code) {
  isLoading.value = true
  try {
    // 由于纯前端无法安全存储 client_secret，
    // 实际项目中需要通过 Cloudflare Workers、Deno Deploy Edge Functions 等无服务器函数处理
    // 这里提供一个模拟实现，实际使用时需要替换为真实的 API 端点

    // 示例：调用 Deno Deploy Edge Function 处理 OAuth
    const response = await fetch('https://your-deno-deploy-function.deno.dev/github-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, redirect_uri: REDIRECT_URI })
    })

    if (!response.ok) {
      throw new Error('授权失败')
    }

    const data = await response.json()
    user.value = data.user
    localStorage.setItem('github_user', JSON.stringify(data.user))
    localStorage.setItem('github_token', data.token)

    // 清除 URL 中的 code 参数
    window.history.replaceState({}, document.title, window.location.pathname)
  } catch (error) {
    console.error('登录失败:', error)
    alert('登录失败，请重试')
  } finally {
    isLoading.value = false
  }
}

function logout() {
  user.value = null
  localStorage.removeItem('github_user')
  localStorage.removeItem('github_token')
}
</script>

<style scoped>
.github-auth {
  display: flex;
  align-items: center;
}

.auth-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 980px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.auth-btn.login {
  background: var(--vp-c-brand-1);
  color: white;
}

.auth-btn.login:hover {
  background: var(--vp-c-brand-2);
}

.auth-btn.logout {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  padding: 6px 12px;
  font-size: 12px;
}

.auth-btn.logout:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.github-icon {
  width: 16px;
  height: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
}

.username {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.auth-loading {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
