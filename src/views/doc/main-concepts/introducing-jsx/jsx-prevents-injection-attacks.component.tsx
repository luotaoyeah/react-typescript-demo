// https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks

import React from 'react';

/**
 * JSX 中任何表达式的值, 都会被转义，避免发生 XSS
 */
class JsxPreventsInjectionAttacksComponent extends React.Component {
  public render() {
    const input = "<script>alert('OK')</script>";
    return <div>{input}</div>;
  }
}

export { JsxPreventsInjectionAttacksComponent };
