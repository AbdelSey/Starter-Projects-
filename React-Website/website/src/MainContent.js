import React from "react";

export const MainContent = () => {
  const backgroundChange = () => {
    const colors = ["red", "lightgreen", "lightcoral", "blue", "yellow"];
    const num = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[num];
  };

  return (
    <main>
      <div className="container">
        <h3> Surpise Below! </h3>
        <button onClick={backgroundChange}> Submit </button>
      </div>
    </main>
  );
};
