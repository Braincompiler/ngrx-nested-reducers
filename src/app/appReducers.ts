import { Action } from '@ngrx/store'

export const INCREMENT = '[App] Increment'
export const DECREMENT = '[App] Decrement'

export class IncrementAction implements Action {
    readonly type = INCREMENT
}

export class DecrementAction implements Action {
    readonly type = DECREMENT
}

export type Actions = IncrementAction | DecrementAction

export interface IState {
    counter: number
}

export const INITIAL_STATE: IState = {
    counter: 0
}

export function reducer(state: IState = INITIAL_STATE, action: Actions): IState {
    console.log(action)

    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }

        case DECREMENT:
            return {
                counter: state.counter - 1
            }
    }

    return state
}
