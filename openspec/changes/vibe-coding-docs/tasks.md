## 1. 项目初始化

- [ ] 1.1 初始化 VitePress 项目
  - 创建 package.json
  - 安装 vitepress 依赖
  - 创建 docs/ 目录结构
- [ ] 1.2 配置 VitePress 基础配置
  - 创建 .vitepress/config.ts
  - 配置站点标题和描述
  - 配置基本路由

## 2. Markdown 内容系统 (markdown-content)

- [ ] 2.1 创建示例 Markdown 内容
  - 创建 docs/index.md 首页
  - 创建 docs/guide/getting-started.md
  - 创建 docs/guide/what-is-vibe-coding.md
- [ ] 2.2 配置代码高亮
  - 配置 shiki 主题
  - 支持 JavaScript、TypeScript、Python、Bash 语言
- [ ] 2.3 配置 Frontmatter 解析
  - 验证 title、description 元数据正确显示
  - 配置 SEO meta 标签
- [ ] 2.4 配置静态资源引用
  - 创建 public/ 目录存放图片
  - 测试图片引用功能

## 3. 课程导航系统 (course-navigation)

- [ ] 3.1 配置侧边栏导航
  - 创建 .vitepress/sidebar.ts
  - 配置章节分组和嵌套结构
  - 实现章节折叠展开功能
- [ ] 3.2 配置面包屑导航
  - 启用 VitePress 面包屑功能
  - 自定义面包屑样式
- [ ] 3.3 配置上一页/下一页导航
  - 配置 docFooter 选项
  - 自定义分页导航样式
- [ ] 3.4 配置页面内目录 (TOC)
  - 启用 aside 配置
  - 配置 outline 深度和标题

## 4. UI 组件系统 (ui-components)

- [ ] 4.1 配置全局样式
  - 创建 .vitepress/theme/style.css
  - 定义 CSS 变量（颜色、字体、间距）
- [ ] 4.2 创建自定义主题
  - 创建 .vitepress/theme/index.ts
  - 注册自定义布局组件
- [ ] 4.3 实现自定义组件
  - 创建提示卡片组件 (TipCard)
  - 创建警告卡片组件 (WarningCard)
  - 创建危险提示组件 (DangerCard)
- [ ] 4.4 自定义按钮样式
  - 覆盖 VitePress 默认按钮样式
  - 实现药丸形状按钮
- [ ] 4.5 自定义链接样式
  - 覆盖 VitePress 默认链接颜色
  - 配置悬停效果

## 5. 响应式布局 (responsive-layout)

- [ ] 5.1 配置响应式断点
  - 定义移动端、平板端、桌面端断点
  - 使用 CSS media queries 实现响应式
- [ ] 5.2 移动端侧边栏适配
  - 配置移动端侧边栏抽屉效果
  - 添加遮罩层和关闭逻辑
- [ ] 5.3 移动端导航优化
  - 配置汉堡菜单按钮
  - 优化移动端顶部导航
- [ ] 5.4 字体响应式调整
  - 配置移动端标题字号缩小
  - 配置移动端正文字号调整
- [ ] 5.5 图片响应式优化
  - 确保图片不超出容器
  - 配置移动端图片懒加载

## 6. 内容填充与测试

- [ ] 6.1 编写 Vibe Coding 介绍文档
  - 什么是 Vibe Coding
  - Vibe Coding 的优势
  - 适用场景
- [ ] 6.2 编写快速开始指南
  - 环境准备
  - 第一个 Vibe Coding 示例
  - 常用工具和平台介绍
- [ ] 6.3 编写最佳实践文档
  - 提示词技巧
  - 代码审查要点
  - 常见陷阱
- [ ] 6.4 本地测试验证
  - 运行 npm run docs:dev 启动开发服务器
  - 验证所有页面正常显示
  - 验证导航功能正常

## 7. 部署配置

- [ ] 7.1 配置构建设置
  - 配置 .vitepress/config.ts 中的 build 选项
  - 配置输出目录
- [ ] 7.2 创建部署脚本
  - 创建 GitHub Actions 工作流（如需要）
  - 或配置 Vercel/Cloudflare Pages 自动部署
- [ ] 7.3 执行构建测试
  - 运行 npm run docs:build
  - 验证构建产物
- [ ] 7.4 部署到生产环境
  - 部署到目标平台
  - 验证线上访问正常
