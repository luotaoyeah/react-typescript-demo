// https://reactjs.org/docs/introducing-jsx.html#specifying-children-with-jsx

import React from 'react';
import { Divider } from 'antd';

/**
 * children 有两种设置方式:
 *   1. 元素嵌套
 *   2. 使用 `children` 属性
 */
class SpecifyingChildrenWithJsxComponent extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <b>i'm children</b>
        </div>

        <Divider />

        <div children={<b>i'm children</b>} />
      </div>
    );
  }
}

export { SpecifyingChildrenWithJsxComponent };
