import { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Google from "./components/windows/Google";
import File from "./components/windows/File";
import Links from "./components/windows/Links";
import ChatBot from "./components/windows/ChatBot";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    google: false,
    file: false,
    link: false,
  });

  return (
    <main>
      <Nav windowsState={windowsState} setWindowsState={setWindowsState} />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && (
        <Github windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
      {windowsState.google && (
        <Google windowName="google" setWindowsState={setWindowsState} />
      )}
      {windowsState.file && (
        <File windowName="file" setWindowsState={setWindowsState} />
      )}
      {windowsState.link && (
        <Links windowName="link" setWindowsState={setWindowsState} />
      )}
      <ChatBot />
    </main>
  );
}

export default App;
