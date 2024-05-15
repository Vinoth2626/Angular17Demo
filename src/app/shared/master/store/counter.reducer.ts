import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, customincrement, channelname } from "./counter.action";
import { initialState } from "./counter.state";


// export const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);

}

const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    }),
    on(customincrement, (state, action) => {
        return {
            ...state,
            counter:action.actionType =='add'? state.counter + action.value : state.counter - action.value
        };
    }),
    on(channelname, (state, action) => {
        return {
            ...state,
            channelname: action.channel
        };
    }),


)