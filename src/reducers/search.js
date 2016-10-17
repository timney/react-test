import * as actions from '../actions'

export function search(state='', action){
    switch(action.type){
        case actions.SEARCH_CAKES:
            return action.search
        default:
            return state
    }
}