import { POST_ACTION_TYPES } from "./postActionTypes";

export const postInitialValue = {
    isLoading : false,
    post: [],
    error: null
}

export const postReducer = (state, action) => {
    switch(action.type){
        case POST_ACTION_TYPES.FETCH_START : 
            return {...state , isLoading :true};
        case POST_ACTION_TYPES.FETCH_SUCCESS :
            return {...state, isLoading:false, post:action.payload, error:null};
        case POST_ACTION_TYPES.FETCH_FAILURE :
            return {...state, post:[], error:action.payload};
        default : {
            return state
        }
    }
}