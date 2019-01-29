/*
 * Introducing Hooks
 *     Motivation
 */

import React from "react";

/*
 * 1. 组件之间难以共享状态逻辑（stateful logic）；
 * 2. 组件越来越复杂，越来越难以理解和测试；
 * 3. class 组件有很多的缺点；
 * 4. class 组件不会被移除，而是会跟 hooks 同时存在，
 *    计划是让 hooks 实现 class 组件的所有功能；
 */
class C040102 extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return <div />;
  }
}

export { C040102 };
