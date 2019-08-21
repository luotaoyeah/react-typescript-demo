/*
 * https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
 */

import React from 'react';

/*
 * ref 属性是一个特殊的属性, 我们不能通过 props 来传递 ref 属性,
 * 使用 React.forwardRef() 方法对组件进行包装之后, 产生新的组件具有这样一个特性: 将 ref 属性传递给下级组件
 */

interface IProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const C020501A = React.forwardRef(({ onClick, children }: IProps, ref?: React.Ref<HTMLButtonElement>) => (
  <button
    type="button"
    ref={ref}
    onClick={onClick}
    style={{
      borderRadius: '3px',
      outline: 'none',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
));

class C020501 extends React.Component {
  public ref01: React.RefObject<HTMLButtonElement> = React.createRef<HTMLButtonElement>();

  public constructor(props: {}) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    if (this.ref01.current) {
      this.ref01.current.style.color = '#FF0000';
      // eslint-disable-next-line no-console
      console.assert(this.ref01.current instanceof HTMLButtonElement);
    }
  }

  public render() {
    return (
      <div>
        <C020501A ref={this.ref01} onClick={this.handleClick}>
          CLICK
        </C020501A>
      </div>
    );
  }
}

export { C020501 };
