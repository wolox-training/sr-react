import { contextFactory } from 'config/context';
import { Page } from 'types/types';

export interface State {
  isAuth: boolean;
  language: string;
  books: Page[];
}

export const INITIAL_STATE = {
  isAuth: !!JSON.parse(localStorage.getItem('session') || '')?.token,
  language: localStorage.getItem('lang') || 'es',
  books: []
};

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_LANG = 'SET_LANG',
  FETCH_BOOKS = 'FETCH_BOOKS'
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

interface FetchBooks {
  type: ActionTypes.FETCH_BOOKS;
  payload: Page[];
}

export type Action = Login | Logout | SetLanguage | FetchBooks;

export const actionCreators = {
  login: (isAuth: boolean): Login => ({ type: ActionTypes.LOGIN, payload: isAuth }),
  logout: (): Logout => ({ type: ActionTypes.LOGOUT }),
  setLanguage: (lang: string): SetLanguage => ({ type: ActionTypes.SET_LANG, payload: lang }),
  getBooks: (books: Page[]): FetchBooks => ({ type: ActionTypes.FETCH_BOOKS, payload: books })
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, isAuth: action.payload };
    case ActionTypes.LOGOUT:
      return { ...state, isAuth: false };
    case ActionTypes.SET_LANG:
      return { ...state, language: action.payload };
    case ActionTypes.FETCH_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export const { useSelector, Context, useDispatch } = contextFactory<State, Action>(INITIAL_STATE);
