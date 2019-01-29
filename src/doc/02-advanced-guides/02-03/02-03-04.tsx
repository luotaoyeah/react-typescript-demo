/*
 * Context: Dynamic Context
 */

import * as React from "react";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00"
};

const ColorContext: React.Context<string> = React.createContext(COLORS.red);

class ThemeButton extends React.Component<{ onClick: () => void }> {
  public render(): React.ReactNode {
    return (
      <ColorContext.Consumer>
        {(color: string) => (
          <button
            {...this.props}
            style={{
              color,
              borderRadius: "3px",
              outline: "none",
              cursor: "pointer"
            }}
            onClick={this.props.onClick}
          />
        )}
      </ColorContext.Consumer>
    );
  }
}

class ThemeToolbar extends React.Component<{}, { color: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      color: COLORS.green
    };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  handleToggleColor() {
    const vm = this;
    vm.setState((prevState: { color: string }) => {
      return {
        color: prevState.color === COLORS.green ? COLORS.red : COLORS.green
      };
    });
  }

  public render(): React.ReactNode {
    return (
      <ColorContext.Provider value={this.state.color}>
        <ThemeButton onClick={this.handleToggleColor}>toggle color</ThemeButton>
      </ColorContext.Provider>
    );
  }
}

class C020304 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <ThemeToolbar />
      </div>
    );
  }
}

export { C020304 };
