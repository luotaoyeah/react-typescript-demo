import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Rendering an Element into the DOM
 */

/*
 * 通常情况下，一个 DOM 中只会创建一个 React 应用；
 * 但是 React 支持在一个 DOM 中创建多个相互隔离的 React 应用；
 * 使用 ReactDOM.render() 方法来创建应用，其中第二个参数表示该应用的'根节点'；
 */
console.log('\n-------------------------------------------------- 01');

ReactDOM.render(<h1>APP02</h1>, document.getElementById('root02'));
