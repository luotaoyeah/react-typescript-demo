// https://reactjs.org/docs/introducing-jsx.html

import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { EmbeddingExpressionsInJsxComponent } from './embedding-expressions-in-jsx.component';
import { JsxIsAnExpressionTooComponent } from './jsx-is-an-expression-too.component';
import { SpecifyingAttributesWithJsxComponent } from './specifying-attributes-with-jsx.component';
import { SpecifyingChildrenWithJsxComponent } from './specifying-children-with-jsx.component';
import { JsxPreventsInjectionAttacksComponent } from './jsx-prevents-injection-attacks.component';
import { JsxRepresentsObjectsComponent } from './jsx-represents-objects.component';

class IntroducingJsx extends React.Component {
  public render() {
    return (
      <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} accordion={true}>
        <Collapse.Panel header="embedding-expressions-in-jsx" key="1">
          <EmbeddingExpressionsInJsxComponent />
        </Collapse.Panel>

        <Collapse.Panel header="jsx-is-an-expression-too" key="2">
          <JsxIsAnExpressionTooComponent />
        </Collapse.Panel>

        <Collapse.Panel header="specifying-attributes-with-jsx" key="3">
          <SpecifyingAttributesWithJsxComponent />
        </Collapse.Panel>

        <Collapse.Panel header="specifying-children-with-jsx" key="4">
          <SpecifyingChildrenWithJsxComponent />
        </Collapse.Panel>

        <Collapse.Panel header="jsx-prevents-injection-attacks" key="5">
          <JsxPreventsInjectionAttacksComponent />
        </Collapse.Panel>

        <Collapse.Panel header="jsx-represents-objects" key="6">
          <JsxRepresentsObjectsComponent />
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export { IntroducingJsx };
