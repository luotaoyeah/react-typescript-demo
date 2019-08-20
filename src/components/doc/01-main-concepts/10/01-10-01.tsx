/*
 * https://reactjs.org/docs/lifting-state-up.html
 */

import React from 'react';
import { Divider, InputNumber, Tag } from 'antd';

/*
 * 如果多个组件需要共享状态数据, 可以将状态数据提升到它们共同的上级组件中去
 */

/**
 * 华氏度转摄氏度
 */
function toC(f: number): number {
  return Math.round((((f - 32) * 5) / 9) * 1000) / 1000;
}

/**
 * 摄氏度转华氏度
 */
function toF(c: number): number {
  return Math.round(((c * 9) / 5 + 32) * 1000) / 1000;
}

/**
 * 是否沸腾
 * @param celsius 摄氏度的值
 */
function BoilingVerdict({ celsius }: { celsius: number }) {
  if (celsius >= 100) {
    return <Tag color="green">BOIL</Tag>;
  }

  return <Tag color="red">NOT BOIL</Tag>;
}

interface ITemperatureInputProps {
  scale: 'C' | 'F';
  value: number;
  onChange: (temperature: number) => void;
}

class TemperatureInput extends React.Component<ITemperatureInputProps> {
  public constructor(props: ITemperatureInputProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(value?: number) {
    const { onChange } = this.props;
    onChange(value || 0);
  }

  public render() {
    const { value, scale } = this.props;
    return (
      <p>
        <InputNumber
          value={value}
          onChange={this.handleChange}
          formatter={i => `${scale} ${i}`}
          parser={i => (i ? i.replace(new RegExp(`${scale}\\s?`, 'g'), '') : '')}
        />
      </p>
    );
  }
}

class C011001A extends React.Component<
  {},
  {
    scale: 'C' | 'F';
    temperature: number;
  }
> {
  public constructor(props: {}) {
    super(props);

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
    const valueInC = scale === 'F' ? toC(temperature) : temperature;
    const valueInF = scale === 'C' ? toF(temperature) : temperature;

    return (
      <div>
        <TemperatureInput value={valueInC} scale="C" onChange={this.handleCChange} />
        <TemperatureInput value={valueInF} scale="F" onChange={this.handleFChange} />

        <Divider></Divider>

        <BoilingVerdict celsius={valueInC} />
      </div>
    );
  }
}

function C011001() {
  return <C011001A />;
}

export { C011001 };
