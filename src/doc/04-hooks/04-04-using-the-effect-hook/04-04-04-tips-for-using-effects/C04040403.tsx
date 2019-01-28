/*
 * Using the Effect Hook
 *     Tips for Using Effects
 *         Tip: Optimizing Performance by Skipping Effects
 */

import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";

/*
 * 默认情况下，所有的 effect 在每次 render 之后都会执行，
 * 可以给 useEffect() 函数传递第二个参数，该参数是一个数组，
 * 当数组中所有的元素都没有发生改变时，本次 render 之后 useEffect() 不会执行
 */
function F01(): React.ReactElement<{}> {
  const [count01, setCount01] = useState<number>(0);
  const [count02, setCount02] = useState<number>(0);

  useEffect(() => {
    console.log(`%cCOUNT_01: ${count01}`, "color: #ff0000");
  }, [count01]);

  useEffect(() => {
    console.log(`%cCOUNT_02: ${count02}`, "color: #0000ff");
  }, [count02]);

  return (
    <div>
      <Button
        onClick={() => {
          setCount01(count01 + 1);
        }}
      >
        {count01}
      </Button>
      <Divider />
      <Button
        onClick={() => {
          setCount02(count02 + 1);
        }}
      >
        {count02}
      </Button>
    </div>
  );
}

class C04040403 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04040403 };
