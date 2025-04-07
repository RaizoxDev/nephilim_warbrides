import React from "react";

const DownloadButton = ({ platform, bitVersion }) => (
  <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
    <button className="btn btn-primary m-2">{platform} ({bitVersion})</button>
  </a>
);

const PrerequisiteSection = ({ title, requirements }) => (
  <div className="col-6 text-center">
    <DownloadButton platform="Windows" bitVersion="32Bits" />
    <DownloadButton platform="Windows" bitVersion="64Bits" />
    <h4>{title}</h4>
    {requirements.map((req, index) => (
      <h5 key={index}>{req}</h5>
    ))}
  </div>
);

function Prérequis() {
  const minimumRequirements = [
    "OS: Windows 7 ou plus",
    "CPU: Intel i5-7500",
    "GPU: GeForce GTX 950",
    "Stockage: 15Go",
    "RAM: 4Go"
  ];

  const recommendedRequirements = [
    "OS: Windows 10 ou plus",
    "CPU: Ryzen 9 9950X3D",
    "GPU: GeForce RTX 5090",
    "Stockage: 15Go",
    "RAM: 32Go"
  ];

  return (
    <div className="container bgC">
      <div className="row">
        <PrerequisiteSection title="Prérequis (Minimum)" requirements={minimumRequirements} />
        <PrerequisiteSection title="Prérequis (Recommandé)" requirements={recommendedRequirements} />
      </div>
    </div>
  );
}

export default Prérequis;