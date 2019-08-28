/*
 * https://reactjs.org/docs/context.html#before-you-use-context
 */

import React from 'react';
import { Input } from 'antd';
import { Divider } from 'antd/es';

/*
 * 适合使用 context 的场景是: 多个位于不同层次的组件需要共用数据,
 * 如果仅仅是为了避免层层传递数据, 可能 component composition 是更好的方式
 */

/*
 * 层层传递 props 属性
 */

interface IProps01 {
  name: string;
  age: number;
}

function C020302A01({ age, name }: IProps01) {
  return <C020302B01 name={name} age={age} />;
}

function C020302B01({ age, name }: IProps01) {
  return <C020302C01 name={name} age={age} />;
}

function C020302C01({ age, name }: IProps01) {
  return (
    <>
      <Input addonBefore="name：" defaultValue={name} />
      <Input addonBefore="age：" defaultValue={age.toString()} />
    </>
  );
}

/*
 * 传递整个组件
 */

interface IProps02 {
  form: React.ReactNode;
}

function C020302A02({ form }: IProps02) {
  return <C020302B02 form={form} />;
}

function C020302B02({ form }: IProps02) {
  return <C020302C02 form={form} />;
}

class C020302C02 extends React.Component<IProps02> {
  public render() {
    const { form } = this.props;

    return form;
  }
}

function C020302() {
  return (
    <>
      <C020302A01 name="tom" age={18} />

      <Divider />

      <C020302A02
        form={
          <>
            <Input addonBefore="name：" defaultValue="tom" />
            <Input addonBefore="age：" defaultValue="18" />
          </>
        }
      />
    </>
  );
}

export { C020302 };
