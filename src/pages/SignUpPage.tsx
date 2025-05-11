import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";


const SignUpPage = () => {

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log('Form submitted')
    }

    return (
        <>
            <NavBar />
            <Container className="d-flex flex-column justify-content-center align-items-center mx-auto" style={{ maxWidth: '768px', paddingTop: '76px', paddingBottom: '76px' }}>
                <h1 className="mb-1"><strong>Sign Up</strong></h1>
                <p className="mb-5">Create an account to plan your year</p>
                <Form className="border border-2 border-primary justify-content-sm-stretch w-100 pb-5 pt-5 pb-4 px-5 rounded-4" onSubmit={handleFormSubmit}>
                    <FormGroup className="mb-3" controlId="firstName">
                        <FormLabel>
                            <strong>First Name</strong>
                        </FormLabel>
                        <FormControl type="text" placeholder="Enter your first name" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="lastName">
                        <FormLabel>
                            <strong>Last Name</strong>
                        </FormLabel>
                        <FormControl type="text" placeholder="Enter your last name" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="emailAddress">
                        <FormLabel>
                            <strong>Email Address</strong>
                        </FormLabel>
                        <FormControl type="email" placeholder="Enter your email address" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="passwordField">
                        <FormLabel>
                            <strong>Password</strong>
                        </FormLabel>
                        <FormControl type="password" placeholder="Enter your password" />
                    </FormGroup>
                    <FormGroup className="mb-3" controlId="confirmPassword">
                        <FormLabel>
                            <strong>Confirm Password</strong>
                        </FormLabel>
                        <FormControl type="password" placeholder="Confirm your password" />
                    </FormGroup>
                    <Button type="submit" className="bg-primary text-white rounded-2 w-100">Sign Up</Button>
                </Form>
            </Container>
            <Footer />
        </>
    )
}

export default SignUpPage;