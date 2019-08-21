/*
 * https://reactjs.org/docs/lifting-state-up.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C011001 } from '@/components/doc/01-main-concepts/10/01-10-01';
import { C011002 } from '@/components/doc/01-main-concepts/10/01-10-02';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Lifting State Up" key="1">
        <C011001></C011001>
      </Collapse.Panel>

      <Collapse.Panel header="Lessons Learned" key="2">
        <C011002></C011002>
      </Collapse.Panel>
    </Collapse>
  );
}
