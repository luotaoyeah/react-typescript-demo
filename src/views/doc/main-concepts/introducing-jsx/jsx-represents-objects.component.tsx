// https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects

import React from 'react';
import { Divider } from 'antd';

/**
 * JSX 编译之后,
 * 实际上是调用 `React.createElement()` 方法
 */
class JsxRepresentsObjectsComponent extends React.Component {
  public render() {
    const element01 = (
      <div>
        <span className="active">{Date.now()}</span>
      </div>
    );

    const element02 = React.createElement('div', {}, React.createElement('span', { className: 'active' }, Date.now()));

    return (
      <div>
        {element01}

        <Divider />

        {element02}
      </div>
    );
  }
}

export { JsxRepresentsObjectsComponent };
