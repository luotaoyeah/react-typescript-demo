/*
 * https://reactjs.org/docs/composition-vs-inheritance.html#containment
 */

import React from 'react';
import { Divider } from 'antd';
import { C01110101 } from '@/components/doc/01-main-concepts/11/01/01-11-01.01';
import { C01110102 } from '@/components/doc/01-main-concepts/11/01/01-11-01.02';

function C011101() {
  return (
    <div>
      <C01110101></C01110101>

      <Divider></Divider>

      <C01110102></C01110102>
    </div>
  );
}

export { C011101 };
