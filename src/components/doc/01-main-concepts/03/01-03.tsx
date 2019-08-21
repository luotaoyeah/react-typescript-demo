/*
 * https://reactjs.org/docs/rendering-elements.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C010301 } from '@/components/doc/01-main-concepts/03/01-03-01';
import { C010302 } from '@/components/doc/01-main-concepts/03/01-03-02';
import { C010303 } from '@/components/doc/01-main-concepts/03/01-03-03';
import { C010304 } from '@/components/doc/01-main-concepts/03/01-03-04';

export default function C0103() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Rendering Elements" key="1">
        <C010301></C010301>
      </Collapse.Panel>

      <Collapse.Panel header="Rendering an Element into the DOM" key="2">
        <C010302></C010302>
      </Collapse.Panel>

      <Collapse.Panel header="Updating the Rendered Element" key="3">
        <C010303></C010303>
      </Collapse.Panel>

      <Collapse.Panel header="React Only Updates What’s Necessary" key="4">
        <C010304></C010304>
      </Collapse.Panel>
    </Collapse>
  );
}
