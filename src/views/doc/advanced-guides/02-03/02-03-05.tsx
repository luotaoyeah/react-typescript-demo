/*
 * Context: Updating Context from a Nested Component
 */

import * as React from "react";
import _ from "lodash";

interface IColorContext {
  color: string;
  toggleColor: () => void;
}

const COLORS = {
  red: "#ff0000",
  green: "#00ff00",
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

class ThemeButton extends React.Component {
  public render() {
    return (
      <ColorContext.Consumer>
        {(colorContext: IColorContext) => (
          <button
            {...this.props}
            style={{
              color: colorContext.color,
              borderRadius: "3px",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={colorContext.toggleColor}
          />
        )}
      </ColorContext.Consumer>
    );
  }
}

class ThemeToolbar extends React.Component<{}, { colorContext: IColorContext }> {
  constructor(props: any) {
    super(props);
    this.state = {
      colorContext: {
        color: COLORS.red,
        toggleColor: this.handleToggleColor.bind(this),
      },
    };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  handleToggleColor() {
    const vm = this;
    vm.setState((prevState: { colorContext: IColorContext }) => {
      return {
        colorContext: _.merge(prevState.colorContext, {
          color: prevState.colorContext.color === COLORS.green ? COLORS.red : COLORS.green,
        }),
      };
    });
  }

  public render() {
    return (
      <ColorContext.Provider value={this.state.colorContext}>
        <ThemeButton>toggle color</ThemeButton>
      </ColorContext.Provider>
    );
  }
}

class C020305 extends React.Component {
  public render() {
    return (
      <div>
        <ThemeToolbar />
      </div>
    );
  }
}

export { C020305 };
