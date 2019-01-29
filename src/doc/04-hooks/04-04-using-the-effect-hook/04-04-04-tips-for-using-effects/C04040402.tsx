/*
 * Using the Effect Hook
 *     Tips for Using Effects
 *         Tip: Use Multiple Effects to Separate Concerns
 */

import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";

/*
 * 使用 hooks 之后，相同的业务逻辑可以统一放到同一个 useEffect() 里面
 */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    document.title = String(count);
  });

  const cb = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  });

  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </Button>
      <Divider />
      <Button>{`${size.width}, ${size.height}`}</Button>
    </div>
  );
}

class C04040402 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04040402 };
