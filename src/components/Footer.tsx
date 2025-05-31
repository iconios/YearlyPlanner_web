import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container fluid>
            <Row className="bg-primary text-white py-1 px-sm-4 py-3" style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                boxSizing: 'border-box'
            }}
            >
                <Col className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                    <p className="mb-0 text-sm-start">
                    &copy; {currentYear} Nerdy Web Consults. All rights reserved.
                    </p>
                    <div className="d-flex">
                        <p className="mb-0 me-3">Privacy Policy</p>
                        <p className="mb-0">Terms of Service</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;