import React from 'react';
import $ from 'jquery';

interface Props {

}

interface State {

}

export class SomePlugin extends React.Component<Props, State> {
  el: HTMLElement;
  $el: JQuery<HTMLElement>;

  componentDidMount() {
    this.$el = $(this.el);
  }

  componentWillUnmount() {
    /*  */
  }

  render() {
    return (
      <div
        ref={
          (element: HTMLDivElement) => {
            this.el = element;
          }
        }
      />
    );
  }
}