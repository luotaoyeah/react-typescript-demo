/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';
import { Divider } from 'antd';

class A extends React.Component {
  /*
   * render() 方法可以直接返回 string 或者 number；
   */
  public render() {
    return [9, <Divider key={2} />, 'foo'];
  }
}

function C0302030105(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030105 };
