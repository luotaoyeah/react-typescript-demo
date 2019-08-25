/*
 * https://reactjs.org/docs/integrating-with-other-libraries.html
 */

import React from 'react';
import { Collapse, Icon } from 'antd';
import { C020801 } from '@/components/doc/02-advanced-guides/08/02-08-01';
import { C020802 } from '@/components/doc/02-advanced-guides/08/02-08-02/02-08-02';

export default function C0202() {
  return (
    <Collapse accordion expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
      <Collapse.Panel header="Integrating with DOM Manipulation Plugins" key="1">
        <C020801></C020801>
      </Collapse.Panel>

      <Collapse.Panel header="Integrating with jQuery Chosen Plugin" key="2">
        <C020802></C020802>
      </Collapse.Panel>
    </Collapse>
  );
}
