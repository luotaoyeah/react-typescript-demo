/*
 * https://reactjs.org/docs/react-component.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C030201 } from '@/components/doc/03-api-reference/02/03-02-01';

export default function C0302() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Overview" key="1">
        <C030201></C030201>
      </Collapse.Panel>
    </Collapse>
  );
}
