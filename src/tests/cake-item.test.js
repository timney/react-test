import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CakeItem from '../components/cake-item';

it('CakeItem renders', () => {
   const props = {
       cake: { title:'Title'},
       editCake: jest.fn()
   }
   const wrapper = mount(<CakeItem {...props}/>);
 
   expect(wrapper.find('div.cake-title').text()).toBe(props.cake.title)
});

it('CakeItem displays image', () => {
   const props = {
       cake: { title:'Title', image:'http://Image'},
       editCake: jest.fn()
   }
   const wrapper = mount(<CakeItem {...props}/>);
 
   expect(wrapper.find('img').prop('src')).toBe(props.cake.image)
});