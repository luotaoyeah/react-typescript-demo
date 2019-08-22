/*
 * https://reactjs.org/docs/higher-order-components.html#refs-arent-passed-through
 */

import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { InputProps } from 'antd/es/input';

/*
 * 如果想用 ref 访问原组件, 需要在 HOC 中使用 React.forwardRef() 方法进行转发
 */

function withRef(C01: typeof Input) {
  class C02 extends Component<{ someRef: React.Ref<Input> }> {
    public render() {
      const { someRef, ...restProps } = this.props;

      return <C01 ref={someRef} {...restProps}></C01>;
    }
  }

  return React.forwardRef((props: InputProps, ref: React.Ref<Input>) => <C02 someRef={ref} {...props}></C02>);
}

const C02070603A = withRef(Input);
C02070603A.displayName = 'C02070603A';

class C02070603 extends Component {
  private readonly ref01 = React.createRef<Input>();

  public constructor(props: Readonly<{}>) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    if (this.ref01.current) {
      this.ref01.current.focus();
    }
  }

  public render() {
    return (
      <>
        <C02070603A ref={this.ref01}></C02070603A>
        <Button onClick={this.handleClick}>FOCUS</Button>
      </>
    );
  }
}

export { C02070603 };
