import React from 'react';
import { CustomInput } from './CustomInput';

interface Props {
}

interface State {
}

class RefAndDom extends React.Component <Props, State> {
  customInput: CustomInput | null;
  customInputContainer: HTMLElement | null;

  componentDidMount() {
    if (this.customInput) {
      this.customInput.handleButtonClick();
    }
  }

  render() {
    return (
      <div>
        <CustomInput
          containerRef={
            (el) => {
              this.customInputContainer = el;
            }
          }
          ref={
            (component) => {
              this.customInput = component;
            }
          }
        />
      </div>
    );
  }
}

export default RefAndDom;