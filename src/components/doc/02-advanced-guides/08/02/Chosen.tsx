/*
 * 对 chosen-js 的封装
 */

import React from 'react';
import 'chosen-js';
import 'chosen-js/chosen.css';

interface IProps {
  onChange?: (value: string) => void;
}

class Chosen extends React.Component<IProps, {}> {
  public $el!: JQuery<HTMLSelectElement>;

  public componentDidMount(): void {
    const vm = this;
    if (vm.$el) {
      // @ts-ignore
      vm.$el.chosen();

      vm.handleChange = vm.handleChange.bind(this);
      vm.$el.on('change', vm.handleChange);
    }
  }

  public componentDidUpdate(prevProps: Readonly<IProps>): void {
    const vm = this;
    if ((prevProps as any).children !== vm.props.children) {
      vm.$el.trigger('chosen:updated');
    }
  }

  public componentWillUnmount(): void {
    const vm = this;
    if (vm.$el) {
      vm.$el.off('change');
      // @ts-ignore
      vm.$el.chosen('destroy');
    }
  }

  public handleChange(e: JQueryEventObject) {
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
    const { children } = this.props;
    return (
      <div>
        <select
          ref={(el: HTMLSelectElement) => {
            if (el) {
              // eslint-disable-next-line no-undef
              this.$el = $(el);
            }
          }}
          style={{
            minWidth: '100px',
          }}
        >
          {children}
        </select>
      </div>
    );
  }
}

export { Chosen };
