/*
 * https://reactjs.org/docs/portals.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021101 } from '@/components/doc/02-advanced-guides/11/02-11-01';
import { C021102 } from '@/components/doc/02-advanced-guides/11/02-11-02';

export default function C0211() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Usage" key="1">
        <C021101></C021101>
      </Collapse.Panel>

      <Collapse.Panel header="Event Bubbling Through Portals" key="2">
        <C021102></C021102>
      </Collapse.Panel>
    </Collapse>
  );
}
