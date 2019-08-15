/*
 * DOM Elements
 *     Differences In Attributes
 *         className
 */

import React from 'react';
import { Button } from 'antd';

/*
 * react 中设置 CSS 类名需要使用 className 属性
 */
function C03040102(): React.ReactNode {
  return (
    <div>
      <Button className="my-btn">FOO</Button>
    </div>
  );
}

export { C03040102 };
