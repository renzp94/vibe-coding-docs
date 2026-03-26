## ADDED Requirements

### Requirement: 侧边栏导航
系统 SHALL 提供侧边栏导航，展示课程章节结构。

#### Scenario: 章节列表显示
- **WHEN** 用户访问任意页面
- **THEN** 侧边栏 SHALL 显示当前章节的目录结构
- **AND** 当前页面链接 SHALL 以高亮状态显示

#### Scenario: 章节折叠展开
- **WHEN** 侧边栏包含嵌套章节
- **THEN** 用户可以点击展开/折叠子章节
- **AND** 展开状态 SHALL 在页面刷新后保持（使用 localStorage）

#### Scenario: 响应式侧边栏
- **WHEN** 用户在移动设备上访问网站
- **THEN** 侧边栏 SHALL 默认隐藏
- **AND** 用户可以通过汉堡菜单按钮打开/关闭侧边栏

### Requirement: 面包屑导航
系统 SHALL 提供面包屑导航，显示用户当前位置。

#### Scenario: 面包屑显示
- **WHEN** 用户访问非首页的任何页面
- **THEN** 页面顶部 SHALL 显示面包屑导航
- **AND** 面包屑 SHALL 包含从首页到当前页面的完整路径

#### Scenario: 面包屑点击
- **WHEN** 用户点击面包屑中的某一级
- **THEN** 系统 SHALL 跳转到对应页面

### Requirement: 上一页/下一页导航
系统 SHALL 在页面底部提供上一页和下一页导航链接。

#### Scenario: 分页导航显示
- **WHEN** 用户滚动到页面底部
- **THEN** 页面底部 SHALL 显示上一页和下一页链接
- **AND** 链接 SHALL 显示对应页面的标题

#### Scenario: 边界页面处理
- **WHEN** 用户处于第一个章节
- **THEN** 不显示上一页链接，仅显示下一页
- **WHEN** 用户处于最后一个章节
- **THEN** 不显示下一页链接，仅显示上一页

### Requirement: 页面内目录
系统 SHALL 为长页面提供页面内目录（Table of Contents）。

#### Scenario: TOC 自动生成
- **WHEN** 页面包含多个标题（H2、H3）
- **THEN** 页面右侧 SHALL 显示该页面的目录
- **AND** 目录 SHALL 随页面滚动自动高亮当前章节

#### Scenario: TOC 点击跳转
- **WHEN** 用户点击目录中的某个条目
- **THEN** 页面 SHALL 平滑滚动到对应章节
- **AND** URL hash SHALL 更新以支持分享
