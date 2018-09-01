/*
 * Lifting State Up
 */

import * as React from "react";
import { Tag } from "antd";
import { SyntheticEvent } from "react";

/*
 * 如果多个组件需要共享状态数据，可以将状态数据放到离他们最近的相同父组件中；
 */

class BoilingVerdict extends React.Component<{ celsius: number }> {
  render(): React.ReactNode {
    if (this.props.celsius >= 100) {
      return <Tag color="green">BOIL</Tag>;
    }

    return <Tag color="red">NOT BOIL</Tag>;
  }
}

class TemperatureInput extends React.Component<
  { scale: "C" | "F" },
  { temperature: number }
> {
  constructor(props: any) {
    super(props);
    this.state = { temperature: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: SyntheticEvent) {
    this.setState({
      temperature: Number((e.target as HTMLInputElement).value)
    });
  }

  render(): React.ReactNode {
    return (
      <fieldset>
        <legend>temperature in {this.props.scale}</legend>
        <input
          type="number"
          value={this.state.temperature}
          onChange={this.handleChange}
        />

        <BoilingVerdict celsius={this.state.temperature} />
      </fieldset>
    );
  }
}

interface IProps {}

interface IState {}

class C011001 extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <div>
        <TemperatureInput scale={"C"} />
        <TemperatureInput scale={"F"} />
      </div>
    );
  }
}

export { C011001 };
