/*
 * https://reactjs.org/docs/forms.html
 */

import React from 'react';
import { Button, Input } from 'antd';

function C010901() {
  return (
    <div>
      {/* form 表单的默认行为是: 在提交之后会刷新当前页面,
          通常我们不会使用这种默认行为, 而是直接获取表单数据, 然后手动提交数据 */}
      <form>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label htmlFor="input01">
          NAME：
          <Input type="text" name="name" id="input01" />
        </label>

        <Button htmlType="submit">SUBMIT</Button>
      </form>
    </div>
  );
}

export { C010901 };
