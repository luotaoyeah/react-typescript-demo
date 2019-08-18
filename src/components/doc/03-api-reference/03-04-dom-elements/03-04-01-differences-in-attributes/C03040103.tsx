/*
 * DOM Elements
 *     Differences In Attributes
 *         dangerouslySetInnerHTML
 */

import React from 'react';

/*
 * HTML 中的 innerHTML 属性，
 * 在 react 中对应的属性为 dangerouslySetInnerHTML
 */
function C03040103() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: 'A&middot;B',
      }}
    />
  );
}

export { C03040103 };
