/*
 * https://reactjs.org/docs/error-boundaries.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020401 } from '@/components/doc/02-advanced-guides/04/01/02-04-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Introducing Error Boundaries" key="1">
        <C020401></C020401>
      </Collapse.Panel>
    </Collapse>
  );
}
