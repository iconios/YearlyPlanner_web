import { Row, Container, Col } from "react-bootstrap";
import { FetchedFeature } from "../types/Feature";
import { v4 as uuidv4 } from 'uuid';

const FeaturesSectionStyle1 = ({ feature }: {feature: FetchedFeature}) => {
    return (
        <Container id={feature?.id} style={{ minHeight: "30vh" }}>
            <Row className="bg-white border border-1 border-gray rounded-3 my-3 py-5">
                <h2 className="text-center"><strong>{feature?.name}</strong></h2>
                <p className="text-center">{feature?.heading}</p>
                <Col md={6}>
                    <img src={feature?.imageSrc} alt={feature?.imageAlt} className="w-100" />
                </Col>
                <Col md={6} className="my-sm-auto">
                    <p>{feature?.description}</p>
                    <h4>✨ {feature?.pointsHeading}</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {feature?.points.map(point => (
                            <li key={uuidv4()}>✅ <strong>{point.title}</strong> - {point.description}</li>
                        ))}
                    </ul>
                </Col>
                <blockquote className="text-center text-black fw-bold py-3 rounded-4 border border-2 border-secondary" style={{ lineHeight: '1' }}>
                    <p>"{feature?.testimonial?.testimony}"</p>
                    <footer>-<cite>{feature?.testimonial?.name}</cite></footer>
                </blockquote>
                <p className="text-center"><strong>{feature?.tagline}</strong></p>
                <p className="text-center">
                    {feature?.hashtags.map(tag => (
                        <span key={uuidv4()}>#{tag} </span>
                    ))}
                </p>
            </Row>
        </Container>
    )
}

export default FeaturesSectionStyle1;