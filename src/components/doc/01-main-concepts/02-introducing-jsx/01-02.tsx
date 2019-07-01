/*
 * https://reactjs.org/docs/introducing-jsx.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C010201 } from './01/01-02-01';
import './01-02.less';

export default function C0102(): React.ReactNode {
  return (
    <Collapse
      accordion
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
    >
      <Collapse.Panel header="Why JSX?" key="1">
        {C010201()}
      </Collapse.Panel>
    </Collapse>
  );
}
