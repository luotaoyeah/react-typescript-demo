/*
 * https://reactjs.org/docs/render-props.html#using-props-other-than-render
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 作为 render props 的属性的名称不一定要叫 'render', 可以是任意合法的属性名称
 */

interface IProps {
  render02?(state: IState): React.ReactNode;
}

interface IState {
  text: string;
}

class C02170201A extends React.Component<IProps, IState> {
  public constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      text: 'C02170201A',
    };
  }

  public render() {
    const { render02 } = this.props;

    if (render02) {
      return render02(this.state);
    }

    const { text } = this.state;
    return <Button>{text}</Button>;
  }
}

function C02170201() {
  return <C02170201A render02={(state: IState) => <Button>{state.text}</Button>} />;
}

export { C02170201 };
