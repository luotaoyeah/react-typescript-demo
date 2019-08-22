/*
 * https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 */

import React from 'react';

/*
 * 经过 HOC 包装之后, 原组件的静态属性和静态方法会丢失, 需要手动拷贝
 */

function C02070602A() {
  return '';
}

C02070602A.staticFoo = true;
console.assert(C02070602A.staticFoo);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withoutStatic(C01: any) {
  return function C02(props: {}) {
    return <C01 {...props}></C01>;
  };
}

const C02070602A01 = withoutStatic(C02070602A);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
console.assert(!(C02070602A01 as any).staticFoo);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withStatic(C01: any) {
  function C02(props: {}) {
    return <C01 {...props}></C01>;
  }

  /* 手动拷贝静态属性和静态方法 */
  C02.staticFoo = C01.staticFoo;

  return C02;
}

const C02070602A02 = withStatic(C02070602A);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
console.assert((C02070602A02 as any).staticFoo);

function C02070602() {
  return <></>;
}

export { C02070602 };
