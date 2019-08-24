/*
 * TODO https://reactjs.org/docs/profiler.html
 * react@16.9.0 版本才支持这个特性
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021201 } from '@/components/doc/02-advanced-guides/12/02-12-01';

export default function C0212() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Usage" key="1">
        <C021201></C021201>
      </Collapse.Panel>
    </Collapse>
  );
}
