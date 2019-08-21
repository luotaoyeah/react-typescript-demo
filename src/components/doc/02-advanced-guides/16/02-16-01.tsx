/*
 * https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */

import React from 'react';
import { Input } from 'antd';

/*
 * 声明式(declarative):
 *   通常来讲, 上级组件只能通过 props 来跟下级组件进行交互, 通过修改 props 的值, 让下级组件重新渲染
 *
 * 命令式(imperative):
 *   使用 ref 可以获取并操作下级组件的实例
 */

class C021601 extends React.Component {
  private readonly ref01: React.RefObject<Input>;

  public constructor(props: {}) {
    super(props);

    /*
     * 使用 React.createRef() 方法创建一个 RefObject 对象,
     * 通常将 RefObject 对象保存到组件的实例属性上面
     */
    this.ref01 = React.createRef<Input>();
  }

  public render() {
    return (
      <div>
        {/* 将 RefObject 对象绑定到下级组件的 ref 属性 */}
        <Input ref={this.ref01} />
      </div>
    );
  }
}

export { C021601 };
