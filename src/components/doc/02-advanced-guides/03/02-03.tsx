/*
 * https://reactjs.org/docs/context.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020301 } from '@/components/doc/02-advanced-guides/03/01/02-03-01';

export default function C0203() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="When to Use Context" key="1">
        <C020301></C020301>
      </Collapse.Panel>
    </Collapse>
  );
}
