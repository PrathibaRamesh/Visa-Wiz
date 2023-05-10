import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OccupationImage from './images/Occupation.jpg';
import StateImage from './images/State.jpg';
import EmployerImage from './images/Employer.jpg';
import CountImage from './images/Count.jpg';
import SalaryImage from './images/Salary.jpg';
import WageImage from './images/Wage.jpg';

export default class Homepage extends Component {
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
                <h2 style={{ textAlign: 'center' }}>Explore the H1B Visa status data among different categories</h2>
                <br />
                <br />
                <Container>
                    <Row>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={OccupationImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Occupation Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Occupation">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={EmployerImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Employer Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Employer">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={CountImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Visa count Vs Month/Year</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./YearCount">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={SalaryImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Average Salary Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Salary">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={WageImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Wage Unit Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Wage">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: 'black' }}>
                                <Card.Img variant="top" src={StateImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'white' }}>Distribution Across the US</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./USState">
                                            <Button variant="primary" style={{ background: 'white', color: 'black', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </ Container>
            </ div>
        );
    }
}
