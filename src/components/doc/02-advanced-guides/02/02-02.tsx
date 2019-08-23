/*
 * TODO https://reactjs.org/docs/code-splitting.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020201 } from '@/components/doc/02-advanced-guides/02/02-02-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Bundling" key="1">
        <C020201></C020201>
      </Collapse.Panel>
    </Collapse>
  );
}
