## ADDED Requirements

### Requirement: Markdown 文件存储
系统 SHALL 支持将教学内容以 Markdown 格式存储在文件系统中。

#### Scenario: 创建新文档
- **WHEN** 作者在 docs/ 目录下创建 .md 文件
- **THEN** 系统 SHALL 能够识别并解析该文件
- **AND** 该文件 SHALL 出现在网站导航中

#### Scenario: 编辑现有文档
- **WHEN** 作者修改现有的 .md 文件
- **THEN** 系统 SHALL 热更新页面内容
- **AND** 刷新浏览器后 SHALL 显示最新内容

### Requirement: Markdown 渲染
系统 SHALL 将 Markdown 内容渲染为 HTML 页面。

#### Scenario: 基础 Markdown 渲染
- **WHEN** 用户访问包含 Markdown 内容的页面
- **THEN** 系统 SHALL 正确渲染标题、段落、列表、链接等基本元素
- **AND** 渲染后的页面 SHALL 符合设计系统样式规范

#### Scenario: 代码块高亮
- **WHEN** Markdown 包含代码块（使用 ``` 语法）
- **THEN** 系统 SHALL 应用语法高亮
- **AND** 支持主流编程语言（JavaScript、TypeScript、Python、Bash 等）

#### Scenario: Frontmatter 解析
- **WHEN** Markdown 文件包含 YAML frontmatter
- **THEN** 系统 SHALL 解析 title、description 等元数据
- **AND** 使用这些数据设置页面标题和 SEO meta 标签

### Requirement: 图片和静态资源
系统 SHALL 支持在 Markdown 中引用图片和其他静态资源。

#### Scenario: 本地图片引用
- **WHEN** Markdown 使用相对路径引用图片（如 ./images/example.png）
- **THEN** 系统 SHALL 正确加载并显示该图片
- **AND** 图片 SHALL 支持懒加载优化

#### Scenario: 外部图片引用
- **WHEN** Markdown 使用绝对 URL 引用外部图片
- **THEN** 系统 SHALL 正常显示该图片
- **AND** 页面加载 SHALL 不因外部图片失败而阻塞
