/*
 * React Top-Level API
 *     Reference
 *         React.forwardRef()
 */

import React from "react";

/*
 * React.forwardRef() 接收一个渲染函数（render function）作为参数，
 * 返回一个 react element；
 * 通过渲染函数的第二个参数拿到外界传入的 ref 对象，然后可以将 ref 绑定到任意某个元素上；
 */

const FancyButton = React.forwardRef<
  HTMLButtonElement,
  object & React.HTMLAttributes<HTMLButtonElement>
>(
  (
    props: object & { children?: React.ReactNode },
    ref?: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        style={{
          color: "red",
          borderRadius: "3px",
          border: "none",
          cursor: "pointer"
        }}
        {...props}
      />
    );
  }
);

class C03010901 extends React.Component {
  inputRef = React.createRef<HTMLButtonElement>();

  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const vm = this;

    if (vm.inputRef.current) {
      vm.inputRef.current.textContent = new Date().toISOString();
    }
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div>
        <FancyButton ref={vm.inputRef} onClick={vm.handleClick}>
          fancy button
        </FancyButton>
      </div>
    );
  }
}

export { C03010901 };
