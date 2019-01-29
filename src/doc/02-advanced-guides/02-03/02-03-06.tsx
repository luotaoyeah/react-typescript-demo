/*
 * Context: Consuming Multiple Contexts
 */

import * as React from "react";

const COLORS = {
  red: "#ff0000",
  green: "#00ff00"
};

const ColorContext: React.Context<string> = React.createContext(COLORS.red);
const NameContext: React.Context<string> = React.createContext("luotao");

/*
 * 多个 Context 一起使用时，需要相互嵌套，
 * 这是为了让 Context 的重新渲染更快；
 */
class ThemeButton extends React.Component {
  public render(): React.ReactNode {
    return (
      <NameContext.Consumer>
        {(name: string) => (
          <ColorContext.Consumer>
            {(color: string) => (
              <button
                style={{
                  color: color,
                  borderRadius: "3px",
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                {name}
              </button>
            )}
          </ColorContext.Consumer>
        )}
      </NameContext.Consumer>
    );
  }
}

class C020306 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <ColorContext.Provider value={COLORS.green}>
          <NameContext.Provider value={"foo"}>
            <ThemeButton />
          </NameContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export { C020306 };
