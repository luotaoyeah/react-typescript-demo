/*
 * DOM Elements
 *     Differences In Attributes
 *         htmlFor
 */

import React from 'react';

/*
 * HTML 中的 for 属性，
 * 在 react 中对应的属性为 htmlFor，因为 for 是 javascript 中的保留字（reserved word）
 */
class C03040104 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <label htmlFor="input01">NAME:</label>
        <input type="text" id="input01" />
      </div>
    );
  }
}

export { C03040104 };
