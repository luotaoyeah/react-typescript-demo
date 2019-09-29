/*
 * DOM Elements
 *     Differences In Attributes
 *         style
 */

import React from "react";

class C03040107 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * style 属性，用来设置内联样式（inline style），
         * 它不支持 autoprefix
         */}
        <span
          style={{
            fontSize: "20px",
            color: "red",
            border: "1px solid #ddd",
            borderRadius: "3px",
          }}
        >
          FOO
        </span>
      </div>
    );
  }
}

export { C03040107 };
