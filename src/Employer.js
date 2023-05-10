import React, { Component } from 'react';
import tableau from 'tableau-api';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default class Employer extends Component {
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = 'https://public.tableau.com/views/Elahescharts/Sheet2';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%", paddingLeft: "35%", paddingRight: "30%" }}>
                    <Container>
                        <Navbar.Brand href="/">Visa-Wiz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Occupation">Occupation</Nav.Link>
                                <Nav.Link href="/Employer">Employer</Nav.Link>
                                <Nav.Link href="/YearCount">Month & Year</Nav.Link>
                                <Nav.Link href="/Salary">Salary</Nav.Link>
                                <Nav.Link href="/Wage">Wage</Nav.Link>
                                <Nav.Link href="/USState">US States</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br />
                <div ref={(div) => { this.vizContainer = div }} style={{ width: "1600px", height: '800px', margin: "0 auto" }}>
                </div>
            </div>
        );
    }
}
