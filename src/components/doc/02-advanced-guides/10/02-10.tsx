/*
 * TODO https://reactjs.org/docs/optimizing-performance.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0210() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Optimizing Performance" key="1"></Collapse.Panel>
    </Collapse>
  );
}
