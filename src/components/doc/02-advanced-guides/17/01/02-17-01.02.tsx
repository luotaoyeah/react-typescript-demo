/*
 * https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

/*
 * 有了 render props 之后, 大部分使用 HOC 的地方都可以使用 render props 来实现,
 * 如果确实需要使用 HOC, 可以在 HOC 的内部使用 render props 来实现
 */

interface IProps {
  render?: (state: IState) => React.ReactNode;
}

interface IState {
  text: string;
}

class C02170102A extends React.Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);

    this.state = { text: 'C02170102A' };
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

function withSomething(C01: React.ComponentClass) {
  return function C02(props: ButtonProps) {
    return <C02170102A render={(state: IState) => <C01 {...props}>{state.text}</C01>}></C02170102A>;
  };
}

const C02170102B = withSomething(Button);

function C02170102() {
  return (
    <>
      <C02170102A />

      <C02170102A
        render={(state: IState) => (
          <Button type="primary" style={{ marginLeft: '10px' }}>
            {state.text}
          </Button>
        )}
      />

      <C02170102B type="danger" style={{ marginLeft: '10px' }} />
    </>
  );
}

export { C02170102 };
