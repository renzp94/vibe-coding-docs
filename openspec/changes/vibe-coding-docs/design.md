## Context

本项目是一个 Vibe Coding 教学网站，旨在系统化地传播 AI 辅助编程的知识体系。网站需要支持 Markdown 格式的教学内容，呈现简洁优雅的视觉风格，参考 Apple/iPhone 官网的设计语言。

**当前状态**: 全新项目，从零开始构建

**约束条件**:
- 内容使用 Markdown 格式存储
- 静态网站，便于部署和维护
- 需要良好的 SEO 支持
- 支持代码高亮和交互式组件

## Goals / Non-Goals

**Goals:**
- 选择合适的技术栈（静态站点生成器）
- 设计组件架构和目录结构
- 定义 UI 设计系统（颜色、字体、间距）
- 规划内容组织方式
- 制定部署策略
- 集成 GitHub 授权登录
- 集成基于 GitHub Issues 的评论系统

**Non-Goals:**
- 具体教学内容的编写（仅搭建框架）
- ~~用户认证系统~~（使用 GitHub OAuth 纯前端实现）
- ~~后端 API 开发~~（纯静态网站，无需后端）
- ~~评论系统后端~~（使用 Giscus 基于 GitHub Issues）
- 复杂的动态功能

## Decisions

### 技术栈选择: VitePress

**选择**: 使用 VitePress 作为静态站点生成器

**理由**:
- 原生支持 Markdown，无需额外配置
- 基于 Vue 3，组件化开发体验好
- 内置代码高亮、搜索、导航等功能
- 构建速度快，适合文档类网站
- 支持自定义主题，可以实现 iPhone 风格设计

**替代方案考虑**:
- **Astro**: 更灵活，但需要更多配置来实现 Markdown 功能
- **Next.js**: 功能强大但偏重，对于纯文档网站过于复杂
- **Docusaurus**: 功能丰富但主题定制限制较多

### UI 设计系统

**颜色方案**:
- 主背景色: #FFFFFF（纯白）
- 次背景色: #F5F5F7（Apple 灰）
- 主文字色: #1D1D1F（深黑）
- 次文字色: #86868B（中灰）
- 强调色: #0071E3（Apple 蓝）
- 边框色: #D2D2D7（浅灰）

**字体系统**:
- 标题字体: SF Pro Display / system-ui
- 正文字体: SF Pro Text / -apple-system
- 代码字体: SF Mono / Menlo / monospace

**间距系统**:
- 大区块间距: 80-120px
- 中等间距: 40-60px
- 小间距: 20-24px
- 微间距: 8-12px

### 目录结构

```
.
├── docs/                   # Markdown 内容目录
│   ├── index.md           # 首页
│   ├── guide/             # 指南章节
│   │   ├── index.md
│   │   ├── getting-started.md
│   │   └── ...
│   └── examples/          # 示例章节
│       └── ...
├── .vitepress/            # VitePress 配置
│   ├── config.ts          # 站点配置
│   ├── theme/             # 自定义主题
│   │   ├── index.ts
│   │   ├── style.css      # 全局样式
│   │   └── components/    # 自定义组件
│   └── sidebar.ts         # 导航配置
├── deno.json              # Deno 配置
├── main.ts                # Deno Deploy 入口文件
└── package.json
```

### 部署平台选择: Deno Deploy

**选择**: 使用 Deno Deploy 进行静态站点托管

**理由**:
- 原生支持 Deno 运行时，与现代前端工具链兼容性良好
- 全球边缘网络，访问速度快
- 与 GitHub 集成简单，支持自动部署
- 免费额度充足，适合文档类网站
- 支持自定义域名和 HTTPS

**替代方案考虑**:
- **Vercel**: 功能丰富但对 VitePress 的缓存处理有时需要额外配置
- **Cloudflare Pages**: 性能优秀但构建环境限制较多
- **GitHub Pages**: 免费但缺乏边缘部署能力，国内访问速度一般

### 用户认证方案: GitHub OAuth

**选择**: 使用 GitHub OAuth 纯前端授权登录

**理由**:
- 无需自建后端，纯前端实现
- Vibe Coding 目标用户基本都拥有 GitHub 账号
- 可以获取用户基本信息（头像、用户名）用于显示
- 与评论系统（Giscus）使用同一平台，体验一致

**实现方式**:
- 使用 GitHub OAuth App 或 GitHub App
- 前端通过 OAuth 流程获取 access token
- 使用 localStorage 存储登录状态
- 提供登录/登出按钮组件

### 评论系统方案: Giscus

**选择**: 使用 Giscus 基于 GitHub Discussions 的评论系统

**理由**:
- 完全免费，无需自建后端
- 数据存储在 GitHub Discussions 中，便于管理
- 支持 Markdown、代码高亮、表情回复
- 与 GitHub 账号体系打通，用户无需额外注册
- 支持多主题，可适配本站设计风格

**实现方式**:
- 在仓库启用 GitHub Discussions 功能
- 安装 Giscus GitHub App
- 在页面中嵌入 Giscus 组件
- 配置主题与站点风格一致

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| VitePress 主题定制复杂度高 | 使用 CSS 变量覆盖 + 自定义组件，保留默认结构 |
| 搜索功能对中文支持有限 | 配置自定义搜索或接入 Algolia DocSearch |
| 移动端体验需要额外优化 | 使用响应式设计，针对移动端调整字体大小和间距 |

## Migration Plan

本项目为全新项目，无需迁移。部署流程：
1. 本地开发测试
2. 构建静态文件（VitePress 生成到 docs/.vitepress/dist）
3. 使用 Deno Deploy 部署静态文件
4. 配置自定义域名（可选）

**Deno Deploy 部署方式**:
- 方式一：使用 GitHub 集成，推送到主分支自动部署
- 方式二：使用 deployctl CLI 手动部署
- 静态文件通过 `include` 配置指定 dist 目录

## Open Questions

- 是否需要集成评论系统（如 Giscus）？
- 是否需要多语言支持？
- 是否需要版本控制（如不同版本的教程）？
