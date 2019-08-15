/*
 * Uncontrolled Components
 *     The file input Tag
 */

import React from 'react';
import { Divider } from 'antd';

/*
 * 在 React 中，文件上传表单控件（<input type="file"/>）因为安全原因，
 * 不能通过 JS 设置它的值，只能通过用户点击选择文件，
 * 因此它只能是一个非受控组件；
 *
 * 可以通过 ref 的方式获取到用户选择的文件；
 */

/**  */
class C022003 extends React.Component {
  public inputRef = React.createRef<HTMLInputElement>();

  public constructor(props: any, context: any) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(this.inputRef.current!.files);
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <form onSubmit={vm.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
          <label>
            NAME：
            <input type="file" ref={vm.inputRef} />
          </label>
          <Divider />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export { C022003 };
