/*
 * https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090401 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.01';
import { C02090402 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.02';
import { C02090403 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.03';

function C020904() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="String Literals" key="1">
        <C02090401></C02090401>
      </Collapse.Panel>

      <Collapse.Panel header="JSX Children" key="2">
        <C02090402></C02090402>
      </Collapse.Panel>

      <Collapse.Panel header="JavaScript Expressions as Children" key="3">
        <C02090403></C02090403>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020904 };
