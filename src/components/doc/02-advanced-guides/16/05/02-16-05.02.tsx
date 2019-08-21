/*
 * https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 使用回调函数绑定 ref 属性时, 这个回调函数可以由上级组件通过 props 传入
 */

interface IProps {
  inputRef?(obj: HTMLInputElement | null): void;
}

class C02160501A extends React.Component<IProps> {
  public render() {
    const { inputRef } = this.props;

    return (
      <div>
        <input
          type="text"
          ref={inputRef}
          style={{
            outline: 'none',
            borderRadius: '3px',
            padding: '2px 8px',
          }}
        />
      </div>
    );
  }
}

class C02160502 extends React.Component {
  private ref01: HTMLInputElement | null = null;

  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.ref01) {
      this.ref01.focus();
    }
  }

  public render() {
    return (
      <div>
        <C02160501A
          inputRef={obj => {
            this.ref01 = obj;
          }}
        ></C02160501A>

        <Button onClick={this.handleClick}>FOCUS</Button>
      </div>
    );
  }
}

export { C02160502 };
