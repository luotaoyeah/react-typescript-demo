/*
 * React.Component
 *     Reference
 *         render()
 */

import React from 'react';
import { Button, Divider } from 'antd';

class A extends React.Component {
  public render(): React.ReactNode {
    /*
     * render() 可以返回多个 react elements 组成的数组；
     */
    return [<Button key={1}>A</Button>, <Divider key={2} />, <Button key={3}>A</Button>];
  }
}

function B() {
  /*
   * render() 可以返回一个 React.Fragment，
   * 注意 React.Fragment 和 react elements 数组的区别；
   */
  return (
    <React.Fragment>
      <Button>B</Button>
      <Divider />
      <Button>B</Button>
    </React.Fragment>
  );
}

function C0302030103(): React.ReactNode {
  return (
    <div>
      <A />
      <hr />
      <B />
    </div>
  );
}

export { C0302030103 };
