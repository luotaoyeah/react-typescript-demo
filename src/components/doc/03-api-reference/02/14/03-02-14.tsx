/*
 * https://reactjs.org/docs/react-component.html#defaultprops
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  color?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
class C030214A extends React.Component<IProps, {}> {
  /*
   * 使用组件的静态属性 defaultProps 来声明 props 属性的默认值,
   * 当某个 props 属性的值为 undefined 时, 就会使用该默认值
   */
  public static defaultProps: Partial<IProps> = { color: 'blue' };

  public render() {
    const { color } = this.props;

    return <Button style={{ color, marginRight: '10px' }}>{color}</Button>;
  }
}

function C030214() {
  return (
    <>
      <C030214A />
      <C030214A color="red" />
    </>
  );
}

export { C030214 };
