import { Row, Col, Container, Button } from "react-bootstrap";
import illustrationImage from '../assets/Checklist.png';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Planner =() => {

    return (
        <>
            <NavBar />            
            <SideBar />
            <Container fluid className="d-flex flex-column justify-content-center align-items-center mx-auto" >
                <Row className="">
                    <Col sm={2} className="d-none d-sm-block">
                        
                    </Col>
                    <Col sm={10} className="d-flex flex-column justify-content-center align-items-center mx-auto">
                        <img src={illustrationImage} alt="illustration" className="w-75 h-auto" style={{ maxWidth:'412px' }} />
                        <Link to='/newgoal' className="mb-sm-5 pb-sm-5"><Button className="">Start Planning!</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Planner;