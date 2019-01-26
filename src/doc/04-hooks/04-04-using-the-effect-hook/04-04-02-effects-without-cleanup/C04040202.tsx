/*
 * Using the Effect Hook
 *     Effects Without Cleanup
 *         Example Using Hooks
 */

import React, { useEffect, useState } from "react";
import { Button } from "antd";

/*
 * useEffect() 函数，在 function 组件每次 render 之后都会执行，包括首次加载
 */
const useEffectProxy = new Proxy(useEffect, {
  apply(
    target: (
      effect: React.EffectCallback,
      inputs?: React.InputIdentityList
    ) => void,
    thisArg: any,
    argArray?: any
  ): any {
    console.log("useEffectProxy");
    return target.apply(thisArg, argArray);
  }
});

function F01(): React.ReactElement<{}> {
  const [count, setCount] = useState<number>(0);

  /*
   * useEffect() 的参数是一个回调函数，就是所谓的 effect 函数，
   * react 会保证在执行 effect 回调函数时，DOM已经更新完成了
   */
  useEffectProxy(() => {
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

class C04040202 extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04040202 };
