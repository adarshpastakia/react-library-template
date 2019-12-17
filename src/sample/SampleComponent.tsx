import React from "react";

export const SampleComponent: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className="sample-container">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};
