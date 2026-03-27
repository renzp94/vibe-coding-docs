// 在导航栏添加 GitHub 登录按钮（简化版）
(function() {
  function addAuthButton() {
    const nav = document.querySelector('.VPNavBarMenu, .VPNavBarMenuGroup')
    if (!nav || document.querySelector('.github-auth-nav')) return

    const authContainer = document.createElement('div')
    authContainer.className = 'github-auth-nav'
    authContainer.style.cssText = 'display:flex;align-items:center;margin-left:16px;'

    // 检查登录状态
    const savedUser = localStorage.getItem('github_user')
    if (savedUser) {
      const user = JSON.parse(savedUser)
      authContainer.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="window.showGitHubLogout && window.showGitHubLogout()">
          <img src="${user.avatar_url}" alt="${user.login}" style="width:28px;height:28px;border-radius:50%;border:1px solid var(--vp-c-divider);" />
          <span style="font-size:13px;font-weight:500;color:var(--vp-c-text-1);">${user.login}</span>
        </div>
      `
    } else {
      authContainer.innerHTML = `
        <button onclick="window.showGitHubLogin && window.showGitHubLogin()"
           style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:980px;font-size:13px;font-weight:500;background:var(--vp-c-brand-1);color:white;border:none;cursor:pointer;transition:all 0.3s ease;"
           onmouseover="this.style.background='var(--vp-c-brand-2)'"
           onmouseout="this.style.background='var(--vp-c-brand-1)'">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          登录
        </button>
      `
    }

    nav.appendChild(authContainer)
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAuthButton)
  } else {
    addAuthButton()
  }

  // 监听页面变化（VitePress 是 SPA）
  const observer = new MutationObserver(addAuthButton)
  observer.observe(document.body, { childList: true, subtree: true })

  // 监听 localStorage 变化，刷新登录状态
  window.addEventListener('storage', function(e) {
    if (e.key === 'github_user') {
      // 移除旧的登录按钮，重新添加
      const oldNav = document.querySelector('.github-auth-nav')
      if (oldNav) oldNav.remove()
      addAuthButton()
    }
  })
})()
