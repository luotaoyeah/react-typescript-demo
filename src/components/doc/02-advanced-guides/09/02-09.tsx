/*
 * https://reactjs.org/docs/jsx-in-depth.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020901 } from '@/components/doc/02-advanced-guides/09/02-09-01';

export default function C0209() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="JSX In Depth" key="1">
        <C020901></C020901>
      </Collapse.Panel>
    </Collapse>
  );
}
