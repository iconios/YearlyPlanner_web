import { Link } from 'react-router';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../utils/scrollWithOffset';


const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="sm" className="bg-primary h-32 p-0 pt-2 px-3 px-md-4" style={{ zIndex: 2000, position: 'fixed', top: 0, width: '100%', boxSizing: 'border-box' }}>
            <Container fluid>
                <Navbar.Brand className='ms-2 my-2 ps-4'>
                    <HashLink to='/#top' className='text-decoration-none text-white' scroll={scrollWithOffset}>
                        <strong>NERDY</strong>
                    </HashLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-sm-none bg-white me-3 p-1' />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-stretch text-center">
                        <Nav.Item className='me-3 me-sm-0 mb-1 mb-sm-0'>
                            <Link to='/features' className='text-white text-decoration-none'>
                                <Button type='button' className='w-100 border border-1 border-secondary px-sm-5 py-sm-2'>
                                    Features
                                </Button>
                            </Link>
                        </Nav.Item>
                        <Nav.Item className='me-3 me-sm-5'>
                            <Link to='/login' className='text-white text-decoration-none'>
                                <Button type='button' className='w-100 bg-secondary px-sm-5 py-sm-2 ms-sm-2  mb-3 mb-sm-0'>
                                    Login
                                </Button>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>                    
        </Navbar>
    )
}

export default NavBar;