import { Action } from '@ngrx/store';
import { ActionTypes } from './auth.actions';

export const initialState = false;

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Login:
      console.log('ActionTypes.Login')
      return true;

    case ActionTypes.Logout:
      console.log('ActionTypes.Logout')
      return false;

    default:
      return state;
  }
}
