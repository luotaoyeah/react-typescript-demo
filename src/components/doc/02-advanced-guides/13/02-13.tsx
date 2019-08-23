/*
 * https://reactjs.org/docs/react-without-es6.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0213() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="React Without ES6" key="1"></Collapse.Panel>
    </Collapse>
  );
}
