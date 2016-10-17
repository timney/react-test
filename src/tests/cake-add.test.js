import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CakeAdd from '../components/cake-add';
 
it('CakeAdd renders', () => {
   const props = {
       currentCake: {},
       editCake: jest.fn()
   }
   const wrapper = shallow(<CakeAdd {...props}/>);

   expect(wrapper.find('h3').text()).toBe('Cake')
});

it('CakeAdd sets cake input values', () => {
   const props = {
       currentCake: {title:'Title', desc:'Description', image:'Image'},
       editCake: jest.fn()
   }
   const wrapper = shallow(<CakeAdd {...props}/>);
   
   expect(wrapper.find('input[name="title"]').get(0).props.value).toBe(props.currentCake.title)
   expect(wrapper.find('input[name="desc"]').get(0).props.value).toBe(props.currentCake.desc)
   expect(wrapper.find('input[name="image"]').get(0).props.value).toBe(props.currentCake.image)
});

it('CakeAdd input changes state', () => {
     const props = {
       currentCake: {title:'', desc:'Description', image:'Image'},
       editCake: jest.fn()
   }
   const wrapper = shallow(<CakeAdd {...props}/>);
   const input = wrapper.find('input[name="title"]')
   input.simulate('change', { target: {name:'title', value:'T'} })

   expect(wrapper.state('title')).toBe('T')
});

it('CakeAdd save cake', () => {
    const props = {
       currentCake: {title:'Title', desc:'Description', image:'Image'},
       editCake: jest.fn()
   }
   const wrapper = shallow(<CakeAdd {...props}/>);
   const submit = wrapper.find('button[type="submit"]')
   submit.simulate('click', {preventDefault:()=>{}})

   expect(props.editCake.mock.calls.length).toBe(1)
   expect(props.editCake).toHaveBeenCalledTimes(1)
});