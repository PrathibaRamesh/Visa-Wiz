import React, { Component } from 'react';
import tableau from 'tableau-api';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default class Wage extends Component {
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = 'https://public.tableau.com/views/WageUnits/Prathiba_1';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%", paddingLeft: "1%", paddingRight: "50%" }}>
                    <Container style={{  width: '200px'}}>
                        <Navbar.Brand href="/" style={{ fontSize: '30px', marginLeft: '1px' ,paddingRight:'120px'  }} >Visa-Wiz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="/Occupation" style={{ fontSize: '20px', paddingRight: "5%" }} >Occupation</Nav.Link>
                                <Nav.Link href="/Employer" style={{ fontSize: '20px',paddingRight: "5%"  }}>Employer</Nav.Link>
                                <Nav.Link href="/YearCount" style={{ fontSize: '20px',paddingRight: "5%", whiteSpace: "nowrap" }}>Month & Year</Nav.Link>
                                <Nav.Link href="/Salary" style={{ fontSize: '20px',paddingRight: "5%"  }}>Salary</Nav.Link>
                                <Nav.Link href="/Wage" style={{ fontSize: '20px',paddingRight: "5%"  }}>Wage</Nav.Link>
                                <Nav.Link href="/USState" style={{ fontSize: '20px',whiteSpace: "nowrap" }}>US States</Nav.Link>
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
