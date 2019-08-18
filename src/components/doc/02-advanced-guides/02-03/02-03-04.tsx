/*
 * Context: Dynamic Context
 */

import React from 'react';

const COLORS = {
  red: '#ff0000',
  green: '#00ff00',
};

const ColorContext: React.Context<string> = React.createContext(COLORS.red);

// eslint-disable-next-line react/prefer-stateless-function
class ThemeButton extends React.Component<{ onClick: () => void }> {
  public render() {
    const { onClick } = this.props;
    return (
      <ColorContext.Consumer>
        {(color: string) => (
          <button
            type="button"
            {...this.props}
            style={{
              color,
              borderRadius: '3px',
              outline: 'none',
              cursor: 'pointer',
            }}
            onClick={onClick}
          />
        )}
      </ColorContext.Consumer>
    );
  }
}

class ThemeToolbar extends React.Component<{}, { color: string }> {
  public constructor(props: any) {
    super(props);
    this.state = {
      color: COLORS.green,
    };
    this.handleToggleColor = this.handleToggleColor.bind(this);
  }

  public handleToggleColor() {
    const vm = this;
    vm.setState((prevState: { color: string }) => ({
      color: prevState.color === COLORS.green ? COLORS.red : COLORS.green,
    }));
  }

  public render() {
    const { color } = this.state;
    return (
      <ColorContext.Provider value={color}>
        <ThemeButton onClick={this.handleToggleColor}>toggle color</ThemeButton>
      </ColorContext.Provider>
    );
  }
}

function C020304(): React.ReactNode {
  return (
    <div>
      <ThemeToolbar />
    </div>
  );
}

export { C020304 };
