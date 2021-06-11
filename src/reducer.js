import { SERVER_DATA } from './const';


export const servserReduser = (state = {}, action) => {
    switch(action.type){
        case SERVER_DATA:
        return {
            ...state,
            ...action.payload
        };
        default:
        return state
    }
}
