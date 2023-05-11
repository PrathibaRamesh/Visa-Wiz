import React, { Component } from 'react';
import tableau from 'tableau-api';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default class YearCount extends Component {
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = 'https://public.tableau.com/views/Elahescharts/Sheet1';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }
    render() {
        return (
            <div>
               <Navbar  expand="lg" style={{ width: "100%", paddingLeft: "1%", paddingRight: "50%", backgroundColor:'#42276a' }}>
                    <Container style={{  width: '200px'}}>
                        <Navbar.Brand href="/" style={{ fontSize: '30px', marginLeft: '1px' ,paddingRight:'120px', color:'white'  }} >Visa-Wiz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="/Occupation" style={{ fontSize: '20px', paddingRight: "5%", color:'white' }} >Occupation</Nav.Link>
                                <Nav.Link href="/Employer" style={{ fontSize: '20px',paddingRight: "5%",color:'white'  }}>Employer</Nav.Link>
                                <Nav.Link href="/YearCount" style={{ fontSize: '20px',paddingRight: "5%", whiteSpace: "nowrap", color:'white' }}>Month & Year</Nav.Link>
                                <Nav.Link href="/Salary" style={{ fontSize: '20px',paddingRight: "5%" ,color:'white' }}>Salary</Nav.Link>
                                <Nav.Link href="/Wage" style={{ fontSize: '20px',paddingRight: "5%",color:'white'  }}>Wage</Nav.Link>
                                <Nav.Link href="/USState" style={{ fontSize: '20px',whiteSpace: "nowrap",color:'white' }}>US States</Nav.Link>
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
