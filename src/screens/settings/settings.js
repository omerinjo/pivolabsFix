import React, { Component } from 'react'
import { Container, Button, Jumbotron, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changePass } from './action'

import GuestNavigation from '../../components/layouts/guestNavbar';
import UserNavigation from '../../components/layouts/userNavbar';
import Helper from '../../helper/index';
import PassForm from '../../components/forms/changePassword';
import ErrorModal from '../../components/modals/loginError'

class settings extends Component {

    state = {
        user: null,
        password: '',
        type: 'password',
        modal: false,
        error: ''
    }

    async componentDidMount() {
        let user = await Helper.checkForToken()
        var token = await localStorage.getItem('Token')
        if (user) {
            await this.setState({
                user: user.id,
                token
            })
        } else {
            this.props.history.push('/login')
        }
    }

    async  componentWillReceiveProps(nextProps) {
        if (nextProps.Pass.data) {
            await localStorage.removeItem('Token')
            await location.reload()
            await this.props.history.push('/login')
        }
    }

    handleInput = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange = async (e) => {
        e.preventDefault()
        if (this.state.password.length < 6 || this.state.password.length > 12) {
            await this.setState({
                modal: true,
                error: 'password has to be between 6 an 12 characters'
            })
        } else {
            this.props.changePass(this.state)
        }

    }

    checkPass = async () => {
        if (this.state.type === 'password') {
            await this.setState({
                type: 'text'
            })
        } else {
            await this.setState({
                type: 'password'
            })
        }
    }

    handleClose = () => {
        this.setState({
            modal: false
        })
    }


    render() {
        var navigation = this.state.user ? <UserNavigation /> : <GuestNavigation />
        return (
            <Container>
                {navigation}
                <Jumbotron>
                    <Container style={{ height: '50vh' }}>
                        <Row >
                            <PassForm
                                handleChange={this.handleChange}
                                handleInput={this.handleInput}
                                type={this.state.type}
                                checkPass={this.checkPass}
                            />
                        </Row>
                    </Container>
                    <ErrorModal
                        modal={this.state.modal}
                        handleClose={this.handleClose}
                        error={this.state.error}
                    />
                </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Pass: state.ChangePass,
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changePass: changePass,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(settings))
