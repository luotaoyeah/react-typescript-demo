/*
 * Context: When to Use Context
 */

import React, { Context } from 'react';

/*
 * context 是一种传递数据的机制，
 * 使用 props 传递数据时，需要从顶层组件一层一层往下传递，直到目标组件；
 * 而使用 context ，不需要一层一层传递；
 */

/*
 *
 */
// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component<{ theme: string }> {
  public render(): React.ReactNode {
    const { theme } = this.props;
    return (
      <button type="button" className={theme}>
        button
      </button>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class ThemeButton extends React.Component<{ theme: string }> {
  public render(): React.ReactNode {
    const { theme } = this.props;
    return <Button theme={theme} />;
  }
}

function Toolbar(props: { theme: string }) {
  const { theme } = props;
  return <ThemeButton theme={theme} />;
}

/*
 * 使用 React.createContext<T>() 方法创建一个 context；
 */
const ThemeContext: Context<string> = React.createContext<string>('red');

// eslint-disable-next-line react/prefer-stateless-function
class Button02 extends React.Component {
  public render(): React.ReactNode {
    /*
     * 使用 React.Context.Consumer 消费 context；
     */
    return (
      <ThemeContext.Consumer>
        {(theme: string) => (
          <button type="button" className={theme}>
            button
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class ThemeButton02 extends React.Component {
  public render(): React.ReactNode {
    return <Button02 />;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class Toolbar02 extends React.Component {
  public render(): React.ReactNode {
    return <ThemeButton02 />;
  }
}

function C020301(): React.ReactNode {
  return (
    <div>
      <Toolbar theme="red" />
      {/*
       * 使用 React.Context.Provider 提供 context；
       */}
      <ThemeContext.Provider value="yellow">
        <Toolbar02 />
      </ThemeContext.Provider>
    </div>
  );
}

export { C020301 };
