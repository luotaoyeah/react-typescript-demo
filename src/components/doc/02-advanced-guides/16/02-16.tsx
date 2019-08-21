/*
 * https://reactjs.org/docs/refs-and-the-dom.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021601 } from '@/components/doc/02-advanced-guides/16/02-16-01';
import { C021602 } from '@/components/doc/02-advanced-guides/16/02-16-02';
import { C021603 } from '@/components/doc/02-advanced-guides/16/02-16-03';
import { C021604 } from '@/components/doc/02-advanced-guides/16/02-16-04';
import { C021605 } from '@/components/doc/02-advanced-guides/16/05/02-16-05';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Creating Refs" key="1">
        <C021601></C021601>
      </Collapse.Panel>

      <Collapse.Panel header="Adding a Ref to a DOM Element" key="2">
        <C021602></C021602>
      </Collapse.Panel>

      <Collapse.Panel header="Adding a Ref to a Class Component" key="3">
        <C021603></C021603>
      </Collapse.Panel>

      <Collapse.Panel header="Exposing DOM Refs to Parent Components" key="4">
        <C021604></C021604>
      </Collapse.Panel>

      <Collapse.Panel header="Callback Refs" key="5">
        <C021605></C021605>
      </Collapse.Panel>
    </Collapse>
  );
}
