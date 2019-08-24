/*
 * https://reactjs.org/docs/jsx-in-depth.html#props-default-to-true
 */
import React from 'react';
import { Button } from 'antd';

interface IProps {
  foo?: boolean;
  bar?: boolean;
  baz?: boolean;
}

function C02090303A({ foo, bar, baz }: IProps) {
  return (
    <>
      <Button type="primary">{String(foo)}</Button> <Button type="danger">{String(bar)}</Button>{' '}
      <Button type="dashed">{String(baz)}</Button>
    </>
  );
}

/*
 * props 的值可以省略, 此时表示它的值为 true,
 * 这个特性是为了跟 HTML 中类似的特性保持一致
 */
function C02090303() {
  return <C02090303A foo={false} bar={true} baz></C02090303A>;
}

export { C02090303 };
