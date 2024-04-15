import React, { useState, useEffect } from "react";
import "../pages/CreationDrawer.css";
import axios from "axios";

const CreativeCreationDrawer = ({ onClose, addCreative }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [availableColors, setAvailableColors] = useState([]);
  const [isDoneDisabled, setIsDoneDisabled] = useState(true);

  useEffect(() => {
    fetchBackgroundColors();
  }, []);

  const fetchBackgroundColors = async () => {
    try {
      const response = await axios.get(
        "https://random-flat-colors.vercel.app/api/random?count=5"
      );
      setAvailableColors(response.data.colors);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    validateForm();
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
    validateForm();
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsDoneDisabled(!(title && subtitle && backgroundColor));
  };

  const handleDone = () => {
    const newCreative = { title, subtitle, backgroundColor };
    addCreative(newCreative);
    onClose();
  };

  return (
    <div className="drawer">
    <div className="drawer-header">
    <h1>Creation Content</h1>
    <button onClick={onClose}>X</button>
  </div>
  <div className="drawer">
  <div className="drawer-header">
    <h1>Creation Content</h1>
    <button onClick={onClose}>X</button>
  </div>
  <form>
    <div className="form-group">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="form-control"
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        Subtitle:
        <input
          type="text"
          value={subtitle}
          onChange={handleSubtitleChange}
          className="form-control"
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        Background Color:
        <select
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
          className="form-control"
        >
          <option value="">Select Color</option>
          {availableColors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
    </div>
    <button
      type="button"
      onClick={handleDone}
      disabled={isDoneDisabled}
      className="btn btn-primary"
    >
      Done
    </button>
  </form>
</div>
</div>
);

}

export default CreativeCreationDrawer;
