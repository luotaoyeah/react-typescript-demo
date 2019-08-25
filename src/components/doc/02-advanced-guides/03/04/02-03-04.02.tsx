/*
 * https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
 */

import React from 'react';
import _ from 'lodash';
import { Button } from 'antd';
import { ButtonProps, ButtonType } from 'antd/es/button';

/*
 * 如何在消费 context 的组件中, 修改 context 的数据?
 * 可以在 context 对象中定义一个修改方法, 消费 context 的组件可以调用这个方法来修改 context 的数据
 */

interface IThemeContext {
  type: ButtonType;
  toggleType: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  type: 'primary',
  toggleType() {},
});

function C02030402B({ type, ...restProps }: ButtonProps) {
  return (
    <ThemeContext.Consumer>
      {(themeContext: IThemeContext) => (
        <Button type={themeContext.type} {...restProps} onClick={themeContext.toggleType}>
          TOGGLE
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}

class C02030402A extends React.Component<{}, { themeContext: IThemeContext }> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      themeContext: {
        type: 'primary',
        toggleType: this.handleChange.bind(this),
      },
    };
  }

  public handleChange() {
    this.setState((prevState: { themeContext: IThemeContext }) => ({
      themeContext: _.merge(prevState.themeContext, {
        type: prevState.themeContext.type === 'primary' ? 'danger' : 'primary',
      }),
    }));
  }

  public render() {
    const { themeContext } = this.state;

    return (
      <ThemeContext.Provider value={themeContext}>
        <C02030402B />
      </ThemeContext.Provider>
    );
  }
}

function C02030402() {
  return <C02030402A />;
}

export { C02030402 };
