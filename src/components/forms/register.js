import React, { Component } from 'react'
import { Form, Button, } from 'react-bootstrap';

const register = (props) => {
    return (
        <Form onSubmit={props.handlRegister}>
            <Form.Group controlId="validationCustom01">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" placeholder="Enter first name" onChange={props.handleInput} />
            </Form.Group>
            <Form.Group controlId="validationCustom02">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" placeholder="Enter last name" onChange={props.handleInput} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={props.handleInput} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={props.handleInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
       </Button>
        </Form>
    )

}

export default register
