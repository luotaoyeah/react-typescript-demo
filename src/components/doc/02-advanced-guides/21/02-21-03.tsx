/*
 * https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * 因为安全原因, <input type="file" /> 不能手动绑定 value 属性, 它只能是一个 uncontrolled component
 */

class C022103 extends React.Component {
  public ref01 = React.createRef<HTMLInputElement>();

  public constructor(props: {}) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (this.ref01.current) {
      console.log(this.ref01.current.files);
    }
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" ref={this.ref01} />

          <Divider />

          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export { C022103 };
