import * as type from '../types';

const initialState = {
    animes : [],
    loading : false,
    error : null,
}


export default function animes(state = initialState,action){
    switch(action.type){
        case type.GET_ANIMES_REQUESTED:
            return {
                ...state,
                loading : true,
            }
        case type.GET_ANIMES_SUCCESS:
            return {
                ...state,
                loading : false,
                animes  : action.animes
            }
        case type.GET_ANIMES_FAILED:
            return {
                ...state,
                loading : false,
                error: action.message,
            }
        default :
        return state ;
    }
}