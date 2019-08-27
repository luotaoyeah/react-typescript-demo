/*
 * https://reactjs.org/docs/react-component.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C030201 } from '@/components/doc/03-api-reference/02/03-02-01';
import { C030202 } from '@/components/doc/03-api-reference/02/02/03-02-02';
import { C030203 } from '@/components/doc/03-api-reference/02/03/03-02-03';
import { C030204 } from '@/components/doc/03-api-reference/02/04/03-02-04';
import { C030205 } from '@/components/doc/03-api-reference/02/05/03-02-05';
import { C030206 } from '@/components/doc/03-api-reference/02/06/03-02-06';
import { C030207 } from '@/components/doc/03-api-reference/02/07/03-02-07';
import { C030208 } from '@/components/doc/03-api-reference/02/08/03-02-08';
import { C030209 } from '@/components/doc/03-api-reference/02/09/03-02-09';

export default function C0302() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Overview" key="1">
        <C030201></C030201>
      </Collapse.Panel>

      <Collapse.Panel header="render()" key="2">
        <C030202></C030202>
      </Collapse.Panel>

      <Collapse.Panel header="constructor()" key="3">
        <C030203></C030203>
      </Collapse.Panel>

      <Collapse.Panel header="componentDidMount()" key="4">
        <C030204></C030204>
      </Collapse.Panel>

      <Collapse.Panel header="componentDidUpdate()" key="5">
        <C030205></C030205>
      </Collapse.Panel>

      <Collapse.Panel header="componentWillUnmount()" key="6">
        <C030206></C030206>
      </Collapse.Panel>

      <Collapse.Panel header="shouldComponentUpdate()" key="7">
        <C030207></C030207>
      </Collapse.Panel>

      <Collapse.Panel header="getDerivedStateFromProps()" key="8">
        <C030208></C030208>
      </Collapse.Panel>

      <Collapse.Panel header="getSnapshotBeforeUpdate()" key="9">
        <C030209></C030209>
      </Collapse.Panel>
    </Collapse>
  );
}
