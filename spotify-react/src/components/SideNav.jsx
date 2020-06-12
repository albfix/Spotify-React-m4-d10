import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ListGroup } from 'react-bootstrap'

const Sidenav = () => (

    <Menu>
        <ListGroup>
            <ListGroup.Item className="sideNav">Spotify</ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item className="sideNav">Home</ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item className="sideNav">Search</ListGroup.Item>
        </ListGroup>
        <ListGroup>
            <ListGroup.Item className="sideNav">Your Library</ListGroup.Item>
        </ListGroup>

    </Menu>
)

export default Sidenav