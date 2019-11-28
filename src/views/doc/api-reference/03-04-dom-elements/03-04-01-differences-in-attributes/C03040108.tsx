/*
 * DOM Elements
 *     Differences In Attributes
 *         suppressContentEditableWarning
 */

import React from "react";

class C03040108 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        {/*
         * 默认情况下，当某个元素具有下级元素，并且设置了 contentEditable=true 时，
         * 会有一个警告，
         * 此时，可以设置 suppressContentEditableWarning=true 来隐藏该警告信息
         */}
        <div contentEditable={true} suppressContentEditableWarning={true}>
          CHILD
        </div>
      </div>
    );
  }
}

export { C03040108 };
