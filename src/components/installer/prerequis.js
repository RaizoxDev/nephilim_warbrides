import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Prérequis() {

  return (
    <div className="container" style={{ backgroundColor: "#9D9797" }}>
      <div className="row">
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">Windows (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">Windows (64Bits)</button>
          </a>
          <h4>Prérequis (Minimum)</h4>
          <h5>OS: Windows 7 ou plus</h5>
          <h5>CPU: Intel i5-7500</h5>
          <h5>GPU: GeForce GTX 950</h5>
          <h5>Stockage: 15Go</h5>
          <h5>RAM: 4Go</h5>
        </div>
        <div className="col-6 text-center">
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">MacOS (32Bits)</button>
          </a>
          <a href="https://youtu.be/IxX_QHay02M" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary m-2 text-center">MacOS (64Bits)</button>
          </a>
          <h4>Prérequis (Recommandé)</h4>
          <h5>OS: Windows 10 ou plus</h5>
          <h5>CPU: Ryzen 9 9950X3D</h5>
          <h5>GPU: GeForce RTX 5090</h5>
          <h5>Stockage: 15Go</h5>
          <h5>RAM: 32Go</h5>
        </div>
      </div>
    </div>
  );
}
export default Prérequis;