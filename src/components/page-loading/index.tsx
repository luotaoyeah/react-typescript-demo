import React from 'react';
import { Icon, Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
const PageLoding: React.FC = () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
  </div>
);
export default PageLoding;
