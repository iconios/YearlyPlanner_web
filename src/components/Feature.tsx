import { KeyFeatureID as FeatureType } from "../types/Feature";
import { Col, Card, CardImg, CardTitle, CardBody, CardText } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from "../utils/scrollWithOffset";

const Feature = ({id, name, description, imageSrc, imageAlt} : FeatureType) => {  

    const descriptionSubstring = description.substring(0, 100);
    return (        
        <Col sm={4} className='ps-4 pe-4 pb-2 mx-sm-auto mb-3'>
            <HashLink to={`/features#${id}`} className="text-decoration-none" scroll={scrollWithOffset}>
                <Card>
                    <CardImg src={imageSrc} alt={imageAlt} className="d-block mx-auto" />
                    <CardBody>
                        <CardTitle className="text-center pt-2 text-secondary">{name}</CardTitle>
                        <CardText className="text-center">{descriptionSubstring} ...</CardText>
                    </CardBody>
                </Card>
            </HashLink>
        </Col>        
    )
}

export default Feature;