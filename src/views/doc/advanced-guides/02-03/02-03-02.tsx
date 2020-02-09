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
class A extends React.Component<{ name: string; age: number }> {
  public render() {
    return <B name={this.props.name} age={this.props.age} />;
  }
}

class B extends React.Component<{ name: string; age: number }> {
  public render() {
    return <C name={this.props.name} age={this.props.age} />;
  }
}

class C extends React.Component<{ name: string; age: number }> {
  public render() {
    return (
      <div>
        <p>
          <Input addonBefore="name：" defaultValue={this.props.name} />
        </p>
        <p>
          <Input addonBefore="age：" defaultValue={this.props.age.toString()} />
        </p>
      </div>
    );
  }
}

/*
 * 传递整个组件
 */
class A2 extends React.Component<{ form: React.ReactNode }> {
  public render() {
    return <B2 form={this.props.form} />;
  }
}

class B2 extends React.Component<{ form: React.ReactNode }> {
  public render() {
    return <C2 form={this.props.form} />;
  }
}
class C2 extends React.Component<{ form: React.ReactNode }> {
  public render() {
    return this.props.form;
  }
}

class C020302 extends React.Component {
  public render() {
    return (
      <div>
        <A name={'tom'} age={18} />
        <hr />
        <A2
          form={
            <div>
              <p>
                <Input addonBefore="name：" defaultValue={'tom'} />
              </p>
              <p>
                <Input addonBefore="age：" defaultValue={'18'} />
              </p>
            </div>
          }
        />
      </div>
    );
  }
}

export { C020302 };
