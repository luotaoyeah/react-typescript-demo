/*
 * Accessibility
 */

import React, { RefObject } from 'react';
import { Button } from 'antd';

class C020101 extends React.Component<{}, {}> {
  public inputRef: RefObject<HTMLInputElement>;

  public constructor(props: {}, context: any) {
    super(props, context);

    /*
     * 创建一个 RefObject 对象，并绑定到组件的 ref 属性，
     * 然后通过该对象访问组件的 DOM 对象；
     */
    this.inputRef = React.createRef<HTMLInputElement>();

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）
         * 定义了一系列的 HTML 属性，以 aria- 开头，
         * 在 JSX 中，这些属性依然使用 kebab-case 的形式，如：aria-required="true"；
         */}
        <input id="name" type="text" aria-required />
        {/*
         * 同时，表单元素应该关联 label，
         * 在 JSX 中 htmlFor 对应 HTML 中的 for 属性；
         */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label htmlFor="name" />
        <input type="text" ref={this.inputRef} />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C020101 };
