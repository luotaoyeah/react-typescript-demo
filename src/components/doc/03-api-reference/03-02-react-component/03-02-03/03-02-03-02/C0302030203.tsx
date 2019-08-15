/*
 * React.Component
 *     Reference
 *         constructor()
 */

import React from 'react';
import { Button } from 'antd';

interface IProps {
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

// eslint-disable-next-line react/prefer-stateless-function
class A extends React.Component<IProps, IState> {
  // eslint-disable-next-line no-useless-constructor
  public constructor(props: IProps) {
    super(props);
    /*
     * 在 constructor() 中初始化 state 时，不要直接使用 props 数据；
     */
    /*
        this.state = { color: props.color };
    */
  }

  public render(): React.ReactNode {
    return <Button>A</Button>;
  }
}

function C0302030203(): React.ReactNode {
  return (
    <div>
      <A />
    </div>
  );
}

export { C0302030203 };
