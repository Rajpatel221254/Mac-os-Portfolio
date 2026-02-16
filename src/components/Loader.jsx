import React from "react";
import "./loader.scss";

const Loader = ({bootStep}) => {
  return (
    <div className="boot-loader">
      <div className="boot-content">
        <h1>RajOS</h1>
        <p className="version">Version 1.0.0</p>

        <div className="boot-lines">
          {bootStep >= 1 && (
            <p>
              Booting system<span className="dots">...</span>
            </p>
          )}
          {bootStep >= 2 && (
            <p>
              Loading modules<span className="dots">...</span>
            </p>
          )}
          {bootStep >= 3 && (
            <p>
              Initializing UI<span className="dots">...</span>
            </p>
          )}
          {bootStep >= 4 && <p className="ready">System Ready ✓</p>}
        </div>
      </div>
    </div>
  );
};

export default Loader;
