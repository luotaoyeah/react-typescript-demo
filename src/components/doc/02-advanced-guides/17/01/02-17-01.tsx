/*
 * https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns
 */

import React from 'react';
import { Divider } from 'antd';
import { C02170101 } from '@/components/doc/02-advanced-guides/17/01/02-17-01.01';
import { C02170102 } from '@/components/doc/02-advanced-guides/17/01/02-17-01.02';

function C021701() {
  return (
    <>
      <C02170101></C02170101>

      <Divider />

      <C02170102></C02170102>
    </>
  );
}

export { C021701 };
