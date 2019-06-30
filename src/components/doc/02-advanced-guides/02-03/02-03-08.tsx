/*
 * Context: Consuming Context with a HOC
 */

import React from 'react';

const ColorContext: React.Context<string> = React.createContext('red');

/*
 * HOC（High Order Component）高阶组件，是一种特殊的函数，
 * 接受一个组件作为参数，然后返回一个组件，
 * 即对参数组件进行处理之后，返回处理之后的组件；
 */

/*
 * 如果很多的组件都需要使用同一个 Context，
 * 则可以将这个 Context 包装到一个 HOC 中，
 * 传入任何组件，返回一个消费该 Context 的组件；
 */
function withColor<P, S>(Component: typeof React.Component) {
  return function ColorComponent(props: P) {
    return (
      <ColorContext.Consumer>
        {(color: string) => <Component {...props} color={color} />}
      </ColorContext.Consumer>
    );
  };
}

class Button extends React.Component<{ color: string }> {
  public render(): React.ReactNode {
    return (
      <button
        style={{
          color: this.props.color,
          borderRadius: '3px',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        {this.props.color}
      </button>
    );
  }
}

class Input extends React.Component<{ color: string }> {
  public render() {
    return (
      <input
        type={'text'}
        style={{
          color: this.props.color,
          borderRadius: '3px',
          outline: 'none',
          cursor: 'pointer',
        }}
      />
    );
  }
}

const ColorButton = withColor(Button);
const ColorInput = withColor(Input);

class C020308 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <p>
          <ColorButton />
        </p>
        <p>
          <ColorInput />
        </p>
      </div>
    );
  }
}

export { C020308 };
