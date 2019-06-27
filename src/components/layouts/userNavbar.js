import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const UserNavigation = (props) => {

    function logOut() {
        localStorage.removeItem('Token')
        location.reload()
    }

    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Button onClick={logOut} variant="danger">Log out </Button>
                    </li>
                    <li className="nav-item">
                        <Link to='/standing' className="nav-link" >Standing </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-link" >My profile </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/settings' className="nav-link" >Setings</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}



export default UserNavigation

