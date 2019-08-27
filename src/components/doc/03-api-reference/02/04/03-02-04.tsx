/*
 * https://reactjs.org/docs/react-component.html#componentdidmount
 */

import React from 'react';
import { Divider } from 'antd';
import { C03020401 } from '@/components/doc/03-api-reference/02/04/03-02-04.01';
import { C03020402 } from '@/components/doc/03-api-reference/02/04/03-02-04.02';

function C030204() {
  return (
    <>
      <C03020401></C03020401>

      <Divider />

      <C03020402></C03020402>
    </>
  );
}

export { C030204 };
