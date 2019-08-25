/*
 * https://reactjs.org/docs/render-props.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C021701 } from '@/components/doc/02-advanced-guides/17/01/02-17-01';

export default function C0217() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Use Render Props for Cross-Cutting Concerns" key="1">
        <C021701></C021701>
      </Collapse.Panel>
    </Collapse>
  );
}
