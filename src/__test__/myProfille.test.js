import configureStore from 'redux-mock-store'


import { renderComponent } from './index'
import MyProfile from '../screens/myProfile/profile'

const initialState = {};

const mockStore = configureStore();
let store;

beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
})


describe('<MyProfile> rendering', () => {
    test('render correctly', () => {
        const component = renderComponent(<MyProfile store={store} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

