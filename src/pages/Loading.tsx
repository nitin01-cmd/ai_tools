import { useEffect, useState } from "react";
import fisLogo from "@/assets/fis-logo.png";
import "../styles/loading.css";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-container ${!isVisible ? "fade-out" : ""}`}>
      <div className="logo-fade">
        <img src={fisLogo} alt="Future India School" className="loading-logo" />
      </div>
    </div>
  );
};

export default Loading;
