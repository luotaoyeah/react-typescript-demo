import { AnyAction } from 'redux';
import { MenuDataItem } from '@ant-design/pro-layout';
import { RouterTypes } from 'umi';
// eslint-disable-next-line import/no-cycle
import { GlobalModelState } from './global';
import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
import { LoginModelType } from './login';

export { GlobalModelState, SettingModelState, UserModelState };

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  login: LoginModelType;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface Route extends MenuDataItem {
  // eslint-disable-next-line @typescript-eslint/array-type
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?<K = any>(action: AnyAction): K;
}
