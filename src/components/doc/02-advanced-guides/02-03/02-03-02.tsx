/*
 * Context: Before You Use Context
 */

import React from 'react';
import { Input } from 'antd';

/*
 * context 在多个不同层级的组件需要共享数据时使用，
 * 缺点是，会使组件变得难以重用；
 */

/*
 * 使用 props 层层传递的方式
 */
function A(props: { name: string; age: number }) {
  const { age, name } = props;
  return <B name={name} age={age} />;
}

function B(props: { name: string; age: number }) {
  const { age, name } = props;
  return <C name={name} age={age} />;
}

function C(props: { name: string; age: number }) {
  const { age, name } = props;
  return (
    <div>
      <p>
        <Input addonBefore="name：" defaultValue={name} />
      </p>
      <p>
        <Input addonBefore="age：" defaultValue={age.toString()} />
      </p>
    </div>
  );
}

/*
 * 传递整个组件
 */
function A2(props: { form: React.ReactNode }) {
  const { form } = props;
  return <B2 form={form} />;
}

function B2(props: { form: React.ReactNode }) {
  const { form } = props;
  return <C2 form={form} />;
}

class C2 extends React.Component<{ form: React.ReactNode }> {
  public render() {
    const { form } = this.props;
    return form;
  }
}

function C020302(): React.ReactNode {
  return (
    <div>
      <A name="tom" age={18} />
      <hr />
      <A2
        form={
          <div>
            <p>
              <Input addonBefore="name：" defaultValue="tom" />
            </p>
            <p>
              <Input addonBefore="age：" defaultValue="18" />
            </p>
          </div>
        }
      />
    </div>
  );
}

export { C020302 };
