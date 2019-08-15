import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

import { NoticeIconData } from '@/components/notice-icon';
import { queryNotices } from '@/services/user';
// eslint-disable-next-line import/no-cycle
import { ConnectState } from './connect.d';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface NoticeItem extends NoticeIconData {
  id: string;
  type: string;
  status: string;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface GlobalModelState {
  collapsed: boolean;
  // eslint-disable-next-line @typescript-eslint/array-type
  notices: NoticeItem[];
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    fetchNotices: Effect;
    clearNotices: Effect;
    changeNoticeReadState: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
    saveNotices: Reducer<GlobalModelState>;
    saveClearedNotices: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
  },

  effects: {
    // eslint-disable-next-line generator-star-spacing
    *fetchNotices(_, { call, put, select }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount: number = yield select(
        (state: ConnectState) => state.global.notices.filter(item => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: data.length,
          unreadCount,
        },
      });
    },
    // eslint-disable-next-line generator-star-spacing
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count: number = yield select((state: ConnectState) => state.global.notices.length);
      const unreadCount: number = yield select(
        (state: ConnectState) => state.global.notices.filter(item => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
          unreadCount,
        },
      });
    },
    // eslint-disable-next-line generator-star-spacing
    *changeNoticeReadState({ payload }, { put, select }) {
      // eslint-disable-next-line @typescript-eslint/array-type
      const notices: NoticeItem[] = yield select(
        (state: ConnectState) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          state.global.notices.map(item => {
            const notice = { ...item };
            if (notice.id === payload) {
              notice.read = true;
            }
            return notice;
          }),
        // eslint-disable-next-line function-paren-newline
      );

      yield put({
        type: 'saveNotices',
        payload: notices,
      });

      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: notices.length,
          unreadCount: notices.filter(item => !item.read).length,
        },
      });
    },
  },

  reducers: {
    changeLayoutCollapsed(state = { notices: [], collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }): GlobalModelState {
      return {
        collapsed: false,
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state = { notices: [], collapsed: true }, { payload }): GlobalModelState {
      return {
        collapsed: false,
        ...state,
        notices: state.notices.filter((item): boolean => item.type !== payload),
      };
    },
  },

  subscriptions: {
    setup({ history }): void {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        // @ts-ignore
        if (typeof window.ga !== 'undefined') {
          // @ts-ignore
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};

export default GlobalModel;
