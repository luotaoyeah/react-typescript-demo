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
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = { count: 0 };
  }

  public componentDidMount(): void {
    const { count } = this.state;
    document.title = String(count);
  }

  public componentDidUpdate(): void {
    const { count } = this.state;
    document.title = String(count);
  }

  public render() {
    const { count } = this.state;
    return (
      <Button
        onClick={() => {
          this.setState((prevState: Readonly<{ count: number }>) => ({
            count: prevState.count + 1,
          }));
        }}
      >
        {count}
      </Button>
    );
  }
}

function C04040101() {
  return (
    <div>
      <F01 />
      <Divider />
      <C01 />
    </div>
  );
}

export { C04040101 };
