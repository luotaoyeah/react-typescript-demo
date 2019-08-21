import { IConfig, IPlugin } from 'umi-types';

import defaultSettings from './defaultSettings';
// https://umijs.org/config/
import slash from 'slash2';
import webpackPlugin from './plugin.config';

const { pwa, primaryColor } = defaultSettings;

const isAntDesignProPreview = false;

const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      // dynamicImport: {
      //   loadingComponent: './components/page-loading/index',
      //   webpackChunkName: true,
      //   level: 3,
      // },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false,
      // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

// 针对 preview.pro.ant.design 的 GA 统计代码
if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  plugins,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/user-layout/user-layout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/security-layout',
      routes: [
        {
          path: '/',
          component: '../layouts/basic-layout',
          Routes: ['src/pages/authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              name: 'home',
              icon: 'info-circle',
              component: './home',
            },
            {
              path: '/doc',
              name: 'doc',
              icon: 'info-circle',
              routes: [
                {
                  path: '01',
                  name: '01',
                  routes: [
                    {
                      path: '01',
                      name: '01',
                      component: '../components/doc/01-main-concepts/01/01-01',
                    },
                    {
                      path: '02',
                      name: '02',
                      component: '../components/doc/01-main-concepts/02/01-02',
                    },
                    {
                      path: '03',
                      name: '03',
                      component: '../components/doc/01-main-concepts/03/01-03',
                    },
                    {
                      path: '04',
                      name: '04',
                      component: '../components/doc/01-main-concepts/04/01-04',
                    },
                    {
                      path: '05',
                      name: '05',
                      component: '../components/doc/01-main-concepts/05/01-05',
                    },
                    {
                      path: '06',
                      name: '06',
                      component: '../components/doc/01-main-concepts/06/01-06',
                    },
                    {
                      path: '07',
                      name: '07',
                      component: '../components/doc/01-main-concepts/07/01-07',
                    },
                    {
                      path: '08',
                      name: '08',
                      component: '../components/doc/01-main-concepts/08/01-08',
                    },
                    {
                      path: '09',
                      name: '09',
                      component: '../components/doc/01-main-concepts/09/01-09',
                    },
                    {
                      path: '10',
                      name: '10',
                      component: '../components/doc/01-main-concepts/10/01-10',
                    },
                    {
                      path: '11',
                      name: '11',
                      component: '../components/doc/01-main-concepts/11/01-11',
                    },
                  ],
                },
                {
                  path: '02',
                  name: '02',
                  routes: [
                    {
                      path: '01',
                      name: '01',
                      component: '../components/doc/02-advanced-guides/01/02-01',
                    },
                    {
                      path: '16',
                      name: '16',
                      component: '../components/doc/02-advanced-guides/16/02-16',
                    },
                  ],
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // https://ant.design/docs/react/customize-theme
  theme: {
    'primary-color': primaryColor,
    'border-radius-base': '3px',
    'ease-base-out': 'none',
    'ease-base-in': 'none',
    'ease-out': 'none',
    'ease-in': 'none',
    'ease-in-out': 'none',
    'ease-out-back': 'none',
    'ease-in-back': 'none',
    'ease-in-out-back': 'none',
    'ease-out-circ': 'none',
    'ease-in-circ': 'none',
    'ease-in-out-circ': 'none',
    'ease-out-quint': 'none',
    'ease-in-quint': 'none',
    'ease-in-out-quint': 'none',
    'animation-duration-slow': '0.0s',
    'animation-duration-base': '0.0s',
    'animation-duration-fast': '0.0s',
  },
  define: {},
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  /*
  proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
  */
} as IConfig;
