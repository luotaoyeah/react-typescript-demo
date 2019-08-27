/*
 * https://reactjs.org/docs/react-component.html#constructor
 */

import React from 'react';
import { Divider } from 'antd';
import { C03020301 } from '@/components/doc/03-api-reference/02/03/03-02-03.01';
import { C03020302 } from '@/components/doc/03-api-reference/02/03/03-02-03.02';

function C030203() {
  return (
    <>
      <C03020301></C03020301>

      <Divider />

      <C03020302></C03020302>
    </>
  );
}

export { C030203 };
