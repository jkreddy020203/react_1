import React, { useState } from "react";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: selectedColor,
        height: "500px",
      }}
    >
      <label htmlFor="color">Select a color: </label>
      <select
        onChange={(e) => setSelectedColor(e.target.value)}
        value={selectedColor}
        id="color"
      >
        <option value="">No-color</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
      </select>
    </div>
  );
};

export default Color;
