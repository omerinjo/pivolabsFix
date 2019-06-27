import React, { Component } from 'react'
import { Form, Button, } from 'react-bootstrap';


const changePassword = (props) => {
    return (
        <Form onSubmit={props.handleChange}>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Enter new password</Form.Label>
                <Form.Control type={props.type} name="password" placeholder="Enter new password" onChange={props.handleInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
             </Button>

            <Button variant="primary" onClick={props.checkPass} >
                See password
             </Button>
        </Form>
    )
}

export default changePassword