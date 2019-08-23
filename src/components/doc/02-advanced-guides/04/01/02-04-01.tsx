/*
 * https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
 */

import React from 'react';
import { Divider } from 'antd';
import { C02040101 } from '@/components/doc/02-advanced-guides/04/01/02-04-01.01';
import { C02040102 } from '@/components/doc/02-advanced-guides/04/01/02-04-01.02';

function C020401() {
  return (
    <>
      <C02040101></C02040101>

      <Divider />

      <C02040102></C02040102>
    </>
  );
}

export { C020401 };
