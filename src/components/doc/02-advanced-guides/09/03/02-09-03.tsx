/*
 * https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090301 } from '@/components/doc/02-advanced-guides/09/03/02-09-03.01';

function C020903() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="JavaScript Expressions as Props" key="1">
        <C02090301></C02090301>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020903 };
