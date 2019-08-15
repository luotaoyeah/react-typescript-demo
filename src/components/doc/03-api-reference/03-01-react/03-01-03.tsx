/*
 * React Top-Level API
 *     Reference
 *         React.createElement()
 */

import React from 'react';
import { Divider, Tag } from 'antd';

/**  */
function C030103(): React.ReactNode {
  /*
   * 第一个参数可以是字符串，表示一个 HTML 标签的名称；
   */
  // eslint-disable-next-line react/button-has-type
  const button01 = React.createElement(
    'button',
    {
      style: {
        borderRadius: '3px',
        cursor: 'pointer',
        color: 'red',
      },
    },
    'HTML TAG',
  );

  /*
   * 第一个参数可以是组件；
   */
  const button02 = React.createElement(
    Tag,
    {
      style: {
        color: 'red',
      },
    },
    'COMPONENT',
  );

  return (
    <div>
      {button01}
      <Divider />
      {button02}
    </div>
  );
}

export { C030103 };
