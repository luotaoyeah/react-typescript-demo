import React from 'react';
import { ColorContext } from './ColorContext';

class ColorInput extends React.Component<{ color: string }> {
  private inputRef = React.createRef<HTMLInputElement>();

  public focus() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.inputRef.current!.focus();
  }

  public render() {
    const { color } = this.props;
    return (
      <input
        ref={this.inputRef}
        style={{
          color,
          borderRadius: '3px',
          outline: 'none',
          cursor: 'pointer',
        }}
      />
    );
  }
}

/*
 * 由于消费 Context 的时候，组件被嵌套在 Consumer 里面，
 * 无法将 ref 直接传递给组件，因此需要使用 React.forwardRef() 方法，
 * 将 ref 传递到内层中的组件上去；
 */
export default React.forwardRef((props: {}, ref?: any) => (
  <ColorContext.Consumer>{(color: string) => <ColorInput {...props} color={color} ref={ref} />}</ColorContext.Consumer>
));
