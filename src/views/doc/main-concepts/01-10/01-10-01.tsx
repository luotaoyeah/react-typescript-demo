/*
 * Lifting State Up
 */

import React from 'react';
import { SyntheticEvent } from 'react';
import { Tag } from 'antd';

/*
 * 如果多个组件需要共享状态数据，可以将状态数据放到离他们最近的相同父组件中；
 */

function toC(f: number): number {
  return Math.round((((f - 32) * 5) / 9) * 1000) / 1000;
}

function toF(c: number): number {
  return Math.round(((c * 9) / 5 + 32) * 1000) / 1000;
}

class BoilingVerdict extends React.Component<{ celsius: number }> {
  public render() {
    if (this.props.celsius >= 100) {
      return <Tag color="green">BOIL</Tag>;
    }

    return <Tag color="red">NOT BOIL</Tag>;
  }
}

class TemperatureInput extends React.Component<{
  scale: 'C' | 'F';
  value: number;
  onChange: (temperature: number) => void;
}> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: SyntheticEvent) {
    this.props.onChange(Number((e.target as HTMLInputElement).value));
  }

  public render() {
    return (
      <fieldset>
        <legend>temperature in {this.props.scale}</legend>
        <input type="number" value={this.props.value} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component<
  {},
  {
    scale: 'C' | 'F';
    temperature: number;
  }
> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      scale: 'C',
      temperature: 0,
    };
    this.handleCChange = this.handleCChange.bind(this);
    this.handleFChange = this.handleFChange.bind(this);
  }

  handleCChange(temperature: number) {
    this.setState({ scale: 'C', temperature });
  }

  handleFChange(temperature: number) {
    this.setState({ scale: 'F', temperature });
  }

  public render() {
    const c = this.state.scale === 'F' ? toC(this.state.temperature) : this.state.temperature;
    const f = this.state.scale === 'C' ? toF(this.state.temperature) : this.state.temperature;
    return (
      <div>
        <TemperatureInput value={c} scale={'C'} onChange={this.handleCChange} />
        <TemperatureInput value={f} scale={'F'} onChange={this.handleFChange} />
        <BoilingVerdict celsius={c} />
      </div>
    );
  }
}

interface IProps {}

interface IState {}

class C011001 extends React.Component<IProps, IState> {
  public render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export { C011001 };
