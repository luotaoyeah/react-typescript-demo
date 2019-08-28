/*
 * https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns
 */

import React from 'react';
import { Button } from 'antd';

/*
 * render props 实际上是一种特殊的 props 属性, 通常被命名为 'render',
 * 这个属性的值是一个 function, 该 function 接收的参数是该组件的 state, 返回的是一个 react element,
 * 组件调用这个由外界传入的 function, 并传入组件的 state, 最后使用它返回的 react element 来渲染组件
 */

interface IProps {
  render?: (state: IState) => React.ReactNode;
}

interface IState {
  text: string;
}

class C02170101A extends React.Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);

    this.state = { text: 'C02170101A' };
  }

  public render() {
    const { render: renderProp } = this.props;
    if (renderProp) {
      return renderProp(this.state);
    }

    const { text } = this.state;
    return <Button>{text}</Button>;
  }
}

function C02170101() {
  return (
    <>
      <C02170101A />

      <C02170101A
        render={(state: IState) => (
          <Button type="primary" style={{ marginLeft: '10px' }}>
            {state.text}
          </Button>
        )}
      />

      <C02170101A
        render={(state: IState) => (
          <Button type="danger" style={{ marginLeft: '10px' }}>
            {state.text}
          </Button>
        )}
      />
    </>
  );
}

export { C02170101 };
