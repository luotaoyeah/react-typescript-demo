/*
 * Hooks at a Glance
 *     Effect Hook
 *         clean up
 */

import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";

function H01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    /*
     * useEffect() 的回调函数，在组件首次渲染时，也会执行
     */
    console.log("COUNT:", count);

    /*
     * 如果在回调函数中返回另外一个函数，则这个函数会在组件 unmount 时执行，
     * 可以用来清理资源
     */
    return () => {
      console.log("CLEAN UP");
    };
  });

  return (
    <Button
      onClick={() => {
        setCount((prevCount: number) => {
          return prevCount + 1;
        });
      }}
    >
      {count}
    </Button>
  );
}

class C04020202 extends React.Component<{}, { visible: boolean }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { visible: true };
  }

  render(): React.ReactNode {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState((prevState: Readonly<{ visible: boolean }>) => {
              return { visible: !prevState.visible };
            });
          }}
        >
          TOGGLE
        </Button>
        <Divider />
        {this.state.visible && <H01 />}
      </div>
    );
  }
}

export { C04020202 };
