/*
 * https://reactjs.org/docs/context.html#reactcreatecontext
 */

import React from 'react';
import { Button } from 'antd';
import { Divider } from 'antd/es';

/*
 * 使用 React.createContext() 方法创建一个 React.Context 对象
 */
const AgeContext: React.Context<number> = React.createContext<number>(18);

class C020303A extends React.Component<{}, { age: number }> {
  public constructor(props: {}) {
    super(props);

    this.state = { age: 19 };

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    /*
     * 当 Provider 的 value 的值变更时, 下面所有的 Consumer 都会自动更新,
     * 而且不受 shouldComponentUpdate() 方法的影响
     */
    this.setState(prevState => ({
      age: prevState.age + 1,
    }));
  }

  public render() {
    const { age } = this.state;

    /*
     * 如果 Consumer 找不到匹配的 Provider, 则使用创建 Context 时设置的默认值
     */
    return (
      <>
        <AgeContext.Consumer>
          {(a: number) => (
            <>
              <p>
                <Button>{a}</Button>
              </p>

              <AgeContext.Provider value={age}>
                <C020303B />
              </AgeContext.Provider>
            </>
          )}
        </AgeContext.Consumer>

        <Divider />

        <Button type="primary" onClick={this.handleClick}>
          UPDATE CONTEXT
        </Button>
      </>
    );
  }
}

function C020303B() {
  /*
   * Provider 可以嵌套, 内层的值会覆盖上层的值
   */
  return (
    <>
      <AgeContext.Consumer>
        {(age: number) => (
          <p>
            <Button>{age}</Button>
          </p>
        )}
      </AgeContext.Consumer>

      <AgeContext.Provider value={20}>
        <C020303C />
      </AgeContext.Provider>
    </>
  );
}

function C020303C() {
  /*
   * 上面有两个 AgeContext.Provider, 选择最近的进行匹配, 所以拿到的值为 20
   */
  return (
    <AgeContext.Consumer>
      {(age: number) => (
        <p>
          <Button>{age}</Button>
        </p>
      )}
    </AgeContext.Consumer>
  );
}

function C02030301() {
  return (
    <div>
      <C020303A />
    </div>
  );
}

export { C02030301 };
