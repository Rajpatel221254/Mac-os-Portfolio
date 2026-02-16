import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a Full-Stack MERN Developer Trainee and Computer Engineering student, passionate about building responsive, user-focused web applications using React and modern JavaScript.",
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, JavaScript, HTML, CSS, Tailwind CSS
State Management: Redux Toolkit
Backend: Node.js, Express.js
Database: MongoDB
Tools: Git, GitHub, Postman, Vite
Deployment: Netlify, Render, Vercel`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Media Search App – React, Redux Toolkit (API-based)
2. TaskNest – All-in-One Productivity Tool
3. Mini E-Commerce Application (Functional UI + Cart)
4. Movie Streaming Platform (Responsive UI)
5. Mac-OS Inspired Portfolio`,
    },

    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Frontend Developer Intern @ Prodigy Infotech (1 Month)
  - Built responsive UI components using React and JavaScript
  - Worked on real-world frontend tasks
  - Used GitHub for version control and collaboration

Project-Based Full-Stack MERN Developer
  - Developed multiple React applications with real-world use cases
  - Integrated APIs, state management, and deployment`,
    },

    education: {
      description: "Display education details",
      usage: "education",
      fn: () => `B.E. Computer Engineering
SAL Engineering and Technical Institute
2023 – 2027 | CGPA: 7.5`,
    },

    achievements: {
      description: "View achievements",
      usage: "achievements",
      fn: () => `Frontend Battle 2.0 – Finalist
Secured 5th Rank among 300+ students`,
    },

    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Name: Patel Raj Rohitbhai
Location: Ahmedabad, India
Email: your-rajpatel221254@gmail.com
Open to: Internship / Full-Time Opportunities`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Rajpatel221254", "_blank");
        return "Opening GitHub profile...";
      },
    },

    resume: {
      description: "open resume",
      usage: "resume",
      fn: () => {
        window.open("/resume.pdf", "_blank");
        return "Resume download started...";
      },
    },

    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `GitHub: https://github.com/Rajpatel221254
LinkedIn: (https://www.linkedin.com/in/raj-patel-221254/)
Portfolio: ()`,
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔══════════════════════════════════════════════╗
║        Welcome to Raj Patel's Portfolio CLI  ║
╚══════════════════════════════════════════════╝

Hello! 👋 I'm Raj Patel, a Full-Stack MERN Developer Trainee and
Computer Engineering student.

Explore my skills, projects, experience, and achievements using
simple terminal-style commands.

Type 'help' to see all available commands, or try:
  • about         - Learn more about me
  • skills        - View my technical skills
  • projects      - Explore my featured projects
  • experience    - View my internship & project experience
  • education     - See my academic background
  • achievements  - View competitions & achievements
  • contact       - Get in touch
  • github        - Open my GitHub profile
  • resume        - open my resume

Happy exploring & thanks for visiting! 🚀
`;

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      width="60vw"
      height="50vh"
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"rajpatel:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
