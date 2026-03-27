---
layout: doc
---

# 环境准备

## 安装 Node.js

VitePress 需要 Node.js 18 或更高版本。

### macOS

```bash
# 使用 Homebrew
brew install node

# 或使用 nvm
nvm install 20
nvm use 20
```

### Windows

下载安装包：[nodejs.org](https://nodejs.org)

### 验证安装

```bash
node --version  # v20.x.x
npm --version   # 10.x.x
```

## 安装 Git

```bash
# macOS
brew install git

# Windows
# 下载：https://git-scm.com/download/win
```

## 配置 AI 工具

### Claude (推荐)

1. 访问 [claude.ai](https://claude.ai)
2. 注册账号
3. 选择 Claude 3.5 Sonnet 或 Claude 3 Opus

### Cursor IDE

```bash
# macOS
brew install --cask cursor

# 或使用官方下载
# https://cursor.sh
```

## 创建项目

```bash
# 创建项目目录
mkdir my-vibe-project
cd my-vibe-project

# 初始化
npm init -y

# 安装框架（以 React 为例）
npm install react react-dom
npm install -D vite @vitejs/plugin-react
```

## 配置编辑器

### VS Code 推荐插件

- **GitHub Copilot** - AI 代码补全
- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **Tailwind CSS IntelliSense** - CSS 提示

### 设置快捷键

```json
{
  "editor.inlineSuggest.enabled": true,
  "github.copilot.enable": {
    "*": true
  }
}
```
