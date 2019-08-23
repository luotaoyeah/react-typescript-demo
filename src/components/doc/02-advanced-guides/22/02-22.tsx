/*
 * TODO https://reactjs.org/docs/web-components.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0222() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Using Web Components in React" key="1"></Collapse.Panel>
    </Collapse>
  );
}
