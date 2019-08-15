/*
 * Context: Updating Context from a Nested Component
 */

import React from 'react';
import _ from 'lodash';

interface IColorContext {
  color: string;
  toggleColor: () => void;
}

const COLORS = {
  red: '#FF0000',
  green: '#00FF00',
};

/*
 * 有时候，需要在内层的组件中修改 Context 的值，
 * 此时，可以将回调函数定义在该 Context 中，
 * 从而内层组件可以获取到该回调函数，然后调用函数；
 */
const ColorContext: React.Context<IColorContext> = React.createContext({
  color: COLORS.red,
  toggleColor() {},
});

function ThemeButton(props: any) {
  return (
    <ColorContext.Consumer>
      {(colorContext: IColorContext) => (
        <button
          type="button"
          {...props}
          style={{
            color: colorContext.color,
            borderRadius: '3px',
            outline: 'none',
            cursor: 'pointer',
          }}
          onClick={colorContext.toggleColor}
        />
      )}
    </ColorContext.Consumer>
  );
}

class ThemeToolbar extends React.Component<{}, { colorContext: IColorContext }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      colorContext: {
        color: COLORS.red,
        toggleColor: this.handleToggleColor.bind(this),
      },
    };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  public handleToggleColor() {
    const vm = this;
    vm.setState((prevState: { colorContext: IColorContext }) => ({
      colorContext: _.merge(prevState.colorContext, {
        color: prevState.colorContext.color === COLORS.green ? COLORS.red : COLORS.green,
      }),
    }));
  }

  public render(): React.ReactNode {
    const { colorContext } = this.state;
    return (
      <ColorContext.Provider value={colorContext}>
        <ThemeButton>toggle color</ThemeButton>
      </ColorContext.Provider>
    );
  }
}

function C020305(): React.ReactNode {
  return (
    <div>
      <ThemeToolbar />
    </div>
  );
}

export { C020305 };
