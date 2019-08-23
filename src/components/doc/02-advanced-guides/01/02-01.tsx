/*
 * https://reactjs.org/docs/accessibility.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020101 } from '@/components/doc/02-advanced-guides/01/02-01-01';

export default function C0201() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Accessibility" key="1">
        <C020101></C020101>
      </Collapse.Panel>
    </Collapse>
  );
}
