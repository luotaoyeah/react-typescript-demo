// https://reactjs.org/docs/components-and-props.html

import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { FunctionAndClassComponentsComponent } from './function-and-class-components.component';
import { RenderingAComponentComponent } from './rendering-a-component.component';
import { ComposingComponentsComponent } from './composing-components.component';
import { ExtractingComponentsComponent } from './extracting-components.component';
import { PropsAreReadOnlyComponent } from './props-are-read-only.component';

class ComponentsAndProps extends React.Component {
  public render() {
    return (
      <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} accordion={true}>
        <Collapse.Panel header="function-and-class-components" key="1">
          <FunctionAndClassComponentsComponent />
        </Collapse.Panel>

        <Collapse.Panel header="rendering-a-component" key="2">
          <RenderingAComponentComponent />
        </Collapse.Panel>

        <Collapse.Panel header="composing-components" key="3">
          <ComposingComponentsComponent />
        </Collapse.Panel>

        <Collapse.Panel header="extracting-components" key="4">
          <ExtractingComponentsComponent />
        </Collapse.Panel>

        <Collapse.Panel header="props-are-read-only" key="5">
          <PropsAreReadOnlyComponent />
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export { ComponentsAndProps };
