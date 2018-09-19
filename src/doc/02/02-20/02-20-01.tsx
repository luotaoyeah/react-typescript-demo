/*
 * Uncontrolled Components
 */

import React from "react";

/*
 * 如果让表单控件自己维护状态数据，此时的表单控件称为非受控组件；
 * 可以通过 ref 的方式获取非受控组件的状态数据；
 */

/**  */
class C022001 extends React.Component {
  inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: any, context: any) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (this.inputRef.current) {
      console.log(this.inputRef.current.value);
    }
  }

  render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <form onSubmit={vm.handleSubmit}>
          <label>
            NAME：
            <input type="text" ref={vm.inputRef} />
          </label>
          <button type={"submit"}>submit</button>
        </form>
      </div>
    );
  }
}

export { C022001 };
