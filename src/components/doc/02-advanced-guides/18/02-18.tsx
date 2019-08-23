/*
 * https://reactjs.org/docs/static-type-checking.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0218() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Static Type Checking" key="1"></Collapse.Panel>
    </Collapse>
  );
}
