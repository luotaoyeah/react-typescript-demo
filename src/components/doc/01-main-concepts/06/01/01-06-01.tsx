/*
 * https://reactjs.org/docs/handling-events.html
 */

import React from 'react';
import { Divider } from 'antd';
import { C01060101 } from '@/components/doc/01-main-concepts/06/01/01-06-01.01';
import { C01060102 } from '@/components/doc/01-main-concepts/06/01/01-06-01.02';
import { C01060103 } from '@/components/doc/01-main-concepts/06/01/01-06-01.03';

function C010601() {
  return (
    <>
      <C01060101></C01060101>

      <Divider></Divider>

      <C01060102></C01060102>

      <Divider></Divider>

      <C01060103></C01060103>

      <Divider></Divider>
    </>
  );
}

export { C010601 };
