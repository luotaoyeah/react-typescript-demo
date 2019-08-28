/*
 * https://reactjs.org/docs/context.html#api
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02030301 } from '@/components/doc/02-advanced-guides/03/03/02-03-03.01';
import { C02030302 } from '@/components/doc/02-advanced-guides/03/03/02-03-03.02';
import { C02030303 } from '@/components/doc/02-advanced-guides/03/03/02-03-03.03';

function C020303() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="React.createContext()" key="1">
        <C02030301></C02030301>
      </Collapse.Panel>

      <Collapse.Panel header="contextType" key="2">
        <C02030302></C02030302>
      </Collapse.Panel>

      <Collapse.Panel header="displayName" key="3">
        <C02030303></C02030303>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020303 };
