import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./components/I18n";
import Header from "./components/Header";
import ThreeObj from "./components/ThreeObj";
import Profile from "./components/Profile";
import Career from "./components/Career";
import Skills from "./components/Skills";
import SelfDev from "./components/SelfDev";
import Works from "./components/Works";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  const ChangeLang = (): void => {
    setLang(lang === "en" ? "ja" : "en");
  };
  return (
    <body>
      <Header ChangeLang={ChangeLang} />
      <ThreeObj />
      <Profile t={t} />
      <Career t={t} />
      <Skills />
      <SelfDev t={t} />
      <Works t={t} />
      <Footer />
    </body>
  );
};

export default App;
