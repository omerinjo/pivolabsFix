import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import GuestNavigation from '../../components/layouts/guestNavbar';
import UserNavigation from '../../components/layouts/userNavbar';
import Helper from '../../helper/index';
import Standing from '../../components/tables/standing';
import { getStanding, likeUser, unlikeUser } from './action';

class standing extends Component {
    state = {
        user: null,
        page: 0,
        token: null,
        offset: 100,
        data: []
    }


    async componentDidMount() {
        var token = await localStorage.getItem('Token')
        await this.props.getStanding(this.state)
        let user = await Helper.checkForToken()
        if (user) {
            await this.setState({ user, token })
        }
    }

    async componentWillReceiveProps(nextProps) {
        console.log("novi propovi ", nextProps.Standing)
        await this.setState({
            data: nextProps.Standing.data
        })
        if (nextProps.Standing.status >= 3) {
            location.reload()
        }
    }

    like = (e) => {
        this.props.likeUser(this.state.token, e.target.name)
    }
    unLike = (e) => {
        this.props.unlikeUser(this.state.token, e.target.name)
    }

    render() {
        var navigation = this.state.user ? <UserNavigation /> : <GuestNavigation />
        return (
            <Container >
                {navigation}
                <Standing
                    data={this.state.data}
                    user={this.state.user}
                    like={this.like}
                    unlike={this.unLike}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Standing: state.Standing,

    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getStanding: getStanding,
        likeUser: likeUser,
        unlikeUser: unlikeUser
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(standing))