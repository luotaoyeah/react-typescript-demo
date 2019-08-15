/*
 * React.Component
 *     Reference
 *         constructor()
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

interface IState {
  num: number;
}

class A extends React.Component<{}, IState> {
  // eslint-disable-next-line no-useless-constructor
  public constructor(props: {}) {
    super(props);
    /*
     * 在 constructor() 中不要引入 side-effects 和 subscribtion，
     * 应该在 componentDidMount() 中引入；
     * 因为 constructor() 会在组件 mount 之前执行；
     */
  }

  public componentDidMount(): void {
    // eslint-disable-next-line react/no-find-dom-node
    const button = ReactDOM.findDOMNode(this);
    if (button) {
      (button as HTMLButtonElement).style.color = 'red';
    }
  }

  public render(): React.ReactNode {
    return <Button>A</Button>;
  }
}

function C0302030202(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030202 };
