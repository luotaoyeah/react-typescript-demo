/*
 * JSX In Depth:
 *     Children in JSX
 */

import * as React from "react";
import { Button, Divider } from "antd";

/*
 * 在 JSX 中，标签中间的所有内容，
 * 会被作为 props.children 属性的值；
 */

class C020904 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * 标签中间可以是任意的字符串；
         */}
        <Button>hello world</Button>
        <Divider />
        {/*
         * 字符串首尾的空格（包括换行）会被移除；
         */}
        <Button> hello world </Button>
        <Divider />
        {/*
         * 字符串中间的多个空格（包括换行），只会保留一个空格；
         */}
        <Button> hello world </Button>
        <Divider />
        {/*
         * 字符串中可以使用转义字符；
         */}
        <Button> &lt;hello world&gt; </Button>
      </div>
    );
  }
}

export { C020904 };
