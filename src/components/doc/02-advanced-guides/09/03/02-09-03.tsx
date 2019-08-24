/*
 * https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090301 } from '@/components/doc/02-advanced-guides/09/03/02-09-03.01';
import { C02090302 } from '@/components/doc/02-advanced-guides/09/03/02-09-03.02';
import { C02090303 } from '@/components/doc/02-advanced-guides/09/03/02-09-03.03';
import { C02090304 } from '@/components/doc/02-advanced-guides/09/03/02-09-03.04';

function C020903() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="JavaScript Expressions as Props" key="1">
        <C02090301></C02090301>
      </Collapse.Panel>

      <Collapse.Panel header="String Literals" key="2">
        <C02090302></C02090302>
      </Collapse.Panel>

      <Collapse.Panel header="Props Default to 'True'" key="3">
        <C02090303></C02090303>
      </Collapse.Panel>

      <Collapse.Panel header="Spread Attributes" key="4">
        <C02090304></C02090304>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020903 };
