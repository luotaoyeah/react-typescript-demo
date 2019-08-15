import { Form, Tabs } from 'antd';
import React, { Component } from 'react';
import { FormComponentProps } from 'antd/es/form';
import classNames from 'classnames';
import LoginContext, { LoginContextProps } from './login-context';
import LoginItem, { LoginItemProps, LoginItemType } from './login-item';

import LoginSubmit from './login-submit';
import LoginTab from './login-tab';
import styles from './index.less';
import { LoginParamsType } from '@/services/login';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface LoginProps {
  defaultActiveKey?: string;
  onTabChange?: (key: string) => void;
  style?: React.CSSProperties;
  onSubmit?: (error: unknown, values: LoginParamsType) => void;
  className?: string;
  form: FormComponentProps['form'];
  onCreate?: (form?: FormComponentProps['form']) => void;
  // eslint-disable-next-line @typescript-eslint/array-type
  children: React.ReactElement<LoginTab>[];
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface LoginState {
  // eslint-disable-next-line @typescript-eslint/array-type
  tabs?: string[];
  type?: string;
  // eslint-disable-next-line @typescript-eslint/array-type
  active?: { [key: string]: unknown[] };
}

class Login extends Component<LoginProps, LoginState> {
  public static Tab = LoginTab;

  public static Submit = LoginSubmit;

  public static UserName: React.FunctionComponent<LoginItemProps>;

  public static Password: React.FunctionComponent<LoginItemProps>;

  public static Mobile: React.FunctionComponent<LoginItemProps>;

  public static Captcha: React.FunctionComponent<LoginItemProps>;

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static defaultProps = {
    className: '',
    defaultActiveKey: '',
    onTabChange: () => {},
    onSubmit: () => {},
  };

  public constructor(props: LoginProps) {
    super(props);
    this.state = {
      type: props.defaultActiveKey,
      tabs: [],
      active: {},
    };
  }

  public componentDidMount() {
    const { form, onCreate } = this.props;
    if (onCreate) {
      onCreate(form);
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  onSwitch = (type: string) => {
    this.setState(
      {
        type,
      },
      () => {
        const { onTabChange } = this.props;
        if (onTabChange) {
          onTabChange(type);
        }
      },
    );
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  getContext: () => LoginContextProps = () => {
    const { form } = this.props;
    const { tabs = [] } = this.state;
    return {
      tabUtil: {
        addTab: id => {
          this.setState({
            tabs: [...tabs, id],
          });
        },
        removeTab: id => {
          this.setState({
            tabs: tabs.filter(currentId => currentId !== id),
          });
        },
      },
      form: { ...form },
      updateActive: activeItem => {
        const { type = '', active = {} } = this.state;
        if (active[type]) {
          active[type].push(activeItem);
        } else {
          active[type] = [activeItem];
        }
        this.setState({
          active,
        });
      },
    };
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { active = {}, type = '' } = this.state;
    const { form, onSubmit } = this.props;
    const activeFields = active[type] || [];
    if (form) {
      // eslint-disable-next-line @typescript-eslint/array-type
      form.validateFields(activeFields as string[], { force: true }, (err, values) => {
        if (onSubmit) {
          onSubmit(err, values);
        }
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const { className, children } = this.props;
    const { type, tabs = [] } = this.state;
    // eslint-disable-next-line @typescript-eslint/array-type
    const TabChildren: React.ReactComponentElement<LoginTab>[] = [];
    // eslint-disable-next-line @typescript-eslint/array-type
    const otherChildren: React.ReactElement<unknown>[] = [];
    React.Children.forEach(children, (child: React.ReactComponentElement<LoginTab> | React.ReactElement<unknown>) => {
      if (!child) {
        return;
      }
      if (child.type.typeName === 'LoginTab') {
        TabChildren.push(child as React.ReactComponentElement<LoginTab>);
      } else {
        otherChildren.push(child);
      }
    });
    return (
      <LoginContext.Provider value={this.getContext()}>
        <div className={classNames(className, styles.login)}>
          <Form onSubmit={this.handleSubmit}>
            {tabs.length ? (
              <React.Fragment>
                <Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
                  {TabChildren}
                </Tabs>
                {otherChildren}
              </React.Fragment>
            ) : (
              children
            )}
          </Form>
        </div>
      </LoginContext.Provider>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/array-type
(Object.keys(LoginItem) as (keyof LoginItemType)[]).forEach(item => {
  Login[item] = LoginItem[item];
});

export default Form.create<LoginProps>()(Login);
