/*
 * https://reactjs.org/docs/conditional-rendering.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-07.less';
import { C010701 } from '@/components/doc/01-main-concepts/07/01-07-01';
import { C010702 } from '@/components/doc/01-main-concepts/07/01-07-02';
import { C010703 } from '@/components/doc/01-main-concepts/07/01-07-03';
import { C010704 } from '@/components/doc/01-main-concepts/07/01-07-04';
import { C010705 } from '@/components/doc/01-main-concepts/07/01-07-05';

export default function C0107() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Conditional Rendering" key="1">
        <C010701></C010701>
      </Collapse.Panel>

      <Collapse.Panel header="Element Variables" key="2">
        <C010702></C010702>
      </Collapse.Panel>

      <Collapse.Panel header="Inline If with Logical && Operator" key="3">
        <C010703></C010703>
      </Collapse.Panel>

      <Collapse.Panel header="Inline If-Else with Conditional Operator" key="4">
        <C010704></C010704>
      </Collapse.Panel>

      <Collapse.Panel header="Preventing Component from Rendering" key="5">
        <C010705></C010705>
      </Collapse.Panel>
    </Collapse>
  );
}
