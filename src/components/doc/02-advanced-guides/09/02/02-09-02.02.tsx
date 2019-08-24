/*
 * https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 组件的标签名中可以包含点运算符, 比如内置的组件 <React.Fragment>,
 * 最后一个点前面的表示各级命名空间, 最后一个点后面的才表示真正的组件
 */

const C02090202A = {
  A: ({ children }: JSX.ElementChildrenAttribute) => <Button type="primary">{children}</Button>,
  b: {
    C: ({ children }: JSX.ElementChildrenAttribute) => <Button type="danger">{children}</Button>,
  },
};

function C02090202() {
  return (
    <React.Fragment>
      <C02090202A.A>A</C02090202A.A> <C02090202A.b.C>B</C02090202A.b.C>
    </React.Fragment>
  );
}

export { C02090202 };
