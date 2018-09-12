/*
 * JSX In Depth:
 *     Children in JSX
 *         Booleans, Null, and Undefined Are Ignored
 */

import * as React from "react";
import { Divider } from "antd";

class C020907 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <div>
          {/*
            * true，false，null，undefined 都可以作为 props.children 的值，
            * 但是它们不会被渲染到页面上；
            */}
          {true}
          {false}
          {null}
          {undefined}
        </div>
        <div>
          {/*
            * 如果需要渲染它们，需要将它们转换为字符串；
            */}
          {String(true)}
          <Divider />
          {String(false)}
          <Divider />
          {String(null)}
          <Divider />
          {String(undefined)}
        </div>
        <div>
          {/*
            * 在使用条件渲染的时候，条件表达式的值应该始终使用 boolean，
            * 否则可能会被渲染到页面上，
            * 如：使用 （array.length > 0 && <i/>） 而不是 （array.length && <i/>）
            */}
        </div>
      </div>
    );
  }
}

export { C020907 };
