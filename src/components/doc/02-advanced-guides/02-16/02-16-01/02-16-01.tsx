/*
 * Render Props
 */

import React from 'react';
import { Button } from 'antd';
import { IMouseState, Mouse } from './Mouse';
import { withMouse } from './with-mouse';

/*
 * render props 指的是一种特殊的 props，
 * 这个属性通常取名为 render，它的作用是：
 *     覆盖组件自身的 render() 方法；
 *
 * render props 接收组件的 state 对象作为参数，
 * 返回一个 React 元素，组件可以使用该 render props 个性化组件的渲染，
 * 即将组件的渲染逻辑参数化，使用外界传入的方法来进行渲染；
 */

interface IAProps {
  render?: (state: IAState) => React.ReactNode;
}

interface IAState {
  text: string;
}

/**  */
class A extends React.Component<IAProps, IAState> {
  public state: IAState = {
    text: 'A',
  };

  public render(): React.ReactNode {
    const { render: render1 } = this.props;
    if (render1) {
      return render1(this.state);
    }

    const { text } = this.state;
    return <i>{text}</i>;
  }
}

function CatButton(props: { mouse: IMouseState }) {
  const { mouse } = props;
  return (
    <Button
      style={{
        position: 'absolute',
        left: `${mouse.x - 42 + window.scrollX}px`,
        top: `${mouse.y - 32 + window.scrollY}px`,
        transition: 'none',
      }}
    >
      B
    </Button>
  );
}

const CatButtonWithMouse = withMouse(CatButton);

/**  */
class C021601 extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  public renderA(state: IAState) {
    return <Button>{state.text}</Button>;
  }

  // eslint-disable-next-line class-methods-use-this
  public renderMouse(state: any) {
    return (
      <Button
        style={{
          position: 'absolute',
          left: `${state.x - 42 + window.scrollX}px`,
          top: `${state.y - 32 + window.scrollY}px`,
          transition: 'none',
        }}
      >
        A
      </Button>
    );
  }

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        <A render={this.renderA} />
        <Mouse />
        <Mouse render={this.renderMouse} />
        <CatButtonWithMouse />
      </React.Fragment>
    );
  }
}

export { C021601 };
