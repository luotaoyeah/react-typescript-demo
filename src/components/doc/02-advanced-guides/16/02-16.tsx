/*
 * https://reactjs.org/docs/refs-and-the-dom.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021601 } from '@/components/doc/02-advanced-guides/16/02-16-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Creating Refs" key="1">
        <C021601></C021601>
      </Collapse.Panel>
    </Collapse>
  );
}
