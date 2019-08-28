/*
 * https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 */

import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';

/*
 * 设置返回的组件的 displayName 属性, 用于在 devtools 中显示
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withNothing01<P>(C01: any) {
  // eslint-disable-next-line react/prefer-stateless-function
  return class extends React.Component<P> {
    public static displayName: string = `${withNothing01.name}(${C01.displayName || C01.name || 'Component'})`;

    public render() {
      return <C01 {...this.props} />;
    }
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withNothing02<P extends ButtonProps>(C01: any) {
  function C02(props: P) {
    return <C01 {...props}></C01>;
  }

  C02.displayName = `${withNothing02.name}(${C01.displayName || C01.name || 'Component'})`;

  return C02;
}

const C020705A = withNothing01(Button);
const C020705B = withNothing02(Button);

function C020705() {
  return (
    <>
      <C020705A>BUTTON</C020705A>

      <C020705B style={{ marginLeft: '10px' }}>BUTTON</C020705B>
    </>
  );
}

export { C020705 };
