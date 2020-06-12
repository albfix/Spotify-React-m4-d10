import React from "react";
//import { slide as Menu } from "react-burger-menu";
import { Navbar, Nav } from 'react-bootstrap'

const SideBar = () => (
    <Navbar>
        <Nav.Item>
            <Nav.Link href="/home">Trending</Nav.Link>
            <Nav.Link href="/home">Podcast</Nav.Link>
            <Nav.Link href="/home">Moods and Genres</Nav.Link>
            <Nav.Link href="/home">New Features</Nav.Link>
            <Nav.Link href="/home">Discover</Nav.Link>
        </Nav.Item>
    </Navbar>
);
export default SideBar