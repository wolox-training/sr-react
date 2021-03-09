import { contextFactory } from 'config/context';
import LocalStorageService from 'services/LocalStorageService';

export interface State {
  isAuth: boolean;
  language: string;
}

export const INITIAL_STATE = {
  isAuth: !!LocalStorageService.getValue('token'),
  language: 'es'
};

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_LANG = 'SET_LANG'
}

interface Login {
  type: ActionTypes.LOGIN;
  payload: boolean;
}

interface Logout {
  type: ActionTypes.LOGOUT;
}

interface SetLanguage {
  type: ActionTypes.SET_LANG;
  payload: string;
}

export type Action = Login | Logout | SetLanguage;

export const actionCreators = {
  login: (isAuth: boolean): Login => ({ type: ActionTypes.LOGIN, payload: isAuth }),
  logout: (): Logout => ({ type: ActionTypes.LOGOUT }),
  setLanguage: (lang: string): SetLanguage => ({ type: ActionTypes.SET_LANG, payload: lang })
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, isAuth: action.payload };
    case ActionTypes.LOGOUT:
      return { ...state, isAuth: false };
    case ActionTypes.SET_LANG:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export const { useSelector, Context, useDispatch } = contextFactory<State, Action>(INITIAL_STATE);
