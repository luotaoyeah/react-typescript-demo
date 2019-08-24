/*
 * https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090401 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.01';

function C020904() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="String Literals" key="1">
        <C02090401></C02090401>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020904 };
