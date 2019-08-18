const RouterConfig = require('../../config/config').default.routes;
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/order
const { uniq } = require('lodash');

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

function formatter(routes, parentPath = '') {
  const fixedParentPath = parentPath.replace(/\/{1,}/g, '/');
  let result = [];
  routes.forEach(item => {
    if (item.path) {
      result.push(`${fixedParentPath}/${item.path}`.replace(/\/{1,}/g, '/'));
    }
    if (item.routes) {
      result = result.concat(formatter(item.routes, item.path ? `${fixedParentPath}/${item.path}` : parentPath));
    }
  });
  return uniq(result.filter(item => !!item));
}

describe('learning-react e2e', () => {
  const testPage = path => async () => {
    await page.goto(`${BASE_URL}${path}`);
    await page.waitForSelector('footer', {
      timeout: 2000,
    });
    const haveFooter = await page.evaluate(() => document.getElementsByTagName('footer').length > 0);
    expect(haveFooter).toBeTruthy();
  };

  const routers = formatter(RouterConfig);
  routers.forEach(route => {
    // FIXME 暂时禁用 e2e 测试
    // it(`test pages ${route}`, testPage(route));
  });

  it('should work', () => {
    expect(1).toEqual(1);
  });
});
