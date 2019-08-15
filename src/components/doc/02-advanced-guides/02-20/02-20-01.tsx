/*
 * Uncontrolled Components
 */

import React from 'react';

/*
 * 如果让表单控件自己维护状态数据，此时的表单控件称为非受控组件；
 * 可以通过 ref 的方式获取非受控组件的状态数据；
 */

/**  */
class C022001 extends React.Component {
  public inputRef = React.createRef<HTMLInputElement>();

  public constructor(props: any, context: any) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (this.inputRef.current) {
      console.log(this.inputRef.current.value);
    }
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <form onSubmit={vm.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
          <label>
            NAME：
            <input type="text" ref={vm.inputRef} />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export { C022001 };
