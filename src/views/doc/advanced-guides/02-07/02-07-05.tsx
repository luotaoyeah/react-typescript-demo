/*
 * Higher-Order Components: Caveats
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 使用 HOC 有一些需要注意的地方；
 *
 * 如果组件上定义了静态方法，在经过 HOC 包装之后，
 * 新返回的组件上将没有这些静态方法；
 * 此时可以在 HOC 中，手动将这些静态方法复制到新的组件上去，
 * 但是这种方式必须明确知道有哪些静态方法；
 * 于是可以使用例如 https://github.com/mridgway/hoist-non-react-statics 这样的插件，
 * 将组件中不属于 react 的静态方法复制到新的组件上去；
 *
 * 或者，将组件的静态方法单独输出，跟组件进行分离，
 * 即可以不通过 Component.staticMethod() 的方式调用静态方法，
 * 而是直接输入 staticMethod 方法，然后直接调用 staticMethod()；
 */

function withNothing<P>(Component: React.ComponentType<any>) {
  return class extends React.Component {
    componentDidMount(): void {
      console.log('componentDidMount()');
    }

    public render() {
      return <Component {...this.props} />;
    }
  };
}

/**  */
class C020705 extends React.Component<{}, { date: Date }> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  public render() {
    /*
     *   不能在 render() 方法中调用 HOC 函数；
     *
     *   react 的 diff 算法（reconciliation），
     *   会比较 render() 方法返回的组件是否与上次返回的组件完全相等（===），
     *   如果相等，则会更新子树，
     *   如果不等，则会先 unmount 组件，再重新 mount 一个新的节点；
     *
     *   如果在 render() 方法中调用 HOC 函数，
     *   则每次返回的组件都不一样，会导致每次调用 render() 方法，
     *   都需要重新 mount 一次组件节点；
     */
    const ButtonWithNothing = withNothing<any>(Button);

    return (
      <div>
        <p>{this.state.date.toISOString()}</p>
        <ButtonWithNothing>button</ButtonWithNothing>
      </div>
    );
  }
}

export { C020705 };
