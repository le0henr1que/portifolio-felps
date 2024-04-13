// TechList.js
import React, { useState, useEffect } from "react";
import TechButton from "./components/TechButton";

const Carousel = ({ technologies }) => {
  const [visibleTechnologies, setVisibleTechnologies] = useState([
    ...technologies,
    ...technologies,
  ]);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {visibleTechnologies.map((tech, index) => (
          <TechButton key={index} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
