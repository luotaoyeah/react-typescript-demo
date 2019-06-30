/*
 * Using the Effect Hook
 *     Effects With Cleanup
 *         Example Using Hooks
 */

import React, { useEffect, useState } from 'react';
import { Button, Divider } from 'antd';

/*
 * 在 function 组件中，如果 useEffect() 返回一个函数，
 * 那么这个函数就称之为 cleanup 函数，它会在组件每次重新 render 之后执行，
 * 同时，也会在组件 unmount 之后执行
 */

function F01(): React.ReactElement<{}> {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const cb = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  /*
   * 使用 hooks 之后，注册的逻辑跟取消注册的逻辑，
   * 都放到同一个地方，代码可读性更强，可维护性更强
   */

  useEffect(() => {
    window.addEventListener('resize', cb);

    return () => {
      console.log('removeEventListener');
      window.removeEventListener('resize', cb);
    };
  });

  return <Button type="primary">{`${size.width}, ${size.height}`}</Button>;
}

class C04040302 extends React.Component<{}, { visible: boolean }> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { visible: true };
  }

  public render(): React.ReactNode {
    return (
      <div>
        {this.state.visible && <F01 />}
        <Divider />
        <Button
          onClick={() => {
            this.setState((prevState: Readonly<{ visible: boolean }>) => {
              return { visible: !prevState.visible };
            });
          }}
        >
          TOGGLE
        </Button>
      </div>
    );
  }
}

export { C04040302 };
