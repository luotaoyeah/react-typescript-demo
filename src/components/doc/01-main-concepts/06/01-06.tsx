/*
 * https://reactjs.org/docs/handling-events.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-06.less';
import { C010601 } from '@/components/doc/01-main-concepts/06/01/01-06-01';

export default function C0103() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Handling Events" key="1">
        <C010601></C010601>
      </Collapse.Panel>
    </Collapse>
  );
}
