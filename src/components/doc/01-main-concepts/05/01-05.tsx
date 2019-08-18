/*
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-05.less';
import { C010501 } from '@/components/doc/01-main-concepts/05/01-05-01';
import { C010502 } from '@/components/doc/01-main-concepts/05/01-05-02';
import { C010503 } from '@/components/doc/01-main-concepts/05/01-05-03';
import { C010504 } from '@/components/doc/01-main-concepts/05/01-05-04';
import { C010505 } from '@/components/doc/01-main-concepts/05/05/01-05-05';
import { C010506 } from '@/components/doc/01-main-concepts/05/01-05-06';

export default function C0103() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="State and Lifecycle" key="1">
        <C010501></C010501>
      </Collapse.Panel>

      <Collapse.Panel header="Converting a Function to a Class" key="2">
        <C010502></C010502>
      </Collapse.Panel>

      <Collapse.Panel header="Adding Local State to a Class" key="3">
        <C010503></C010503>
      </Collapse.Panel>

      <Collapse.Panel header="Adding Lifecycle Methods to a Class" key="4">
        <C010504></C010504>
      </Collapse.Panel>

      <Collapse.Panel header="Using State Correctly" key="5">
        <C010505></C010505>
      </Collapse.Panel>

      <Collapse.Panel header="The Data Flows Down" key="6">
        <C010506></C010506>
      </Collapse.Panel>
    </Collapse>
  );
}
