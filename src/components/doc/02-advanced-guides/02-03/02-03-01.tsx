/*
 * Context: When to Use Context
 */

import React from 'react';
import { Context } from 'react';

/*
 * context 是一种传递数据的机制，
 * 使用 props 传递数据时，需要从顶层组件一层一层往下传递，直到目标组件；
 * 而使用 context ，不需要一层一层传递；
 */

/*
 *
 */
class Button extends React.Component<{ theme: string }> {
  public render(): React.ReactNode {
    return (
      <button type="button" className={this.props.theme}>
        button
      </button>
    );
  }
}

class ThemeButton extends React.Component<{ theme: string }> {
  public render(): React.ReactNode {
    return <Button theme={this.props.theme} />;
  }
}

class Toolbar extends React.Component<{ theme: string }> {
  public render(): React.ReactNode {
    return <ThemeButton theme={this.props.theme} />;
  }
}

/*
 * 使用 React.createContext<T>() 方法创建一个 context；
 */
const ThemeContext: Context<string> = React.createContext<string>('red');

class Button02 extends React.Component {
  public render(): React.ReactNode {
    /*
     * 使用 React.Context.Consumer 消费 context；
     */
    return (
      <ThemeContext.Consumer>{(theme: string) => <button className={theme}>button</button>}</ThemeContext.Consumer>
    );
  }
}

class ThemeButton02 extends React.Component {
  public render(): React.ReactNode {
    return <Button02 />;
  }
}

class Toolbar02 extends React.Component {
  public render(): React.ReactNode {
    return <ThemeButton02 />;
  }
}

class C020301 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <Toolbar theme={'red'} />
        {/*
         * 使用 React.Context.Provider 提供 context；
         */}
        <ThemeContext.Provider value={'yellow'}>
          <Toolbar02 />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export { C020301 };
