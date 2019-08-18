/*
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-05.less';
import { C010501 } from '@/components/doc/01-main-concepts/05/01-05-01';

export default function C0103(): React.ReactNode {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="State and Lifecycle" key="1">
        <C010501></C010501>
      </Collapse.Panel>
    </Collapse>
  );
}
