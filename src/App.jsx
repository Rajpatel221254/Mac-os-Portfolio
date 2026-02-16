import { useEffect, useState } from "react";
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
import ChatBot from "./components/ChatBot";
import System from "./components/System";
import Shortcut from "./components/Shortcut";
import Loader from "./components/Loader";

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
    system: false,
  });

  const [showShortcutsModal, setShowShortcutsModal] = useState(false);

  const [bootStep, setBootStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeouts = [];

    timeouts.push(setTimeout(() => setBootStep(1), 500));
    timeouts.push(setTimeout(() => setBootStep(2), 1300));
    timeouts.push(setTimeout(() => setBootStep(3), 2100));
    timeouts.push(setTimeout(() => setBootStep(4), 3000));

    const finish = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finish);
    };
  }, []);

  useEffect(() => {
    const seen = localStorage.getItem("shortcutsSeen");

    if (!seen) {
      setShowShortcutsModal(true);

      const timer = setTimeout(() => {
        setShowShortcutsModal(false);
        localStorage.setItem("shortcutsSeen", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in input or textarea
      const tag = document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.shiftKey && e.key === "S") {
        setWindowsState((s) => ({ ...s, system: true }));
      }

      if (e.shiftKey && e.key === "T") {
        setWindowsState((s) => ({ ...s, cli: true }));
      }

      if (e.shiftKey && e.key === "A") {
        setWindowsState((s) => ({ ...s, file: true }));
      }

      if (e.key === "Escape") {
        setWindowsState((s) =>
          Object.fromEntries(Object.keys(s).map((key) => [key, false])),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (loading) {
    return <Loader bootStep={bootStep} />;
  }

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
      <System windowsState={windowsState} setWindowsState={setWindowsState} />
      {showShortcutsModal && (
        <Shortcut setShowShortcutsModal={setShowShortcutsModal} />
      )}

      <ChatBot />
    </main>
  );
}

export default App;
