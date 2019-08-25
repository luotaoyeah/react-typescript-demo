/*
 * https://reactjs.org/docs/context.html#when-to-use-context
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonType } from 'antd/lib/button';

/*
 * 假如存在组件树 A-B-C, 如果要从 A 传递一个数据到 C,
 * 如果使用 context 来传递数据, 则不需要经过 B, 直接在 C 中就可以获取到 A 提供的 context 数据
 *
 * 1. 使用 React.createContext() 方法创建一个 context 对象, 假设名称为 ThemeContext
 * 2. 使用 <ThemeContext.Provider value="value"> 组件来供应一个数据
 * 3. 使用 <ThemeContext.Consumer> 组件来消费一个数据
 */

const ThemeContext: React.Context<ButtonType> = React.createContext<ButtonType>('primary');

function C02030101C() {
  return (
    <ThemeContext.Consumer>
      {(theme: ButtonType) => <Button type={theme}>{theme.toUpperCase()}</Button>}
    </ThemeContext.Consumer>
  );
}

function C02030101B() {
  return <C02030101C />;
}

function C02030101A() {
  return <C02030101B />;
}

function C02030102() {
  return (
    <>
      <ThemeContext.Provider value="primary">
        <C02030101A />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="danger">
        <C02030101A />
      </ThemeContext.Provider>
    </>
  );
}

export { C02030102 };
