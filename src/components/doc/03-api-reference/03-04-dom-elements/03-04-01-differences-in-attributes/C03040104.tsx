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
function C03040104() {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
      <label htmlFor="input01">NAME:</label>
      <input type="text" id="input01" />
    </div>
  );
}

export { C03040104 };
