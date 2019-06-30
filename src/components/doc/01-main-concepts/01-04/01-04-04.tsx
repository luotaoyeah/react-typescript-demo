/*
 * Components and Props: Extracting Components
 */

import React from 'react';

/*
 * 组件拆分的原则：
 *     如果一个UI在多个地方重复使用，则应该提取成组件；
 *     如果一个组件过于复杂，则应该拆分成多个简单组件；
 */

class PanelBad extends React.Component<{
  title: string;
  body: string;
  footer: string;
}> {
  public render(): React.ReactNode {
    return (
      <div className="panel">
        <div className="panel-heading">
          <div className="panel-title">{this.props.title}</div>
        </div>
        <div className="panel-body">{this.props.body}</div>
        <div className="panel-footer">{this.props.footer}</div>
      </div>
    );
  }
}

class PanelGood extends React.Component<{
  title: string;
  body: string;
  footer: string;
}> {
  public render(): React.ReactNode {
    return (
      <div className="panel">
        <PanelHead title={this.props.title} />
        <PanelBody body={this.props.body} />
        <PanelFooter footer={this.props.footer} />
      </div>
    );
  }
}

class PanelHead extends React.Component<{ title: string }> {
  public render(): React.ReactNode {
    return (
      <div className="panel-heading">
        <div className="panel-title">{this.props.title}</div>
      </div>
    );
  }
}

class PanelBody extends React.Component<{ body: string }> {
  public render(): React.ReactNode {
    return <div className="panel-body">{this.props.body}</div>;
  }
}

class PanelFooter extends React.Component<{ footer: string }> {
  public render(): React.ReactNode {
    return <div className="panel-footer">{this.props.footer}</div>;
  }
}

class C010404 extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <PanelBad title={'title'} body={'body'} footer={'footer'} />
        <hr />
        <PanelGood title={'title'} body={'body'} footer={'footer'} />
      </div>
    );
  }
}

export { C010404 };
