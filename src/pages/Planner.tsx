import { Row, Col, Container, Button } from "react-bootstrap";
import illustrationImage from '../assets/Checklist.png';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Planner =() => {
    


    return (
        <>
            <NavBar />
            <Container fluid className="" style={{ height: '82vh' }}>
                <Row className="flex-grow-1 g-sm-0">
                    <SideBar />
                    <Col sm={2} className="d-none d-sm-block">
                        
                    </Col>
                    <Col sm={10} className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
                        <img src={illustrationImage} alt="illustration" className="w-75 h-auto" />
                        <Button className="w-75">Start Planning!</Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Planner;