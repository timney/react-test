import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as actions from '../actions';

it('allCakes creates ALL_CAKES action', ()=>{
    const action = {
        type: actions.ALL_CAKES,
        cakes: []
    }

    expect(actions.allCakes(action.cakes)).toEqual(action)
})

it('errorLoadingCakes creates ERROR_LOADING_CAKES action', ()=>{
    const action = {
        type: actions.ERROR_LOADING_CAKES,
        message: 'message'
    }

    expect(actions.errorLoadingCakes(action.message)).toEqual(action)
})

it('searchCakes creates SEARCH_CAKES action', ()=>{
    const action = {
        type: actions.SEARCH_CAKES,
        search: 'a'
    }

    expect(actions.searchCakes(action.search)).toEqual(action)
})

it('newCake creates NEW_CAKE action', ()=>{
    const action = {
        type: actions.NEW_CAKE,
        cake: {}
    }

    expect(actions.newCake(action.cake)).toEqual(action)
})

it('addCake creates ADD_CAKE action', ()=>{
    const action = {
        type: actions.ADD_CAKE,
        cake: {}
    }

    expect(actions.addCake(action.cake)).toEqual(action)
})

it('editingCake creates EDITING_CAKE action', ()=>{
    const action = {
        type: actions.EDITING_CAKE,
        cake: {}
    }

    expect(actions.editingCake(action.cake)).toEqual(action)
})

it('editCake creates EDIT_CAKE action', ()=>{
    const action = {
        type: actions.EDIT_CAKE,
        cake: {},
        oldCake: {}
    }

    expect(actions.editCake(action.cake, action.oldCake)).toEqual(action)
})

it('isLoadingCakes creates IS_LOADING_CAKES action', ()=>{
    const action = {
        type: actions.IS_LOADING_CAKES,
        isLoading: false
    }

    expect(actions.isLoadingCakes(action.isLoading)).toEqual(action)
})