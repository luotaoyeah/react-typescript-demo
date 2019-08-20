/*
 * https://reactjs.org/docs/composition-vs-inheritance.html#containment
 */

import React from 'react';

/*
 * 在 react 中, 推荐使用组合(composition), 不推荐使用继承(inheritance)
 */

/*
 * 如果组件的内容需要由外界传入, 比如弹窗(dialog), 这时候可以使用 children 属性传入内容,
 * 在 JSX 中, 组件标签中间的所有内容, 都会作为组件的 children 属性, 传入组件
 */
function C01110101A({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: '3px',
        border: '2px solid red',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      {children}
    </div>
  );
}

function C01110101() {
  return (
    <>
      <C01110101A>FOO</C01110101A>
      <C01110101A>BAR</C01110101A>
    </>
  );
}

export { C01110101 };
