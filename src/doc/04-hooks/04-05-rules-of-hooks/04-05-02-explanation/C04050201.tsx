/*
 * Rules of Hooks
 *     Only Call Hooks at the Top Level
 *     Only Call Hooks from React Functions
 *         Explanation
 */

import React, {
  EffectCallback,
  InputIdentityList,
  useEffect,
  useState
} from "react";
import { Button } from "antd";

/*
 * 之所以 hooks 必须遵守这些规则，是因为：
 *     在同一个 function 组件中可以多次调用同一个 hook 函数，
 *     而 react 需要保证在每次 render 的时候，所有的 hooks 的执行顺序是固定的，
 *     否则 hooks 无法正确工作
 */

/**  */
const useEffectProxy = new Proxy(useEffect, {
  apply(
    target: (
      effect: React.EffectCallback,
      inputs?: React.InputIdentityList
    ) => void,
    thisArg: unknown,
    argArray: [EffectCallback, InputIdentityList | undefined]
  ): unknown {
    console.log("%cuseEffectProxy", "color: #ff0000");
    return target.apply(thisArg, argArray);
  }
});

/**  */
const useStateProxy = new Proxy(useState, {
  apply(
    target: <S>(
      initialState: (() => S) | S
    ) => [S, React.Dispatch<React.SetStateAction<S>>],
    thisArg: unknown,
    argArray: [{} | (() => {})]
  ): unknown {
    console.log("%cuseStateProxy", "color: #0000ff");
    return target.apply(thisArg, argArray);
  }
});

/**  */
function F01(): React.ReactElement<{}> {
  const [count, setCount] = useStateProxy<number>(0);

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

class C04050201 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04050201 };
