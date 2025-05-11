import { Row, Container, Col } from "react-bootstrap";
import { FetchedFeature } from "../types/Feature";
import { v4 as uuidv4 } from 'uuid';

const FeaturesSectionStyle1 = ({ feature }: {feature: FetchedFeature}) => {
    return (
        <Container>
            <Row className="bg-white border border-1 border-gray rounded-3 my-3 py-5">
                <h2><strong>{feature?.name}</strong></h2>
                <p>{feature?.heading}</p>
                <Col md={6}>
                    <img src={feature?.imageSrc} alt={feature?.imageAlt} />
                </Col>
                <Col md={6}>
                    <p>{feature?.description}</p>
                    <h4>{feature?.pointsHeading}</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {feature?.points.map(point => (
                            <li key={uuidv4()}>✅ <strong>{point.title}</strong> - {point.description}</li>
                        ))}
                    </ul>
                </Col>
                <div>
                    <blockquote>
                        <p>{feature?.testimonial?.testimony}</p>
                        <footer>-<cite>{feature?.testimonial?.name}</cite></footer>
                    </blockquote>
                </div>
                <p>{feature?.tagline}</p>
                {feature?.hashtags.map(tag => (
                    <span key={uuidv4()}>#{tag}</span>
                ))}
            </Row>
        </Container>
    )
}

export default FeaturesSectionStyle1;