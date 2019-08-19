/*
 * https://reactjs.org/docs/lists-and-keys.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-08.less';
import { C010801 } from '@/components/doc/01-main-concepts/08/01-08-01';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Rendering Multiple Components" key="1">
        <C010801></C010801>
      </Collapse.Panel>
    </Collapse>
  );
}
