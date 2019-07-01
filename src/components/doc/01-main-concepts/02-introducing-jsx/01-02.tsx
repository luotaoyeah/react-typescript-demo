import React from 'react';
import { Collapse, Icon } from 'antd';
import { C010201 } from './01/01-02-01';
import './01-02.less';
import { C010202 } from '@/components/doc/01-main-concepts/02-introducing-jsx/02/01-02-02';

/**
 * https://reactjs.org/docs/introducing-jsx.html
 */
export default function C0102(): React.ReactNode {
  return (
    <Collapse
      accordion
      expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
    >
      <Collapse.Panel header="Why JSX?" key="1">
        {C010201()}
      </Collapse.Panel>
      <Collapse.Panel header="Embedding Expressions in JSX" key="2">
        <C010202></C010202>
      </Collapse.Panel>
    </Collapse>
  );
}
