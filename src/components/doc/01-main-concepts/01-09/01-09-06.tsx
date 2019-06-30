/*
 * Forms: Controlled Input Null Value
 */

import React from 'react';
import { SyntheticEvent } from 'react';

interface IProps {}

interface IState {
  name: string;
}

class C010906 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: SyntheticEvent) {}

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log(this.state);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/*
             * 正常情况下，如果表单元素的 value 属性绑定了 state 的某个属性，
             * 那么除非使用 setState() 方法更新了数据，
             * 否则表单元素将处于不可编辑的状态（如：文本框无法输入文字）；
             *
             * 如果出现这种情况：绑定了 value 属性，但是依然可以编辑，
             * 那么原因是 value 的绑定值变成了 null 或者 undefined；
             *
             */}
            <input type="text" value={undefined} onChange={this.handleChange} />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export { C010906 };
