/*
 * Using the Effect Hook
 */

import React, { useEffect, useState } from 'react';
import { Button, Divider } from 'antd';

/*
 * useEffect() 可以看作是 componentDidMount，componentDidUpdate，componentWillUnmount 的结合
 */

/**
 *
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = String(count);
  });

  return (
    <Button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </Button>
  );
}

/**
 *
 */
class C01 extends React.Component<{}, { count: number }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
  }

  componentDidMount(): void {
    document.title = String(this.state.count);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ count: number }>,
    snapshot?: any,
  ): void {
    document.title = String(this.state.count);
  }

  public render(): React.ReactNode {
    return (
      <Button
        onClick={() => {
          this.setState((prevState: Readonly<{ count: number }>) => {
            return {
              count: prevState.count + 1,
            };
          });
        }}
      >
        {this.state.count}
      </Button>
    );
  }
}

class C04040101 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
        <Divider />
        <C01 />
      </div>
    );
  }
}

export { C04040101 };
