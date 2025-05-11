import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import plannerImage from '../assets/Planner-image.jpg';
import { FormLabel, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router";

const LoginPage = () => {

    const handleFormSubmit = () => {

    }

    return (
        <>
            <NavBar />
            <Container style={{ maxWidth: '768px', paddingTop: '128px', paddingBottom: '76px' }}  className="d-flex flex-column justify-content-center align-items-center min-vh-100 mx-auto">
                <h1 className="mb-5"><strong>Yearly Planner</strong></h1>
                <img src={plannerImage} alt="Planner" width={128} height={128} className="mb-3" />
                <h2 className="mb-4"><strong>Login</strong></h2>
                <Form onSubmit={handleFormSubmit} className="justify-content-sm-stretch w-100 px-4">
                    <FormGroup controlId="BasicLoginEmail" className="mb-3">
                        <FormLabel>
                            <strong>Email Address</strong>
                        </FormLabel>
                        <FormControl type="email" placeholder="Email Address" name="email" width='100%' />
                    </FormGroup>
                    <FormGroup controlId="BasicLoginPassword"  className="mb-4">
                        <div className="d-flex justify-content-between">
                            <FormLabel>
                                <strong>Password</strong>
                            </FormLabel>
                            <Button variant="link" className="justify-self-right text-primary">Forgot password?</Button>
                        </div>
                        <FormControl type="password" placeholder="Password" name="password" />
                    </FormGroup>
                    <Button type="submit" className="w-100 mb-1 rounded-2">Log In</Button>
                </Form>
                <Form className="d-flex flex-column align-items-center mt-3 w-100 px-4">                    
                    <div className="d-flex align-items-center mt-0 d-sm-block">
                        <hr className="flex-grow-1 d-inline" />
                        <span className="px-3">Or</span>
                        <hr className="flex-grow-1" />
                    </div>
                    <Button 
                        type="button" 
                        variant="outline" 
                        className="border border-1 border-secondary text-primary mt-3 w-100 rounded-2"
                    >
                        <FontAwesomeIcon 
                            icon={faGoogle} 
                            size='lg' 
                            className="me-3" 
                        />
                            <strong>Continue with Google</strong>
                    </Button>
                    <p className="mt-4">Don't have an account?<Link to='/signup' className="text-decoration-underline ms-2">Sign up</Link></p>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

export default LoginPage;