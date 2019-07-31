import React from 'react';
import { Button } from 'antd';

/**
 * https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks
 */
export function C010206(): React.ReactNode {
  const message: string = "<script>{ alert('hello') }</script>";

  return (
    <div>
      <p>
        默认情况下, <code>JSX</code> 中嵌入的任何表达式, 都会被 <code>ReactDOM</code> 转义之后再进行渲染, 避免发生{' '}
        <code>XSS</code> 攻击
      </p>

      <Button>
        <code>{message}</code>
      </Button>
    </div>
  );
}
