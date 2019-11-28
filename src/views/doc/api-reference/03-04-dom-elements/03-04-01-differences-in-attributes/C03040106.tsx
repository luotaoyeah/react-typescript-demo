/*
 * DOM Elements
 *     Differences In Attributes
 *         selected
 */

import React from "react";
import { Divider } from "antd";

class C03040106 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * <option> 元素上的 selected 属性，用来设置该选项是否默认选中
         */}
        <select>
          <option value="A">A</option>
          <option value="B" selected={true}>
            B
          </option>
        </select>
        <Divider />
        {/*
         * 更加推荐的方式是，直接在 <select> 元素上设置 defaultValue 属性
         */}
        <select defaultValue="B">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </div>
    );
  }
}

export { C03040106 };
