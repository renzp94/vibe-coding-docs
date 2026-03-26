## Why

Vibe Coding 作为一种新兴的 AI 辅助编程方式正在改变开发者的工作方式，但目前缺乏系统化的中文学习资源。我们需要一个简洁优雅的教学网站来整合 Vibe Coding 的知识体系，帮助开发者快速掌握这种高效的编程模式。

## What Changes

- 创建一个静态网站项目，用于展示 Vibe Coding 教学内容
- 设计简洁优雅的 UI 风格，参考 Apple/iPhone 官网设计语言
- 内容使用 Markdown 格式存储，便于维护和版本控制
- 实现 Markdown 渲染引擎，支持代码高亮和交互式组件
- 构建课程导航系统，支持章节跳转和进度追踪
- 添加响应式布局，支持桌面和移动设备访问

## Capabilities

### New Capabilities
- `markdown-content`: Markdown 内容管理和渲染系统
- `course-navigation`: 课程导航和章节管理
- `ui-components`: 简洁优雅的 UI 组件库（参考 iPhone 风格）
- `responsive-layout`: 响应式布局系统

### Modified Capabilities
<!-- 无现有功能需要修改 -->

## Impact

- 新增网站项目代码库
- 需要选择静态站点生成方案（如 VitePress、Astro、Next.js 等）
- 依赖 Markdown 解析库和代码高亮库
- 可能需要部署到静态托管服务（如 Vercel、Cloudflare Pages 等）
