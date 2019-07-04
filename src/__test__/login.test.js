import configureStore from 'redux-mock-store'
import { renderComponent } from './index'

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
        const component = renderComponent(<Login store={store} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
}) 