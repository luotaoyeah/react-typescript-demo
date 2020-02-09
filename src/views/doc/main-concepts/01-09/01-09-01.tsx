/*
 * Forms
 */

import React from 'react';

interface IProps {}

interface IState {}

class C010901 extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        {/*
         * <form> 表单的默认行为：在提交之后会刷新页面；
         * 通常我们不会使用这种默认行为，
         * 而是直接获取表单数据，然后手动提交数据；
         */}
        <form>
          <label>
            NAME：
            <input
              type="text"
              name="name"
              style={{
                borderRadius: '3px',
              }}
            />
          </label>
          <input
            type={'submit'}
            value="Submit"
            style={{
              borderRadius: '3px',
            }}
          />
        </form>
      </div>
    );
  }
}

export { C010901 };
