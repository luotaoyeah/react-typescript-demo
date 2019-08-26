/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import { Divider } from 'antd';
import { C03020201 } from '@/components/doc/03-api-reference/02/02/03-02-02.01';
import { C03020202 } from '@/components/doc/03-api-reference/02/02/03-02-02.02';
import { C03020203 } from '@/components/doc/03-api-reference/02/02/03-02-02.03';

function C030202() {
  return (
    <>
      <C03020201></C03020201>

      <Divider />

      <C03020202></C03020202>

      <Divider />

      <C03020203></C03020203>
    </>
  );
}

export { C030202 };
