/*
 * https://reactjs.org/docs/conditional-rendering.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-07.less';
import { C010701 } from '@/components/doc/01-main-concepts/07/01-07-01';

export default function C0107() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Conditional Rendering" key="1">
        <C010701></C010701>
      </Collapse.Panel>
    </Collapse>
  );
}
