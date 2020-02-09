/*
 * 对 chosen-js 的封装
 */

import React from 'react';
import 'chosen-js';
import 'chosen-js/chosen.css';

interface IProps {
  onChange?: (value: string) => void;
}

interface IState {}

class Chosen extends React.Component<IProps, IState> {
  $el!: JQuery<HTMLSelectElement>;

  componentDidMount(): void {
    const vm = this;
    if (vm.$el) {
      vm.$el.chosen();

      vm.handleChange = vm.handleChange.bind(this);
      vm.$el.on('change', vm.handleChange);
    }
  }

  componentWillUnmount(): void {
    const vm = this;
    if (vm.$el) {
      vm.$el.off('change');
      vm.$el.chosen('destroy');
    }
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    const vm = this;
    if ((prevProps as any).children !== vm.props.children) {
      vm.$el.trigger('chosen:updated');
    }
  }

  handleChange(e: JQueryEventObject) {
    const vm = this;
    if (vm.props.onChange) {
      vm.props.onChange((e.target as HTMLSelectElement).value);
    }
  }

  public render() {
    console.log('render()');
    /*
     * 通过将所有的 DOM 元素包裹在一个 div 里面，
     * 保证 react 不会对该 div 进行任何的操作；
     */
    return (
      <div>
        <select
          ref={(el: HTMLSelectElement) => {
            if (el) {
              this.$el = $(el);
            }
          }}
          style={{
            minWidth: '100px',
          }}
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}

export { Chosen };
