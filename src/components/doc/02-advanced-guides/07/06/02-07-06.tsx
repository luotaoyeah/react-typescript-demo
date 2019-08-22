/*
 * https://reactjs.org/docs/higher-order-components.html#caveats
 */

import React from 'react';
import { Divider } from 'antd';
import { C02070601 } from '@/components/doc/02-advanced-guides/07/06/02-07-06.01';
import { C02070602 } from '@/components/doc/02-advanced-guides/07/06/02-07-06.02';
import { C02070603 } from '@/components/doc/02-advanced-guides/07/06/02-07-06.03';

function C020706() {
  return (
    <>
      <C02070601></C02070601>

      <Divider />

      <C02070602></C02070602>

      <Divider />

      <C02070603></C02070603>
    </>
  );
}

export { C020706 };
