/*
 * Lifting State Up
 */

import React, { SyntheticEvent } from 'react';
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

function BoilingVerdict(props: { celsius: number }) {
  const { celsius } = props;
  if (celsius >= 100) {
    return <Tag color="green">BOIL</Tag>;
  }

  return <Tag color="red">NOT BOIL</Tag>;
}

class TemperatureInput extends React.Component<{
  scale: 'C' | 'F';
  value: number;
  onChange: (temperature: number) => void;
}> {
  public constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(e: SyntheticEvent) {
    const { onChange } = this.props;
    onChange(Number((e.target as HTMLInputElement).value));
  }

  public render() {
    const { value, scale } = this.props;
    return (
      <fieldset>
        <legend>temperature in {scale}</legend>
        <input type="number" value={value} onChange={this.handleChange} />
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
  public constructor(props: {}, context: any) {
    super(props, context);
    this.state = {
      scale: 'C',
      temperature: 0,
    };
    this.handleCChange = this.handleCChange.bind(this);
    this.handleFChange = this.handleFChange.bind(this);
  }

  public handleCChange(temperature: number) {
    this.setState({ scale: 'C', temperature });
  }

  public handleFChange(temperature: number) {
    this.setState({ scale: 'F', temperature });
  }

  public render() {
    const { temperature, scale } = this.state;
    const c = scale === 'F' ? toC(temperature) : temperature;
    const f = scale === 'C' ? toF(temperature) : temperature;
    return (
      <div>
        <TemperatureInput value={c} scale="C" onChange={this.handleCChange} />
        <TemperatureInput value={f} scale="F" onChange={this.handleFChange} />
        <BoilingVerdict celsius={c} />
      </div>
    );
  }
}

function C011001(): React.ReactNode {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export { C011001 };
