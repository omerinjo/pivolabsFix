import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './screens/signup/signApp';
import Login from './screens/login/login';
import Profile from './screens/myProfile/profile';
import Settings from './screens/settings/settings';
import Standing from './screens/standing/standing'

class App extends Component {

    render() {
        return (
            <div className='app-container'>
                <BrowserRouter>
                    <Switch >
                        <Route exact path='/' component={SignUp} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/settings' component={Settings} />
                        <Route exact path='/standing' component={Standing} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App

