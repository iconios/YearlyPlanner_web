import { useEffect, useState } from "react";
import { Ad } from "../types/Ad";
import AdService from '../services/ad';
import { Link } from "react-router";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../styles/AdSection.css';
import { v4 as uuidv4 } from 'uuid';

const AdSection = () => {
    const [ ad, setAd ] = useState<Ad | null>();
    useEffect(() => {
        const fetchAd = async () => {
            const response = await AdService.getAll();
            setAd(response);
        }
        void fetchAd();
    }, [])
    return (
        <Container>
            <Row className="py-5 px-1 bg-secondary px-sm-4 text-primary" style={{ marginBottom: '80px' }}>            
                <Col className="d-flex flex-column align-items-left">
                    <h2>{ad?.title}</h2>
                    <p className="">{ad?.description}</p>
                    <h3>✨ {ad?.subheading}</h3>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {ad?.features.map(feature => (
                            <li key={uuidv4()}>✅ <strong>{feature.title}</strong> - {feature.description}</li>
                        ))}
                    </ul>
                    <p>📅 <strong>{ad?.tagline}</strong></p>
                    <p><strong>{ad?.footer}</strong></p>
                    <p>
                        {ad?.hashtags.map(tag => (
                            <span key={uuidv4()}>#{tag} </span>
                        ))}
                    </p>
                    <Link to="/signup" className="w-100 d-block d-md-flex justify-content-md-left">          
                    👉 <Button className="custom-width bg-primary text-white rounded px-1 py-1 px-sm-3 py-sm-2">{ad?.cta}
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
};

export default AdSection;