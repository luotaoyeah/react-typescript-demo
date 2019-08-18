/*
 * https://reactjs.org/docs/components-and-props.html#extracting-components
 */

import React from 'react';
import { Divider } from 'antd';

/*
 * 组件拆分的原则:
 *     如果一个功能在多个地方重复使用, 则应该提取成组件
 *     如果一个组件过于复杂, 则应该拆分成多个简单的组件
 */

interface IProps {
  title: string;
  body: string;
  footer: string;
}

function Panel01({ body, footer, title }: IProps) {
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

function Panel02({ body, footer, title }: IProps) {
  return (
    <div className="panel">
      <PanelHead title={title} />
      <PanelBody body={body} />
      <PanelFooter footer={footer} />
    </div>
  );
}

function PanelHead({ title }: Pick<IProps, 'title'>) {
  return (
    <div className="panel-heading">
      <div className="panel-title">{title}</div>
    </div>
  );
}

function PanelBody({ body }: Pick<IProps, 'body'>) {
  return <div className="panel-body">{body}</div>;
}

function PanelFooter({ footer }: Pick<IProps, 'footer'>) {
  return <div className="panel-footer">{footer}</div>;
}

function C010404() {
  return (
    <div>
      <Panel01 title="TITLE" body="BODY" footer="FOOTER" />

      <Divider />

      <Panel02 title="TITLE" body="BODY" footer="FOOTER" />
    </div>
  );
}

export { C010404 };
