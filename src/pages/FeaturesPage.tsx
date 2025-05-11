import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { FetchedFeature } from "../types/Feature";
import FeatureService from  '../services/feature';

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
    

    return (
        <>
            <NavBar />
            <Container fluid className="bg-primary d-flex flex-column justify-content-center align-items-center text-white" style={{ minHeight: "50vh" }}>
                <h1 className="text-center"><strong>The Features That Make Our Yearly Planner Unique</strong></h1>
                <p className="mb-4">A complete planning system for goals, habits & schedules with smart reminders, sync, and progress tracking.</p>
                <Link to='/signup'><Button type="button" className="bg-secondary rounded-2">Get Started</Button></Link>
            </Container>
            <Container fluid className="bg-light text-dark" style={{ minHeight: "30vh" }}>
                
            </Container>
            <Footer />
        </>
    )
}

export default FeaturesPage;