import NerdyImage from '../assets/Nerdy_image.png';
import { Link } from 'react-router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const HeroSection = () => {
    return (
        <Container>
            <Row className='bg-primary pb-5 px-3 px-sm-4'  style={{ paddingTop: '76px' }}>
                <Col sm={6}  className='mt-3 my-sm-auto justify-content-sm-left' style={{ order: 2 }}>
                    <h1 className='text-white'>Organize Your Year Effectively</h1>
                    <p className='text-white'>A yearly planner is a tool designed to help individuals or organizations plan, organize, and track their activities, goals, and schedules over a 12-month period</p>
                    <Link to='/signup'><button type='button' className='text-white bg-secondary rounded px-3 py-1 w-100 my-2 py-sm-2'>Get Started</button></Link>
                </Col>
                <Col sm={6} style={{ order: 1 }}>
                    <img src={NerdyImage} alt='Nerdy' className='w-100 h-auto rounded-circle mx-sm-0' />
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection;