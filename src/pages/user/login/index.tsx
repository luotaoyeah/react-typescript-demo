import { Alert, Checkbox, Icon } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Dispatch, AnyAction } from 'redux';
import { FormComponentProps } from 'antd/es/form';
import Link from 'umi/link';
import { connect } from 'dva';
import { StateType } from '@/models/login';
import LoginComponents from './components/login';
import styles from './style.less';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';

// eslint-disable-next-line object-curly-newline
const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginComponents;

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface LoginProps {
  dispatch: Dispatch<AnyAction>;
  userLogin: StateType;
  submitting: boolean;
}
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface LoginState {
  type: string;
  autoLogin: boolean;
}

@connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))
class Login extends Component<LoginProps, LoginState> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  loginForm: FormComponentProps['form'] | undefined | null = undefined;

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  state: LoginState = {
    type: 'account',
    autoLogin: true,
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  changeAutoLogin = (e: CheckboxChangeEvent) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  handleSubmit = (err: unknown, values: LoginParamsType) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  onTabChange = (type: string) => {
    this.setState({ type });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  onGetCaptcha = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise<boolean>((resolve, reject) => {
      if (!this.loginForm) {
        return;
      }
      this.loginForm.validateFields(['mobile'], {}, async (err: unknown, values: LoginParamsType) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          try {
            const success = await ((dispatch({
              type: 'login/getCaptcha',
              payload: values.mobile,
            }) as unknown) as Promise<unknown>);
            resolve(!!success);
          } catch (error) {
            reject(error);
          }
        }
      });
    });

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  renderMessage = (content: string) => <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;

  public render() {
    const { userLogin, submitting } = this.props;
    const { status, type: loginType } = userLogin;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponents
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          onCreate={(form?: FormComponentProps['form']) => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab={formatMessage({ id: 'user-login.login.tab-login-credentials' })}>
            {/* eslint-disable-next-line operator-linebreak */}
            {status === 'error' &&
              // eslint-disable-next-line operator-linebreak
              loginType === 'account' &&
              // eslint-disable-next-line operator-linebreak
              !submitting &&
              this.renderMessage(formatMessage({ id: 'user-login.login.message-invalid-credentials' }))}
            <UserName
              name="userName"
              placeholder={`${formatMessage({ id: 'user-login.login.userName' })}: admin or user`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={`${formatMessage({ id: 'user-login.login.password' })}: ant.design`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.password.required' }),
                },
              ]}
              onPressEnter={e => {
                e.preventDefault();
                if (this.loginForm) {
                  this.loginForm.validateFields(this.handleSubmit);
                }
              }}
            />
          </Tab>
          <Tab key="mobile" tab={formatMessage({ id: 'user-login.login.tab-login-mobile' })}>
            {/* eslint-disable-next-line operator-linebreak */}
            {status === 'error' &&
              // eslint-disable-next-line operator-linebreak
              loginType === 'mobile' &&
              // eslint-disable-next-line operator-linebreak
              !submitting &&
              this.renderMessage(formatMessage({ id: 'user-login.login.message-invalid-verification-code' }))}
            <Mobile
              name="mobile"
              placeholder={formatMessage({ id: 'user-login.phone-number.placeholder' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.phone-number.required' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: formatMessage({ id: 'user-login.phone-number.wrong-format' }),
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={formatMessage({ id: 'user-login.verification-code.placeholder' })}
              countDown={120}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={formatMessage({ id: 'user-login.form.get-captcha' })}
              getCaptchaSecondText={formatMessage({ id: 'user-login.captcha.second' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.verification-code.required' }),
                },
              ]}
            />
          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="user-login.login.remember-me" />
            </Checkbox>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ float: 'right' }} href="">
              <FormattedMessage id="user-login.login.forgot-password" />
            </a>
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="user-login.login.login" />
          </Submit>
          <div className={styles.other}>
            <FormattedMessage id="user-login.login.sign-in-with" />
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
            <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
            <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="user-login.login.signup" />
            </Link>
          </div>
        </LoginComponents>
      </div>
    );
  }
}

export default Login;
