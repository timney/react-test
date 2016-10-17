import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CakeList from '../components/cake-list';
import CakeItemPage from '../containers/cake-item-page'

it('CakeList renders', () => {
   const props = {
       loading: false,
       cakes: [],
       newCake: jest.fn()
   }
   const wrapper = shallow(<CakeList {...props}/>);

   expect(wrapper.find('div.cake-list').length).toBe(1)
});

it('CakeList displays loading', () => {
   const props = {
       loading: true,
       cakes: [],
       newCake: jest.fn()
   }
   const wrapper = shallow(<CakeList {...props}/>);

   expect(wrapper.find('div').text()).toBe('Loading...')
});

it('CakeList displays error', () => {
   const props = {
       loading: false,
       cakes: [],
       newCake: jest.fn(),
       error:'Error'
   }
   const wrapper = shallow(<CakeList {...props}/>);

   expect(wrapper.find('div').text()).toBe('Could not load Cakes: '+props.error)
});

it('CakeList New Cake button calls newCake()', () => {
   const props = {
       loading: false,
       cakes: [],
       newCake: jest.fn()
   }
   const wrapper = shallow(<CakeList {...props}/>);
   wrapper.find('a').simulate('click', {preventDefault:()=>{}})

   expect(props.newCake).toHaveBeenCalledTimes(1)
});

it('CakeList displays cakes', () => {
   const props = {
       loading: false,
       cakes: [{title:'Title', desc:'Description', image:'Image'}],
       newCake: jest.fn()
   }
   const wrapper = shallow(<CakeList {...props}/>, {context:{store:{}}});
   
   expect(wrapper.find(CakeItemPage).length).toBe(1)
});