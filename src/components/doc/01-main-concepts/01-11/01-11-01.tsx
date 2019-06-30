/*
 * Composition vs Inheritance: Containment
 */

import React from 'react';
import { Button } from 'antd';

/*
 * 在 react 中，应该尽量使用 composition 而不是 inheritance；
 */

/*
 * 某些组件的内容是由外界传入的，比如弹窗（dialog），
 * 这时候可以使用 children 属性传入内容；
 * 在 JSX 中，组件标签中间的所有内容，
 * 都会作为组件的 children 属性，传入组件；
 */
class Dialog extends React.Component {
  public render(): React.ReactNode {
    return (
      <div
        style={{
          borderRadius: '3px',
          border: '2px solid red',
          padding: '10px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

/*
 * 如果组件中有多个地方都需要从外界传入内容，
 * 可以自定义多个属性，类似 props.children 一样；
 */
class Panel extends React.Component<{
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}> {
  public render(): React.ReactNode {
    return (
      <div
        className={'panel'}
        style={{
          borderRadius: '3px',
          border: '2px solid red',
          padding: '10px',
        }}
      >
        <div className="panel-heading">{this.props.header}</div>
        <div className="panel-body">{this.props.content}</div>
        <div className="panel-footer">{this.props.footer}</div>
      </div>
    );
  }
}

interface IProps {}

interface IState {}

class C011101 extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
  }

  public render(): React.ReactNode {
    return (
      <div>
        <Dialog>
          <h1>title</h1>
          <div>
            <i>content</i>
          </div>
          <Button type={'danger'}>OK</Button>
        </Dialog>
        <Panel
          header={<h1>title</h1>}
          content={<i>content</i>}
          footer={
            <Button type={'dashed'} onClick={this.handleClick}>
              footer
            </Button>
          }
        />
      </div>
    );
  }
}

export { C011101 };
