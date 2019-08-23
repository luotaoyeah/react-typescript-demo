/*
 * https://reactjs.org/docs/uncontrolled-components.html#default-values
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * controlled component 的值是由 value 绑定的, value 的初始值决定了组件的初始值,
 * uncontrolled component 的值是由 DOM 内部管理的, 需要使用 defaultValue/defaultChecked 属性来设置初始值
 */

class C022102 extends React.Component {
  private ref01 = React.createRef<HTMLInputElement>();

  public ref02 = React.createRef<HTMLInputElement>();

  public ref03 = React.createRef<HTMLInputElement>();

  public constructor(props: {}) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (this.ref01.current) {
      console.log(this.ref01.current.value);
    }
    if (this.ref02.current) {
      console.log(this.ref02.current.checked);
    }
    if (this.ref03.current) {
      console.log(this.ref03.current.checked);
    }
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.ref01} defaultValue="foobar" />

          <Divider />

          <input type="checkbox" defaultChecked ref={this.ref02} />

          <Divider />

          <input type="radio" name="gender" ref={this.ref03} />
          <input type="radio" name="gender" defaultChecked />

          <Divider />

          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export { C022102 };
