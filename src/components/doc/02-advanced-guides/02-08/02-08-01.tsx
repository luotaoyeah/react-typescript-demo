/*
 * Integrating with Other Libraries:
 *     Integrating with DOM Manipulation Plugins
 */

import React from 'react';
import $ from 'jquery';

/*
 * 如果在 react 之外对 DOM 进行了操作（如：直接操作了 DOM 元素），
 * react 是无法感知到的；
 * 如果要在 react 中使用其他操作 DOM 的组件（如：jquery），
 * 一般可以定义一个空的元素（如：<div/>），使得对于 react 来说，
 * 它不需要对该元素进行任何的更新，而是完全由 jquery 来进行操作；
 */

class C020801 extends React.Component<{}, {}> {
  public $el!: JQuery<HTMLDivElement>;

  public componentDidMount(): void {
    /*
     * 通常在这里进行插件的初始化；
     */
  }

  public componentWillUnmount(): void {
    /*
     * 通常在这里进行插件的资源回收，避免内存泄露；
     * 如：事件回调的解绑；
     */
  }

  public render(): React.ReactNode {
    /*
     * 通过 ref 属性拿到对 DOM 元素的引用；
     */
    return (
      <div
        ref={(el: HTMLDivElement) => {
          if (el) {
            this.$el = $(el);
          }
        }}
      />
    );
  }
}

export { C020801 };
