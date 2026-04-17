import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import hopeImage from "../../HOPE2.svg";
import "../styles/hero.css";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="hero-section">
        {/* Hero Content */}
        <div className="hero-content">
          {/* Hero Image */}
          <img
            src={hopeImage}
            alt="HOPE"
            className="hero-image"
          />

          {/* Buttons */}
          <div className="hero-buttons">
            <Button
              size="lg"
              variant="hero"
              onClick={() => navigate("/hope")}
            >
              Chat with HOPE
            </Button>
            <Button
              size="lg"
              variant="heroOutline"
              onClick={() => navigate("/hope")}
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
