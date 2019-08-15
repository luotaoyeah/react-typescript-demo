/*
 * React.Component
 *     Reference
 *         Class Properties
 *             displayName
 */

import React from 'react';
import { Button } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
class A extends React.Component<{}, {}> {
  /*
   * 静态属性 displayName 主要用来方便调试，
   * 如果指定了该属性，则在 devtools 中显示的就是该属性
   */
  public static displayName = 'A-A-A';

  public render(): React.ReactNode {
    const MyButton = (C =>
      // eslint-disable-next-line react/prefer-stateless-function,implicit-arrow-linebreak
      class extends React.Component {
        /*
         * 在 HOC 中通常需要指定 displayName 属性
         */
        public static displayName = `MyButton(${C.name})`;

        public render(): React.ReactNode {
          return <C {...this.props} style={{ color: 'red' }} />;
        }
      })(Button);

    return <MyButton>A</MyButton>;
  }
}

function C0302040201(): React.ReactNode {
  return <A />;
}

export { C0302040201 };
