/*
 * https://reactjs.org/docs/refs-and-the-dom.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021601 } from '@/components/doc/02-advanced-guides/16/02-16-01';
import { C021602 } from '@/components/doc/02-advanced-guides/16/02-16-02';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Creating Refs" key="1">
        <C021601></C021601>
      </Collapse.Panel>

      <Collapse.Panel header="Adding a Ref to a DOM Element" key="2">
        <C021602></C021602>
      </Collapse.Panel>
    </Collapse>
  );
}
