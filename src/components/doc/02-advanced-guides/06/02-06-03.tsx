/*
 * https://reactjs.org/docs/fragments.html#usage
 */

import React from 'react';

function C020603() {
  /*
   * React.Fragment 可以设置一个 key 属性, 简写形式 <></> 不能设置任何属性
   */
  const dds = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }].map(i => (
    <React.Fragment key={i.id}>
      <dt>{i.id}</dt>
      <dd>{i.name}</dd>
    </React.Fragment>
  ));

  return <dl>{dds}</dl>;
}

export { C020603 };
