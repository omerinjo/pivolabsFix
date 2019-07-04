import configureStore from 'redux-mock-store'

import { renderComponent } from './index'
import Home from '../screens/signup/signApp';

const initialState = {};

const mockStore = configureStore();
let store;

beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
})


describe('<Home> rendering', () => {
    test('render correctly', () => {
        const component = renderComponent(<Home store={store} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})