import { combineReducers } from 'redux'

import Login from '../screens/login/reducer';
import Standing from '../screens/standing/reducer';
import Register from '../screens/signup/reducer';
import Profile from '../screens/myProfile/reducer';
import ChangePass from '../screens/settings/reducer'

const AllReducers = combineReducers({
    Login: Login,
    Standing: Standing,
    Register: Register,
    Profile: Profile,
    ChangePass: ChangePass

})

export default AllReducers