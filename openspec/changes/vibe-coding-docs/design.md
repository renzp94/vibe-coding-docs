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

**Non-Goals:**
- 具体教学内容的编写（仅搭建框架）
- 用户认证系统
- 后端 API 开发
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
└── package.json
```

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| VitePress 主题定制复杂度高 | 使用 CSS 变量覆盖 + 自定义组件，保留默认结构 |
| 搜索功能对中文支持有限 | 配置自定义搜索或接入 Algolia DocSearch |
| 移动端体验需要额外优化 | 使用响应式设计，针对移动端调整字体大小和间距 |

## Migration Plan

本项目为全新项目，无需迁移。部署流程：
1. 本地开发测试
2. 构建静态文件
3. 部署到 Vercel/Cloudflare Pages
4. 配置自定义域名（可选）

## Open Questions

- 是否需要集成评论系统（如 Giscus）？
- 是否需要多语言支持？
- 是否需要版本控制（如不同版本的教程）？
