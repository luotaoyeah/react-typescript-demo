import React from 'react';

/*
 * Specifying Attributes with JSX
 */

/*
 * JSX 的标签上可以定义属性：
 *     string literal 属性使用 "" 包裹，
 *     expression 属性使用 {} 包裹，
 * 不一不要同时使用 {} 和 ""；
 */
console.log('\n-------------------------------------------------- 01');

class C010204 extends React.Component {
  /*
   * 因为 JSX 本质上是 JS，
   * 因此其属性使用的是 DOM 对象的 property 形式，
   * 而不是 HTML 标签的 attribute 形式；
   */
  public render(): React.ReactNode {
    const id = 'id_01_02_04';
    return (
      <div id={id} className="class-01">
        C010204
      </div>
    );
  }
}

export { C010204 };
