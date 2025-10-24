import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiSwift, SiMysql } from "react-icons/si";
import headshot from "./assets/luisheadshot.jpeg";
import resume from "./assets/luisalvaradoSEResume.pdf";

// {Skills I know and have used}
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Python",
  "Swift",
  "SQL",
];

// {skills icons using react icons}
const skillsIcon = {
  HTML5: <FaHtml5 color="#e34c26" size={50} title="HTML5" aria-hidden="true" />,
  CSS3: <FaCss3Alt color="#264de4" size={50} title="CSS3" aria-hidden="true" />,
  JavaScript: (
    <FaJsSquare
      color="#f7df1e"
      size={50}
      title="JavaScript"
      aria-hidden="true"
    />
  ),
  React: <FaReact color="#61dafb" size={50} title="React" aria-hidden="true" />,
  Python: (
    <FaPython color="#3776ab" size={50} title="Python" aria-hidden="true" />
  ),
  Swift: <SiSwift color="#fa7343" size={50} title="Swift" aria-hidden="true" />,
  SQL: <SiMysql color="#00618a" size={50} title="SQL" aria-hidden="true" />,
};

const work = [
  {
    company: "Dreams For Schools",
    title: "Instructor / Mentor",
    start: "2023-03",
    end: "2025-08",
    bullets: [
      "Taught 100+ K–12 students coding fundamentals using Scratch, MIT App Inventor, and Sphero Robotics, introducing logic, UI design, and problem-solving principles.",
      "Mentored student teams through the AppJam+ competition, leading to 1st and 2nd place finishes by guiding app design, prototyping, and presentation.",
      "Collaborated with 10+ peers and program coordinators to refine curriculum, improve engagement, and ensure consistent instruction across classrooms.",
      "Integrated front-end development concepts and real-world engineering practices to strengthen student understanding of coding workflows.",
      "Supported program growth by onboarding new instructors, sharing best practices, and promoting STEM inclusion and accessibility.",
    ],
  },
];

const projects = [
  {
    title: "AI Receipt Splitter",
    period: "October – Present",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Python"],
    description:
      "Web app that helps people split restaurant bills fairly with AI-powered receipt parsing.",
    bullets: [
      "Developed responsive UI using React and dynamic state management.",
      "Implemented real-time tax, tip, and per-person total calculations.",
      "Enabled item-to-person assignment with automatic total updates.",
      "Integrated AI receipt scanning with the OpenAI API to extract text data from images.",
    ],
  },
  {
    title: "Recipe App",
    period: "October – Present",
    stack: ["Swift"],
    description:
      "iOS app to search, explore, and view recipes from a live API (images, ingredients, steps).",
    bullets: [
      "Migrated from hardcoded data to TheMealDB API with async/await and JSON decoding.",
      "Built SwiftUI scrollable UI with images, categories, and detail views.",
      "Rendered ingredients and instructions dynamically per recipe.",
    ],
  },
  {
    title: "Lo-fi Website",
    period: "Aug 2023 – Dec 2023",
    stack: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minimalist web app to enjoy lo-fi music with relaxing scenic backgrounds.",
    bullets: [
      "Implemented responsive layout with Flexbox and CSS animations.",
      "Integrated multiple audio tracks and local scenic images for smooth performance.",
      "Collaborated to refine UI and improve load times.",
    ],
  },
];

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">luis alvarado</h1>
          <img className="luisimg" src={headshot} alt="headshot" />
          <h1>Hello, I'm Luis.</h1>
          <p>
            Computer Science graduate from California State University,
            Fullerton. I work at Dreams For Schools mentoring and teaching
            students how to code, and learn about the different types of
            engineers though hands-on practice. I am currently looking for a
            full time entry or internship role for Front-End Web Development. I
            am always looking for new ways to improve myself!
          </p>
        </div>
        <div className="resume">
          <a
            className="btn"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </header>

      {/* {Education Section} */}
      <main id="content" className="container">
        <section id="education" aria-labelledby="edu-heading">
          <article className="card">
            <h2 id="edu-heading">Education</h2>
            <h3>California State University, Fullerton</h3>
            <p>
              <strong>B.S. Computer Science</strong> • Minor in Criminal Justice
              <strong />
            </p>
            <p>
              <strong>Coursework:</strong> Data Structures, Algorithms,
              Front-End Development, Back-End Development, Mobile App
              Development (SWIFT), Machine Learning
            </p>
          </article>
        </section>

        {/* {Skills Section} */}
        <section id="programming" aria-labelledby="programming-heading">
          <article className="card">
            <h2 id="programming-heading">Skills</h2>
            <ul className="skills-list">
              {skills.map((label) => (
                <li key={label}>
                  {skillsIcon[label]}
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* {Work Exerience Section} */}
        <section id="work" aria-labelledby="work-heading">
          <article className="card">
            <h2 id="work-heading">Work Experience</h2>
            {work.map((job) => (
              <div key={job.company}>
                <h3>{job.company}</h3>
                <p className="meta">
                  {job.title} •{" "}
                  <time dateTime={job.start}>
                    {new Date(job.start + "T00:00:00").toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>{" "}
                  –{" "}
                  <time dateTime={job.end}>
                    {new Date(job.end + "T00:00:00").toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </p>
                <ul>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        </section>

        <section id="projects" aria-labelledby="proj-heading">
          <article className="card">
            <h2 id="proj-heading">Projects</h2>

            {projects.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p className="meta">{p.period}</p>

                <h3>Tech Stack</h3>
                <ul className="skills-list">
                  {p.stack.map((tech) => (
                    <li key={tech}>
                      {skillsIcon[tech] || (
                        <span style={{ fontWeight: 600 }}>{tech}</span>
                      )}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                <h3>Description</h3>
                <p>{p.description}</p>
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </article>
        </section>

        <section id="contact-me" aria-labelledby="contact-heading">
          <article className="card">
            <header>
              <h2 id="contact-heading">Let's Connect!</h2>
              <ul className="contact-me-info">
                <li>
                  <a
                    href="mailto:luisalvarado5511@gmail.com"
                    aria-label="Email"
                  >
                    <FaEnvelope size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Luisalvarado11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/luis-alvarado-24408b1ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </li>
              </ul>
            </header>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Luis Alvarado</small>
        </div>
      </footer>
    </>
  );
}
