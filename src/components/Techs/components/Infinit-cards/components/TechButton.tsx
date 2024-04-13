import React from "react";

const TechButton = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <button className="card">
      {icon}
      {title}
    </button>
  );
};

export default TechButton;
