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
                <h2 style={{ textAlign: 'center' }}>Explore the H1B Visa status data among different categories</h2>
                <br />
                <br />
                <Container>
                    <Row>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={OccupationImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Occupation Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Occupation">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={EmployerImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Employer Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Employer">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={CountImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Visa count Vs Month/Year</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./YearCount">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
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
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={SalaryImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Average Salary Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Salary">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={WageImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Wage Unit Vs Visa Status</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./Wage">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                           <Card style={{ height: '350px', marginBottom: '20px', width: '80%', backgroundColor: '#ffcc33' }}>
                                <Card.Img variant="top" src={StateImage} />
                                <Card.Body>
                                    <br />
                                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>Distribution Across the US</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <br />
                                    <div className="text-center">
                                        <Link to="./USState">
                                            <Button variant="primary" style={{ background: '#42276a', color: 'white', borderColor:'#fc3', borderWidth:'2.5px' }}>
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
