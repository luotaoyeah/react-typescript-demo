/*
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0220() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Typechecking With PropTypes" key="1">
        如果没有使用 TypeScript 或者 Flow, 也可以使用 <a href="https://www.npmjs.com/package/prop-types">prop-types</a>{' '}
        提供的简单的类型检查功能, 用来对 props 进行类型检查
      </Collapse.Panel>
    </Collapse>
  );
}
