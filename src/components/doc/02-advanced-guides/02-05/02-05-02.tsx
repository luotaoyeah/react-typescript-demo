/*
 * Forwarding Refs: Forwarding refs in higher-order components
 */

import React from 'react';

/**
 *
 */
const FancyButton = React.forwardRef(
  (props: { onClick: () => void }, ref?: React.Ref<HTMLButtonElement>) => {
    return (
      <button type="button" onClick={props.onClick} ref={ref}>
        button
      </button>
    );
  },
);

/**
 * HOC
 * TODO 修复类型错误 React.ComponentType<P>
 * @param Component
 * @constructor
 */
function LoggerHOC<P extends JSX.IntrinsicClassAttributes<HTMLButtonElement>>(
  Component: React.ComponentType<any>,
) {
  /*
   * 通过一个普通的 props 属性 forwardRef 将 ref 传递进来，
   * 然后继续传递给下级组件；
   */
  class LoggerComponent extends React.Component<{
    forwardRef: React.RefObject<HTMLButtonElement>;
  }> {
    componentDidMount() {
      console.log('LOGGER');
    }

    public render(): React.ReactNode {
      const { forwardRef, ...rest } = this.props;

      return <Component {...rest} ref={forwardRef} />;
    }
  }

  return React.forwardRef((props: any, ref?: React.Ref<HTMLButtonElement>) => {
    return <LoggerComponent {...props} forwardRef={ref} />;
  });
}

/**
 *
 */
const LoggerFancyButton = LoggerHOC(FancyButton);

/**
 *
 */
class C020502 extends React.Component {
  constructor(props: {}, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  ref = React.createRef<HTMLButtonElement>();

  handleClick() {
    const vm = this;
    if (vm.ref.current) {
      vm.ref.current.style.color = 'red';
      vm.ref.current.style.borderRadius = '3px';
    }
  }

  public render(): React.ReactNode {
    return (
      <div>
        <LoggerFancyButton ref={this.ref} onClick={this.handleClick} />
      </div>
    );
  }
}

export { C020502 };
