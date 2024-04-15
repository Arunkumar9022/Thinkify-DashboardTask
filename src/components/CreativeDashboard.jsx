import React, { useState } from "react";
import CreativeCreationDrawer from "../pages/CreativeCreationDrawer";
import '../components/CreativeDashboard.css';

const CreativesDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [creatives, setCreatives] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const addCreative = (newCreative) => {
    setCreatives([...creatives, newCreative]);
    setTitle("");
    setSubtitle("");
    setBackgroundColor("");
  };

  return (
    <div>
      <button onClick={handleDrawerOpen} disabled={isDrawerOpen}>
        Add Creative
      </button>

      {creatives.map((creative, index) => (
        <div
          key={index}
          className="creative-preview"
          style={{ backgroundColor: creative.backgroundColor }}
        >
          <h2>{creative.title}</h2>
          <p>{creative.subtitle}</p>
        </div>
      ))}

      {isDrawerOpen && (
        <CreativeCreationDrawer
          onClose={handleDrawerClose}
          addCreative={addCreative}
          title={title}
          setTitle={setTitle}
          subtitle={subtitle}
          setSubtitle={setSubtitle}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      )}
    </div>
  );
};

export default CreativesDashboard;
