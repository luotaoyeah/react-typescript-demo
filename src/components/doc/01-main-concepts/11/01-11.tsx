/*
 * https://reactjs.org/docs/composition-vs-inheritance.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-11.less';
import { C011101 } from '@/components/doc/01-main-concepts/11/01/01-11-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Containment" key="1">
        <C011101></C011101>
      </Collapse.Panel>
    </Collapse>
  );
}
