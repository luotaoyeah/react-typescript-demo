/*
 * React Top-Level API
 *     Reference
 *         React.createRef()
 */

import React from 'react';

/*
 *
 */
class C03010801 extends React.Component {
  /*
   * 使用 React.createRef() 创建一个 ref 对象，绑定到组件的 ref 属性；
   */
  public inputRef = React.createRef<HTMLInputElement>();

  public componentDidMount(): void {
    const vm = this;

    if (vm.inputRef.current) {
      vm.inputRef.current.focus();
    }
  }

  public render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          style={{
            borderRadius: '3px',
          }}
        />
      </div>
    );
  }
}

export { C03010801 };
