import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import AdSection from "../components/AdSection";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div id="top">
            <NavBar />
            <HeroSection />
            <KeyFeaturesSection />
            <AdSection />
            <Footer />
        </div>
    )
}

export default LandingPage;