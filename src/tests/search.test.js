import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../components/search';
 
it('Search renders', () => {
    const props = {
        searchCakes: jest.fn()
    }
   const wrapper = shallow(<Search {...props}/>);
   expect(wrapper.hasClass('cake-search')).toBe(true)
});

it("Search input change calls searchCakes prop", () => {
    const props = {
        searchCakes: jest.fn()
    }
    const wrapper = shallow(<Search {...props} />);
    const input = wrapper.find('.cakeSearch')
    input.simulate('change', { target: {value:'a'} })

    expect(props.searchCakes.mock.calls.length).toBe(1)
});