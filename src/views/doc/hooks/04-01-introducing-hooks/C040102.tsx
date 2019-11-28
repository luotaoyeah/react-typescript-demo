/*
 * Introducing Hooks
 *     No Breaking Changes
 */

import React from "react";

/*
 * 1. hook 不会影响旧的代码，完全向后兼容；
 * 2. 没有从 react 中移除 class 组件的计划；
 * 3. 之前的 concept 依然保留，如 props，state，context，refs，lifecycle 等；
 */
class C040102 extends React.Component<{}, {}> {
  public render() {
    return <div />;
  }
}

export { C040102 };
