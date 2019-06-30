/*
 * Refs and the DOM
 *     Creating Refs
 */

import React from 'react';

/*
 * 通常来讲，父组件跟子组件交互，只能通过 props 进行，
 * 要修改子组件，父组件通过修改 props 的方式，让子组件重新渲染；
 *
 * React 提供了另外一种方式（ref），使用'命令式'的方式，直接操作子组件，
 * 此时的子组件可以是一个组件，也可以是一个 DOM 元素；
 */

/*
 * 什么时候使用 ref ？
 *     只要可以通过'声明式'的方式实现，就不要使用 ref；
 *     在处理聚焦（focus），文本选择（text selection），媒体播放（media playback）时，
 *     在使用第三方需要操作 DOM 的插件时，
 *     在实现命令式的动画效果时；
 */

class C021501 extends React.Component {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    /*
     * 使用 React.createRef() 方法创建一个 ref 对象，
     * 通常将 ref 对象保存到组件的实例属性上面；
     */
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * 将 ref 对象赋值给组件的 ref 属性；
         */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export { C021501 };
