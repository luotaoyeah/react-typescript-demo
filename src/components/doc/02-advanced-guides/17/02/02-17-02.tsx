/*
 * https://reactjs.org/docs/render-props.html#using-props-other-than-render
 */

import React from 'react';
import { Divider } from 'antd';
import { C02170201 } from '@/components/doc/02-advanced-guides/17/02/02-17-02.01';
import { C02170202 } from '@/components/doc/02-advanced-guides/17/02/02-17-02.02';

function C021702() {
  return (
    <>
      <C02170201></C02170201>

      <Divider />

      <C02170202></C02170202>
    </>
  );
}

export { C021702 };
