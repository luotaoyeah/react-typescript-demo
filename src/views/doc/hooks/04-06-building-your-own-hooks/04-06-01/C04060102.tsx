/*
 * Building Your Own Hooks
 */

import React, { useEffect, useState } from "react";
import { Button, Divider, Tag } from "antd";

/*
 * 在 hooks 出现之前，如果想要共享组件逻辑，
 * 通常的做法是：使用 render props 或者 higher-order-component，
 * 有了 hooks 之后，我们可以通过实现自己的 hook 函数，用来共享状态逻辑
 */

interface IState {
  size: { width: number; height: number };
}

function useWindowSize(): IState {
  const [size, setSize] = useState<IState>({
    size: { width: window.innerWidth, height: window.innerHeight },
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setSize({
        size: { width: window.innerWidth, height: window.innerHeight },
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return size;
}

function F01(): React.ReactElement<{}> {
  const state = useWindowSize();
  return <Button>{`${state.size.width}, ${state.size.height}`}</Button>;
}

function F02(): React.ReactElement<{}> {
  const state = useWindowSize();
  return <Tag>{`${state.size.width}, ${state.size.height}`}</Tag>;
}

// tslint:disable-next-line:max-classes-per-file
class C04060102 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
        <Divider />
        <F02 />
      </div>
    );
  }
}

export { C04060102 };
