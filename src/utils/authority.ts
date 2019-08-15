// use localStorage to store the authority info, which might be sent from server in actual project.
// eslint-disable-next-line @typescript-eslint/array-type
export function getAuthority(str?: string): string | string[] {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString = typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  // preview.pro.ant.design only do not use in your production.
  // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  if (!authority) {
    return ['admin'];
  }
  return authority;
}

// eslint-disable-next-line @typescript-eslint/array-type
export function setAuthority(authority: string | string[]): void {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}