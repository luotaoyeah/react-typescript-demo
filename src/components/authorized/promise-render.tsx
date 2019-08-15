import React from 'react';
import { Icon, Spin } from 'antd';
import isEqual from 'lodash/isEqual';
// eslint-disable-next-line import/no-cycle
import { isComponentClass } from './secured';
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface PromiseRenderProps<T, K> {
  ok: T;
  error: K;
  promise: Promise<boolean>;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface PromiseRenderState {
  component: React.ComponentClass | React.FunctionComponent;
}

export default class PromiseRender<T, K> extends React.Component<PromiseRenderProps<T, K>, PromiseRenderState> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  state: PromiseRenderState = {
    component: () => null,
  };

  public componentDidMount() {
    this.setRenderComponent(this.props);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  shouldComponentUpdate = (nextProps: PromiseRenderProps<T, K>, nextState: PromiseRenderState) => {
    const { component } = this.state;
    if (!isEqual(nextProps, this.props)) {
      this.setRenderComponent(nextProps);
    }
    if (nextState.component !== component) return true;
    return false;
  };

  // set render Component : ok or error
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  setRenderComponent(props: PromiseRenderProps<T, K>) {
    const ok = this.checkIsInstantiation(props.ok);
    const error = this.checkIsInstantiation(props.error);
    props.promise
      .then(() => {
        this.setState({
          component: ok,
        });
        return true;
      })
      .catch(() => {
        this.setState({
          component: error,
        });
      });
  }

  // Determine whether the incoming component has been instantiated
  // AuthorizedRoute is already instantiated
  // Authorized  render is already instantiated, children is no instantiated
  // Secured is not instantiated
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  checkIsInstantiation = (target: React.ReactNode | React.ComponentClass): React.FunctionComponent => {
    if (isComponentClass(target)) {
      const Target = target as React.ComponentClass;
      return (props: any) => <Target {...props} />;
    }
    if (React.isValidElement(target)) {
      return (props: any) => React.cloneElement(target, props);
    }
    return () => target as (React.ReactNode & null);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const { component: Component } = this.state;
    // eslint-disable-next-line object-curly-newline
    const { ok, error, promise, ...rest } = this.props;

    return Component ? (
      <Component {...rest} />
    ) : (
      <div
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          paddingTop: 50,
          textAlign: 'center',
        }}
      >
        <Spin size="large" indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
      </div>
    );
  }
}
