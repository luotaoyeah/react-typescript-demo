/*
 * https://reactjs.org/docs/context.html#when-to-use-context
 */

import React from 'react';
import { Divider } from 'antd';
import { C02030101 } from '@/components/doc/02-advanced-guides/03/01/02-03-01.01';
import { C02030102 } from '@/components/doc/02-advanced-guides/03/01/02-03-01.02';

function C020301() {
  return (
    <div>
      <C02030101></C02030101>

      <Divider />

      <C02030102></C02030102>
    </div>
  );
}

export { C020301 };
