## ADDED Requirements

### Requirement: 颜色系统
系统 SHALL 使用一致的配色方案，参考 Apple/iPhone 官网风格。

#### Scenario: 浅色主题颜色
- **WHEN** 系统渲染页面元素
- **THEN** 背景色 SHALL 使用 #FFFFFF（主）和 #F5F5F7（次）
- **AND** 文字色 SHALL 使用 #1D1D1F（主）和 #86868B（次）
- **AND** 强调色 SHALL 使用 #0071E3

#### Scenario: 边框和分隔线
- **WHEN** 系统渲染卡片、分隔线等元素
- **THEN** 边框颜色 SHALL 使用 #D2D2D7
- **AND** 阴影 SHALL 使用柔和的投影效果

### Requirement: 字体系统
系统 SHALL 使用清晰易读的字体，确保良好的阅读体验。

#### Scenario: 标题字体
- **WHEN** 渲染页面标题（H1、H2、H3）
- **THEN** 使用系统字体栈：-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif
- **AND** H1 字号 SHALL 为 48-64px（桌面）/ 32-40px（移动）
- **AND** 标题字重 SHALL 为 600-700

#### Scenario: 正文字体
- **WHEN** 渲染段落文字
- **THEN** 字体大小 SHALL 为 17-19px
- **AND** 行高 SHALL 为 1.6-1.8
- **AND** 字重 SHALL 为 400-450

#### Scenario: 代码字体
- **WHEN** 渲染行内代码或代码块
- **THEN** 使用等宽字体：'SF Mono', Menlo, Monaco, monospace
- **AND** 行内代码 SHALL 有浅灰背景色

### Requirement: 间距系统
系统 SHALL 使用一致的间距规范，确保视觉呼吸感。

#### Scenario: 区块间距
- **WHEN** 渲染不同内容区块
- **THEN** 大区块间距 SHALL 为 80-120px
- **AND** 中等区块间距 SHALL 为 40-60px
- **AND** 小区块间距 SHALL 为 20-24px

#### Scenario: 内容间距
- **WHEN** 渲染段落、列表等元素
- **THEN** 段落间距 SHALL 为 16-20px
- **AND** 列表项间距 SHALL 为 8-12px

### Requirement: 按钮和交互元素
系统 SHALL 提供一致的按钮和交互组件样式。

#### Scenario: 主要按钮
- **WHEN** 渲染主要操作按钮
- **THEN** 背景色 SHALL 为 #0071E3
- **AND** 文字色 SHALL 为白色
- **AND** 圆角 SHALL 为 980px（药丸形状）
- **AND** 悬停时 SHALL 有轻微缩放效果

#### Scenario: 链接样式
- **WHEN** 渲染文本链接
- **THEN** 颜色 SHALL 为 #0071E3
- **AND** 悬停时 SHALL 添加下划线
- **AND** 已访问链接 SHALL 保持原色

### Requirement: 卡片组件
系统 SHALL 提供卡片组件用于展示内容块。

#### Scenario: 信息卡片
- **WHEN** 渲染提示、警告等信息块
- **THEN** 卡片 SHALL 有圆角（16-20px）
- **AND** 卡片 SHALL 有轻微阴影或边框
- **AND** 不同类型的卡片 SHALL 有不同的左侧边框颜色（提示蓝、警告黄、危险红）
