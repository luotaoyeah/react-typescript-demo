/*
 * Hooks API Reference
 *     useEffect
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);
  const [online, setOnline] = useState<boolean>(false);

  /*
   * 在 function 组件中的最顶层，属于 react 的 render phase，
   * 因此不能包含 side effect 代码，
   * 有了 useEffect() 之后，就可以将这些 side effect 代码放到 useEffect() 的回调函数中去
   */
  useEffect(() => {
    document.title = String(count);
  }, [count]);

  /*
   * 通过 useEffect() 的第二个参数，指定需要进行检查的数据，
   * 在每次 render 之后，当该数据没有变更时（数组中的所有元素都没有变更），本次 useEffect() 就不会执行
   */
  useEffect(() => {
    document.title = String(online).toUpperCase();
  }, [online]);

  return (
    <div>
      <Button
        onClick={() => {
          setCount((prevCount: number) => {
            return prevCount + 1;
          });
        }}
      >
        {count}
      </Button>{" "}
      <Button
        onClick={() => {
          setOnline((prevOnline: boolean) => {
            return !prevOnline;
          });
        }}
      >
        {String(online).toUpperCase()}
      </Button>
    </div>
  );
}

// tslint:disable-next-line:max-classes-per-file
class C04070201 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04070201 };
