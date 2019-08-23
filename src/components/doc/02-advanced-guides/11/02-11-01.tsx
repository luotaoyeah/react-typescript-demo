/*
 * https://reactjs.org/docs/portals.html#usage
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

/*
 * ReactDOM.createPortal() 方法, 用来创建一个类型为 React.ReactPortal 的特殊元素,
 * 这个元素会将下级组件挂载到任意的某个 DOM 节点, 脱离了当前的 DOM 树的父子结构
 */
class C021101A extends React.Component<{}> {
  public render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, document.body);
  }
}

function C021101() {
  return (
    <C021101A>
      <Button
        type="primary"
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        }}
      >
        A PORTAL
      </Button>
    </C021101A>
  );
}

export { C021101 };
