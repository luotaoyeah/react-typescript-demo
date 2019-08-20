/*
 * https://reactjs.org/docs/composition-vs-inheritance.html#specialization
 */

import React from 'react';
import { Button, message } from 'antd';

/*
 * 可以对基础组件进一步封装, 形成一个新的组件, 这种方式也属于组合,
 * 比如对 Button 组件进一步封装, 创造出 PrimaryButton, DangerButton 等新的组件
 */

function PrimaryButton({ children, onClick }: { children?: React.ReactNode; onClick?: () => void }) {
  return (
    <Button type="primary" onClick={onClick} style={{ marginRight: '10px' }}>
      {children}
    </Button>
  );
}

function DangerButton({ children, onClick }: { children?: React.ReactNode; onClick?: () => void }) {
  return (
    <Button type="danger" onClick={onClick}>
      {children}
    </Button>
  );
}

class C011102 extends React.Component {
  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    message.info('CLICK');
  }

  public render() {
    return (
      <div>
        <PrimaryButton onClick={this.handleClick}>FOO</PrimaryButton>
        <DangerButton onClick={this.handleClick}>BAR</DangerButton>
      </div>
    );
  }
}

export { C011102 };
