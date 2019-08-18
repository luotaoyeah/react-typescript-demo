/*
 * https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
 */

import React from 'react';
import { Divider } from 'antd';
import { C01050501 } from '@/components/doc/01-main-concepts/05/05/01-05-05.01';
import { C01050502 } from '@/components/doc/01-main-concepts/05/05/01-05-05.02';
import { C01050503 } from '@/components/doc/01-main-concepts/05/05/01-05-05.03';

function C010505() {
  return (
    <>
      <C01050501></C01050501>

      <Divider></Divider>

      <C01050502></C01050502>

      <Divider></Divider>

      <C01050503></C01050503>
    </>
  );
}

export { C010505 };
