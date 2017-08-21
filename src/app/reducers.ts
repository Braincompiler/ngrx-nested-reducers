import { ActionReducerMap, combineReducers } from '@ngrx/store'

import * as fromApp from './appReducers'
import * as fromNested from './nestedReducers'

export interface IState {
    app: {
        a: fromApp.IState,
        b: fromNested.IState,
    }
}

export const reducers = combineReducers({
    a: fromApp.reducer,
    b: fromNested.reducer,
})
