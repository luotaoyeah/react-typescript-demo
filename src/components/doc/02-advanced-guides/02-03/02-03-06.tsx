/*
 * Context: Consuming Multiple Contexts
 */

import React from 'react';

const COLORS = {
  red: '#ff0000',
  green: '#00ff00',
};

const ColorContext: React.Context<string> = React.createContext(COLORS.red);
const NameContext: React.Context<string> = React.createContext('luotao');

/*
 * 多个 Context 一起使用时，需要相互嵌套，
 * 这是为了让 Context 的重新渲染更快；
 */
function ThemeButton() {
  return (
    <NameContext.Consumer>
      {(name: string) => (
        <ColorContext.Consumer>
          {(color: string) => (
            <button
              type="button"
              style={{
                color,
                borderRadius: '3px',
                outline: 'none',
                cursor: 'pointer',
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

function C020306() {
  return (
    <div>
      <ColorContext.Provider value={COLORS.green}>
        <NameContext.Provider value="foo">
          <ThemeButton />
        </NameContext.Provider>
      </ColorContext.Provider>
    </div>
  );
}

export { C020306 };
