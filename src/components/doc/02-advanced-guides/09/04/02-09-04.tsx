/*
 * https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090401 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.01';
import { C02090402 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.02';
import { C02090403 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.03';
import { C02090404 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.04';
import { C02090405 } from '@/components/doc/02-advanced-guides/09/04/02-09-04.05';

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

      <Collapse.Panel header="Functions as Children" key="4">
        <C02090404></C02090404>
      </Collapse.Panel>

      <Collapse.Panel header="Booleans, Null, and Undefined Are Ignored" key="5">
        <C02090405></C02090405>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020904 };
