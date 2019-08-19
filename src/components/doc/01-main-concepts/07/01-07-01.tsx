/*
 * https://reactjs.org/docs/conditional-rendering.html
 */

import React from 'react';
import { Button, Input } from 'antd';

/*
 * 可以根据 props 不同的值, 返回不同的 react element, 实现条件渲染
 */
function C010701A({ type }: { type: 0 | 1 }) {
  if (type === 0) {
    return <Button>BUTTON</Button>;
  }

  return <Input placeholder="INPUT" />;
}

/*
 * 可以在 JSX 中使用条件表达式, 实现条件渲染
 */
function C010701() {
  return (
    <div>
      <C010701A type={0} />
      <C010701A type={1} />

      {Date.now() % 2 === 0 ? <Button>EVEN</Button> : <Button>ODD</Button>}
    </div>
  );
}

export { C010701 };
