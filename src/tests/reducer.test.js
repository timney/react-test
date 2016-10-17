import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import * as actions from '../actions'
import {cakesList} from '../reducers/cakes';

it('allcakes', ()=>{
    const initialState = {cakesList:{ cakes: [], loading: false}}
    const action = actions.allCakes([{title:'Title'}])

    var result = cakesList(initialState, action)

    expect(result).toEqual({cakes:[{title:'Title'}], loading:false})
})

