import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { loginUser } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GuestNavigation from '../../components/layouts/guestNavbar';
import UserNavigation from '../../components/layouts/userNavbar';
import ErrorModal from '../../components/modals/loginError';
import LoginForm from '../../components/forms/loginForm';
import Helper from '../../helper/index'

class login extends Component {
    state = {
        user: null,
        email: null,
        password: null,
        error: "",
        modal: false
    }


    async  componentDidMount() {
        var user = await Helper.checkForToken()
        if (user) {
            this.props.history.push('/profile')
        }
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.Login.status === 1) {
            if (nextProps.Login.data.isJoi) {
                await this.setState({
                    error: nextProps.Login.data.details[0].message,
                    modal: true
                })
            }
            if (nextProps.Login.data.token) {
                localStorage.setItem('Token', nextProps.Login.data.token);
                await this.setState({
                    user: true,

                })
                this.props.history.push('/profile')
            }
            if (nextProps.Login.data.msg) {
                await this.setState({
                    modal: true,
                    error: nextProps.Login.data.msg
                })
            }
        }
    }

    handleInput = async (e) => {
        await this.setState({
            [e.target.type]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)

    }

    handleClose = () => {
        this.setState({
            modal: false
        })
    }

    render() {
        var navigation = this.state.user ? <UserNavigation /> : <GuestNavigation />
        return (
            <Container className='justify-content-md-center omer'>
                {navigation}
                <LoginForm
                    className="omer"
                    handleLogin={this.handleLogin}
                    handleInput={this.handleInput}
                />
                <ErrorModal
                    modal={this.state.modal}
                    handleClose={this.handleClose}
                    error={this.state.error}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Login: state.Login,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginUser: loginUser,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(login)