import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";
// import { DarkMode } from "@mui/icons-material";
// import { LightMode } from "@mui/icons-material";
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
          {/* <GTranslateIcon onClick={() => ChangeLang()} /> */}
        </li>
        {/* <li>
          <DarkMode />
          <LightMode />
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
