import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../screens/login/login'

const initialState = {};

const mockStore = configureStore();
let store;

beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
})

describe('<Login> rendering', () => {
    test('render correctly', () => {
        const component = renderer.create(<Router><Login store={store} /> </Router>)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 