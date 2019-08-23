/*
 * https://reactjs.org/docs/react-without-jsx.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';

export default function C0214() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="React Without JSX" key="1"></Collapse.Panel>
    </Collapse>
  );
}
