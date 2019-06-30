/*
 * Lists and Keys: Rendering Multiple Components
 */

import * as React from 'react';

/*
 * 在 JS 中，对数组元素进行转换，
 * 通常可以使用 Array.map() 方法；
 */
const array: Array<number> = [1, 2, 3];
/* [2, 4, 6] */
console.log(array.map(i => i * 2));

interface IProps {}

interface IState {}

class C010801 extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    return (
      <div>
        {/*
         * 在 JSX 中，同样可以使用 Array.map() 方法,
         * 将数据数组转换为元素数组，并进行渲染；
         */}
        <ul>
          {['a', 'b', 'c'].map((n: string) => (
            <li>{n}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export { C010801 };
