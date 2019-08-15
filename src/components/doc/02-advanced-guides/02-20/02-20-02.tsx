/*
 * Uncontrolled Components
 *     Default Values
 */

import React from 'react';
import { Divider } from 'antd';

/*
 * 要给非受控组件设置初始值，不能使用 value 属性，
 * 应该使用 defaultValue 属性；
 * 对于 checkbox 和 radio，应该使用 defaultChecked；
 */

/**  */
class C022002 extends React.Component {
  private inputRef = React.createRef<HTMLInputElement>();

  public checkboxRef = React.createRef<HTMLInputElement>();

  public radioRef = React.createRef<HTMLInputElement>();

  public constructor(props: any, context: any) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(this.inputRef.current!.value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(this.checkboxRef.current!.checked);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(this.radioRef.current!.checked);
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <form onSubmit={vm.handleSubmit}>
          <label htmlFor="input01">
            NAME：
            <input id="input01" type="text" ref={vm.inputRef} defaultValue="foobar" />
          </label>
          <Divider />
          <label htmlFor="input02">
            BOY
            <input id="input02" type="checkbox" defaultChecked ref={vm.checkboxRef} />
          </label>
          <Divider />
          <label htmlFor="gender">
            GENDER
            <input type="radio" name="gender" ref={vm.radioRef} />
            <input type="radio" name="gender" defaultChecked />
          </label>
          <Divider />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export { C022002 };
