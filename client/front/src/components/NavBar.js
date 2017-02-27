import React, {PropTypes} from 'react';
import { Link } from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, FormGroup, FormControl, MenuItem, Button} from 'react-bootstrap';

import style from '../styles/NavBar.css'

class NavBar extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#" className={style.navColor}>React-Blog</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">首页</NavItem>
                    <NavItem eventKey={2} href="#">分类</NavItem>
                    <NavItem eventKey={3} href="#">归档</NavItem>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search"/>
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
