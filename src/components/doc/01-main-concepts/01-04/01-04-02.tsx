/*
 * Components and Props: Rendering a Component
 */

import React from 'react';

/*
 * react 中的元素有两种，一种是普通的 HTML 元素，
 * 一种是自定义的组件；在使用他们的时候，HTML 元素使用小写开头，
 * 组件使用大写开头；
 *
 * 组件标签上的所有属性，会作为组件的 props 对象的属性，传递给组件；
 */

function C010402A(props: { name: string }): React.ReactElement<{ name: string }> {
  return <h3>{props.name}</h3>;
}

class C010402 extends React.Component {
  public render(): React.ReactNode {
    return (
      <p>
        <C010402A name={'luotao'} />
      </p>
    );
  }
}

export { C010402 };
