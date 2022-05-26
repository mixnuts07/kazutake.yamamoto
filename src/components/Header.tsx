import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const Header = ({ ChangeLang = (f: any) => f }) => {
  return (
    <header className="header">
      <ul className="ul-left">
        <li>
          <a
            href="https://github.com/mixnuts07"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="github" />
          </a>
        </li>
        <li>
          <p className="name">Kazutake Yamamoto</p>
        </li>
      </ul>
      <ul className="ul-right">
        <li>
          <GTranslateIcon onClick={ChangeLang} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
