/*
 * https://reactjs.org/docs/context.html#contextdisplayname
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 可以设置 React.Context 对象的 displayName 属性, 用于在 devtools 中显示
 */
const FooContext = React.createContext<string>('foo');
FooContext.displayName = 'C02030303.Context';

function C02030302A() {
  return <FooContext.Consumer>{(foo: string) => <Button>{foo}</Button>}</FooContext.Consumer>;
}

function C02030303() {
  return (
    <FooContext.Provider value="BAR">
      <C02030302A />
    </FooContext.Provider>
  );
}

export { C02030303 };
