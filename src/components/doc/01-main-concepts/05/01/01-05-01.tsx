/*
 * https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from 'react';

/**
 * 可以通过 props 传入组件属性
 */
function C010501A({ date }: { date: Date }) {
  return <div>{date.toISOString()}</div>;
}

function C010501() {
  return <C010501A date={new Date()} />;
}

export { C010501 };
