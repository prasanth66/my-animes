import * as type from '../types';

export function getAnimes(payload){
    return {
        type    : type.GET_ANIMES_REQUESTED,
        payload : payload
    }
}