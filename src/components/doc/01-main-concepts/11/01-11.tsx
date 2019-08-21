/*
 * https://reactjs.org/docs/composition-vs-inheritance.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C011101 } from '@/components/doc/01-main-concepts/11/01/01-11-01';
import { C011102 } from '@/components/doc/01-main-concepts/11/01-11-02';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Containment" key="1">
        <C011101></C011101>
      </Collapse.Panel>

      <Collapse.Panel header="Specialization" key="2">
        <C011102></C011102>
      </Collapse.Panel>
    </Collapse>
  );
}
