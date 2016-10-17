import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
 
it('App renders', () => {
   const wrapper = shallow(<App />);
   expect(wrapper.hasClass('app')).toBe(true)
});

