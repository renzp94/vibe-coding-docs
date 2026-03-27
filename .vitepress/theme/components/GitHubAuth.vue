<template>
  <div class="github-auth">
    <div v-if="isLoading" class="auth-loading">
      <span class="loading-spinner"></span>
      <span>加载中...</span>
    </div>
    <template v-else>
      <div v-if="user" class="user-info">
        <img :src="user.avatar_url" :alt="user.login" class="avatar" />
        <span class="username">{{ user.login }}</span>
        <button @click="logout" class="auth-btn logout">退出</button>
      </div>
      <div v-else class="login-wrapper">
        <button @click="showLoginModal = true" class="auth-btn login">
          <svg class="github-icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub 登录
        </button>
      </div>
    </template>

    <!-- 简化登录弹窗 -->
    <div v-if="showLoginModal" class="login-modal-overlay" @click.self="showLoginModal = false">
      <div class="login-modal">
        <h3>连接 GitHub 账号</h3>
        <p>输入你的 GitHub 用户名即可显示登录状态</p>
        <input
          v-model="inputUsername"
          type="text"
          placeholder="GitHub 用户名"
          @keyup.enter="handleLogin"
        />
        <div class="modal-actions">
          <button @click="showLoginModal = false" class="btn-cancel">取消</button>
          <button @click="handleLogin" class="btn-confirm" :disabled="!inputUsername.trim()">连接</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)
const isLoading = ref(false)
const showLoginModal = ref(false)
const inputUsername = ref('')

onMounted(() => {
  // 检查本地存储的登录状态
  const savedUser = localStorage.getItem('github_user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }
})

async function handleLogin() {
  const username = inputUsername.value.trim()
  if (!username) return

  isLoading.value = true
  try {
    // 获取 GitHub 用户公开信息
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
      throw new Error('用户不存在')
    }
    const data = await response.json()

    user.value = {
      login: data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url
    }
    localStorage.setItem('github_user', JSON.stringify(user.value))
    showLoginModal.value = false
    inputUsername.value = ''
  } catch (error) {
    alert('获取 GitHub 用户信息失败：' + error.message)
  } finally {
    isLoading.value = false
  }
}

function logout() {
  user.value = null
  localStorage.removeItem('github_user')
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

.auth-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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

/* 登录弹窗样式 */
.login-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.login-modal {
  background: var(--vp-c-bg);
  padding: 24px;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.login-modal h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: var(--vp-c-text-1);
}

.login-modal p {
  margin: 0 0 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.login-modal input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  box-sizing: border-box;
}

.login-modal input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn-cancel,
.btn-confirm {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-cancel {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.btn-cancel:hover {
  background: var(--vp-c-bg-mute);
}

.btn-confirm {
  background: var(--vp-c-brand-1);
  color: white;
}

.btn-confirm:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}
</style>
