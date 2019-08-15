/*
 * Refs and the DOM
 *     Exposing DOM Refs to Parent Components
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * 如果父组件要通过 ref 引用子组件的子组件，
 * 需要使用 React.forwardRef() 方法，将 ref 传递下去；
 */
const MyInput = React.forwardRef((props: {}, ref?: React.Ref<HTMLInputElement>) => <input type="text" ref={ref} />);

class C021504 extends React.Component {
  public inputRef: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    const vm = this;
    if (vm.inputRef.current) {
      vm.inputRef.current.focus();
    }
  }

  public render(): React.ReactNode {
    return (
      <div>
        <MyInput ref={this.inputRef} />
        <Divider />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C021504 };
