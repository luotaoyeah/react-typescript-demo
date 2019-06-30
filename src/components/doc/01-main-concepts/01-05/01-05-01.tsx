/*
 * State and Lifecycle
 */

import React from 'react';
import * as ReactDOM from 'react-dom';

/*
 * 如果要更新UI，可以在需要的时候重新调用 ReactDOM.render() 方法，
 * 重新渲染UI；
 */
function Clock() {
  return <p>{new Date().toISOString()}</p>;
}

/**
 * 可以通过 props 将组件需要的属性传递进去；
 * @param props
 * @constructor
 */
function Clock02(props: { date: Date }) {
  return <p>{props.date.toISOString()}</p>;
}

/*
 * react 引入了 state 的概念，跟 props 的区别在于，
 * state 是属于组件内部的状态，组件可以修改 state 的值；
 * 同时，只有 class 组件才能使用 state，
 * functional 组件不能使用 state；
 */

setInterval(() => {
  ReactDOM.render(
    <p>
      <Clock />
      <Clock02 date={new Date()} />
    </p>,
    document.getElementById('root02'),
  );
}, 1000);

class C010501 extends React.Component {
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C010501 };
