/*
 * https://reactjs.org/docs/strict-mode.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021901 } from '@/components/doc/02-advanced-guides/19/02-19-01';
import { C021902 } from '@/components/doc/02-advanced-guides/19/02-19-02';

export default function C0219() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Identifying unsafe lifecycles" key="1">
        <C021901></C021901>
      </Collapse.Panel>

      <Collapse.Panel header="Warning about legacy string ref API usage" key="2">
        <C021902></C021902>
      </Collapse.Panel>
    </Collapse>
  );
}
