/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line @typescript-eslint/array-type
let CURRENT: string | string[] = 'NULL';

// eslint-disable-next-line @typescript-eslint/array-type
type CurrentAuthorityType = string | string[] | (() => typeof CURRENT);
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
const renderAuthorize = <T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) => (
  currentAuthority: CurrentAuthorityType,
): T => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    }
    if (Object.prototype.toString.call(currentAuthority) === '[object String]' || Array.isArray(currentAuthority)) {
      // eslint-disable-next-line @typescript-eslint/array-type
      CURRENT = currentAuthority as string[];
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default <T>(Authorized: T) => renderAuthorize<T>(Authorized);
