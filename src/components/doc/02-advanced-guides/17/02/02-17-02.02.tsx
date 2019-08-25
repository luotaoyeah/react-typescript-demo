/*
 * https://reactjs.org/docs/render-props.html#using-props-other-than-render
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 可以使用 props.children 属性作为 render props
 */

interface IProps {
  children?(state: IState): React.ReactNode;
}

interface IState {
  text: string;
}

class C02170202A extends React.Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      text: 'C02170202A',
    };
  }

  public render() {
    const { children } = this.props;
    if (children) {
      return children(this.state);
    }

    const { text } = this.state;
    return <Button>{text}</Button>;
  }
}

class C02170202 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  public renderA(state: IState) {
    return (
      <Button type="primary" style={{ marginLeft: '10px' }}>
        {state.text}
      </Button>
    );
  }

  public render() {
    return (
      <React.Fragment>
        {/* eslint-disable-next-line react/no-children-prop */}
        <C02170202A children={this.renderA} />

        {/* props.children 是一个特殊的属性, 可以直接写在标签的中间 */}
        <C02170202A>{this.renderA}</C02170202A>
      </React.Fragment>
    );
  }
}

export { C02170202 };
