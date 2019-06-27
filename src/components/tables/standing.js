import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

const standing = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Likes</th>
                    {props.user ? <th>Option</th> : null}
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.Users_likes.length}</td>
                            {props.user ? <td>
                                <Button name={item.id} onClick={props.like}>like</Button>
                                <Button name={item.id} onClick={props.unlike}>unlike</Button>
                            </td> : null}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )

}

export default standing
