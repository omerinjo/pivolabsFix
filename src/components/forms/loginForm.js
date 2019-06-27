import React, { Component } from 'react'
import { Form, Button, } from 'react-bootstrap';


const loginForm = (props) => {
    return (
        <Form onSubmit={props.handleLogin}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={props.handleInput} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={props.handleInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
       </Button>
        </Form>
    )

}

export default loginForm