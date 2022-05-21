import "../App.css";
import { SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="title-section">Skills</h3>
      <table className="skill-table">
        <tr>
          <td>
            <SiReact className="icon-color " />
          </td>
          <td>
            <FaNode className="icon-color" />
          </td>
          <td>
            <SiTypescript className="icon-color" />
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://ja.reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              React.js
            </a>
          </td>
          <td>
            <a
              href="https://nodejs.org/ja/about/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              Node.js
            </a>
          </td>
          <td>
            <a
              href="https://www.typescriptlang.org/ja/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              TypeScript
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <SiPython className="icon-color" />
          </td>
          <td>
            <SiDjango className="icon-color" />
          </td>
          <td>
            <SiFastapi className="icon-color" />
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.python.org/about/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              Python
            </a>
          </td>
          <td>
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              Django
            </a>
          </td>
          <td>
            <a
              href="https://fastapi.tiangolo.com/ja/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              FastAPI
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <SiPostgresql className="icon-color" />
          </td>
          <td>
            <FaAws className="icon-color" />
          </td>
          <td>
            <SiFigma className="icon-color" />
          </td>
        </tr>
        <tr>
          <td>
            <a
              href="https://www.postgresql.org/about/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              PostgreSQL
            </a>
          </td>
          <td>
            <a
              href="https://aws.amazon.com/jp/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              AWS
            </a>
          </td>
          <td>
            <a
              href="https://www.figma.com/design/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              Figma
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Skills;
