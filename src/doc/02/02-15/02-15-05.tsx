/*
 * Refs and the DOM
 *     Callback Refs
 */

import React from "react";
import { Button, Divider } from "antd";

const MyInput = React.forwardRef(
  (props: {}, ref?: React.Ref<HTMLInputElement>) => {
    return <input type="text" ref={ref} style={{ borderRadius: "3px" }} />;
  }
);

class C021505 extends React.Component {
  inputRef!: HTMLInputElement;

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const vm = this;
    if (vm.inputRef) {
      vm.inputRef.focus();
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        {/*
          * ref 属性可以设置为一个回调函数，
          * 参数为 ref 对象（DOM 元素对象或者组件实例对象）；
          */}
        <MyInput
          ref={(ref: HTMLInputElement) => {
            this.inputRef = ref;
          }}
        />
        <Divider />
        <Button onClick={this.handleClick}>focus</Button>
      </div>
    );
  }
}

export { C021505 };
