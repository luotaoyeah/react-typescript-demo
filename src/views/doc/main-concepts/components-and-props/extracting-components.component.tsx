// https://reactjs.org/docs/components-and-props.html#extracting-components

import * as React from "react";
import { Divider } from "antd";
import "./extracting-components.component.less";

class PanelBad extends React.Component<{
  title: string;
  body: string;
  footer: string;
}> {
  public render() {
    return (
      <div className="panel">
        <div className="panel-header">{this.props.title}</div>
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
  public render() {
    return (
      <div className="panel">
        <PanelHeader title={this.props.title} />
        <PanelBody content={this.props.body} />
        <PanelFooter content={this.props.footer} />
      </div>
    );
  }
}

class PanelHeader extends React.Component<{ title: string }> {
  public render() {
    return <div className="panel-header">{this.props.title}</div>;
  }
}

class PanelBody extends React.Component<{ content: string }> {
  public render() {
    return <div className="panel-body">{this.props.content}</div>;
  }
}

class PanelFooter extends React.Component<{ content: string }> {
  public render() {
    return <div className="panel-footer">{this.props.content}</div>;
  }
}

/**
 * 组件拆分的原则:
 *     如果一个界面在多个地方重复使用, 则应该提取成组件,
 *     如果一个组件过于复杂, 则应该拆分成多个简单的组件
 */
class ExtractingComponentsComponent extends React.Component {
  public render() {
    return (
      <div>
        <PanelBad title={"title"} body={"body"} footer={"footer"} />

        <Divider />

        <PanelGood title={"title"} body={"body"} footer={"footer"} />
      </div>
    );
  }
}

export { ExtractingComponentsComponent };
