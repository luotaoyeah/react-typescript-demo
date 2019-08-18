/*
 * https://reactjs.org/docs/components-and-props.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-04.less';
import { C010401 } from '@/components/doc/01-main-concepts/04/01-04-01';
import { C010402 } from '@/components/doc/01-main-concepts/04/01-04-02';
import { C010403 } from '@/components/doc/01-main-concepts/04/01-04-03';
import { C010404 } from '@/components/doc/01-main-concepts/04/01-04-04';

export default function C0103(): React.ReactNode {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Function and Class Components" key="1">
        <C010401></C010401>
      </Collapse.Panel>

      <Collapse.Panel header="Rendering a Component" key="2">
        <C010402></C010402>
      </Collapse.Panel>

      <Collapse.Panel header="Composing Components" key="3">
        <C010403></C010403>
      </Collapse.Panel>

      <Collapse.Panel header="Extracting Components" key="4">
        <C010404></C010404>
      </Collapse.Panel>
    </Collapse>
  );
}
