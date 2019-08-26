/*
 * React.Component
 *     Reference
 *         Class Properties
 *             defaultProps
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  color?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class A extends React.Component<IProps, {}> {
  /*
   * 使用静态属性 defaultProps 声明 props 属性的默认值，
   * 当某个 props 属性没有指定，或者它的值显式地指定为 undefined 时，
   * 就会使用该默认值；
   */
  public static defaultProps = { color: 'blue' };

  public render() {
    const { color } = this.props;
    return <Button style={{ color }}>{color}</Button>;
  }
}

function C0302040101() {
  return <A />;
}

export { C0302040101 };
