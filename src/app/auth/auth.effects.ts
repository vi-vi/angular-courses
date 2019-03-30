// import { Injectable } from '@angular/core';
// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { map, switchMap, catchError } from 'rxjs/operators';
// import { AuthorizationService } from '../services/authorization.service'
// import { ActionTypes, Login } from './auth.actions'
//
// import { Router } from '@angular/router';
//
// @Injectable()
// export class AuthEffects {
//
//   @Effect()
//   logIn$ = this.actions$
//     .pipe(
//       ofType(ActionTypes.Login),
//       map((action: Login) => action.payload),
//       switchMap(payload =>
//           this.authService
//             .login2(payload)
//             .pipe(
//               map(({ token }) => {
//                 console.log('token');
//                 localStorage.setItem('userToken', JSON.stringify(token));
//                 this.router.navigate([`/courses`])
//               }),
//               catchError(() => EMPTY)
//             )
//       )
//     );
//
//   constructor(
//     private actions$: Actions,
//     private authService: AuthorizationService,
//     private router: Router
//   ) {}
// }
