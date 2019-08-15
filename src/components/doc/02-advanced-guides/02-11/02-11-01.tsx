/*
 * Portals
 */

import React from 'react';
import ReactDOM from 'react-dom';

/*
 * ReactDOM.createPortal() 方法，用于将组件渲染到指定的 DOM 节点下面；
 * 一般情况下，组件在哪个节点下使用，就会被渲染为哪个节点的子节点，
 * 而使用 ReactDOM.createPortal() 可以将组件渲染到任意的节点下面；
 */
class PortalComponent extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    const { children } = this.props;
    return ReactDOM.createPortal(children, document.body);
  }
}

function C021101(): React.ReactNode {
  return (
    <div>
      <PortalComponent>
        <div>I&apos;M A PORTAL</div>
      </PortalComponent>
    </div>
  );
}

export { C021101 };
