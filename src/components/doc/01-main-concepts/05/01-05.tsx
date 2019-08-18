/*
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-05.less';
import { C010501 } from '@/components/doc/01-main-concepts/05/01-05-01';
import { C010502 } from '@/components/doc/01-main-concepts/05/01-05-02';
import { C010503 } from '@/components/doc/01-main-concepts/05/01-05-03';

export default function C0103(): React.ReactNode {
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
    </Collapse>
  );
}
