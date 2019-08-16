/*
 * https://reactjs.org/docs/rendering-elements.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-03.less';
import { C010301 } from '@/components/doc/01-main-concepts/03/01-03-01';
import { C010302 } from '@/components/doc/01-main-concepts/03/01-03-02';

export default function C0103(): React.ReactNode {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Rendering Elements" key="1">
        <C010301></C010301>
      </Collapse.Panel>

      <Collapse.Panel header="Rendering an Element into the DOM" key="2">
        <C010302></C010302>
      </Collapse.Panel>
    </Collapse>
  );
}
