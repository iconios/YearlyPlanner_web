import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import FeaturesPage from "./pages/FeaturesPage";
import NewGoal from "./pages/NewGoal";
import Planner from "./pages/Planner";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Planner />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/newgoal" element={<NewGoal />} />
    </Routes>
  )
}

export default App
