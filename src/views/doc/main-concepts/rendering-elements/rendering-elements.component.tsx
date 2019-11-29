// https://reactjs.org/docs/rendering-elements.html

import * as React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { RenderingAnElementIntoTheDom } from "./rendering-an-element-into-the-dom";

class RenderingElementsComponent extends React.Component {
  public render() {
    return (
      <Collapse expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} accordion={true}>
        <Collapse.Panel header="rendering-an-element-into-the-dom" key="1">
          <RenderingAnElementIntoTheDom />
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export { RenderingElementsComponent };
