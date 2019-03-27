import { Action } from '@ngrx/store';
import { IAuth } from './auth.interface'

export enum ActionTypes {
  Login = '[AUTH] Login',
  Logout = '[AUTH] Logout',
  LoginFailure = '[AUTH] Failure',
  LoginSuccess = '[AUTH] Success'
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: IAuth) {}
}

export class Logout implements Action {
  readonly type = ActionTypes.Logout;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: any) {}
}
