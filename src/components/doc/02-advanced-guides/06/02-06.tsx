/*
 * https://reactjs.org/docs/fragments.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020601 } from '@/components/doc/02-advanced-guides/06/02-06-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Fragments" key="1">
        <C020601></C020601>
      </Collapse.Panel>
    </Collapse>
  );
}
