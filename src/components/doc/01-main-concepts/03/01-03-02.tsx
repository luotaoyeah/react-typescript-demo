/*
 * https://reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
export class C010302 extends React.Component {
  public constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick() {
    /*
     * 使用 ReactDOM.render() 方法, 将一个 react element 渲染到某个 DOM 节点上去
     */
    ReactDOM.render(<span>foo</span>, document.querySelector('#p01'));
  }

  public render() {
    return (
      <>
        <p>
          <Button onClick={this.handleClick}>RENDER</Button>
        </p>

        <p
          id="p01"
          style={{
            border: '1px solid red',
            borderRadius: '3px',
            padding: '10px',
          }}
        ></p>
      </>
    );
  }
}
