// https://reactjs.org/docs/components-and-props.html#function-and-class-components

import React from 'react';
import { Divider } from 'antd';

interface IProps {
  name: string;
}

/**
 * component 可以定义成一个 function, 称之为 function component
 */
function C01(props: IProps) {
  return <div>{props.name}</div>;
}

/**
 * component 也可以定义成一个 class, 称之为 class component
 */
class C02 extends React.Component<IProps> {
  public render() {
    return <div>{this.props.name}</div>;
  }
}

/**
 * 组件（component）类似函数, 接收一定的输入（props）, 然后返回 react elements
 */
class FunctionAndClassComponentsComponent extends React.Component {
  public render() {
    return (
      <div>
        <C01 name={'luotao'} />

        <Divider />

        <C02 name={'luotao'} />
      </div>
    );
  }
}

export { FunctionAndClassComponentsComponent };
