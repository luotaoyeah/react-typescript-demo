/*
 * Hooks API Reference
 *     useEffect
 *         Timing of effects
 */

import React from "react";

/*
 * useEffect() 的执行时机：
 *     本次 render 之后，DOM 渲染完成之后，
 *     下次 render 开始之前
 * 因此，对于那些需要对 DOM 进行操作的 side effect，
 * 应该使用 useLayoutEffect()
 */
function F01(): React.ReactElement<{}> {
  return <div>{}</div>;
}

// tslint:disable-next-line:max-classes-per-file
class C04070203 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <F01 />
      </div>
    );
  }
}

export { C04070203 };
