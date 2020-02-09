/*
 * JSX In Depth:
 *     Props in JSX
 */

import React from 'react';
import { Button, Divider } from 'antd';

/*
 * JSX 的 props 可以有多种形式；
 */
class C020903 extends React.Component {
  public render() {
    /*
     * 可以使用'对象解构'的方式，
     * 将一个 props 对象的所有属性一次性全部应用到组件上；
     * 这种方式的缺点是：
     *     可能会传递一些非法的属性；
     *     可能会传递一些多余的属性；
     */
    const someProps = {
      id: 'A',
      name: 'B',
    };

    const button01 = <button {...someProps}>button</button>;
    /* 等价于 */
    const button02 = (
      <button id={someProps.id} name={someProps.name}>
        button
      </button>
    );

    return (
      <div>
        {/*
         * props 可以是任意的表达式；
         */}
        <i dangerouslySetInnerHTML={{ __html: (1 + 2 + 3 + 4).toString() }} />
        <Divider />
        {/*
         * props 可以是任意的字符串；
         */}
        <Button type={'dashed'} id="btn01">
          button
        </Button>
        <Divider />
        {/*
         * 如果属性没有指定属性值，则属性值默认为 true，但是不推荐这种用法；
         */}
        {/*
                <Button ghost>button</Button>
        */}
        <Button ghost={true}>button</Button>
        <Divider />
        {button01}
        {button02}
      </div>
    );
  }
}

export { C020903 };
