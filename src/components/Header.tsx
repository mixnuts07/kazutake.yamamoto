import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import React from "react";

// 期限間に合えばchangeLang:anyの型定義再考
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
            <GitHubIcon />
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
