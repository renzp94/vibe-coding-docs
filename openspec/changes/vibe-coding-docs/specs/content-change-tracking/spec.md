## ADDED Requirements

### Requirement: Git 历史集成
系统 SHALL 集成 Git 历史来追踪每行内容的修改信息。

#### Scenario: 构建时获取 blame 信息
- **WHEN** 构建站点时
- **THEN** 系统 SHALL 对每个 Markdown 文件运行 git blame
- **AND** 提取每行的 commit hash、作者、时间戳
- **AND** 将数据注入到渲染的 HTML 中

#### Scenario: 过滤构建文件
- **WHEN** 文件不在 Git 跟踪中
- **THEN** 系统 SHALL 跳过 blame 处理
- **AND** 正常渲染内容不显示变更标记

### Requirement: 行级变更标记
系统 SHALL 在页面上可视化标记内容的变更状态。

#### Scenario: 新增内容标记
- **WHEN** 内容是在最近 7 天内添加的
- **THEN** 系统 SHALL 在左侧显示绿色竖线标记
- **AND** 背景色 SHALL 有轻微绿色高亮

#### Scenario: 删除内容标记
- **WHEN** 查看历史版本对比时
- **THEN** 已删除的内容 SHALL 显示红色删除线
- **AND** 背景色 SHALL 有轻微红色高亮

#### Scenario: 修改内容标记
- **WHEN** 内容被修改（非新增非删除）
- **THEN** 系统 SHALL 显示黄色/橙色标记
- **AND** 悬浮时 SHALL 显示「已修改」提示

### Requirement: 悬浮提示信息
系统 SHALL 支持悬浮查看每行内容的详细变更信息。

#### Scenario: 悬浮显示元数据
- **WHEN** 用户鼠标悬浮在标记行上
- **THEN** 系统 SHALL 显示 Tooltip
- **AND** Tooltip SHALL 包含：提交者、提交时间、提交信息

#### Scenario: Tooltip 样式
- **WHEN** Tooltip 显示时
- **THEN** 样式 SHALL 与站点设计系统一致
- **AND** SHALL 有平滑的淡入动画
- **AND**  SHALL 自适应位置避免超出视口

### Requirement: Diff 视图模式
系统 SHALL 提供完整的 Diff 视图来查看页面变更。

#### Scenario: 进入 Diff 模式
- **WHEN** 用户点击「查看变更」按钮
- **THEN** 系统 SHALL 切换到 Diff 视图
- **AND** 显示当前版本与上一版本的对比

#### Scenario: Diff 视图交互
- **WHEN** 用户在 Diff 视图中
- **THEN** SHALL 支持切换对比的版本
- **AND** SHALL 支持返回正常阅读视图
- **AND** SHALL 支持按变更类型筛选（仅新增/仅删除/全部）

### Requirement: 最近更新汇总
系统 SHALL 在页面顶部显示最近更新的摘要信息。

#### Scenario: 页面更新提示
- **WHEN** 页面加载时
- **THEN** 页面顶部 SHALL 显示「最近更新」横幅
- **AND** 显示：最后更新时间、更新内容摘要

#### Scenario: 关闭更新提示
- **WHEN** 用户点击关闭按钮
- **THEN** 横幅 SHALL 收起
- **AND** 使用 localStorage 记录关闭状态
- **AND** 下次内容更新后 SHALL 重新显示
