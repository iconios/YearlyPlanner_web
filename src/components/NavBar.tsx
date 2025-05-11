import logo from '../assets/Nerdy_Logo.png'
import { Link } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const NavBar = () => {
    return (
        <Row>
            <Navbar collapseOnSelect expand="sm" className="bg-primary h-32 p-0 pt-2">
                <Container fluid='sm'>
                    <Navbar.Brand className='ms-2 my-2'>
                        <Link to='/'><img src={logo} alt='Company Logo' height={32} width={56}/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-sm-none bg-white' />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-stretch text-center">
                            <Nav.Item className='border border-1 border-secondary mx-2 p-1 my-2 px-sm-5 py-sm-2 me-sm-2'>
                                <Link to='/features' className='text-white text-decoration-none'>Features</Link>
                            </Nav.Item>
                            <Nav.Item className='bg-secondary p-1 px-sm-5 mx-2 my-2 me-sm-0'>
                                <Link to='/login' className='text-white text-decoration-none'>Login</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBar;