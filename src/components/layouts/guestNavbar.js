import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const GuestNavihation = (props) => {

    function logOut() {
        localStorage.removeItem('jwtToken')
        location.reload()
    }

    return (
        <Navbar className="navbar-container" expand="lg" bg="light">
            <Link to='/' className="nav-link">Home </Link>
            <Nav className="mr-auto">
                <Link to='/login' className="nav-link">Login </Link>
                <Link to='/standing' className="nav-link" >Standing </Link>
            </Nav>
        </Navbar >
    )
}



export default GuestNavihation
