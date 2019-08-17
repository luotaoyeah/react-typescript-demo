/*
 * https://reactjs.org/docs/components-and-props.html#function-and-class-components
 */

import React from 'react';

/*
 * 从概念上来讲, 组件(component)类似 JS 里面的函数, 接收一定的输入(props), 然后返回 react elements
 */

interface IProps {
  name: string;
}

/**
 * component 可以是一个 function, 称之为 function component
 */
function C010401A({ name }: IProps) {
  return <div>{name}</div>;
}

/**
 * component 可以是一个 class, 称之为 class component,
 * class component 比 function component 多一些额外的特性
 */
// eslint-disable-next-line react/prefer-stateless-function
class C010401B extends React.Component<IProps> {
  public render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class C010401 extends React.Component {
  public render() {
    return (
      <>
        <C010401A name="foo" />
        <C010401B name="bar" />
      </>
    );
  }
}

export { C010401 };
