import React, { Component } from 'react'
import { Container, Button, Jumbotron, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getMyProfle } from './action'


import GuestNavigation from '../../components/layouts/guestNavbar';
import UserNavigation from '../../components/layouts/userNavbar';
import Helper from '../../helper/index';

class profile extends Component {
    state = {
        user: null,
        token: null,
        name: '',
        email: '',
        likes: ''
    }

    async  componentDidMount() {
        let user = await Helper.checkForToken()
        var token = await localStorage.getItem('Token')
        if (user) {
            await this.setState({
                user: user.id,
                token
            })
            await this.props.getMyProfle(this.state)
        }
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.Profile.status === 1) {
            console.log("novi propovi ", nextProps.Profile)
            await this.setState({
                name: `${nextProps.Profile.data.first_name} ${nextProps.Profile.data.last_name}`,
                email: nextProps.Profile.data.email,
                likes: nextProps.Profile.data.Users_likes.length

            })
        }
    }


    render() {
        var navigation = this.state.user ? <UserNavigation /> : <GuestNavigation />
        return (
            <Container>
                {navigation}
                <Jumbotron>
                    <Container style={{ height: '50vh' }}>
                        <Row >
                            <Col>
                                <h2>Name</h2>
                                <h2>Email</h2>
                                <h2>My likes</h2>
                            </Col>
                            <Col>
                                <h2>{this.state.name}</h2>
                                <h2>{this.state.email}</h2>
                                <h2>{this.state.likes}</h2>
                            </Col>
                        </Row>
                    </Container>
                    <Button onClick={() => this.props.history.push('/settings')}>Change password</Button>
                </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Profile: state.Profile,

    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMyProfle: getMyProfle,
    }, dispatch)
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(profile))