/*
 * https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C02090201 } from '@/components/doc/02-advanced-guides/09/02/02-09-02.01';
import { C02090202 } from '@/components/doc/02-advanced-guides/09/02/02-09-02.02';
import { C02090203 } from '@/components/doc/02-advanced-guides/09/02/02-09-02.03';
import { C02090204 } from '@/components/doc/02-advanced-guides/09/02/02-09-02.04';

function C020902() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="React Must Be in Scope" key="1">
        <C02090201></C02090201>
      </Collapse.Panel>

      <Collapse.Panel header="Using Dot Notation for JSX Type" key="2">
        <C02090202></C02090202>
      </Collapse.Panel>

      <Collapse.Panel header="User-Defined Components Must Be Capitalized" key="3">
        <C02090203></C02090203>
      </Collapse.Panel>

      <Collapse.Panel header="Choosing the Type at Runtime" key="4">
        <C02090204></C02090204>
      </Collapse.Panel>
    </Collapse>
  );
}

export { C020902 };
