/*
 * https://reactjs.org/docs/portals.html#event-bubbling-through-portals
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

/*
 * 除了可以将组件实例挂载到任意的 DOM 节点之外,
 * React.ReactPortal 和普通的 React.ReactElement 没有区别
 */
class C021102A extends React.Component<{}> {
  public render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, document.body);
  }
}

interface IState {
  num: number;
}

class C021102 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      num: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState(prevState => ({ num: prevState.num + 1 }));
  }

  public render() {
    const { num } = this.state;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={this.handleClick}>
        <C021102A>
          <Button
            type="primary"
            style={{
              position: 'absolute',
              right: '10px',
              bottom: '10px',
            }}
          >
            {num}
          </Button>
        </C021102A>
      </div>
    );
  }
}

export { C021102 };
