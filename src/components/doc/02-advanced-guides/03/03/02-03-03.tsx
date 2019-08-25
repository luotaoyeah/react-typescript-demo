/*
 * https://reactjs.org/docs/context.html#api
 */

import React from 'react';
import { Divider } from 'antd';
import { C02030301 } from '@/components/doc/02-advanced-guides/03/03/02-03-03.01';
import { C02030302 } from '@/components/doc/02-advanced-guides/03/03/02-03-03.02';

function C020303() {
  return (
    <>
      <C02030301 />

      <Divider />

      <C02030302 />
    </>
  );
}

export { C020303 };
