import { Action } from "@ngrx/store";

export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';

export class SetAunthenticated implements Action {
    readonly type = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUTHENTICATED;
}

export type AuthAction = SetAunthenticated | SetUnauthenticated;