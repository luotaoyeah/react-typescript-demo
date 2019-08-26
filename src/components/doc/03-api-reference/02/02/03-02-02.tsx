/*
 * https://reactjs.org/docs/react-component.html#render
 */

import React from 'react';
import { Divider } from 'antd';
import { C03020201 } from '@/components/doc/03-api-reference/02/02/03-02-02.01';
import { C03020202 } from '@/components/doc/03-api-reference/02/02/03-02-02.02';
import { C03020203 } from '@/components/doc/03-api-reference/02/02/03-02-02.03';
import { C03020204 } from '@/components/doc/03-api-reference/02/02/03-02-02.04';
import { C03020205 } from '@/components/doc/03-api-reference/02/02/03-02-02.05';
import { C03020206 } from '@/components/doc/03-api-reference/02/02/03-02-02.06';

function C030202() {
  return (
    <>
      <C03020201></C03020201>

      <Divider />

      <C03020202></C03020202>

      <Divider />

      <C03020203></C03020203>

      <Divider />

      <C03020204></C03020204>

      <Divider />

      <C03020205></C03020205>

      <Divider />

      <C03020206></C03020206>
    </>
  );
}

export { C030202 };
