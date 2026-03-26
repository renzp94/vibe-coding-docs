## ADDED Requirements

### Requirement: 断点系统
系统 SHALL 支持标准响应式断点，适配不同设备。

#### Scenario: 桌面端（≥1280px）
- **WHEN** 视口宽度大于等于 1280px
- **THEN** 内容区最大宽度 SHALL 为 1200px 并居中
- **AND** 侧边栏 SHALL 始终显示
- **AND** 页面内目录（TOC）SHALL 显示在右侧

#### Scenario: 平板端（768px-1279px）
- **WHEN** 视口宽度在 768px 到 1279px 之间
- **THEN** 内容区 SHALL 占满可用宽度但有适当边距（32-48px）
- **AND** 侧边栏 SHALL 可收起，默认显示
- **AND** 页面内目录 SHALL 收起或显示在内容下方

#### Scenario: 移动端（<768px）
- **WHEN** 视口宽度小于 768px
- **THEN** 内容区 SHALL 占满屏幕宽度，边距为 16-24px
- **AND** 侧边栏 SHALL 默认隐藏，通过汉堡菜单访问
- **AND** 页面内目录 SHALL 显示在内容上方（可折叠）

### Requirement: 字体响应式
系统 SHALL 根据屏幕尺寸调整字体大小。

#### Scenario: 标题字体响应式
- **WHEN** 屏幕尺寸变小
- **THEN** H1 字号 SHALL 从 64px（桌面）缩放到 32px（移动）
- **AND** H2 字号 SHALL 从 48px 缩放到 28px
- **AND** H3 字号 SHALL 从 32px 缩放到 24px

#### Scenario: 正文字体响应式
- **WHEN** 屏幕尺寸变小
- **THEN** 正文字号 SHALL 从 19px（桌面）缩放到 16px（移动）
- **AND** 行高 SHALL 保持 1.6-1.8 确保可读性

### Requirement: 图片响应式
系统 SHALL 确保图片在不同设备上正确显示。

#### Scenario: 图片自适应
- **WHEN** 页面包含图片
- **THEN** 图片 SHALL 不超过容器宽度（max-width: 100%）
- **AND** 图片高度 SHALL 自动调整保持比例
- **AND** 图片 SHALL 支持 Retina/高 DPI 屏幕

#### Scenario: 移动端图片优化
- **WHEN** 在移动设备上查看
- **THEN** 大图 SHALL 支持缩放查看
- **AND** 图片 SHALL 懒加载以优化性能

### Requirement: 导航响应式
系统 SHALL 根据屏幕尺寸调整导航交互方式。

#### Scenario: 桌面导航
- **WHEN** 在桌面端访问
- **THEN** 顶部导航 SHALL 显示所有主要链接
- **AND** 搜索框 SHALL 可见且可用
- **AND** 侧边栏导航 SHALL 固定显示

#### Scenario: 移动导航
- **WHEN** 在移动端访问
- **THEN** 顶部导航 SHALL 简化为汉堡菜单
- **AND** 侧边栏 SHALL 以抽屉形式滑入
- **AND** 点击遮罩层 SHALL 关闭侧边栏
