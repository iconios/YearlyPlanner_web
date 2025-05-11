import Feature from "./Feature";
import { useEffect, useState } from "react";
import FeatureService from  '../services/feature';
import { FetchedFeature } from "../types/Feature";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const KeyFeaturesSection = () => {
    // Declare and initialize the constant
    const [features, setFeatures] = useState<FetchedFeature[] | null>([]);

    // Fetch the features from the server
    useEffect(() => {
        const fetchData = async () => {
            const fetched: FetchedFeature[] | null = await FeatureService.getAll();

            // Get three random features and set in the constant 
            const threeRandomFeatures = fetched?.sort(() => 0.5 - Math.random())?.slice(0, 3);
            if(threeRandomFeatures) {
                setFeatures(threeRandomFeatures);
            }
        }
        void fetchData();
    }, []);


    return (
        <Container>
            <Row className="pt-5 pb-3 flex justify-content-">
                <h2 className="mb-4 text-center text-primary fw-bold">Key Features</h2>
                {features?.map(item => (
                    <Feature key={item.id} name={item.name} description={item.description} imageSrc={item.imageSrc} imageAlt={item.imageAlt} />
                ))}
            </Row>
        </Container>
    )
};

export default KeyFeaturesSection;