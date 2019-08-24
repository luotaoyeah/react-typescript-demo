/*
 * https://reactjs.org/docs/jsx-in-depth.html#javascript-expressions-as-children
 */
import React from 'react';

/*
 * children 可以是任意的 javascript expression
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function C02090403A({ children }: { children: any }) {
  console.assert(children.length === 2);
  console.assert(children[0] === '1 + 1 = ');
  console.assert(children[1] === 2);

  return <div>{children}</div>;
}

function C02090403() {
  return (
    <>
      <C02090403A>1 + 1 = {1 + 1}</C02090403A>
    </>
  );
}

export { C02090403 };
