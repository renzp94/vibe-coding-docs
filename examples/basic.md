---
layout: doc
---

# 基础示例 - 计算器

## 需求描述

创建一个支持基本运算的计算器应用。

## Vibe Coding 对话

**你:**
```
帮我创建一个 React 计算器组件，需要：
- 支持加减乘除
- 有清除按钮
- 显示当前计算表达式
- 键盘支持
- 样式简洁美观
```

**AI:** (生成代码)

## 生成的代码

```tsx
import React, { useState, useCallback, useEffect } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = useCallback((num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  }, [display, waitingForOperand]);

  const inputOperator = useCallback((nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(display);
    } else if (operator) {
      const currentValue = parseFloat(prevValue) || 0;
      const newValue = calculate(currentValue, inputValue, operator);
      setPrevValue(String(newValue));
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }, [display, operator, prevValue]);

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const performCalculation = useCallback(() => {
    if (!operator || prevValue === null) return;

    const inputValue = parseFloat(display);
    const currentValue = parseFloat(prevValue);
    const result = calculate(currentValue, inputValue, operator);

    setDisplay(String(result));
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }, [display, operator, prevValue]);

  const clearAll = useCallback(() => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, []);

  // 键盘支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') inputNumber(e.key);
      if (e.key === '.') inputNumber('.');
      if (e.key === '+') inputOperator('+');
      if (e.key === '-') inputOperator('-');
      if (e.key === '*') inputOperator('×');
      if (e.key === '/') inputOperator('÷');
      if (e.key === 'Enter' || e.key === '=') performCalculation();
      if (e.key === 'Escape') clearAll();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputNumber, inputOperator, performCalculation, clearAll]);

  const buttons = [
    { label: 'C', onClick: clearAll, className: 'bg-red-100 text-red-600' },
    { label: '÷', onClick: () => inputOperator('÷') },
    { label: '×', onClick: () => inputOperator('×') },
    { label: '-', onClick: () => inputOperator('-') },
    { label: '7', onClick: () => inputNumber('7') },
    { label: '8', onClick: () => inputNumber('8') },
    { label: '9', onClick: () => inputNumber('9') },
    { label: '+', onClick: () => inputOperator('+'), className: 'row-span-2' },
    { label: '4', onClick: () => inputNumber('4') },
    { label: '5', onClick: () => inputNumber('5') },
    { label: '6', onClick: () => inputNumber('6') },
    { label: '1', onClick: () => inputNumber('1') },
    { label: '2', onClick: () => inputNumber('2') },
    { label: '3', onClick: () => inputNumber('3') },
    { label: '=', onClick: performCalculation, className: 'row-span-2 bg-blue-500 text-white' },
    { label: '0', onClick: () => inputNumber('0'), className: 'col-span-2' },
    { label: '.', onClick: () => inputNumber('.') },
  ];

  return (
    <div className="w-72 bg-gray-100 p-4 rounded-2xl shadow-xl">
      <div className="bg-white rounded-xl p-4 mb-4 text-right">
        <div className="text-gray-400 text-sm h-6">
          {prevValue} {operator}
        </div>
        <div className="text-3xl font-semibold text-gray-800 overflow-hidden">
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={btn.onClick}
            className={`
              h-14 rounded-xl font-medium text-lg transition-all
              active:scale-95 hover:brightness-95
              bg-white shadow-sm text-gray-700
              ${btn.className || ''}
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## 学到了什么

1. **状态管理** - 使用多个 useState 管理计算器状态
2. **useCallback** - 缓存函数避免不必要的重渲染
3. **键盘事件** - 通过 useEffect 添加键盘支持
4. **CSS Grid** - 使用 grid 布局计算器按钮

## 下一步

尝试修改代码，添加：
- 历史记录功能
- 科学计算模式
- 主题切换
