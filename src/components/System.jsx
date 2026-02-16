import React, { useEffect, useState } from "react";
import "./system.scss";

const Searchwindow = ({ windowsState = {}, setWindowsState = () => {} }) => {
  const open = windowsState.system;

  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((u) => u + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div
      className={"system" + (open ? " open" : "")}
      role="dialog"
      aria-hidden={!open}
    >
      <div className="system-header">
        <button
          className="close-btn"
          onClick={() =>
            setWindowsState((s) => ({ ...s, system: false }))
          }
        >
          ×
        </button>
      </div>
      <div className="system-body">
        <div className="system-info">
          <h2>RajOS</h2>
          <p className="version">Version 1.0.0</p>

          <div className="specs">
            <div>
              <span>Processor:</span> React + Vite
            </div>
            <div>
              <span>Memory:</span> Node.js + Express
            </div>
            <div>
              <span>Storage:</span> MongoDB
            </div>
            <div>
              <span>Architecture:</span> MERN Stack
            </div>
          </div>

          <div className="developer">
            <div>
              <span>Developer:</span> Raj
            </div>
            <div>
              <span>Status:</span> Open to Work
            </div>
            <div>
              <span>Mode:</span> Building & Shipping
            </div>
            <div><span>Uptime:</span> {formatTime(uptime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchwindow;
