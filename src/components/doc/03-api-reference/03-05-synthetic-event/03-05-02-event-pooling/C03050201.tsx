/*
 * SyntheticEvent
 *     Event Pooling
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 为了提高性能，react 中的 synthetic event 是提前创建好的，
 * 放到一个 pool 中，每次需要使用 synthetic event 对象时，直接从这个 pool 中取，
 * 用完之后就会将该 synthetic event 对象的属性清空，然后再次释放到 pool 中去，供下次使用
 */
class C03050201 extends React.Component<{}, {}> {
  public constructor(props: Readonly<{}>) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleClick(e: React.MouseEvent) {
    console.log(e.type); // click
    setTimeout(() => {
      /*
       * 因此，不能通过异步的方式访问事件对象，
       * 因为，此时的事件对象已经被回收了（nullified），准备供下次使用
       */

      // Warning: This synthetic event is reused for performance reasons.
      // If you're seeing this, you're accessing the property `type` on a released/nullified synthetic event.
      // This is set to null.
      // If you must keep the original synthetic event around, use event.persist().
      // See https://fb.me/react-event-pooling for more information.
      console.log(e.type);
    });
  }

  public render() {
    return (
      <div>
        <Button onClick={this.handleClick}>FOO</Button>
      </div>
    );
  }
}

export { C03050201 };
