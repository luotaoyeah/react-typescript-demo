/*
 * https://reactjs.org/docs/context.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020301 } from '@/components/doc/02-advanced-guides/03/01/02-03-01';
import { C020302 } from '@/components/doc/02-advanced-guides/03/02/02-03-02';
import { C020303 } from '@/components/doc/02-advanced-guides/03/03/02-03-03';
import { C020304 } from '@/components/doc/02-advanced-guides/03/04/02-03-04';
import { C020305 } from '@/components/doc/02-advanced-guides/03/05/02-03-05';

export default function C0203() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="When to Use Context" key="1">
        <C020301></C020301>
      </Collapse.Panel>

      <Collapse.Panel header="Before You Use Context" key="2">
        <C020302></C020302>
      </Collapse.Panel>

      <Collapse.Panel header="API" key="3">
        <C020303></C020303>
      </Collapse.Panel>

      <Collapse.Panel header="Examples" key="4">
        <C020304></C020304>
      </Collapse.Panel>

      <Collapse.Panel header="Caveats" key="5">
        <C020305></C020305>
      </Collapse.Panel>
    </Collapse>
  );
}
