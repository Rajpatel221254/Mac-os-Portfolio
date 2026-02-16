import React from "react";
import MacWindow from "./MacWindow";
import "./file.scss";
import github from '../../../public/doc-icons/github.svg'
import note from '../../../public/doc-icons/note.svg'
import resume from '../../../public/doc-icons/pdf.svg'
import spotify from '../../../public/doc-icons/spotify.svg'
import cli from '../../../public/doc-icons/cli.svg'
import google from '../../../public/doc-icons/google.png'
import links from '../../../public/doc-icons/link.svg'

const File = ({ windowName, setWindowsState }) => {
  const files = [
    { id: "github", name: "Github", icon: github, description: "GitHub Profile" },
    { id: "note", name: "Note", icon: note, description: "Notes App" },
    { id: "resume", name: "Resume", icon: resume, description: "My Resume" },
    { id: "spotify", name: "Spotify", icon: spotify, description: "Music Player" },
    { id: "cli", name: "CLI", icon: cli, description: "Command Line" },
    { id: "google", name: "Google", icon: google, description: "Search" },
    { id: "link", name: "Links", icon: links, description: "Social Links" },
  ];

  const handleFileOpen = (fileId) => {
    setWindowsState((prev) => ({
      ...prev,
      [fileId]: true,
    }));
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="file-window">
        <div className="file-header">
          <p className="file-title">Applications</p>
        </div>
        <div className="file-grid">
          {files.map((file) => (
            <div
              key={file.id}
              className="file-item"
              onClick={() => handleFileOpen(file.id)}
              title={file.description}
            >
              <div className={`file-icon ${file.id}`}><img src={file.icon}  alt="" /></div>
              <div className="file-name">{file.name}</div>
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default File;
