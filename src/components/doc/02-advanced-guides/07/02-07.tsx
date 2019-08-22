/*
 * https://reactjs.org/docs/fragments.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020701 } from '@/components/doc/02-advanced-guides/07/02-07-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Use HOCs For Cross-Cutting Concerns" key="1">
        <C020701></C020701>
      </Collapse.Panel>
    </Collapse>
  );
}
