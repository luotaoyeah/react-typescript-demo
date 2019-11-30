// https://reactjs.org/docs/state-and-lifecycle.html

import * as React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { ConvertingAFunctionToAClassComponent } from "./converting-a-function-to-a-class.component";
import { AddingLocalStateToAClassComponent } from "./adding-local-state-to-a-class.component";

class StateAndLifecycleComponent extends React.Component {
  public render() {
    return (
      <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} accordion={true}>
        <Collapse.Panel header="converting-a-function-to-a-class" key="1">
          <ConvertingAFunctionToAClassComponent />
        </Collapse.Panel>

        <Collapse.Panel header="adding-local-state-to-a-class" key="2">
          <AddingLocalStateToAClassComponent />
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export { StateAndLifecycleComponent };
