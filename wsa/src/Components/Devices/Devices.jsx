import React from "react";
import './Devices.css';

const Devices = () => {
  return (
    <div className="App">
      <h1>Connected Devices</h1>
      <div className="devices">
        <>
          <button>Device 1</button>
          <button>Device 2</button>
          <button>Device 3</button>
          <button>Device 4</button>
          <button>Device 5</button>
          <button>Device 6</button>
          <button>Device 7</button>
          <button>Device 8</button>
        </>
        <>
          <button>Device 1</button>
          <button>Device 2</button>
          <button>Device 3</button>
          <button>Device 4</button>
          <button>Device 5</button>
          <button>Device 6</button>
          <button>Device 7</button>
          <button>Device 8</button>
        </>
      </div>
      {/* <>
    <div className="container">
        <div className="drop" style={{color: "#FF0F5B"}}>
            <div className="content">
                <h2>HTML</h2>
                <p><b>HTML</b> is the language for describing the structure of Web pages.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        <div className="drop" style={{color: "#BE01FE"}}>
            <div className="content">
                <h2>CSS</h2>
                <p><b>CSS</b> is the language for describing the structure of Web pages.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        <div className="drop" style={{color: "#01B4FF"}}>
            <div className="content">
                <h2>JS</h2>
                <p><b>Javascript</b> is the language for describing the structure of Web pages.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
    </> */}
    </div>
  );
}

export default Devices;
