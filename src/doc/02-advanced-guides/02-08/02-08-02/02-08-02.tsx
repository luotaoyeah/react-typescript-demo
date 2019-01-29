/*
 * Integrating with Other Libraries:
 *     Integrating with jQuery Chosen Plugin
 */

import * as React from "react";
import { Chosen } from "./Chosen";
import { Button, Divider, message } from "antd";

interface IState {
  items: Array<{ name: string; value: string }>;
}

class C020802 extends React.Component<{}, IState> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      items: [
        {
          name: "A",
          value: "a"
        },
        {
          name: "B",
          value: "b"
        },
        {
          name: "C",
          value: "c"
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionAdd = this.handleOptionAdd.bind(this);
  }

  handleChange(value: string) {
    message.success(value);
  }

  handleOptionAdd() {
    this.setState((prevState: Readonly<IState>) => ({
      items: prevState.items.concat([{ name: "D", value: "d" }])
    }));
  }

  public render(): React.ReactNode {
    const vm = this;
    return (
      <div>
        <Chosen onChange={vm.handleChange}>
          <option>请选择</option>
          {vm.state.items.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </Chosen>
        <Divider />
        <Button onClick={vm.handleOptionAdd}>add option</Button>
      </div>
    );
  }
}

export { C020802 };
