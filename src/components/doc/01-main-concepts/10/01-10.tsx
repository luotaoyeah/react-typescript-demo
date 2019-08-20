/*
 * https://reactjs.org/docs/lifting-state-up.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-10.less';
import { C011001 } from '@/components/doc/01-main-concepts/10/01-10-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Lifting State Up" key="1">
        <C011001></C011001>
      </Collapse.Panel>
    </Collapse>
  );
}
