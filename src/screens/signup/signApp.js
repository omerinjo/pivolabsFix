import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { register } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GuestNavigation from '../../components/layouts/guestNavbar';
import UserNavigation from '../../components/layouts/userNavbar';
import RegisterForm from '../../components/forms/register';
import ErrorModal from '../../components/modals/loginError';

class signApp extends Component {
    state = {
        user: null,
        email: null,
        password: null,
        first_name: "",
        last_name: "",
        error: null,
        modal: false
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.Register.data.isJoi) {
            await this.setState({
                error: nextProps.Register.data.details[0].message,
                modal: true
            })
        }
        if (nextProps.Register.data.msg) {
            await this.setState({
                error: nextProps.Register.data.msg,
                modal: true
            })
        }
        if (nextProps.Register.data.message) {
            return this.props.history.push('/login')
        }

    }

    handleInput = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = (e) => {
        e.preventDefault()
        this.props.register(this.state)
    }

    handleClose = () => {
        this.setState({
            modal: false
        })
    }


    render() {
        var navigation = this.state.user ? <UserNavigation /> : <GuestNavigation />
        return (
            <div className="container">
                <div className="">
                    {navigation}
                </div>
                <RegisterForm
                    handleInput={this.handleInput}
                    handlRegister={this.handleRegister}
                />
                <ErrorModal
                    modal={this.state.modal}
                    handleClose={this.handleClose}
                    error={this.state.error}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Register: state.Register,

    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        register: register,
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(signApp)
