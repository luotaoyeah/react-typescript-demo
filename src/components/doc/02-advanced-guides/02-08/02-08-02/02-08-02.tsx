/*
 * Integrating with Other Libraries:
 *     Integrating with jQuery Chosen Plugin
 */

import React from 'react';
import { Button, Divider, message } from 'antd';
import { Chosen } from './Chosen';

interface IState {
  items: Array<{ name: string; value: string }>;
}

class C020802 extends React.Component<{}, IState> {
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      items: [
        {
          name: 'A',
          value: 'a',
        },
        {
          name: 'B',
          value: 'b',
        },
        {
          name: 'C',
          value: 'c',
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionAdd = this.handleOptionAdd.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  public handleChange(value: string) {
    message.success(value);
  }

  public handleOptionAdd() {
    this.setState((prevState: Readonly<IState>) => ({
      items: prevState.items.concat([{ name: 'D', value: 'd' }]),
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
