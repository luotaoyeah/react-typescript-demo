/*
 * Context: API
 */

import * as React from "react";
import { Context, Fragment } from "react";

/*
 * React.createContext() 方法创建一个 Context 对象，
 * Context 对象是一个 Provider/Comsuler 对；
 */
const AgeContext: Context<number> = React.createContext<number>(18);

class A extends React.Component<{}, { age: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { age: 19 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState: any) => ({
        age: prevState.age + 1
      }));
    }, 1000);
  }

  render(): React.ReactNode {
    /*
     * 如果 Consumer 找不到匹配的 Provider，则使用 Context 的默认值；
     */
    return (
      <AgeContext.Consumer>
        {(age: number) => (
          <Fragment>
            <p>
              <i>{age}</i>
            </p>
            <AgeContext.Provider value={this.state.age}>
              <B />
            </AgeContext.Provider>
          </Fragment>
        )}
      </AgeContext.Consumer>
    );
  }
}

class B extends React.Component {
  render(): React.ReactNode {
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

class C extends React.Component {
  render(): React.ReactNode {
    /*
     * 上面有两个 AgeContext.Provider，选择最近的进行匹配，
     * 所以拿到的值为 20；
     */
    return (
      <AgeContext.Consumer>{(age: number) => <i>{age}</i>}</AgeContext.Consumer>
    );
  }
}

class C020303 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <A />
      </div>
    );
  }
}

export { C020303 };
