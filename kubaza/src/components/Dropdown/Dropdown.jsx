import React from "react";
import "./Dropdown.css";

const Dropdown = ({ data, visible }) => {
  if (!visible) return null; // Render nothing if dropdown is not visible

  return (
    <div className="dropdown">
      <div className="dropdown-section">
        <h4>Style</h4>
        {data.styles.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="dropdown-section">
        <h4>Subject</h4>
        {data.subjects.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="dropdown-section">
        <h4>Medium</h4>
        {data.mediums.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
