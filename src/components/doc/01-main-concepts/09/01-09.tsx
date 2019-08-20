/*
 * https://reactjs.org/docs/forms.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import './01-09.less';
import { C010901 } from '@/components/doc/01-main-concepts/09/01-09-01';
import { C010902 } from '@/components/doc/01-main-concepts/09/01-09-02';
import { C010903 } from '@/components/doc/01-main-concepts/09/01-09-03';
import { C010904 } from '@/components/doc/01-main-concepts/09/04/01-09-04';
import { C010905 } from '@/components/doc/01-main-concepts/09/01-09-05';
import { C010906 } from '@/components/doc/01-main-concepts/09/01-09-06';

export default function C0108() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Forms" key="1">
        <C010901></C010901>
      </Collapse.Panel>

      <Collapse.Panel header="Controlled Components" key="2">
        <C010902></C010902>
      </Collapse.Panel>

      <Collapse.Panel header="The textarea Tag" key="3">
        <C010903></C010903>
      </Collapse.Panel>

      <Collapse.Panel header="The select Tag" key="4">
        <C010904></C010904>
      </Collapse.Panel>

      <Collapse.Panel header="Handling Multiple Inputs" key="5">
        <C010905></C010905>
      </Collapse.Panel>

      <Collapse.Panel header="Controlled Input Null Value" key="6">
        <C010906></C010906>
      </Collapse.Panel>
    </Collapse>
  );
}
