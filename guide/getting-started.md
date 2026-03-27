---
layout: doc
---

# 快速开始

## 环境准备

### 必需工具

1. **代码编辑器**: VS Code 或 Cursor（推荐）
2. **AI 工具**: 选择以下任一
   - [Claude](https://claude.ai) - 强大的代码理解和生成能力
   - [ChatGPT Plus](https://chat.openai.com) - GPT-4 代码能力出色
   - [GitHub Copilot](https://github.com/copilot) - IDE 集成，实时补全
   - [Cursor](https://cursor.sh) - 内置 AI 的编辑器

3. **开发环境**:
   - Node.js 18+ (前端开发)
   - Python 3.9+ (Python 开发)
   - Git

## 第一个 Vibe Coding 示例

让我们创建一个简单的待办事项应用。

### 步骤 1: 描述你的需求

打开 AI 工具，输入：

```
我想创建一个 React 待办事项应用，需要：
1. 添加新任务的输入框
2. 显示任务列表
3. 可以标记任务完成/未完成
4. 可以删除任务
5. 使用 localStorage 保存数据
6. 样式要简洁美观
```

### 步骤 2: 获取代码

AI 会生成完整的代码。以下是可能的结果：

```tsx
import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">待办事项</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="添加新任务..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
          添加
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="ml-auto text-red-500">
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### 步骤 3: 迭代优化

如果代码不完美，继续对话优化：

```
可以添加一个"全部完成"的按钮吗？
还有，能给已完成的项目添加动画效果吗？
```

## 提示词技巧

### ✅ 好的提示词

- **具体明确**: "创建一个带有验证的登录表单，邮箱格式要正确"
- **提供上下文**: "这是一个 Next.js 15 项目，使用 App Router"
- **说明约束**: "不要使用第三方库，只用原生 CSS"

### ❌ 避免的提示词

- "帮我写个网站"（太模糊）
- "修复这个错误"（没有提供代码）

## 下一步

- [环境准备](./setup) - 详细的环境配置指南
- [工具选择](./tools) - 各种 AI 工具对比
