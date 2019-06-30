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
class C03040103 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: 'A&middot;B',
        }}
      />
    );
  }
}

export { C03040103 };
