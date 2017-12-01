import * as React from 'react';
import {
  Button,
  Input
} from 'antd';

interface Props {
  containerRef: (el: HTMLElement | null) => void;
}

interface State {
}

export class CustomInput extends React.Component <Props, State> {
  inputElement: HTMLInputElement | null;

  constructor(props: Props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e?: React.SyntheticEvent<HTMLButtonElement>) {
    if (this.inputElement) {
      this.inputElement.focus();
    }
  }

  render() {
    return (
      <div
        className="custom-input-container"
        ref={this.props.containerRef}
      >
        <input
          type="text"
          ref={element => {
            this.inputElement = element;
            console.log('inline ref'); // tslint:disable-line
          }}
        />

        <Input/>

        <Button
          type="danger"
          onClick={this.handleButtonClick}
        >
          focus
        </Button>
      </div>
    );
  }

}