// https://reactjs.org/docs/components-and-props.html

import * as React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { FunctionAndClassComponentsComponent } from "./function-and-class-components.component";

class ComponentsAndPropsComponent extends React.Component {
  public render() {
    return (
      <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} accordion={true}>
        <Collapse.Panel header="function-and-class-components" key="1">
          <FunctionAndClassComponentsComponent />
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export { ComponentsAndPropsComponent };
