import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Portfoliooptimierung</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/generalinformation" to="/generalinformation">
                            Information
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/etf" to="/etf">
                            ETFs
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/arero" to="/arero">
                            Arero
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/shortselling" to="/shortselling">
                            Leerverkäufe
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}