/*
 * https://reactjs.org/docs/uncontrolled-components.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C022101 } from './02-21-01';

export default function C0221() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Uncontrolled Components" key="1">
        <C022101></C022101>
      </Collapse.Panel>
    </Collapse>
  );
}
