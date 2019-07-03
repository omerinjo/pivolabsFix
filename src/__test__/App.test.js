//import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../screens/login/login'
import GuestNavbar from '../components/layouts/guestNavbar';
import Home from '../screens/signup/signApp';

const initialState = {};

const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
})


describe('Navigation', () => {
    test('Navigation should render', () => {
        const component = shallow(<GuestNavbar />)
        const wrapper = component.find(`[data-test='guestNavigation']`)
        expect(wrapper.length).toBe(1)
    })
})


describe('<Home> rendering', () => {
    test('render correctly', () => {
        const wrapper = render(<Router><Home store={store} /> </Router>)
        expect(wrapper).toMatchSnapshot();
    })
    test('find button', () => {
        const wrapper = render(<Router><Home store={store} /> </Router>)
        expect(wrapper.find('button')).toHaveLength(1);
    })
    test('find form', () => {
        const wrapper = render(<Router><Home store={store} /> </Router>)
        expect(wrapper.find('form')).toHaveLength(1);
    })
    test('find input', () => {
        const wrapper = render(<Router><Home store={store} /> </Router>)
        expect(wrapper.find('input')).toHaveLength(4);
    })
})

describe('<Login> rendering', () => {
    test('render correctly', () => {
        const wrapper = render(<Router><Login store={store} /> </Router>)
        expect(wrapper).toMatchSnapshot();
    })
})