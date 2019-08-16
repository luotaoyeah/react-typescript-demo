import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-02.less';
import { C010201 } from './01/01-02-01';
import { C010202 } from './02/01-02-02';
import { C010203 } from './03/01-02-03';
import { C010204 } from './04/01-02-04';
import { C010205 } from './05/01-02-05';
import { C010206 } from './06/01-02-06';

/**
 * https://reactjs.org/docs/introducing-jsx.html
 */
export default function C0102(): React.ReactNode {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Why JSX?" key="1">
        {C010201()}
      </Collapse.Panel>

      <Collapse.Panel header="Embedding Expressions In JSX" key="2">
        <C010202></C010202>
      </Collapse.Panel>

      <Collapse.Panel header="JSX Is An Expression Too" key="3">
        <C010203></C010203>
      </Collapse.Panel>

      <Collapse.Panel header="Specifying Attributes With JSX" key="4">
        {C010204()}
      </Collapse.Panel>

      <Collapse.Panel header="Specifying Children With JSX" key="5">
        {C010205()}
      </Collapse.Panel>

      <Collapse.Panel header="JSX Prevents Injection Attacks" key="6">
        <C010206></C010206>
      </Collapse.Panel>
    </Collapse>
  );
}
