/*
 * Portals
 *     Event Bubbling Through Portals
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Alert, Button, Divider } from 'antd';

class PortalComponent extends React.Component {
  public render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return ReactDOM.createPortal(children, document.body);
  }
}

class C021102 extends React.Component<{}, { num: number }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  public handleClick() {
    this.setState((prevState: Readonly<{ num: number }>) => ({ num: prevState.num + 1 }));
  }

  /*
   * 虽然在 DOM 树上，portal 组件被挂在了其他的节点上，
   * 但是在 VDOM 树上，portal 组件依然位于上级组件的下面，
   * 因此跟其他的组件一样，portal 组件上未被捕获的事件会冒泡到上级组件上去；
   */
  public render() {
    const { num } = this.state;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={this.handleClick}>
        <Alert message={num} />
        <Divider />
        <PortalComponent>
          <Button>button</Button>
        </PortalComponent>
      </div>
    );
  }
}

export { C021102 };
