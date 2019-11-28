/*
 * Forwarding Refs: Forwarding refs to DOM components
 */

import * as React from "react";

/*
 * React.forwardRef() 可以将 ref 自动传递给组件的下级组件；
 * 因为 ref 和 key 是两个特殊的属性，
 * react 不会把他们当做普通的 props 属性进行传递，
 * 他们具有特殊的作用，所以 ref 不同通过 props 进行传递，
 * 必须通过 React.forwardRef() 方法进行传递；∏
 */

const FancyButton = React.forwardRef((props: { onClick: () => void }, ref?: React.Ref<HTMLButtonElement>) => {
  return (
    <button ref={ref} onClick={props.onClick}>
      button
    </button>
  );
});

class C020501 extends React.Component {
  constructor(props: {}, context: any) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
  }

  ref = React.createRef<HTMLButtonElement>();

  onClick() {
    const vm = this;
    if (vm.ref.current) {
      vm.ref.current.style.borderRadius = "3px";
      vm.ref.current.style.color = "#ff0000";
    }
  }

  public render() {
    return (
      <div>
        <FancyButton ref={this.ref} onClick={this.onClick} />
      </div>
    );
  }
}

export { C020501 };
