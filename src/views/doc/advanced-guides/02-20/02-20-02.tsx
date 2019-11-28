/*
 * Uncontrolled Components
 *     Default Values
 */

import React from "react";
import { Divider } from "antd";

/*
 * 要给非受控组件设置初始值，不能使用 value 属性，
 * 应该使用 defaultValue 属性；
 * 对于 checkbox 和 radio，应该使用 defaultChecked；
 */

/**  */
class C022002 extends React.Component {
  inputRef = React.createRef<HTMLInputElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioRef = React.createRef<HTMLInputElement>();

  constructor(props: any, context: any) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(this.inputRef.current!.value);
    console.log(this.checkboxRef.current!.checked);
    console.log(this.radioRef.current!.checked);
  }

  public render() {
    const vm = this;

    return (
      <div>
        <form onSubmit={vm.handleSubmit}>
          <label>
            NAME：
            <input type="text" ref={vm.inputRef} defaultValue={"foobar"} />
          </label>
          <Divider />
          <label>
            BOY
            <input type="checkbox" defaultChecked={true} ref={vm.checkboxRef} />
          </label>
          <Divider />
          <label>
            GENDER
            <input type="radio" name={"gender"} ref={vm.radioRef} />
            <input type="radio" name={"gender"} defaultChecked={true} />
          </label>
          <Divider />
          <button type={"submit"}>submit</button>
        </form>
      </div>
    );
  }
}

export { C022002 };
