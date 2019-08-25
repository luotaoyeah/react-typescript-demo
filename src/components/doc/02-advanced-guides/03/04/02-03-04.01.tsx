/*
 * https://reactjs.org/docs/context.html#dynamic-context
 */

import React from 'react';
import { ButtonType } from 'antd/es/button';
import { Button } from 'antd';

const ButtonTypeContext: React.Context<ButtonType> = React.createContext<ButtonType>('primary');

function C02030401B({ onTypeChange, ...restProps }: { onTypeChange: () => void; children: React.ReactNode }) {
  return (
    <ButtonTypeContext.Consumer>
      {(type: ButtonType) => <Button type={type} {...restProps} onClick={onTypeChange} />}
    </ButtonTypeContext.Consumer>
  );
}

class C02030401A extends React.Component<{}, { type: ButtonType }> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      type: 'danger',
    };

    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  public handleTypeChange() {
    this.setState(prevState => ({
      type: prevState.type === 'primary' ? 'danger' : 'primary',
    }));
  }

  public render() {
    const { type } = this.state;

    return (
      <ButtonTypeContext.Provider value={type}>
        <Button
          type={type}
          style={{
            marginRight: '10px',
          }}
        >
          {type.toUpperCase()}
        </Button>

        <C02030401B onTypeChange={this.handleTypeChange}>TOGGLE</C02030401B>
      </ButtonTypeContext.Provider>
    );
  }
}

function C02030401() {
  return <C02030401A />;
}

export { C02030401 };
