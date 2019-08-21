/*
 * https://reactjs.org/docs/forwarding-refs.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020501 } from '@/components/doc/02-advanced-guides/05/02-05-01';
import { C020502 } from '@/components/doc/02-advanced-guides/05/02-05-02';
import { C020503 } from '@/components/doc/02-advanced-guides/05/02-05-03';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Forwarding refs to DOM components" key="1">
        <C020501></C020501>
      </Collapse.Panel>

      <Collapse.Panel header="Forwarding refs in higher-order components" key="2">
        <C020502></C020502>
      </Collapse.Panel>

      <Collapse.Panel header="Displaying a custom name in DevTools" key="3">
        <C020503></C020503>
      </Collapse.Panel>
    </Collapse>
  );
}
