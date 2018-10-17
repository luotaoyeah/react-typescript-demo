import * as React from "react";
import { ColorContext } from "./ColorContext";

class ColorInput extends React.Component<{ color: string }> {
  inputRef = React.createRef<HTMLInputElement>();

  focus() {
    this.inputRef.current!.focus();
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        style={{
          color: this.props.color,
          borderRadius: "3px",
          outline: "none",
          cursor: "pointer"
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
  <ColorContext.Consumer>
    {(color: string) => <ColorInput {...props} color={color} ref={ref} />}
  </ColorContext.Consumer>
));
