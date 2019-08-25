/*
 * https://reactjs.org/docs/context.html#consuming-multiple-contexts
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 如果组件要消费多个 context 对象, 可以将多个 <Context.Consumer> 嵌套使用
 */

const FooContext = React.createContext<string>('');
const BarContext = React.createContext<string>('');

function C02030403B() {
  return (
    <FooContext.Consumer>
      {(foo: string) => (
        <BarContext.Consumer>
          {(bar: string) => (
            <Button>
              {foo} {bar}
            </Button>
          )}
        </BarContext.Consumer>
      )}
    </FooContext.Consumer>
  );
}

function C02030403A() {
  return (
    <FooContext.Provider value="FOO">
      <BarContext.Provider value="BAR">
        <C02030403B />
      </BarContext.Provider>
    </FooContext.Provider>
  );
}

function C02030403() {
  return <C02030403A />;
}

export { C02030403 };
