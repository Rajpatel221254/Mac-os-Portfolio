import React from "react";
import "./shortcut.scss";

const Shortcut = ({ setShowShortcutsModal }) => {
  return (
    <div className="shortcut-overlay">
      <div className="shortcut-modal">
        <div className="modal-header">
          <div className="traffic-lights">
            <span
              className="red"
              onClick={() => {
                setShowShortcutsModal(false);
                localStorage.setItem("shortcutsSeen", "true");
              }}
            />
          </div>
          <h2>RajOS – Quick Commands</h2>
        </div>

        <div className="shortcut-list">
          <div className="shortcut-row">
            <div>
              <kbd>Shift</kbd> + <kbd>S</kbd>
            </div>
            <span>Open System</span>
          </div>

          <div className="shortcut-row">
            <div>
              <kbd>Shift</kbd> + <kbd>T</kbd>
            </div>
            <span>Open Terminal</span>
          </div>

          <div className="shortcut-row">
            <div>
              <kbd>Shift</kbd> + <kbd>A</kbd>
            </div>
            <span>Open Apps</span>
          </div>

          <div className="shortcut-row">
            <div>
              <kbd>ESC</kbd>
            </div>
            <span>Close All Windows</span>
          </div>
        </div>

        <div className="platform-note">
          Works on <strong>Windows</strong> and <strong>Mac</strong> keyboards.
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
