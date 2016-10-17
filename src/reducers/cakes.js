import * as actions from '../actions'

const initialState = {
    cakesList: {
        cakes:[],
        loading: false,
        error: ''
    },
    currentCake: {title: '', desc: '', image: ''}
}

export function cakesList(state=initialState.cakesList, action){
    switch(action.type){
        case actions.ALL_CAKES:
            return {cakes: action.cakes, loading:false}
        case actions.ADD_CAKE:
            return {...state, cakes: [...state.cakes, action.cake]}
        case actions.EDIT_CAKE:
            return {...state, cakes:[...state.cakes.filter(c => c !== action.oldCake), action.cake]}
        case actions.IS_LOADING_CAKES:
            return {...state, loading: action.isLoading}
        case actions.ERROR_LOADING_CAKES:
            return {...state, error: action.message, loading:false}
        default:
            return state
    }
}

export function currentCake(state=initialState.currentCake, action){
    switch(action.type){
        case actions.NEW_CAKE:
        case actions.EDIT_CAKE:
            return initialState.currentCake
        case actions.EDITING_CAKE:
            return action.cake
        default:
            return state;
    }
}