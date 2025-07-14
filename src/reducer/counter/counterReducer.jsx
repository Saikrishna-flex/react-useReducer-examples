import { COUNTER_ACTION_TYPES } from "./counterActionTypes";


export const counterInitialValue = {count : 0};

export const counterReducer = (state, action) =>{
    switch(action.type){
    case COUNTER_ACTION_TYPES.INCREMENT :
        return {count: state.count + 1}
    case COUNTER_ACTION_TYPES.DECREMENT :
        return {count: state.count -1 }
    case COUNTER_ACTION_TYPES.RESET : 
        return {count: 0}
    default : 
    return state
    }
}