/*
 * Hooks at a Glance
 *     Effect Hook
 *         multiple declaration
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

/*
 * 跟 useState() 一样，在同一个组件中可以多次调用 useEffect()
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("COUNT:", count);
  });

  useEffect(() => {
    console.log("_____COUNT:", count);
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

class C04020203 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04020203 };
