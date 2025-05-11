import logo from '../assets/Nerdy_Logo.png'
import { Link } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';



const NavBar = () => {
    return (
        <Container fluid className='position-fixed' style={{ zIndex: 2000 }}>
            <Row>
                <Navbar collapseOnSelect expand="sm" className="bg-primary h-32 p-0 pt-2">
                    <Navbar.Brand className='ms-2 my-2 ps-4'>
                        <Link to='/'><img src={logo} alt='Company Logo' height={32} width={56}/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-sm-none bg-white me-3' />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-stretch text-center">
                            <Nav.Item className='me-3 me-sm-0'>
                                <Link to='/features' className='text-white text-decoration-none'><Button type='button' className='w-100 border border-1 border-secondary px-sm-5 py-sm-2'>Features</Button></Link>
                            </Nav.Item>
                            <Nav.Item className='me-3 me-sm-5'>
                                <Link to='/login' className='text-white text-decoration-none'><Button type='button' className='w-100 bg-secondary px-sm-5 py-sm-2 ms-sm-2'>Login</Button></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>
    )
}

export default NavBar;