import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { FetchedFeature } from "../types/Feature";
import FeatureService from  '../services/feature';
import FeaturesSectionStyle1 from "../components/FeaturesSectionStyle1";
import FeaturesSectionStyle2 from "../components/FeaturesSectionStyle2";
import { v4 as uuidv4 } from 'uuid';

const FeaturesPage = () => {

    // Declare and initialize the constant
    const [features, setFeatures] = useState<FetchedFeature[] | null>([]);
    
    // Fetch the features from the server
    useEffect(() => {
        const fetchData = async () => {
            const fetched: FetchedFeature[] | null = await FeatureService.getAll();            
            setFeatures(fetched);
        }
        void fetchData();
    }, []);
    
    // Accept all features and distribute per index to display with each feature section style
    const featuresStyleDistribution = () => features?.map(feature => (features?.indexOf(feature))%2 === 1 ? <FeaturesSectionStyle1 key={uuidv4()} feature={feature} /> : <FeaturesSectionStyle2  key={uuidv4()} feature={feature} />)

    return (
        <>
            <NavBar />
            <Container fluid className="bg-primary d-flex flex-column justify-content-center align-items-center text-white px-3 px-md-4" style={{ minHeight: "50vh", paddingTop: '76px', paddingBottom: '76px', width: '100%' }}>
                <h1 className="text-center px-2"><strong>The Features That Make Our Yearly Planner Unique</strong></h1>
                <p className="mb-4 px-2 text-center">A complete planning system for goals, habits & schedules with smart reminders, sync, and progress tracking.</p>
                <Link to='/signup'><Button type="button" className="bg-secondary rounded-2">Get Started</Button></Link>
            </Container>
            {featuresStyleDistribution()}
            <Footer />
        </>
    )
}

export default FeaturesPage;