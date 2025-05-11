import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Row className="bg-primary text-white py-1 px-sm-4 py-3">
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
    )
};

export default Footer;