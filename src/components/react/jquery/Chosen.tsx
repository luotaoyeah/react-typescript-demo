import React from 'react';
import 'chosen-js';
import 'chosen-js/chosen.css';

interface Props {
  onChange?: (value: string) => void;
}

interface State {

}

export class Chosen extends React.Component<Props, State> {
  el: HTMLElement;
  $el: JQuery<HTMLElement>;

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }

  componentDidUpdate(preProps: Props & { children?: React.ReactNode }) {
    if (preProps.children !== this.props.children) {
      this.$el.trigger('chosen:updated');
    }
  }

  handleChange(e: JQuery.Event) {
    if (this.props.onChange) {
      this.props.onChange((e.target as HTMLInputElement).value);
    }
  }

  render() {
    return (
      <div>
        <select
          className="chosen-select"
          ref={
            (el: HTMLSelectElement) => {
              this.el = el;
            }
          }
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}