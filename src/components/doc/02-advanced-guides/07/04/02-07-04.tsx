/*
 * https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability
 */

import React from 'react';
import { Divider } from 'antd';
import { C02070401 } from '@/components/doc/02-advanced-guides/07/04/02-07-04.01';
import { C02070402 } from '@/components/doc/02-advanced-guides/07/04/02-07-04.02';

function C020704() {
  return (
    <>
      <C02070401></C02070401>

      <Divider />

      <C02070402></C02070402>
    </>
  );
}

export { C020704 };
