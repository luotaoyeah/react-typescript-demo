/*
 * Components and Props: Composing Components
 */

import React from 'react';

/*
 * 简单的组件可以组合成复杂的组件，
 * 整个应用就是一个由各种组件组合成的复杂组件；
 */

function C0104003A({ name }: { name: string }): React.ReactElement<{ name: string }> {
  return <h3>{name}</h3>;
}

function C010403() {
  return (
    <div>
      <C0104003A name="foo" />
      <C0104003A name="bar" />
      <C0104003A name="baz" />
    </div>
  );
}

export { C010403 };
