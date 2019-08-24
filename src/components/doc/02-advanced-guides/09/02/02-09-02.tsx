/*
 * https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090201 } from '@/components/doc/02-advanced-guides/09/02/02-09-02.01';

function C020902() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="React Must Be in Scope" key="1">
        <C02090201></C02090201>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020902 };
