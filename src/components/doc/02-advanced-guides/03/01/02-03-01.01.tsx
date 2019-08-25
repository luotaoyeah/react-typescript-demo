/*
 * https://reactjs.org/docs/context.html#when-to-use-context
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';

/*
 * 假如存在组件树 A-B-C, 如果要从 A 传递一个数据到 C,
 * 如果使用 props 属性来传递数据, 则需要先从 A 传递给 B, 再由 B 传递给 C,
 * 即, 使用 props 属性传递数据时, 需要从顶层组件一层一层往下传递, 直到目标组件
 */

interface IProps {
  theme: ButtonType;
}

function C02030101C({ theme }: IProps) {
  return <Button type={theme}>{theme.toUpperCase()}</Button>;
}

function C02030101B({ theme }: IProps) {
  return <C02030101C theme={theme} />;
}

function C02030101A({ theme }: IProps) {
  return <C02030101B theme={theme} />;
}

function C02030101() {
  return (
    <>
      <C02030101A theme="primary" />
    </>
  );
}

export { C02030101 };
