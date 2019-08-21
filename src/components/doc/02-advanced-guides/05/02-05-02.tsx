/*
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components
 */

import React from 'react';
import { Button, message } from 'antd';
import { ButtonProps } from 'antd/lib/button';

/**
 * 在原组件被 HOC 包装之后, 如果将 ref 传递给原组件呢?
 * 可以通过一个普通的 props 属性(如: forwardRef)将 ref 传递进来, 然后继续传递给下级组件
 */
function LoggerHOC(C01: typeof Button) {
  class C02 extends React.Component<{
    forwardRef?: React.Ref<Button>;
  }> {
    public componentDidMount() {
      // eslint-disable-next-line no-console
      console.log('LOGGER');
    }

    public render() {
      const { forwardRef, ...restProps } = this.props;

      return <C01 {...restProps} ref={forwardRef} />;
    }
  }

  return React.forwardRef((props: ButtonProps, ref?: React.Ref<Button>) => <C02 {...props} forwardRef={ref} />);
}

const C020502A = LoggerHOC(Button);

class C020502 extends React.Component {
  public ref01 = React.createRef<Button>();

  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.ref01.current) {
      message.info(
        <span>
          this.ref01.current instanceof Button:{' '}
          <span style={{ color: 'red' }}>{String(this.ref01.current instanceof Button).toUpperCase()}</span>
        </span>,
      );
    }
  }

  public render() {
    return (
      <C020502A ref={this.ref01} onClick={this.handleClick}>
        CLICK
      </C020502A>
    );
  }
}

export { C020502 };
