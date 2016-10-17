import React from 'react'
import Header from '../components/header'
import { shallow, mount } from 'enzyme';

it('Header renders h1', () => {
   const wrapper = shallow(<Header />);
   expect(wrapper.find('h1').text()).toEqual('Cakes')
});

it('Header renders children', () => {
   const wrapper = mount(<Header><div className="child"></div></Header>);
   expect(wrapper.find('div.child').length).toBe(1)
});