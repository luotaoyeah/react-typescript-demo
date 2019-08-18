/*
 * https://reactjs.org/docs/components-and-props.html#props-are-read-only
 */

import React from 'react';

/*
 * 所有的 component 都应该表现为一个 pure function, 不能修改 props
 */

function C010405() {
  return <div />;
}

export { C010405 };
