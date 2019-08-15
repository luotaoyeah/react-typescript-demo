import React, { Component } from 'react';

import { TabPaneProps } from 'antd/es/tabs';
import { Tabs } from 'antd';
import LoginContext, { LoginContextProps } from './login-context';

const { TabPane } = Tabs;

const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface LoginTabProps extends TabPaneProps {
  tabUtil: LoginContextProps['tabUtil'];
}

class LoginTab extends Component<LoginTabProps> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  uniqueId: string = '';

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(props: LoginTabProps) {
    super(props);
    this.uniqueId = generateId('login-tab-');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount() {
    const { tabUtil } = this.props;
    if (tabUtil) {
      tabUtil.addTab(this.uniqueId);
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const { children } = this.props;
    return <TabPane {...this.props}>{children}</TabPane>;
  }
}

const WrapContext: React.FC<TabPaneProps> & {
  typeName: string;
} = props => <LoginContext.Consumer>{value => <LoginTab tabUtil={value.tabUtil} {...props} />}</LoginContext.Consumer>;

// 标志位 用来判断是不是自定义组件
WrapContext.typeName = 'LoginTab';

export default WrapContext;
