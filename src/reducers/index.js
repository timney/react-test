import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {cakesList, currentCake} from './cakes'
import {search} from './search'
import * as actions from '../actions'

// const initialState = {
//     cakesList: {cakes: [], loading: false, error:''},
//     currentCake: {},
//     search: null,
// }

const app = combineReducers({
    cakesList,
    currentCake,
    search,
    routing: routerReducer
})

export default app