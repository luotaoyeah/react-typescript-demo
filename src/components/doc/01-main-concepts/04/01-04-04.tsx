/*
 * Components and Props: Extracting Components
 */

import React from 'react';

/*
 * 组件拆分的原则：
 *     如果一个UI在多个地方重复使用，则应该提取成组件；
 *     如果一个组件过于复杂，则应该拆分成多个简单组件；
 */

// eslint-disable-next-line react/prefer-stateless-function
class PanelBad extends React.Component<{
  title: string;
  body: string;
  footer: string;
}> {
  public render(): React.ReactNode {
    const { body, footer, title } = this.props;
    return (
      <div className="panel">
        <div className="panel-heading">
          <div className="panel-title">{title}</div>
        </div>
        <div className="panel-body">{body}</div>
        <div className="panel-footer">{footer}</div>
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class PanelGood extends React.Component<{
  title: string;
  body: string;
  footer: string;
}> {
  public render(): React.ReactNode {
    const { body, footer, title } = this.props;
    return (
      <div className="panel">
        <PanelHead title={title} />
        <PanelBody body={body} />
        <PanelFooter footer={footer} />
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class PanelHead extends React.Component<{ title: string }> {
  public render(): React.ReactNode {
    const { title } = this.props;
    return (
      <div className="panel-heading">
        <div className="panel-title">{title}</div>
      </div>
    );
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class PanelBody extends React.Component<{ body: string }> {
  public render(): React.ReactNode {
    const { body } = this.props;
    return <div className="panel-body">{body}</div>;
  }
}

// eslint-disable-next-line react/prefer-stateless-function
class PanelFooter extends React.Component<{ footer: string }> {
  public render(): React.ReactNode {
    const { footer } = this.props;
    return <div className="panel-footer">{footer}</div>;
  }
}

function C010404(): React.ReactNode {
  return (
    <div>
      <PanelBad title="title" body="body" footer="footer" />
      <hr />
      <PanelGood title="title" body="body" footer="footer" />
    </div>
  );
}

export { C010404 };
