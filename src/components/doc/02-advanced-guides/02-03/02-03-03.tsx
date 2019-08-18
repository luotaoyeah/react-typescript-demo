/*
 * Context: API
 */

import React, { Context, Fragment } from 'react';

/*
 * React.createContext() 方法创建一个 Context 对象，
 * Context 对象是一个 Provider/Comsuler 对；
 */
const AgeContext: Context<number> = React.createContext<number>(18);

class A extends React.Component<{}, { age: number }> {
  public constructor(props: {}) {
    super(props);
    this.state = { age: 19 };
  }

  public componentDidMount() {
    /*
     * 当 Provider 的 value 属性值改变时，
     * 下面所有的 Consumer 都会自动更新，
     * 而且不受 shouldComponentUpdate() 方法的影响；
     */
    setInterval(() => {
      this.setState((prevState: any) => ({
        age: prevState.age + 1,
      }));
    }, 1000);
  }

  public render() {
    const { age } = this.state;

    /*
     * 如果 Consumer 找不到匹配的 Provider，则使用 Context 的默认值；
     */
    return (
      <AgeContext.Consumer>
        {(a: number) => (
          <Fragment>
            <p>
              <i>{a}</i>
            </p>
            <AgeContext.Provider value={age}>
              <B />
            </AgeContext.Provider>
          </Fragment>
        )}
      </AgeContext.Consumer>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class B extends React.Component {
  public render() {
    /*
     * Provider 可以嵌套，内层的值会覆盖上层的值；
     */
    return (
      <Fragment>
        <AgeContext.Consumer>
          {(age: number) => (
            <p>
              <i>{age}</i>
            </p>
          )}
        </AgeContext.Consumer>
        <AgeContext.Provider value={20}>
          <C />
        </AgeContext.Provider>
      </Fragment>
    );
  }
}

function C() {
  /*
   * 上面有两个 AgeContext.Provider，选择最近的进行匹配，
   * 所以拿到的值为 20；
   */
  return <AgeContext.Consumer>{(age: number) => <i>{age}</i>}</AgeContext.Consumer>;
}

function C020303() {
  return (
    <div>
      <A />
    </div>
  );
}

export { C020303 };
